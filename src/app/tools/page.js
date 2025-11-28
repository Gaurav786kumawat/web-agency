"use client";

import Link from "next/link";

const tools = [
    {
        slug: "caption-generator",
        name: "Caption Generator",
        short: "Ready-to-post captions for any topic.",
        badge: "Social",
        highlight: "Instant ideas",
    },
    {
        slug: "hashtag-generator",
        name: "Hashtag Generator",
        short: "Smart hashtag sets for better reach.",
        badge: "Social",
        highlight: "Optimised tags",
    },
    {
        slug: "blog-generator",
        name: "Blog Generator",
        short: "Clean, ready-to-post mini blogs.",
        badge: "Content",
        highlight: "Multi-style outputs",
    },
    {
        slug: "img-to-text-converter",
        name: "Image to Text (OCR)",
        short: "Extract text from images in seconds.",
        badge: "Utility",
        highlight: "AI OCR",
    },
    {
        slug: "image-compressor",
        name: "Image Compressor",
        short: "Reduce size, keep quality – web & WhatsApp ready.",
        badge: "Utility",
        highlight: "Quality control",
    },
    {
        slug: "qr-tool",
        name: "QR Code Generator",
        short: "Text, links & UPI payment QR with history.",
        badge: "Business",
        highlight: "Custom styles",
    },
    {
        slug: "life-advice-generator",
        name: "Life Advice Generator",
        short: "Thoughtful, personalised life guidance.",
        badge: "Personal",
        highlight: "Multiple tones",
    },
    {
        slug: "friendship-meter",
        name: "Friendship Meter",
        short: "Fun friendship score & vibe check.",
        badge: "Fun",
        highlight: "Instant results",
    },
    {
        slug: "faceblur",
        name: "Face Blur (AI)",
        short: "Auto-detect & blur faces for privacy.",
        badge: "AI",
        highlight: "On-device",
    },
];

export default function ToolsPage() {
    return (
        <main className="pb-16 space-y-10">
            {/* Top section */}
            <section className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI Tools Hub
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        All-in-one AI tools by{" "}
                        <span className="text-emerald-400">Gaurav Kumawat</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-400 max-w-2xl">
                        A curated set of small, powerful tools for creators, students and
                        business owners — built with AI assistance and optimised for speed,
                        clarity and real-world use.
                    </p>
                </div>

                {/* Quick tips */}
                <div className="grid gap-3 md:grid-cols-3 text-xs text-slate-400">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                        <p className="font-medium text-slate-200 mb-1">How to use</p>
                        <p>Pick a tool → fill basic inputs → copy / download result.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                        <p className="font-medium text-slate-200 mb-1">Best for</p>
                        <p>
                            Social media posts, content creation, client work, daily
                            productivity and quick experimentation.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                        <p className="font-medium text-slate-200 mb-1">No signup needed</p>
                        <p>Lightweight, fast, runs directly in your browser.</p>
                    </div>
                </div>
            </section>

            {/* Tools grid */}
            <section className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-slate-200 uppercase tracking-[0.25em]">
                        Available Tools
                    </h2>
                    <p className="text-[11px] text-slate-500">
                        {tools.length} tools • more coming soon
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between hover:border-emerald-500/70 hover:bg-slate-900 transition"
                        >
                            <div className="space-y-3">
                                {/* Top row: badge + highlight */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                                        {tool.badge}
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                                        {tool.highlight}
                                    </span>
                                </div>

                                {/* Name + description */}
                                <div className="space-y-1.5">
                                    <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-300">
                                        {tool.name}
                                    </h3>
                                    <p className="text-xs text-slate-400 line-clamp-2">
                                        {tool.short}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom row: CTA */}
                            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                                <span className="inline-flex items-center gap-1 group-hover:text-emerald-300">
                                    Open tool
                                    <span className="text-xs group-hover:translate-x-0.5 transition-transform">
                                        →
                                    </span>
                                </span>
                                <span className="text-slate-500">
                                    Built with <span className="text-slate-300">AI</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Footer note */}
            <section className="pt-4 border-t border-slate-900 text-[11px] text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p>
                    More tools are under development — image, video, study & business
                    automations.
                </p>
                <p>
                    Crafted in Danta, Rajasthan ·{" "}
                    <span className="text-slate-300">AI-assisted development workflow</span>
                </p>
            </section>
        </main>
    );
}
