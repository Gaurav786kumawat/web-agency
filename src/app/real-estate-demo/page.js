// app/real-estate-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function RealEstateDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your Real Estate demo website. Can you build one for my property business?"
    )}`;

    return (
        <main className="space-y-12 pb-24">

            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-green-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-green-300">
                    Demo · Real Estate / Property Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    GreenLand Property Dealers
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    One-page professional website for property dealers — listing plots, homes, rooms for rent,
                    shops, land, and real estate consultancy. Fully responsive and WhatsApp-integrated.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-green-400 text-slate-900 rounded-full font-medium hover:bg-green-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* FEATURED PROPERTIES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Featured Properties</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            title: "2BHK House for Sale",
                            price: "₹14,50,000",
                            desc: "Near main road, good water supply, newly constructed.",
                        },
                        {
                            title: "Residential Plot 20x40",
                            price: "₹3,60,000",
                            highlight: true,
                            desc: "Prime location, perfect for home construction.",
                        },
                        {
                            title: "Shop for Rent",
                            price: "₹6,000 / month",
                            desc: "Main market area, high footfall.",
                        },
                    ].map((p) => (
                        <div
                            key={p.title}
                            className={`p-5 border rounded-2xl ${p.highlight
                                    ? "border-green-400 bg-green-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <div className="h-24 rounded-xl bg-slate-800 mb-3 flex items-center justify-center text-[10px] text-slate-400">
                                Property Image
                            </div>
                            <h3 className="font-medium text-slate-200">{p.title}</h3>
                            <p className="text-green-400 font-semibold mt-1">{p.price}</p>
                            <p className="text-slate-400 mt-2">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROPERTY CATEGORIES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Property Categories</h2>

                <div className="grid md:grid-cols-4 gap-6 text-sm">
                    {[
                        "Plots",
                        "Houses",
                        "Rooms for Rent",
                        "Shops / Commercial",
                        "Agriculture Land",
                        "Flats",
                        "Farmhouses",
                        "Industrial Land",
                    ].map((item) => (
                        <div
                            key={item}
                            className="p-4 border border-slate-800 rounded-xl bg-slate-900/40 text-center"
                        >
                            <p className="text-slate-300">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="rounded-3xl border border-green-400/40 bg-green-400/5 p-6 space-y-3">
                <h2 className="text-xl font-semibold">Our Real Estate Services</h2>
                <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Property buying & selling guidance</li>
                    <li>• Legal paperwork assistance</li>
                    <li>• Best market value suggestions</li>
                    <li>• Verified properties only</li>
                    <li>• Fast deal closure</li>
                </ul>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Property Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Plot",
                        "House Front",
                        "Shop",
                        "Room Interior",
                        "Farm Land",
                        "Street View",
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
                    Real images will be added based on client property listings.
                </p>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Client Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Mahesh",
                            text: "Bought a plot at the best price. Very trustworthy service!",
                        },
                        {
                            name: "Seema",
                            text: "Helped us find a rental room within 1 day.",
                        },
                        {
                            name: "Karan",
                            text: "Smooth documentation and fast deal. Highly recommended!",
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
                    <h2 className="text-2xl font-semibold">Office Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Main Market Road, Sample City</li>
                        <li>🕒 10 AM – 7 PM (Mon–Sun)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Interested in a Property?</h2>

                    <p className="text-sm text-slate-300">
                        Tap below & send the property type you need. We will send options.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-green-400 text-slate-900 rounded-full font-medium hover:bg-green-300"
                    >
                        WhatsApp Inquiry
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-green-400/60 bg-green-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this Real Estate website for your business?
                </h2>

                <p className="text-sm text-slate-200">
                    I’ll customize this with your property images, prices, map location &
                    contact. Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-green-400 text-slate-900 rounded-full font-medium hover:bg-green-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-green-400 text-slate-900 rounded-full shadow-lg shadow-green-400/40"
            >
                🏡 Inquiry
            </a>
        </main>
    );
}
