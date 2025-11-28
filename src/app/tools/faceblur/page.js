"use client";

import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export default function FaceBlur() {
    const [inputImage, setInputImage] = useState(null);
    const [outputImage, setOutputImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [blur, setBlur] = useState(15);
    const [history, setHistory] = useState([]);
    const [modelsLoaded, setModelsLoaded] = useState(false);
    
    // Load face detection models
    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.load("/models/");
            setModelsLoaded(true);
        };
        loadModels();
    }, []);

    // File handler
    const handleFile = (file) => {
        if (!file) return;
        const reader = new FileReader();

        reader.onload = (e) => {
            setInputImage(e.target.result);
            setOutputImage(null);
        };

        reader.readAsDataURL(file);
    };

    // Drag drop
    const onDrop = (e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    };

    const blurFaces = async () => {
        if (!modelsLoaded || !inputImage) return;

        setLoading(true);

        const img = new Image();
        img.src = inputImage;

        img.onload = async () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            // Detect faces
            const detections = await faceapi.detectAllFaces(
                img,
                new faceapi.TinyFaceDetectorOptions()
            );

            detections.forEach((box) => {
                const { x, y, width, height } = box.box;

                // Blur region
                const region = ctx.getImageData(x, y, width, height);

                // Apply blur manually
                ctx.filter = `blur(${blur}px)`;
                ctx.drawImage(
                    canvas,
                    x,
                    y,
                    width,
                    height,
                    x,
                    y,
                    width,
                    height
                );
                ctx.filter = "none";
            });

            const finalURL = canvas.toDataURL("image/jpeg", 0.9);
            setOutputImage(finalURL);

            setHistory((prev) => {
                const updated = [{ id: Date.now(), img: finalURL }, ...prev].slice(0, 4);
                return updated;
            });

            setLoading(false);
        };
    };

    return (
        <main className="space-y-8 pb-16">
            {/* HEADER */}
            <section className="space-y-1">
                <h1 className="text-3xl font-semibold">Face Blur (AI)</h1>
                <p className="text-sm text-slate-400">
                    Automatically detect and blur faces using AI — 100% browser-based, no upload to server.
                </p>
            </section>

            {/* HOW TO USE */}
            <section className="p-4 text-sm rounded-2xl border border-slate-800 bg-slate-900/50 space-y-2">
                <h2 className="text-slate-200 font-medium">How to use</h2>
                <ol className="list-decimal list-inside text-slate-400 space-y-1">
                    <li>Upload any photo with faces.</li>
                    <li>Adjust blur intensity.</li>
                    <li>Click <b>Blur Faces</b>.</li>
                    <li>Download the blurred image.</li>
                </ol>
            </section>

            {/* UPLOAD BOX */}
            <div
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border border-slate-700 rounded-2xl p-6 bg-slate-900/40 text-center cursor-pointer"
            >
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageUpload"
                    onChange={(e) => handleFile(e.target.files[0])}
                />
                <label htmlFor="imageUpload" className="block cursor-pointer">
                    {inputImage ? (
                        <img
                            src={inputImage}
                            alt="uploaded"
                            className="mx-auto max-h-64 object-contain rounded-xl border border-slate-800"
                        />
                    ) : (
                        <p className="text-slate-400 text-sm">
                            Click or drag & drop an image here
                        </p>
                    )}
                </label>
            </div>

            {/* BLUR SLIDER */}
            {inputImage && (
                <div className="space-y-2">
                    <label className="text-sm text-slate-300">
                        Blur Intensity ({blur}px)
                    </label>
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={blur}
                        onChange={(e) => setBlur(e.target.value)}
                        className="w-full accent-emerald-500"
                    />
                </div>
            )}

            {/* BUTTON */}
            <button
                onClick={blurFaces}
                disabled={!inputImage || loading || !modelsLoaded}
                className={`px-6 py-3 rounded-full font-medium text-sm ${inputImage && !loading && modelsLoaded
                        ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
            >
                {loading ? "Processing..." : modelsLoaded ? "Blur Faces" : "Loading Model..."}
            </button>

            {/* OUTPUT */}
            {outputImage && (
                <section className="space-y-3">
                    <h2 className="text-sm font-medium text-slate-200">Blurred Image</h2>
                    <img
                        src={outputImage}
                        className="max-h-80 rounded-xl border border-slate-700"
                    />

                    <a
                        href={outputImage}
                        download="blurred.jpg"
                        className="inline-block text-xs underline text-emerald-400"
                    >
                        Download Image
                    </a>
                </section>
            )}

            {/* HISTORY */}
            {history.length > 0 && (
                <section className="space-y-2">
                    <h2 className="text-sm text-slate-200 font-medium">Recent Blurred Images</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {history.map((h) => (
                            <img
                                key={h.id}
                                src={h.img}
                                onClick={() => setOutputImage(h.img)}
                                className="rounded-xl border border-slate-700 cursor-pointer hover:opacity-80"
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
