"use client";
import { useState } from "react";

const HASHTAG_TEMPLATES = [
    // Dynamic – uses {base}
    "#{base}",
    "#{base}lover",
    "#{base}community",
    "#{base}life",
    "#{base}daily",
    "#{base}vibes",
    "#{base}goals",
    "#{base}journey",
    "#{base}diaries",
    "#{base}diary",
    "#{base}story",
    "#{base}stories",
    "#{base}blog",
    "#{base}vlog",
    "#{base}reels",
    "#{base}shorts",
    "#{base}content",
    "#{base}creator",
    "#{base}creators",
    "#{base}tips",
    "#{base}tipsandtricks",
    "#{base}inspo",
    "#{base}motivation",
    "#{base}inspiration",
    "#{base}hustle",
    "#{base}grind",
    "#{base}mindset",
    "#{base}grindmode",
    "#{base}lifestyle",
    "#{base}challenge",
    "#{base}update",
    "#{base}updates",
    "#{base}zone",
    "#{base}world",
    "#{base}club",
    "#{base}squad",
    "#{base}family",
    "#{base}gang",
    "#{base}edits",
    "#{base}edit",
    "#{base}aesthetic",
    "#{base}aesthetics",
    "#{base}addict",
    "#{base}obsessed",
    "#{base}focus",
    "#{base}journeybegins",
    "#{base}growth",
    "#{base}progress",
    "#{base}training",
    "#{base}coach",
    "#{base}guide",
    "#{base}lessons",
    "#{base}hack",
    "#{base}hacks",
    "#{base}pro",
    "#{base}forbeginners",
    "#{base}beginnerfriendly",
    "#{base}tipsforbeginners",
    "#{base}dailyroutine",
    "#{base}routine",
    "#{base}ideas",
    "#{base}india",
    "#{base}hindI",
    "#{base}desi",
    "#{base}communityindia",
    // Generic – always useful
    "#reels",
    "#reelitfeelit",
    "#reelsindia",
    "#hindireels",
    "#trending",
    "#trendingreels",
    "#trendingnow",
    "#viral",
    "#viralreels",
    "#viralinindia",
    "#explore",
    "#explorepage",
    "#exploremore",
    "#foryou",
    "#fyp",
    "#instagramreels",
    "#instadaily",
    "#dailyvibes",
    "#contentcreator",
    "#smallcreator",
    "#indiancreator",
    "#desivibes",
    "#creatorsofindia",
];

const TAGS_PER_BATCH = 20;

function slugifyTopic(topic) {
    return topic
        .toLowerCase()
        .replace(/\s+/g, "") // remove spaces
        .replace(/[^a-z0-9]/g, ""); // remove special chars
}

function getRandomHashtags(topic, count = TAGS_PER_BATCH) {
    const base = slugifyTopic(topic) || "content";

    const shuffled = [...HASHTAG_TEMPLATES].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    return selected.map((tpl) => tpl.replace(/\{base\}/gi, base));
}

export default function HashtagGenerator() {
    const [topic, setTopic] = useState("");
    const [tags, setTags] = useState([]);

    const generateTags = () => {
        if (!topic.trim()) return;
        const list = getRandomHashtags(topic, TAGS_PER_BATCH);
        setTags(list);
    };

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <section className="space-y-2">
                <h1 className="text-3xl font-semibold">Hashtag Generator</h1>
                <p className="text-sm text-slate-400 max-w-2xl">
                    Type your niche or topic and get a fresh set of{" "}
                    <span className="font-medium">smart, mixed hashtags</span> for Reels,
                    Shorts, posts & more — in one click.
                </p>
            </section>

            {/* How to use */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Enter your topic, niche or keyword in the box below.</li>
                    <li>Click on <span className="text-slate-100">Generate Hashtags</span>.</li>
                    <li>You&apos;ll get a mixed list of dynamic + generic viral hashtags.</li>
                    <li>Click again to get a <span className="font-medium">new random set</span> every time.</li>
                    <li>Copy the ones you like and paste them into your caption.</li>
                </ol>
            </section>

            {/* Input + Button */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm text-slate-300 block">
                        Topic / Niche / Keyword
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. fitness, coding, street food, Rajasthan travel"
                        className="w-full rounded-xl bg-slate-900 border border-slate-700 p-3 outline-none text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    {!topic.trim() && (
                        <p className="text-xs text-slate-500">
                            Tip: Try something specific like &quot;home workout&quot; or
                            &quot;study motivation&quot; for better tags.
                        </p>
                    )}
                </div>

                <button
                    onClick={generateTags}
                    disabled={!topic.trim()}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition ${topic.trim()
                            ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed"
                        }`}
                >
                    Generate Hashtags
                </button>
            </section>

            {/* Result */}
            {tags.length > 0 && (
                <section className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-slate-200">
                            Your hashtags ({tags.length})
                        </h2>
                        <p className="text-xs text-slate-500">
                            Click generate again for a new random mix.
                        </p>
                    </div>

                    {/* Bubble view */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs bg-slate-800 border border-slate-700 rounded-full px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Copy-friendly block */}
                    <div className="text-xs text-slate-400">
                        <p className="mb-1">Tap &amp; hold / select to copy all:</p>
                        <p className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] leading-relaxed break-words">
                            {tags.join(" ")}
                        </p>
                    </div>
                </section>
            )}
        </main>
    );
}
