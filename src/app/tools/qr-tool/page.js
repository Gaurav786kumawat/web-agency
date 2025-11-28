"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRTool() {
    const [text, setText] = useState("");
    const [qr, setQR] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState("");

    const [size, setSize] = useState(256);
    const [margin, setMargin] = useState(3);
    const [level, setLevel] = useState("M");
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");

    // mode: "text" or "upi"
    const [mode, setMode] = useState("text");
    const [upiName, setUpiName] = useState("");

    // history items: { id, text, mode, upiName }
    const [history, setHistory] = useState([]);

    function buildPayload() {
        const value = text.trim();
        if (!value) return "";

        if (mode === "upi") {
            // value is UPI ID like 7878583600@ptaxis
            const pa = encodeURIComponent(value);
            const pn = upiName.trim()
                ? encodeURIComponent(upiName.trim())
                : "UPI%20Payment";

            // Basic UPI payment link
            return `upi://pay?pa=${pa}&pn=${pn}&cu=INR`;
        }

        // Normal text / URL payload
        return value;
    }

    const addToHistory = (rawText) => {
        const clean = rawText.trim();
        if (!clean) return;

        setHistory((prev) => {
            const key = `${clean}-${mode}-${upiName.trim()}`;
            // remove duplicates with same combo
            const filtered = prev.filter(
                (item) => `${item.text}-${item.mode}-${item.upiName}` !== key
            );
            const updated = [
                {
                    id: Date.now(),
                    text: clean,
                    mode,
                    upiName: upiName.trim(),
                },
                ...filtered,
            ];
            return updated.slice(0, 5);
        });
    };

    const generateQR = async () => {
        const payload = buildPayload();
        if (!payload) return;

        setError("");
        setIsGenerating(true);
        setQR("");

        try {
            const url = await QRCode.toDataURL(payload, {
                width: size,
                margin,
                errorCorrectionLevel: level,
                color: {
                    dark: fgColor,
                    light: bgColor,
                },
            });
            setQR(url);
            addToHistory(text);
        } catch (err) {
            console.error(err);
            setError("Unable to generate QR code. Please check the input and try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleReset = () => {
        setText("");
        setQR("");
        setError("");
        setSize(256);
        setMargin(3);
        setLevel("M");
        setFgColor("#000000");
        setBgColor("#ffffff");
        setMode("text");
        setUpiName("");
    };

    const handleHistoryClick = (item) => {
        setMode(item.mode);
        setText(item.text);
        setUpiName(item.upiName || "");
    };

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <section className="space-y-2">
                <h1 className="text-3xl font-semibold">QR Code Generator</h1>
                <p className="text-sm text-slate-400 max-w-2xl">
                    Create a QR code for any{" "}
                    <span className="font-medium">link, text, UPI ID, WiFi password or contact info</span>.
                    Customize it, preview it, and download it as a PNG.
                </p>
            </section>

            {/* How to use */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Choose whether you want a normal Text/Link QR or a UPI Payment QR.</li>
                    <li>Type or paste your content in the input box.</li>
                    <li>Adjust size, margin, error correction and colors if you want.</li>
                    <li>Click <span className="text-slate-100 font-medium">Generate QR</span>.</li>
                    <li>Scan the preview with your phone, then click{" "}
                        <span className="font-medium">Download PNG</span> to save it.</li>
                </ol>
            </section>

            {/* Main controls */}
            <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                {/* Mode toggle */}
                <div className="flex gap-3 text-xs mb-1">
                    <button
                        type="button"
                        onClick={() => setMode("text")}
                        className={`px-3 py-1.5 rounded-full border transition ${mode === "text"
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                                : "border-slate-700 bg-slate-900 text-slate-400"
                            }`}
                    >
                        Text / Link
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("upi")}
                        className={`px-3 py-1.5 rounded-full border transition ${mode === "upi"
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                                : "border-slate-700 bg-slate-900 text-slate-400"
                            }`}
                    >
                        UPI Payment
                    </button>
                </div>

                {/* Text Input */}
                <div className="space-y-2">
                    <label className="text-sm text-slate-300 block">
                        {mode === "upi" ? "UPI ID" : "Link / Text / UPI / WiFi info"}
                    </label>
                    <input
                        type="text"
                        placeholder={
                            mode === "upi"
                                ? "e.g. 7878583600@ptaxis"
                                : "e.g. https://yourwebsite.com, WIFI:S:Home;P:password;"
                        }
                        className="w-full rounded-xl bg-slate-900 border border-slate-700 p-3 outline-none text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    {mode === "upi" && (
                        <div className="mt-2 space-y-1">
                            <label className="text-xs text-slate-300 block">
                                Receiver name (optional)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Gaurav Kumawat"
                                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                                value={upiName}
                                onChange={(e) => setUpiName(e.target.value)}
                            />
                            <p className="text-[11px] text-slate-500">
                                This name may appear in the UPI app when someone scans your QR.
                            </p>
                        </div>
                    )}

                    {!text.trim() && mode === "text" && (
                        <p className="text-xs text-slate-500">
                            Tip: You can create QR codes for websites, payment links, WiFi access, contact cards and more.
                        </p>
                    )}
                </div>

                {/* Options */}
                <div className="grid gap-4 md:grid-cols-3 text-xs pt-2">
                    {/* Size */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-slate-400">
                            <span>Size</span>
                            <span className="text-slate-200 font-medium">{size} px</span>
                        </div>
                        <input
                            type="range"
                            min={160}
                            max={512}
                            step={32}
                            value={size}
                            onChange={(e) => setSize(parseInt(e.target.value, 10))}
                            className="w-full accent-emerald-500"
                        />
                        <p className="text-[11px] text-slate-500">
                            256 px is great for digital use. 384–512 px works better for print.
                        </p>
                    </div>

                    {/* Margin */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-slate-400">
                            <span>Margin</span>
                            <span className="text-slate-200 font-medium">{margin}px</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={8}
                            step={1}
                            value={margin}
                            onChange={(e) => setMargin(parseInt(e.target.value, 10))}
                            className="w-full accent-emerald-500"
                        />
                        <p className="text-[11px] text-slate-500">
                            White space around the QR code helps scanners read it more reliably.
                        </p>
                    </div>

                    {/* Error Correction */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-slate-400">
                            <span>Error correction</span>
                            <span className="text-slate-200 font-medium">{level}</span>
                        </div>
                        <select
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                        >
                            <option value="L">L – smallest size</option>
                            <option value="M">M – balanced (default)</option>
                            <option value="Q">Q – high reliability</option>
                            <option value="H">H – maximum reliability (logos/overlays)</option>
                        </select>
                        <p className="text-[11px] text-slate-500">
                            Higher levels make the code more robust if it’s damaged or partially covered.
                        </p>
                    </div>
                </div>

                {/* Colors */}
                <div className="grid gap-4 md:grid-cols-2 text-xs pt-2">
                    <div className="space-y-2">
                        <span className="block text-slate-300">Foreground (QR color)</span>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                                className="h-8 w-10 rounded-md border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                                type="text"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                                className="flex-1 rounded-xl bg-slate-900 border border-slate-700 p-2 text-[11px] outline-none"
                                placeholder="#000000"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <span className="block text-slate-300">Background</span>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="h-8 w-10 rounded-md border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                                type="text"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                                className="flex-1 rounded-xl bg-slate-900 border border-slate-700 p-2 text-[11px] outline-none"
                                placeholder="#ffffff"
                            />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                        onClick={generateQR}
                        disabled={!text.trim() || isGenerating}
                        className={`px-6 py-3 rounded-full font-medium text-sm transition ${text.trim() && !isGenerating
                                ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                                : "bg-slate-800 text-slate-500 cursor-not-allowed"
                            }`}
                    >
                        {isGenerating ? "Generating..." : "Generate QR"}
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

            {/* Recent history */}
            {history.length > 0 && (
                <section className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-slate-200">
                            Recent QR inputs
                        </h2>
                        <p className="text-[11px] text-slate-500">
                            Click an item to load it back into the form.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        {history.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleHistoryClick(item)}
                                className="w-full text-left text-xs rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 hover:border-emerald-500 hover:bg-slate-900 transition"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span className="line-clamp-1">{item.text}</span>
                                    <span
                                        className={`ml-2 shrink-0 px-2 py-0.5 rounded-full text-[10px] ${item.mode === "upi"
                                                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                                                : "bg-slate-700/40 text-slate-200 border border-slate-600/60"
                                            }`}
                                    >
                                        {item.mode === "upi" ? "UPI" : "TEXT"}
                                    </span>
                                </div>
                                {item.upiName && item.mode === "upi" && (
                                    <p className="text-[10px] text-slate-500 mt-0.5">
                                        Name: {item.upiName}
                                    </p>
                                )}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {/* Preview */}
            {qr && (
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-slate-200">Preview</h2>
                        <p className="text-[11px] text-slate-500">
                            Always scan the QR with your phone once before printing or sharing.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col items-center gap-4">
                        <div className="bg-white p-3 rounded-xl">
                            <img
                                src={qr}
                                alt="Generated QR code"
                                className="w-48 h-48 md:w-56 md:h-56 object-contain"
                            />
                        </div>

                        <a
                            href={qr}
                            download="qr-code.png"
                            className="inline-flex items-center justify-center px-4 py-2 text-xs rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400"
                        >
                            Download PNG
                        </a>

                        <p className="text-[11px] text-slate-500 text-center">
                            The QR already includes a white background, so it&apos;s ready to use on posters,
                            stands, business cards and social posts.
                        </p>
                    </div>
                </section>
            )}
        </main>
    );
}
