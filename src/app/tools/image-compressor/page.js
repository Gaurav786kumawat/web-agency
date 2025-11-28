"use client";
import { useState } from "react";

function base64SizeKB(dataUrl) {
    if (!dataUrl) return null;
    const base64String = dataUrl.split(",")[1] || "";
    const padding = (base64String.match(/=+$/) || [""])[0].length;
    const bytes = (base64String.length * 3) / 4 - padding;
    return Math.round(bytes / 1024);
}

export default function ImageCompressor() {
    const [inputImage, setInputImage] = useState(null);
    const [compressed, setCompressed] = useState(null);
    const [fileInfo, setFileInfo] = useState(null); // { name, sizeKB }
    const [meta, setMeta] = useState({
        originalWidth: null,
        originalHeight: null,
        compressedWidth: null,
        compressedHeight: null,
        originalSizeKB: null,
        compressedSizeKB: null,
    });
    const [quality, setQuality] = useState(70); // percent
    const [scalePercent, setScalePercent] = useState(60); // percent
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState("");

    function handleFile(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        setError("");
        setCompressed(null);
        setMeta({
            originalWidth: null,
            originalHeight: null,
            compressedWidth: null,
            compressedHeight: null,
            originalSizeKB: Math.round(file.size / 1024),
            compressedSizeKB: null,
        });
        setFileInfo({
            name: file.name,
            sizeKB: Math.round(file.size / 1024),
        });

        const reader = new FileReader();
        reader.onload = (event) => {
            const dataUrl = event.target?.result;
            if (!dataUrl || typeof dataUrl !== "string") {
                setError("Could not read image file.");
                return;
            }

            setInputImage(dataUrl);

            // Get original dimensions
            const img = new Image();
            img.onload = () => {
                setMeta((prev) => ({
                    ...prev,
                    originalWidth: img.width,
                    originalHeight: img.height,
                }));
            };
            img.onerror = () => {
                setError("Could not load image preview.");
            };
            img.src = dataUrl;
        };
        reader.onerror = () => {
            setError("Error reading file. Please try again with another image.");
        };
        reader.readAsDataURL(file);
    }

    function compressImage() {
        if (!inputImage) return;
        setError("");
        setIsProcessing(true);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const scale = scalePercent / 100;

            const targetWidth = Math.round(img.width * scale);
            const targetHeight = Math.round(img.height * scale);

            canvas.width = targetWidth;
            canvas.height = targetHeight;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
                setError("Could not create canvas context.");
                setIsProcessing(false);
                return;
            }

            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            try {
                const q = quality / 100; // 0–1
                const compressedData = canvas.toDataURL("image/jpeg", q);

                const compressedSizeKB = base64SizeKB(compressedData);

                setCompressed(compressedData);
                setMeta((prev) => ({
                    ...prev,
                    compressedWidth: targetWidth,
                    compressedHeight: targetHeight,
                    compressedSizeKB,
                }));
            } catch (err) {
                setError("Compression failed. Try a smaller image or lower quality.");
            } finally {
                setIsProcessing(false);
            }
        };

        img.onerror = () => {
            setError("Could not load image for compression.");
            setIsProcessing(false);
        };

        img.src = inputImage;
    }

    function handleReset() {
        setInputImage(null);
        setCompressed(null);
        setFileInfo(null);
        setMeta({
            originalWidth: null,
            originalHeight: null,
            compressedWidth: null,
            compressedHeight: null,
            originalSizeKB: null,
            compressedSizeKB: null,
        });
        setError("");
        setIsProcessing(false);
    }

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <section className="space-y-2">
                <h1 className="text-3xl font-semibold">Image Compressor</h1>
                <p className="text-sm text-slate-400 max-w-2xl">
                    Upload an image, adjust compression settings, preview{" "}
                    <span className="font-medium">before &amp; after</span>, then
                    download the optimized version for web, WhatsApp, or social media.
                </p>
            </section>

            {/* How to use */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Click on <span className="text-slate-100">Choose file</span> and select an image.</li>
                    <li>Adjust <span className="font-medium">quality</span> and{" "}
                        <span className="font-medium">resize</span> sliders if needed.</li>
                    <li>Hit <span className="text-slate-100">Compress Image</span>.</li>
                    <li>Compare original vs compressed size & resolution.</li>
                    <li>Click <span className="font-medium">Download</span> to save the compressed image.</li>
                </ol>
            </section>

            {/* Controls */}
            <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                {/* File input */}
                <div className="space-y-2">
                    <label className="text-sm text-slate-300 block">
                        Select image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-800 file:text-slate-200 file:text-xs hover:file:bg-slate-700"
                        onChange={handleFile}
                    />
                    {fileInfo && (
                        <p className="text-xs text-slate-500">
                            Selected: <span className="font-medium text-slate-300">{fileInfo.name}</span>{" "}
                            ({fileInfo.sizeKB} KB)
                        </p>
                    )}
                </div>

                {/* Sliders */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Quality</span>
                            <span className="text-slate-200 font-medium">{quality}%</span>
                        </div>
                        <input
                            type="range"
                            min={40}
                            max={90}
                            step={5}
                            value={quality}
                            onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                            className="w-full accent-emerald-500"
                        />
                        <p className="text-[11px] text-slate-500">
                            Higher quality = better image, larger file.{" "}
                            <span className="text-slate-300">60–80%</span> is ideal for web.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Resize</span>
                            <span className="text-slate-200 font-medium">
                                {scalePercent}% of original
                            </span>
                        </div>
                        <input
                            type="range"
                            min={40}
                            max={100}
                            step={5}
                            value={scalePercent}
                            onChange={(e) => setScalePercent(parseInt(e.target.value, 10))}
                            className="w-full accent-emerald-500"
                        />
                        <p className="text-[11px] text-slate-500">
                            Reduce resolution to shrink file size. Keep{" "}
                            <span className="text-slate-300">60–80%</span> for most uploads.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                        onClick={compressImage}
                        disabled={!inputImage || isProcessing}
                        className={`px-6 py-3 rounded-full font-medium text-sm transition ${inputImage && !isProcessing
                                ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                                : "bg-slate-800 text-slate-500 cursor-not-allowed"
                            }`}
                    >
                        {isProcessing ? "Compressing..." : "Compress Image"}
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
                    >
                        Reset
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-xs text-red-400 bg-red-950/40 border border-red-900 rounded-xl px-3 py-2 mt-2">
                        {error}
                    </p>
                )}
            </section>

            {/* Previews */}
            {(inputImage || compressed) && (
                <section className="grid gap-6 md:grid-cols-2">
                    {/* Original */}
                    {inputImage && (
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-slate-200">
                                    Original
                                </h2>
                                <p className="text-[11px] text-slate-500">
                                    {meta.originalWidth && meta.originalHeight
                                        ? `${meta.originalWidth} × ${meta.originalHeight}px`
                                        : "Loading size..."}
                                    {typeof meta.originalSizeKB === "number" &&
                                        ` · ${meta.originalSizeKB} KB`}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                                <img
                                    src={inputImage}
                                    alt="Original"
                                    className="max-h-72 w-auto rounded-lg mx-auto object-contain"
                                />
                            </div>
                        </div>
                    )}

                    {/* Compressed */}
                    {compressed && (
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-slate-200">
                                    Compressed
                                </h2>
                                <p className="text-[11px] text-slate-500">
                                    {meta.compressedWidth && meta.compressedHeight
                                        ? `${meta.compressedWidth} × ${meta.compressedHeight}px`
                                        : null}
                                    {typeof meta.compressedSizeKB === "number" &&
                                        ` · ${meta.compressedSizeKB} KB`}
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 space-y-3">
                                <img
                                    src={compressed}
                                    alt="Compressed"
                                    className="max-h-72 w-auto rounded-lg mx-auto object-contain"
                                />
                                <a
                                    href={compressed}
                                    download="compressed.jpg"
                                    className="inline-flex items-center justify-center px-4 py-2 text-xs rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400"
                                >
                                    Download Compressed Image
                                </a>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
}
