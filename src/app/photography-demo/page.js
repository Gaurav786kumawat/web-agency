// app/photography-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function PhotographyDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your Photography Studio demo. Can you build this for my studio?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-purple-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
                    Demo · Photography / Studio Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    LensCraft Photography Studio
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    Professional photography website for weddings, pre-weddings, events,
                    portraits, baby shoots, and cinematic videos. Clean, modern & fully responsive.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-purple-400 text-slate-900 rounded-full font-medium hover:bg-purple-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* SERVICES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Photography Services</h2>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            title: "Wedding Photography",
                            desc: "Full day wedding coverage with album & highlight video.",
                        },
                        {
                            title: "Pre-Wedding Shoot",
                            desc: "Outdoor cinematic photoshoot with creative concepts.",
                        },
                        {
                            title: "Birthday / Event Shoot",
                            desc: "Candid and traditional photography for events.",
                        },
                        {
                            title: "Baby / Kids Shoot",
                            desc: "Cute baby/kids themed photoshoots with props.",
                        },
                        {
                            title: "Portrait Photography",
                            desc: "Studio portraits for portfolio & modelling.",
                        },
                        {
                            title: "Product Shoot",
                            desc: "High-quality images for businesses & catalogs.",
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
                            title: "Basic Shoot",
                            price: "₹2,999",
                            items: ["1 Location", "20 Edited Photos", "1 Hour Shoot"],
                        },
                        {
                            title: "Premium Shoot",
                            price: "₹7,999",
                            highlight: true,
                            items: [
                                "2 Locations",
                                "50 Edited Photos",
                                "4K Video Shoot",
                                "Outfit Support",
                            ],
                        },
                        {
                            title: "Wedding Package",
                            price: "₹24,999",
                            items: [
                                "Full Day Coverage",
                                "Cinematic Highlights",
                                "Album Included",
                                "Drone Shots (Optional)",
                            ],
                        },
                    ].map((p) => (
                        <div
                            key={p.title}
                            className={`p-5 border rounded-2xl ${p.highlight
                                    ? "border-purple-400 bg-purple-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <h3 className="font-medium text-slate-100">{p.title}</h3>
                            <p className="text-purple-400 font-semibold mt-1">{p.price}</p>

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
                <h2 className="text-2xl font-semibold">Photo Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Wedding",
                        "Pre-Wedding",
                        "Portrait",
                        "Baby Shoot",
                        "Event Shoot",
                        "Product Shoot",
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
                    Real studio photos will be added for your business.
                </p>
            </section>

            {/* VIDEOGRAPHY SECTION */}
            <section className="rounded-3xl border border-purple-400/40 bg-purple-400/5 p-6 space-y-3">
                <h2 className="text-xl font-semibold">Cinematic Videography</h2>
                <p className="text-sm text-slate-300">
                    We create cinematic films for weddings, events, and pre-weddings with
                    drone support, slow-mo shots & storytelling.
                </p>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Client Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Aarav",
                            text: "Amazing pre-wedding shoot. Editing and colors were top-notch!",
                        },
                        {
                            name: "Meera",
                            text: "Loved the wedding album. Quality is excellent!",
                        },
                        {
                            name: "Kunal",
                            text: "Best photographer in the area. Highly recommended!",
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

            {/* LOCATION */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Studio Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Near Main Market, Sample City</li>
                        <li>🕒 9 AM – 8 PM (All days)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Book a Shoot</h2>

                    <p className="text-sm text-slate-300">
                        Tap below & send your shoot type + date. We'll confirm availability.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-purple-400 text-slate-900 rounded-full font-medium hover:bg-purple-300"
                    >
                        WhatsApp Booking
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-purple-400/60 bg-purple-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this photography website for your studio?
                </h2>

                <p className="text-sm text-slate-200">
                    I’ll customize this with your best photos, gallery, prices & contact.
                    Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-purple-400 text-slate-900 rounded-full font-medium hover:bg-purple-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-purple-400 text-slate-900 rounded-full shadow-lg shadow-purple-400/40"
            >
                📸 Book Shoot
            </a>
        </main>
    );
}
