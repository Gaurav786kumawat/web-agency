"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function ImageToText() {
    const [inputImage, setInputImage] = useState(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");

    const [history, setHistory] = useState([]); // {id, text}

    function addToHistory(extracted) {
        const clean = extracted.trim();
        if (!clean) return;

        setHistory((prev) => {
            const updated = [
                { id: Date.now(), text: clean },
                ...prev.slice(0, 4),
            ];
            return updated;
        });
    }

    const handleFile = (file) => {
        if (!file) return;
        setError("");
        const reader = new FileReader();
        reader.onload = (e) => {
            setInputImage(e.target.result);
            setText("");
            setProgress(0);
        };
        reader.readAsDataURL(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const extractText = () => {
        if (!inputImage) return;
        setLoading(true);
        setError("");
        setText("");

        Tesseract.recognize(inputImage, "eng", {
            logger: (m) => {
                if (m.status === "recognizing text") {
                    setProgress(Math.round(m.progress * 100));
                }
            },
        })
            .then(({ data: { text } }) => {
                setText(text);
                addToHistory(text);
            })
            .catch(() => {
                setError("Failed to extract text. Try a clearer image.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const downloadTxt = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "extracted-text.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <section className="space-y-1">
                <h1 className="text-3xl font-semibold">Image to Text Converter (OCR)</h1>
                <p className="text-sm text-slate-400 max-w-2xl">
                    Extract text from any image using AI-powered OCR. Upload or drag & drop an image.
                </p>
            </section>

            {/* HOW TO USE */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside text-slate-400 space-y-1">
                    <li>Upload or drag & drop an image containing text.</li>
                    <li>Click <span className="font-medium text-slate-200">Extract Text</span>.</li>
                    <li>Wait for the OCR engine to process the image.</li>
                    <li>Copy or download the extracted text.</li>
                </ol>
            </section>

            {/* UPLOAD BOX */}
            <div
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border border-slate-700 rounded-2xl bg-slate-900/40 p-6 text-center cursor-pointer"
            >
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="fileUpload"
                    onChange={(e) => handleFile(e.target.files[0])}
                />
                <label htmlFor="fileUpload" className="block cursor-pointer">
                    {inputImage ? (
                        <img
                            src={inputImage}
                            alt="Uploaded"
                            className="mx-auto max-h-60 rounded-xl object-contain border border-slate-700"
                        />
                    ) : (
                        <p className="text-slate-400 text-sm">
                            Click or drag & drop an image here
                        </p>
                    )}
                </label>
            </div>

            {/* BUTTON */}
            <button
                onClick={extractText}
                disabled={!inputImage || loading}
                className={`px-6 py-3 rounded-full text-sm font-medium ${inputImage && !loading
                        ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
            >
                {loading ? `Extracting... ${progress}%` : "Extract Text"}
            </button>

            {/* ERROR */}
            {error && (
                <div className="text-red-400 text-xs border border-red-800 bg-red-900/20 rounded-xl p-3">
                    {error}
                </div>
            )}

            {/* OUTPUT */}
            {text && (
                <section className="space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-medium text-slate-200">Extracted Text</h2>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigator.clipboard.writeText(text)}
                                className="text-xs px-3 py-1 rounded-full bg-slate-700 hover:bg-slate-600"
                            >
                                Copy
                            </button>
                            <button
                                onClick={downloadTxt}
                                className="text-xs px-3 py-1 rounded-full bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                            >
                                Download
                            </button>
                        </div>
                    </div>

                    <pre className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-slate-200 whitespace-pre-wrap">
                        {text}
                    </pre>
                </section>
            )}

            {/* HISTORY */}
            {history.length > 0 && (
                <section className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-200">Recent Extractions</h2>

                    <div className="flex flex-col gap-2">
                        {history.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setText(item.text)}
                                className="text-left text-xs p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:bg-slate-900 hover:border-emerald-400"
                            >
                                <p className="line-clamp-2 text-slate-300">{item.text}</p>
                            </button>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
