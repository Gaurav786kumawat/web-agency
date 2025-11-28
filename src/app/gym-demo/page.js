// app/gym-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function GymDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw the GYM demo website. Can you create one like this for my gym?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
                    Demo · Gym / Fitness Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    IronPulse Fitness Center
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    A powerful one-page website for gyms & fitness centers. Display plans, trainers,
                    gallery, testimonials & Google Maps. Your real gym website will look exactly like this.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={wa}
                        target="_blank"
                        className="px-6 py-3 bg-yellow-400 text-slate-900 rounded-full font-medium hover:bg-yellow-300"
                    >
                        Get a similar website
                    </a>
                </div>
            </section>

            {/* PLANS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Membership Plans</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            title: "Monthly Plan",
                            price: "₹799",
                            desc: ["Gym Access", "Basic Machines", "General Trainer"],
                        },
                        {
                            title: "Quarterly Plan",
                            price: "₹2199",
                            desc: ["Gym Access", "CrossFit Area", "Personal Guidance", "Diet Chart"],
                            highlight: true,
                        },
                        {
                            title: "Annual Plan",
                            price: "₹7999",
                            desc: ["All Access", "Personal Trainer Support", "Weight Gain/Loss Plan"],
                        },
                    ].map((p) => (
                        <div
                            key={p.title}
                            className={`p-5 border rounded-2xl ${p.highlight
                                    ? "border-yellow-400 bg-yellow-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <h3 className="font-medium text-slate-100">{p.title}</h3>
                            <p className="text-yellow-400 font-semibold mt-1">{p.price}</p>

                            <ul className="mt-3 space-y-1 text-slate-300">
                                {p.desc.map((d) => (
                                    <li key={d}>• {d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRAINERS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Trainers</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        { name: "Aman Singh", role: "Strength Coach" },
                        { name: "Neha Verma", role: "Weight Loss Expert" },
                        { name: "Rohit Mehra", role: "CrossFit Trainer" },
                    ].map((t) => (
                        <div
                            key={t.name}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <div className="h-24 rounded-xl bg-slate-800 mb-3 flex items-center justify-center text-[10px] text-slate-400">
                                Trainer Photo
                            </div>
                            <h3 className="font-medium text-slate-200">{t.name}</h3>
                            <p className="text-yellow-400 text-xs">{t.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Gym Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Front View",
                        "Weight Section",
                        "Cardio Machines",
                        "CrossFit Area",
                        "Locker Room",
                        "Training Session",
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
                    Your real website will show your actual gym photos.
                </p>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Member Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Rakesh",
                            text: "Best gym in town! Trainers are really supportive.",
                        },
                        {
                            name: "Deepika",
                            text: "Clean environment and amazing workout atmosphere.",
                        },
                        {
                            name: "Karan",
                            text: "Perfect machines & weight training setup.",
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
                    <h2 className="text-2xl font-semibold">Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Near Main Market, Sample City</li>
                        <li>🕒 5 AM – 10 PM (All days)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Book Your Free Trial</h2>
                    <p className="text-sm text-slate-300">
                        Tap below and send your name + fitness goal. We will guide you.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-yellow-400 text-slate-900 rounded-full font-medium hover:bg-yellow-300"
                    >
                        Book on WhatsApp
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-yellow-400/60 bg-yellow-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this gym website for your fitness center?
                </h2>
                <p className="text-sm text-slate-200">
                    I’ll customize this design with your photos, trainers, pricing & map.
                    Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-yellow-400 text-slate-900 rounded-full font-medium hover:bg-yellow-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-full shadow-lg shadow-yellow-400/40"
            >
                💬 Join Now
            </a>
        </main>
    );
}
