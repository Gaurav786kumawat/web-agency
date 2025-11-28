"use client";

import { useState } from "react";

export default function FriendshipMeter() {
    const [you, setYou] = useState("");
    const [friend, setFriend] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const [history, setHistory] = useState([]);

    const personalityLines = [
        "You both understand each other more than you admit.",
        "There is a natural emotional balance between both of you.",
        "You often think alike without even planning it.",
        "You both hype each other in the best way possible.",
        "Your energy matches more than you realise.",
        "You make each other feel understood effortlessly.",
        "Both of you forgive quickly and care deeply.",
    ];

    const vibeLines = [
        "Chaotic but loyal energy.",
        "Calm and comforting bond.",
        "Best-friend-but-deny-it energy.",
        "Playful teasing + emotional support combo.",
        "Low maintenance, high trust friendship.",
        "Silent loyalty type connection.",
        "The 'I got you always' type vibe.",
    ];

    function generate() {
        if (!you.trim() || !friend.trim()) return;

        setLoading(true);

        setTimeout(() => {
            const score = Math.floor(Math.random() * 21) + 80; // 80–100

            const personality =
                personalityLines[Math.floor(Math.random() * personalityLines.length)];

            const vibe =
                vibeLines[Math.floor(Math.random() * vibeLines.length)];

            const output = {
                score,
                personality,
                vibe,
                you,
                friend,
            };

            setResult(output);

            setHistory((prev) => {
                const updated = [
                    { id: Date.now(), you, friend, score },
                    ...prev.slice(0, 5),
                ];
                return updated;
            });

            setLoading(false);
        }, 700);
    }

    function copyResult() {
        const text = `
Friendship Score for ${result.you} & ${result.friend}

Score: ${result.score}%
Personality Match: ${result.personality}
Vibe: ${result.vibe}
    `.trim();

        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            const temp = document.createElement("textarea");
            temp.value = text;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);
        }
    }

    return (
        <main className="space-y-8 pb-16">

            {/* HEADER */}
            <section className="space-y-1">
                <h1 className="text-3xl font-semibold">Friendship Meter</h1>
                <p className="text-sm text-slate-400">
                    Enter two names and see the fun friendship score, vibe & personality match!
                </p>
            </section>

            {/* HOW TO USE */}
            <section className="p-4 text-sm rounded-2xl border border-slate-800 bg-slate-900/50 space-y-2">
                <h2 className="font-medium text-slate-200">How to use</h2>
                <ol className="list-decimal text-slate-400 list-inside space-y-1">
                    <li>Enter your name and your friend's name.</li>
                    <li>Click <span className="text-slate-200">Check Friendship</span>.</li>
                    <li>See your fun friendship score & personality match.</li>
                </ol>
            </section>

            {/* INPUTS */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                    <label className="text-slate-300">Your name</label>
                    <input
                        type="text"
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-emerald-500"
                        placeholder="e.g. Gaurav"
                        value={you}
                        onChange={(e) => setYou(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-slate-300">Friend's name</label>
                    <input
                        type="text"
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-emerald-500"
                        placeholder="e.g. Rohit"
                        value={friend}
                        onChange={(e) => setFriend(e.target.value)}
                    />
                </div>
            </div>

            {/* BUTTON */}
            <button
                onClick={generate}
                disabled={!you.trim() || !friend.trim() || loading}
                className={`px-6 py-3 rounded-full font-medium text-sm ${you.trim() && friend.trim() && !loading
                        ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    }`}
            >
                {loading ? "Checking..." : "Check Friendship"}
            </button>

            {/* RESULT */}
            {result && (
                <section className="space-y-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">

                    {/* SCORE */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-slate-200">
                            Friendship Score
                        </h2>

                        {/* Copy */}
                        <button
                            onClick={copyResult}
                            className="text-xs px-3 py-1 rounded-full bg-slate-700 hover:bg-slate-600"
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="text-5xl font-bold text-emerald-400 animate-pulse">
                            {result.score}%
                        </div>
                    </div>

                    {/* DETAILS */}
                    <div className="space-y-3 text-sm text-slate-300">
                        <p>
                            <span className="font-medium">{result.you}</span> &{" "}
                            <span className="font-medium">{result.friend}</span> have a{" "}
                            <span className="text-emerald-400 font-medium">
                                {result.score}% friendship match
                            </span>.
                        </p>

                        <p>
                            <span className="font-medium text-slate-200">Personality:</span>{" "}
                            {result.personality}
                        </p>

                        <p>
                            <span className="font-medium text-slate-200">Vibe:</span>{" "}
                            {result.vibe}
                        </p>
                    </div>
                </section>
            )}

            {/* HISTORY */}
            {history.length > 0 && (
                <section className="space-y-2">
                    <h2 className="text-sm font-medium text-slate-200">Recent Checks</h2>

                    <div className="flex flex-col gap-2">
                        {history.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                    setResult({
                                        score: item.score,
                                        you: item.you,
                                        friend: item.friend,
                                        personality: "Tap to re-generate for fresh insights!",
                                        vibe: "Every test gives new vibes 😄",
                                    })
                                }
                                className="px-3 py-2 rounded-xl text-xs bg-slate-900/60 border border-slate-800 hover:bg-slate-900 hover:border-emerald-400 text-left"
                            >
                                <span className="font-medium">{item.you}</span> &{" "}
                                <span className="font-medium">{item.friend}</span> —{" "}
                                {item.score}%
                            </button>
                        ))}
                    </div>
                </section>
            )}

        </main>
    );
}
