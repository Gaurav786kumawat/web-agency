// app/cafe-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function CafeDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your Cafe/Bakery demo website. Can you build one like this for my shop?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-amber-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    Demo · Cafe / Bakery Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    Brew & Bite Café
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    Modern one-page website for cafes, bakeries, tea shops and snack
                    corners. Show your menu, combos, photos, reviews and location with
                    easy WhatsApp orders.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-amber-400 text-slate-900 rounded-full font-medium hover:bg-amber-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* MENU / SPECIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Today&apos;s Specials</h2>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            name: "Masala Tea",
                            price: "₹20",
                            desc: "Strong & refreshing masala chai.",
                        },
                        {
                            name: "Cold Coffee",
                            price: "₹80",
                            desc: "Classic chilled coffee with ice cream.",
                        },
                        {
                            name: "Veg Cheese Sandwich",
                            price: "₹70",
                            desc: "Toasted bread with veggies & cheese.",
                        },
                        {
                            name: "Paneer Puff",
                            price: "₹35",
                            desc: "Crispy puff with paneer masala filling.",
                        },
                        {
                            name: "Chocolate Pastry",
                            price: "₹60",
                            desc: "Soft pastry with rich chocolate cream.",
                        },
                        {
                            name: "Cheese Garlic Bread",
                            price: "₹90",
                            desc: "Cheesy garlic bread with herbs.",
                        },
                    ].map((i) => (
                        <div
                            key={i.name}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40 flex items-center justify-between gap-3"
                        >
                            <div>
                                <h3 className="font-medium text-slate-200">{i.name}</h3>
                                <p className="text-slate-400 mt-1">{i.desc}</p>
                            </div>
                            <span className="text-amber-300 text-sm font-semibold">
                                {i.price}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMBOS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Popular Combos</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            title: "Chai + Bun Maska",
                            price: "₹40",
                            detail: "Perfect evening combo.",
                        },
                        {
                            title: "Cold Coffee + Sandwich",
                            price: "₹140",
                            detail: "Best for friends hangout.",
                            highlight: true,
                        },
                        {
                            title: "Pastry + Hot Coffee",
                            price: "₹110",
                            detail: "Sweet & warm combo.",
                        },
                    ].map((c) => (
                        <div
                            key={c.title}
                            className={`p-5 border rounded-2xl ${c.highlight
                                    ? "border-amber-400 bg-amber-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <h3 className="font-medium text-slate-100">{c.title}</h3>
                            <p className="text-amber-300 font-semibold mt-1">{c.price}</p>
                            <p className="text-slate-300 mt-2">{c.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cafe Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Cafe Front",
                        "Seating Area",
                        "Counter",
                        "Tea & Coffee",
                        "Snacks",
                        "Night View",
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
                    Your real shop photos will be used in the final website.
                </p>
            </section>

            {/* WHY PEOPLE LOVE US */}
            <section className="rounded-3xl border border-amber-400/50 bg-amber-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">Why Customers Love This Café</h2>
                <ul className="text-sm text-slate-200 space-y-1">
                    <li>• Fresh food & consistent taste</li>
                    <li>• Clean & cozy sitting area</li>
                    <li>• Fast service</li>
                    <li>• Affordable pricing</li>
                    <li>• Perfect for friends & family hangout</li>
                </ul>
            </section>

            {/* REVIEWS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Customer Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Ravi",
                            text: "Best chai spot in the area. I come here daily!",
                        },
                        {
                            name: "Simran",
                            text: "Loved the cold coffee & vibes of this cafe.",
                        },
                        {
                            name: "Manish",
                            text: "Perfect place for evening snacks with friends.",
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

            {/* LOCATION + ORDER */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Main Market Road, Sample City</li>
                        <li>🕒 9 AM – 11 PM (All days)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Order / Table Booking</h2>

                    <p className="text-sm text-slate-300">
                        Tap below & send your order / booking detail on WhatsApp. We&apos;ll
                        confirm quickly.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-amber-400 text-slate-900 rounded-full font-medium hover:bg-amber-300"
                    >
                        Order on WhatsApp
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-amber-400/60 bg-amber-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this website for your cafe or bakery?
                </h2>

                <p className="text-sm text-slate-200">
                    I’ll customize this design with your menu, prices, photos & map.
                    Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-amber-400 text-slate-900 rounded-full font-medium hover:bg-amber-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-full shadow-lg shadow-amber-400/40"
            >
                ☕ Order Now
            </a>
        </main>
    );
}
