// app/event-planner-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function EventPlannerDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your Event Planner demo website. Can you build one like this for my event business?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-fuchsia-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">
                    Demo · Event / Wedding Planner Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    DreamDay Events & Weddings
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    One-page premium website for event planners, wedding planners, party
                    decorators and caterers. Show services, packages, gallery, reviews and
                    make booking easy via WhatsApp.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-fuchsia-400 text-slate-900 rounded-full font-medium hover:bg-fuchsia-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* SERVICES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Event Services</h2>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            title: "Wedding Planning",
                            desc: "Full wedding planning from decor to logistics.",
                        },
                        {
                            title: "Engagement & Ring Ceremony",
                            desc: "Theme-based decoration, stage, lights & entry.",
                        },
                        {
                            title: "Birthday Parties",
                            desc: "Kids & adult birthday decor, games & hosting.",
                        },
                        {
                            title: "Corporate Events",
                            desc: "Office events, inaugurations, annual functions.",
                        },
                        {
                            title: "Haldi / Mehndi Decor",
                            desc: "Traditional & modern decor for pre-wedding events.",
                        },
                        {
                            title: "Custom Theme Parties",
                            desc: "Bollywood, retro, floral, fairy lights & more.",
                        },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <h3 className="font-medium text-slate-200">{s.title}</h3>
                            <p className="text-slate-400 mt-2">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PACKAGES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Packages</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            title: "Basic Decor",
                            price: "From ₹9,999",
                            items: ["Stage decor", "Backdrop", "LED lights", "Entrance gate"],
                        },
                        {
                            title: "Premium Wedding",
                            price: "From ₹49,999",
                            highlight: true,
                            items: [
                                "Stage + Entry + Mandap",
                                "Guest sitting decor",
                                "Photo booth",
                                "Full-day coordination",
                            ],
                        },
                        {
                            title: "Birthday Special",
                            price: "From ₹6,999",
                            items: [
                                "Theme decor",
                                "Cake table setup",
                                "Balloon arch",
                                "Name board",
                            ],
                        },
                    ].map((p) => (
                        <div
                            key={p.title}
                            className={`p-5 border rounded-2xl ${p.highlight
                                    ? "border-fuchsia-400 bg-fuchsia-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <h3 className="font-medium text-slate-100">{p.title}</h3>
                            <p className="text-fuchsia-300 font-semibold mt-1">{p.price}</p>

                            <ul className="mt-3 space-y-1 text-slate-300">
                                {p.items.map((i) => (
                                    <li key={i}>• {i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Event Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Wedding Stage",
                        "Haldi Setup",
                        "Birthday Decor",
                        "Entry Gate",
                        "Lights & Flowers",
                        "Couple Photo Spot",
                    ].map((item) => (
                        <div
                            key={item}
                            className="h-24 rounded-xl bg-slate-800 flex items-center justify-center"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <p className="text-[11px] text-slate-500">
                    In the real website, we&apos;ll add your actual event photos.
                </p>
            </section>

            {/* WHY US */}
            <section className="rounded-3xl border border-fuchsia-400/50 bg-fuchsia-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">Why Choose Our Event Team?</h2>
                <ul className="text-sm text-slate-200 space-y-1">
                    <li>• Creative & customised decor ideas</li>
                    <li>• Budget-friendly plans</li>
                    <li>• Experienced team for smooth execution</li>
                    <li>• On-time work & proper coordination</li>
                    <li>• Full support from planning to final event</li>
                </ul>
            </section>

            {/* REVIEWS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Client Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Priya & Ankit",
                            text: "They made our engagement look like a dream. Loved the decor!",
                        },
                        {
                            name: "Verma Family",
                            text: "Haldi & mehndi functions were beautifully decorated.",
                        },
                        {
                            name: "Office Team",
                            text: "Our corporate annual event was handled very professionally.",
                        },
                    ].map((m) => (
                        <div
                            key={m.name}
                            className="border border-slate-800 p-4 rounded-2xl bg-slate-900/40"
                        >
                            <p>&ldquo;{m.text}&rdquo;</p>
                            <p className="text-[11px] text-slate-400 mt-2">— {m.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LOCATION + BOOKING */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Main City Area, Sample City</li>
                        <li>🕒 10 AM – 8 PM (All days)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Plan Your Event</h2>

                    <p className="text-sm text-slate-300">
                        Tap below and send your event type + date + location. We will share
                        ideas & estimated budget.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-fuchsia-400 text-slate-900 rounded-full font-medium hover:bg-fuchsia-300"
                    >
                        WhatsApp for Event Planning
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-fuchsia-400/60 bg-fuchsia-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this event planner website for your business?
                </h2>

                <p className="text-sm text-slate-200">
                    I&apos;ll customize this with your event photos, packages, contact
                    details & map. Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-fuchsia-400 text-slate-900 rounded-full font-medium hover:bg-fuchsia-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-400 text-slate-900 rounded-full shadow-lg shadow-fuchsia-400/40"
            >
                🎉 Book Event
            </a>
        </main>
    );
}
