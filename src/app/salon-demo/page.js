// app/salon-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function SalonDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw the salon demo website. Can you make one for my business?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
                    Demo · Beauty Salon Website
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    GlamShine Beauty Studio
                </h1>
                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    A modern one-page website for salons: services list, pricing, gallery,
                    testimonials & WhatsApp appointments. Your actual salon website will
                    look exactly like this.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={wa}
                        target="_blank"
                        className="px-6 py-3 bg-pink-500 text-slate-900 rounded-full font-medium hover:bg-pink-400"
                    >
                        Get a similar website
                    </a>
                </div>
            </section>

            {/* SERVICES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Salon Services</h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            name: "Haircut & Styling",
                            price: "₹299 – ₹499",
                            desc: "Trendy haircuts for men & women with expert stylists.",
                        },
                        {
                            name: "Facial & Cleanup",
                            price: "₹399 – ₹999",
                            desc: "Fruit facial, glow facial, whitening facial & more.",
                        },
                        {
                            name: "Manicure & Pedicure",
                            price: "₹299 – ₹899",
                            desc: "Relaxing manicure & pedicure with premium products.",
                        },
                        {
                            name: "Skin Treatment",
                            price: "₹699 – ₹1599",
                            desc: "Anti-tan, anti-acne & skin-glow treatment.",
                        },
                        {
                            name: "Makeup (Party / Bridal)",
                            price: "₹999 – ₹6999",
                            desc: "HD makeup, engagement makeup, bridal packages.",
                        },
                        {
                            name: "Hair Spa & Smoothening",
                            price: "₹399 – ₹4999",
                            desc: "Keratin, smoothening & hair spa services.",
                        },
                    ].map((s) => (
                        <div
                            key={s.name}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium text-slate-200">{s.name}</h3>
                                <span className="text-pink-400 text-xs">{s.price}</span>
                            </div>
                            <p className="text-slate-400 mt-2">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="rounded-3xl border border-slate-800 p-6 space-y-4 bg-slate-900/40">
                <h2 className="text-2xl font-semibold">Why GlamShine?</h2>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Experienced beauty experts</li>
                    <li>• Premium products only</li>
                    <li>• Clean, hygienic environment</li>
                    <li>• Same-day appointments</li>
                    <li>• Affordable packages</li>
                </ul>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Salon Gallery</h2>
                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Salon Front View",
                        "Haircut Area",
                        "Makeup Room",
                        "Facial Room",
                        "Nail Art",
                        "Hair Spa Zone",
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
                    Your actual website will use your real salon photos.
                </p>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Ritika Sharma",
                            text: "Loved the facial & haircut. Clean place and good behaviour.",
                        },
                        {
                            name: "Preeti K.",
                            text: "Affordable, fast and high-quality services. Highly recommended!",
                        },
                        {
                            name: "Ananya",
                            text: "The makeup was perfect for my event. Amazing experience!",
                        },
                    ].map((t) => (
                        <div
                            key={t.name}
                            className="border border-slate-800 p-4 rounded-2xl bg-slate-900/40"
                        >
                            <p>&ldquo;{t.text}&rdquo;</p>
                            <p className="text-[11px] text-slate-400 mt-2">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* LOCATION */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Location</h2>
                    <p className="text-sm text-slate-300">
                        Easy to find & book. Google Maps support can be added for your
                        salon.
                    </p>
                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps embed here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Main Market Road, Sample City</li>
                        <li>🕒 10 AM – 8 PM (All days)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Book an Appointment</h2>
                    <p className="text-sm text-slate-300">
                        Tap below and send your name + service. We'll confirm your booking.
                    </p>
                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-slate-900 rounded-full font-medium hover:bg-pink-400"
                    >
                        Book on WhatsApp
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-pink-500/50 bg-pink-500/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want a similar salon website for your business?
                </h2>
                <p className="text-sm text-slate-200">
                    I’ll customize this design with your name, photos, services & prices.
                    Delivery within 24–48 hours.
                </p>
                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-pink-500 text-slate-900 rounded-full font-medium hover:bg-pink-400"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* WhatsApp Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-slate-900 rounded-full shadow-lg shadow-pink-500/40"
            >
                💬 Appointment
            </a>
        </main>
    );
}
