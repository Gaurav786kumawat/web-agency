"use client";

import Link from "next/link";
import { useCallback } from "react";

const WHATSAPP_NUMBER = "917878583600";

const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function BeautyOfDantaPage() {
    const handleWhatsAppClick = useCallback((message) => {
        window.open(whatsappUrl(message), "_blank");
    }, []);

    const places = [
        {
            title: "Sunset Points",
            desc: "Golden horizons, soft winds, and peaceful views to end your day in Danta.",
        },
        {
            title: "Mandir & Devsthan",
            desc: "Ancient temples and sacred spaces that carry the spiritual heartbeat of Danta.",
        },
        {
            title: "Lakes & Nature",
            desc: "Calm waters, greenery, and nature trails perfect for quiet escapes and photos.",
        },
        {
            title: "Fort & Heritage",
            desc: "Stories of royals, warriors, and culture written in stone and sandstone.",
        },
        {
            title: "Viewpoints",
            desc: "Panoramic views of Danta’s fields, villages, and distant hills.",
        },
        {
            title: "Popular Local Areas",
            desc: "Bustling markets, friendly streets, and the everyday charm of Danta life.",
        },
    ];

    const events = [
        {
            title: "Holi in Danta",
            desc: "Streets filled with colors, music, and community celebrations.",
        },
        {
            title: "Teej Festival",
            desc: "Traditional songs, swings, mehendi, and colorful attires.",
        },
        {
            title: "Local Fairs (Melas)",
            desc: "Shops, rides, food stalls, and village vibes in one place.",
        },
        {
            title: "School & College Events",
            desc: "Annual functions, talent shows, sports days, and cultural performances.",
        },
        {
            title: "Special Programs & Yatras",
            desc: "Religious yatras, community meets, and seasonal gatherings.",
        },
    ];

    const businessCategories = [
        "Restaurants",
        "Gyms & Fitness",
        "Salons & Beauty",
        "Coaching & Tuition",
        "Clinics & Hospitals",
        "Real Estate & Property",
        "Car Wash & Detailing",
        "Electrician Services",
        "Mechanic & Garage",
        "Shops & Showrooms",
    ];

    const featuredBusinesses = [
        {
            name: "Sample Café & Bistro",
            category: "Restaurant · Coffee · Family",
            desc: "A premium example listing to show how Danta restaurants and cafés will appear on the directory.",
        },
        {
            name: "Elite Fitness Studio",
            category: "Gym · Fitness · Training",
            desc: "Modern gym listing example with space for photos, timings, coaches, and membership details.",
        },
    ];

    const galleryItems = [
        "Old Streets of Danta",
        "Evening Lights in Market",
        "Temple Bells at Sunrise",
        "Fields Around Danta",
        "Local Food & Chaat",
        "Cultural Moments",
        "Rainy Day in Danta",
        "Festive Decorations",
        "People & Portraits",
    ];

    const instagramPlaceholders = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        caption: `Instagram Post ${i + 1}`,
    }));

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            <div className="max-w-6xl mx-auto px-4 pt-24">
                {/* Top Badge */}
                <div className="flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Demo Concept · Not Official Website
                    </span>
                    <span className="hidden sm:inline-flex text-xs text-slate-400">
                        Made by Gaurav Kumawat · AI-Assisted Developer
                    </span>
                </div>

                <main className="space-y-12 pb-24">
                    {/* Hero Section */}
                    <section
                        id="hero"
                        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/40 px-6 py-10 sm:px-10 sm:py-14"
                    >
                        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
                            <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-purple-500/40 blur-3xl" />
                            <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
                        </div>

                        <div className="relative grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    Luxury Demo · Beauty of Danta
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
                                    Beauty of Danta
                                </h1>
                                <p className="text-base sm:text-lg text-slate-200/90">
                                    Discover Danta’s{" "}
                                    <span className="text-purple-300/90 font-medium">
                                        Places
                                    </span>
                                    ,{" "}
                                    <span className="text-purple-300/90 font-medium">
                                        Culture
                                    </span>
                                    ,{" "}
                                    <span className="text-purple-300/90 font-medium">
                                        People
                                    </span>{" "}
                                    &amp{" "}
                                    <span className="text-purple-300/90 font-medium">
                                        Local Businesses
                                    </span>{" "}
                                    in one premium, modern, hyperlocal experience.
                                </p>
                                <p className="text-sm sm:text-base text-slate-300/90">
                                    This is a{" "}
                                    <span className="font-semibold text-amber-300">
                                        demo website concept
                                    </span>{" "}
                                    created to showcase how the{" "}
                                    <span className="font-medium">Beauty of Danta</span> brand
                                    can evolve into a full tourism + local business platform.
                                    Once approved, it will be customized with real content,
                                    photos, and listings.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button
                                        onClick={() => {
                                            const section = document.getElementById("places");
                                            if (section) section.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-300"
                                    >
                                        Explore Danta
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleWhatsAppClick(
                                                "Hi Gaurav, I’m from Beauty of Danta / Danta area. I loved the demo website concept and want to discuss collaboration and website development."
                                            )
                                        }
                                        className="inline-flex items-center justify-center rounded-full border border-purple-500/60 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-purple-100 hover:bg-purple-500/10"
                                    >
                                        Contact Developer (WhatsApp)
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-4 text-xs text-slate-300/80 pt-3">
                                    <span className="inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                        Hyperlocal Tourism
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                        Business Directory
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                        Instagram-first Design
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                <div className="relative rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
                                    <div className="mb-3 flex items-center justify-between gap-2">
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                            Danta Snapshot
                                        </p>
                                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                                            Demo UI · Real Potential
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                                        <div className="space-y-1.5">
                                            <p className="text-slate-400">Focused On</p>
                                            <p className="font-medium text-slate-100">
                                                Tourism + Local Business
                                            </p>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-slate-400">Designed For</p>
                                            <p className="font-medium text-slate-100">
                                                Beauty of Danta Instagram
                                            </p>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-slate-400">Developer</p>
                                            <p className="font-medium text-slate-100">
                                                Gaurav Kumawat
                                            </p>
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-slate-400">Tech</p>
                                            <p className="font-medium text-slate-100">
                                                Next.js · Tailwind CSS · WhatsApp CTAs
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-300">
                                        <p className="font-semibold text-slate-100">
                                            What you’re seeing
                                        </p>
                                        <p className="mt-1.5 text-[13px] text-slate-300/90">
                                            This is a demo layout. Real photos, stories, and
                                            businesses from Danta will be plugged into this
                                            structure later.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-300">
                                        <p className="font-semibold text-slate-100">
                                            How it helps Beauty of Danta
                                        </p>
                                        <p className="mt-1.5 text-[13px] text-slate-300/90">
                                            Turns your Instagram audience into visitors, leads, and
                                            business listings on a premium local website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Danta */}
                    <section
                        id="about"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-3 sm:max-w-xl">
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    About Danta
                                </h2>
                                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                                    Heritage · Culture · Nature · People
                                </p>
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400 sm:text-right">
                                <p>Content below is sample demo text.</p>
                                <p>This will be replaced with real copy later.</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-200/90 leading-relaxed">
                            <p>
                                Danta is more than just a point on the map — it’s a feeling.
                                A town where early mornings begin with temple bells, where
                                markets slowly fill with the rhythm of conversations, and
                                where sunsets paint the fields and rooftops with soft,
                                golden light.
                            </p>
                            <p>
                                Here, heritage still lives in the everyday — in old havelis,
                                small mandirs, busy chowks, and familiar streets that everyone
                                has walked a thousand times. The culture flows through
                                festivals, fairs, weddings, and simple tea breaks shared at
                                local stalls.
                            </p>
                            <p>
                                This website concept aims to capture that essence: to bring
                                together{" "}
                                <span className="font-medium text-amber-300/90">
                                    Danta’s places, people, and businesses
                                </span>{" "}
                                on one premium, modern platform — helping visitors discover it
                                and local businesses shine brighter.
                            </p>
                        </div>
                    </section>

                    {/* Places to Visit */}
                    <section
                        id="places"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Places to Visit in Danta
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    Curated categories to explore Danta like a local.
                                </p>
                            </div>
                            <div className="text-xs text-slate-400">
                                <p>All images are placeholders.</p>
                                <p>Real photos from Beauty of Danta will be added here.</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {places.map((place) => (
                                <div
                                    key={place.title}
                                    className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 transition hover:border-purple-500/70 hover:bg-slate-900"
                                >
                                    <div className="mb-3 h-36 w-full rounded-xl border border-dashed border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
                                        Image Here
                                    </div>
                                    <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                        {place.title}
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-300">
                                        {place.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Danta Photo Gallery */}
                    <section
                        id="gallery"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Danta Photo Gallery
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    A visual story of Danta’s streets, skies, and celebrations.
                                </p>
                            </div>
                            <div className="text-xs text-slate-400">
                                Real photos from Beauty of Danta Instagram and local
                                photographers will be added later.
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {galleryItems.map((caption, index) => (
                                <div
                                    key={caption}
                                    className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-3"
                                >
                                    <div className="flex-1 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
                                        Image Here
                                    </div>
                                    <p className="text-xs text-slate-300">
                                        {caption} <span className="text-slate-500">· #{index + 1}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Events & Festivals */}
                    <section
                        id="events"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Events &amp; Festivals
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    Moments that bring Danta together — from colors to culture.
                                </p>
                            </div>
                            <div className="text-xs text-slate-400">
                                Each event card can later link to photo albums, reels, and
                                posts.
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {events.map((event) => (
                                <div
                                    key={event.title}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5"
                                >
                                    <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                                        <span>Festival / Event</span>
                                        <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[11px] text-purple-200">
                                            Demo Listing
                                        </span>
                                    </div>
                                    <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                        {event.title}
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-300">
                                        {event.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Local Business Directory */}
                    <section
                        id="directory"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Local Business Directory
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    The heart of this demo — a modern, monetizable directory of
                                    Danta’s businesses.
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2 text-right">
                                <p className="text-xs text-slate-400">
                                    Each card below represents a category.
                                    <br />
                                    Inside it, multiple businesses can be listed later.
                                </p>
                                <button
                                    onClick={() =>
                                        handleWhatsAppClick(
                                            "Hi Gaurav, I want to add my Danta business to the Beauty of Danta website directory."
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-medium text-emerald-100 hover:bg-emerald-500/20"
                                >
                                    Add Your Business (WhatsApp)
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {businessCategories.map((category) => (
                                <div
                                    key={category}
                                    className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5"
                                >
                                    <div className="space-y-1.5">
                                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                                            Category
                                        </p>
                                        <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                            {category}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-300">
                                            Example listing:{" "}
                                            <span className="text-slate-100">
                                                &quot;Sample {category} Name&quot;
                                            </span>{" "}
                                            with photos, timings, contact, and location map.
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                                        <span>Multiple businesses can appear here.</span>
                                        <button
                                            onClick={() =>
                                                handleWhatsAppClick(
                                                    `Hi Gaurav, I run a business in the category "${category}" and I want to list it on the Beauty of Danta website.`
                                                )
                                            }
                                            className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-amber-200 hover:bg-amber-500/10 hover:text-amber-100"
                                        >
                                            View Listing (Demo)
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Featured Business Listing Example */}
                    <section
                        id="featured"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Featured Business Listing (Example)
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    How an individual business can be highlighted with a premium
                                    layout.
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    handleWhatsAppClick(
                                        "Hi Gaurav, I want a featured listing for my business on the Beauty of Danta website."
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300"
                            >
                                Add Your Business (WhatsApp)
                            </button>
                        </div>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">
                            {featuredBusinesses.map((biz) => (
                                <div
                                    key={biz.name}
                                    className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5"
                                >
                                    <div className="mb-3 flex items-center justify-between gap-2">
                                        <span className="rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-200">
                                            Featured (Demo)
                                        </span>
                                        <span className="text-[11px] text-slate-400">
                                            Premium Position
                                        </span>
                                    </div>
                                    <div className="mb-4 h-32 w-full rounded-xl border border-dashed border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
                                        Business Image Placeholder
                                    </div>
                                    <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                                        {biz.name}
                                    </h3>
                                    <p className="mt-1 text-xs text-emerald-300">{biz.category}</p>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-300">
                                        {biz.desc}
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                                        <div className="space-y-1">
                                            <p>Location: Danta, Sikar, Rajasthan (Demo)</p>
                                            <p>CTA: Call · WhatsApp · View on Map</p>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleWhatsAppClick(
                                                    `Hi Gaurav, I want a listing similar to "${biz.name}" for my Danta business.`
                                                )
                                            }
                                            className="rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-semibold text-amber-200 hover:bg-amber-500/10 hover:text-amber-100"
                                        >
                                            Add Your Business (WhatsApp)
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Instagram Sync Section */}
                    <section
                        id="instagram"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Beauty of Danta Instagram Feed
                                </h2>
                                <p className="mt-2 text-sm text-slate-300">
                                    Designed to sync with the existing Instagram page and show
                                    latest posts automatically.
                                </p>
                            </div>
                            <div className="text-xs text-slate-400 sm:text-right">
                                <p>
                                    Later, this section can be connected to{" "}
                                    <span className="text-slate-200">Instagram Graph API</span>{" "}
                                    to auto-pull posts.
                                </p>
                                <p>For now, this grid is a design placeholder.</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {instagramPlaceholders.map((post) => (
                                <div
                                    key={post.id}
                                    className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-3"
                                >
                                    <div className="mb-2 aspect-square w-full rounded-xl border border-dashed border-slate-700/80 bg-slate-900/80 flex items-center justify-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
                                        Instagram Post Placeholder
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                                        <span>{post.caption}</span>
                                        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px]">
                                            Demo
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact & Collaboration Section */}
                    <section
                        id="contact"
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-8 sm:px-10 sm:py-10"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-2 sm:max-w-md">
                                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                                    Contact &amp; Collaboration
                                </h2>
                                <p className="text-sm sm:text-base text-slate-300">
                                    This section is designed for the{" "}
                                    <span className="font-medium text-amber-300">
                                        Beauty of Danta
                                    </span>{" "}
                                    team and local partners to collaborate, promote, and grow
                                    together.
                                </p>
                                <p className="text-xs text-slate-400">
                                    All CTAs are currently connected to the developer’s WhatsApp
                                    for demo purposes.
                                </p>
                            </div>

                            <div className="mt-4 grid gap-3 sm:mt-0 sm:max-w-sm">
                                <button
                                    onClick={() =>
                                        handleWhatsAppClick(
                                            "Hi, I’m interested in paid promotions via the Beauty of Danta platform (Instagram + Website)."
                                        )
                                    }
                                    className="inline-flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-left text-sm text-slate-100 hover:border-amber-400/80 hover:bg-slate-900"
                                >
                                    <div>
                                        <p className="font-semibold text-amber-200">
                                            For Promotions
                                        </p>
                                        <p className="mt-1 text-xs text-slate-300">
                                            Promote your event, brand, or business to the Danta
                                            audience.
                                        </p>
                                    </div>
                                    <span className="text-xs text-amber-300">WhatsApp →</span>
                                </button>

                                <button
                                    onClick={() =>
                                        handleWhatsAppClick(
                                            "Hi, I want to discuss collaboration ideas with Beauty of Danta (events, photography, content, or co-branding)."
                                        )
                                    }
                                    className="inline-flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-left text-sm text-slate-100 hover:border-purple-400/80 hover:bg-slate-900"
                                >
                                    <div>
                                        <p className="font-semibold text-purple-200">
                                            For Collaborations
                                        </p>
                                        <p className="mt-1 text-xs text-slate-300">
                                            Content collabs, shoots, events, or cross-brand
                                            partnerships.
                                        </p>
                                    </div>
                                    <span className="text-xs text-purple-300">WhatsApp →</span>
                                </button>

                                <button
                                    onClick={() =>
                                        handleWhatsAppClick(
                                            "Hi Gaurav, I’m interested in website development / a custom platform similar to Beauty of Danta."
                                        )
                                    }
                                    className="inline-flex items-center justify-between rounded-2xl border border-emerald-500/60 bg-emerald-500/10 px-4 py-3 text-left text-sm text-emerald-50 hover:bg-emerald-500/20"
                                >
                                    <div>
                                        <p className="font-semibold text-emerald-200">
                                            For Website Development
                                        </p>
                                        <p className="mt-1 text-xs text-emerald-50/90">
                                            Get a custom website or local business portal for your
                                            brand, city, or page.
                                        </p>
                                    </div>
                                    <span className="text-xs text-emerald-200">WhatsApp →</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-6 sm:px-10 sm:py-7">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-slate-400">
                                © {new Date().getFullYear()} Beauty of Danta · All rights
                                reserved.
                            </p>
                            <div className="text-xs text-slate-400">
                                Demo created by{" "}
                                <span className="font-medium text-slate-200">
                                    Gaurav Kumawat
                                </span>{" "}
                                – AI-Assisted Developer
                            </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-500">
                            <span>Tech Stack: Next.js (App Router), Tailwind CSS</span>
                            <span>Purpose: Demo only · Content &amp; listings are sample</span>
                        </div>
                    </footer>
                </main>
            </div>

            {/* Floating WhatsApp Button */}
            <button
                aria-label="Chat on WhatsApp"
                onClick={() =>
                    handleWhatsAppClick(
                        "Hi Gaurav, I just visited the Beauty of Danta demo website."
                    )
                }
                className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-xl shadow-emerald-500/40 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
                <span className="text-2xl">💬</span>
            </button>
        </div>
    );
}
