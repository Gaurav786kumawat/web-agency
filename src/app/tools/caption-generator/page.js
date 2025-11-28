"use client";
import { useState } from "react";

const CAPTION_TEMPLATES = [
    "Just another day talking about {topic} ✨",
    "{topic} but make it aesthetic 🌿",
    "POV: you're obsessed with {topic} 😌",
    "Small steps in {topic} → Big wins 🚀",
    "If you love {topic}, this one’s for you ❤️",
    "Daily dose of {topic} vibes ✨",
    "Making {topic} look effortless 👀",
    "Because {topic} is a whole vibe 💫",
    "{topic}, but with main character energy 🎬",
    "Living my best {topic} life 🌈",
    "One step closer in my {topic} journey 📈",
    "Not perfect, just consistent with {topic} 🔁",
    "Less talk, more {topic} action ⚡",
    "{topic} > excuses. Always.",
    "Romanticizing {topic} one day at a time ☕",
    "Your daily reminder to focus on {topic} 📌",
    "Building my future with {topic} brick by brick 🧱",
    "{topic} now, results later ⏳",
    "Turning {topic} into a habit, not a mood 🧠",
    "Silent grind, loud {topic} results 🔥",
    "If {topic} was easy, everyone would do it 💯",
    "{topic} today, success tomorrow 📆",
    "This is your sign to start with {topic} ✨",
    "No one cares, work on {topic} harder 💪",
    "Trust the process. Trust {topic}.",
    "Everyday progress in {topic}, no matter how small 🌱",
    "Started for fun, now I’m serious about {topic} 😤",
    "{topic} is not just a goal, it’s a lifestyle.",
    "Documenting my {topic} journey, not just the results 📸",
    "Quietly improving my {topic} game 🤫",
    "Making time for {topic}, not excuses ⏰",
    "From “one day” to “day one” of {topic} ✅",
    "Less scrolling, more {topic} happening here 📵",
    "Chasing growth, not perfection in {topic} ✨",
    "{topic} mode: ON ✅",
    "Building discipline through {topic}, slowly but surely 🧩",
    "One day you’ll thank yourself for starting {topic} 🙏",
    "This is what consistency in {topic} looks like 📊",
    "Turning overthinking into action with {topic} 🌀",
    "Making my future self proud with {topic} 💼",
    "Sacrifices today, better {topic} tomorrow.",
    "Late start, but strong {topic} game 💥",
    "Nobody sees the hard work behind {topic}, only the glow-up 🌟",
    "You don’t find time for {topic}, you create it 🛠️",
    "Note to self: don’t skip {topic} today 📒",
    "You clicked this for a reason: {topic} 😏",
    "Your FYP needs more {topic} content like this 📲",
    "Low-key obsessed with {topic} lately 🤍",
    "We don’t gatekeep {topic} motivation here 🫶",
    "Saved for later? No. Start {topic} now.",
    "Imagine your life 1 year from now if you stay consistent with {topic} 🤯",
    "{topic} today, flex tomorrow 😎",
    "Grind in private, let {topic} speak in public 📢",
    "Even on bad days, I show up for {topic} 🌧️",
    "Some people won’t get it. It’s a {topic} thing.",
    "Energy goes where {topic} grows 🔁",
    "If this shows up on your feed, take it as a sign to work on {topic} 🔔",
    "No filters, just raw {topic} progress 📷",
    "You don’t need motivation, you need {topic} discipline.",
    "Small efforts in {topic} → Big transformations.",
    "One day, this {topic} era will become your favorite memory 🕰️",
    "Welcome to my {topic} era 🌙",
];

function getRandomCaptions(topic, count = 5) {
    const shuffled = [...CAPTION_TEMPLATES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map((t) =>
        t.replace(/\{topic\}/gi, topic.trim() || "this")
    );
}

export default function CaptionGenerator() {
    const [topic, setTopic] = useState("");
    const [result, setResult] = useState([]);

    const generateCaptions = () => {
        if (!topic.trim()) return;
        const ideas = getRandomCaptions(topic, 5);
        setResult(ideas);
    };

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <section className="space-y-2">
                <h1 className="text-3xl font-semibold">Caption Generator</h1>
                <p className="text-sm text-slate-400 max-w-2xl">
                    Type any topic (e.g. <span className="font-medium">fitness</span>,{" "}
                    <span className="font-medium">travel</span>,{" "}
                    <span className="font-medium">food vlogs</span>) and get fresh,
                    ready-to-use captions in one click.
                </p>
            </section>

            {/* How to use */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Enter your topic in the box below.</li>
                    <li>Click on <span className="text-slate-100">Generate Captions</span>.</li>
                    <li>Get 5 random captions tailored to your topic.</li>
                    <li>Click again for 5 new fresh ideas every time.</li>
                    <li>Copy–paste your favorite into Instagram, Reels, Shorts, etc.</li>
                </ol>
            </section>

            {/* Input + Button */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm text-slate-300 block">
                        Topic / Niche / Content idea
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. fitness journey, study vlog, Rajasthan travel, small business"
                        className="w-full rounded-xl bg-slate-900 border border-slate-700 p-3 outline-none text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    {!topic.trim() && (
                        <p className="text-xs text-slate-500">
                            Tip: Be specific — like &quot;gym motivation for beginners&quot; or
                            &quot;street food in Jaipur&quot; for better captions.
                        </p>
                    )}
                </div>

                <button
                    onClick={generateCaptions}
                    disabled={!topic.trim()}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition ${topic.trim()
                            ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed"
                        }`}
                >
                    Generate Captions
                </button>
            </section>

            {/* Result */}
            {result.length > 0 && (
                <section className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-slate-200">
                            Your captions ({result.length})
                        </h2>
                        <p className="text-xs text-slate-500">
                            Click generate again for 5 new ideas.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {result.map((cap, i) => (
                            <div
                                key={i}
                                className="p-3 text-sm bg-slate-800 border border-slate-700 rounded-xl flex justify-between gap-3"
                            >
                                <p className="flex-1 leading-relaxed">{cap}</p>
                                {/* Optional: small copy hint */}
                                <span className="text-[10px] text-slate-500 whitespace-nowrap self-start">
                                    tap & copy
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
