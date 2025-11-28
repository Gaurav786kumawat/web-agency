"use client";

export default function KiranaShopDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20kirana%20/%20general%20store%20business";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-lime-400 via-emerald-500 to-amber-400 flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-500/30">
                            KG
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Kirana & General Store
                            </p>
                            <p className="text-xs text-slate-400">
                                Daily Grocery • Ration • Household Essentials
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-lime-300">
                            Items
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-lime-300">
                            Monthly Packs
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-lime-300">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-lime-300">
                            Location
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 shadow-sm hover:bg-emerald-500/20 transition"
                        >
                            WhatsApp Order
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-emerald-500/25 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-lime-500/15 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-emerald-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Kirana / General Store Demo • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Daily Ration &{" "}
                                <span className="text-lime-300">Home Essentials</span> at One
                                Place in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                One-page website layout for{" "}
                                <span className="font-semibold text-emerald-100">
                                    kirana shops, general stores, mini supermarkets, and ration
                                    shops
                                </span>{" "}
                                in Danta, Sikar and nearby villages. Perfect for showing items,
                                offers and WhatsApp orders.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
                                >
                                    Send Your Grocery List on WhatsApp
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-lime-300 hover:text-lime-200 transition"
                                >
                                    View Available Items
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-lime-300">
                                        7 AM–10 PM
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Open all 7 days (demo)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-lime-300">
                                        Home
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Delivery available (area-wise)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-lime-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Customer trust (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-emerald-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-emerald-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-emerald-100 uppercase mb-2">
                                    Daily Needs Under One Roof (Demo)
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Grocery & Ration
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Atta, Maida, Suji</li>
                                            <li>• Rice, Dal, Pulses</li>
                                            <li>• Oil, Ghee, Masala</li>
                                            <li>• Sugar, Tea, Coffee</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Home & Daily Use
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Biscuits, Namkeen, Snacks</li>
                                            <li>• Soap, Shampoo, Detergent</li>
                                            <li>• Floor & toilet cleaners</li>
                                            <li>• Dairy & bakery (demo)</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *Replace these sample items with{" "}
                                    <span className="text-slate-200">your real product list</span>{" "}
                                    and brands.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Monthly ration packing
                                    <br />
                                    ✓ Bulk orders for functions
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Online / WhatsApp order
                                    <br />
                                    ✓ Cash / UPI payment support
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Items / Services Section */}
                <section id="services" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                What You Get at Our Kirana Store
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Use this section to show{" "}
                                <span className="text-slate-200 font-medium">
                                    main categories of items
                                </span>{" "}
                                available in your shop.
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Daily Ration • Snacks • Household • Personal Care
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "Grocery & Ration Items",
                                desc: "All basic kitchen and monthly ration items for home and small dhabas.",
                                points: [
                                    "Atta, rice, dal, pulses, chana",
                                    "Sugar, salt, masala packets",
                                    "Poha, suji, besan, vermicelli",
                                ],
                            },
                            {
                                title: "Oil, Ghee & Masala",
                                desc: "Branded and local oils, ghee and spices for everyday cooking.",
                                points: [
                                    "Mustard, refined & groundnut oil",
                                    "Ghee, vanaspati (demo)",
                                    "Haldi, mirchi, dhania, garam masala",
                                ],
                            },
                            {
                                title: "Snacks, Biscuits & Namkeen",
                                desc: "For tea-time and kids – biscuits, chips, chocolates and namkeen.",
                                points: [
                                    "Branded biscuits & cookies",
                                    "Chips, kurkure, wafers",
                                    "Local namkeen & mixture",
                                ],
                            },
                            {
                                title: "Personal Care & Cosmetics",
                                desc: "All daily use personal care items for family members.",
                                points: [
                                    "Bath & washing soaps, shampoos",
                                    "Toothpaste, brush, powders",
                                    "Cream, oil, combs and more",
                                ],
                            },
                            {
                                title: "Cleaning & Household",
                                desc: "Keep home clean with detergents and cleaning products.",
                                points: [
                                    "Detergent powder & bars",
                                    "Floor & toilet cleaners",
                                    "Phenyl, room freshners, etc.",
                                ],
                            },
                            {
                                title: "Dairy & Cold Items (Demo)",
                                desc: "Add if you keep dairy or fridge items in your shop.",
                                points: [
                                    "Milk & curd (brand-wise)",
                                    "Paneer, butter (if available)",
                                    "Cold drinks & packaged juice",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col gap-2"
                            >
                                <h3 className="text-sm font-semibold text-slate-50">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                                <ul className="mt-1 space-y-1 text-xs text-slate-300">
                                    {item.points.map((p) => (
                                        <li key={p}>• {p}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Packages / Monthly Ration Packs */}
                <section id="packages" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Sample Monthly Ration Packs (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show ready-made{" "}
                                <span className="text-slate-200 font-medium">
                                    family ration packs
                                </span>{" "}
                                so customers can easily book for 1 month in one go.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *All quantities & prices are{" "}
                            <span className="text-slate-300">demo examples</span>.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Small Family Pack */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                2–3 Member Family
                            </p>
                            <h3 className="text-sm font-semibold">Basic Monthly Pack</h3>
                            <p className="text-xs text-slate-400">
                                For a small family with basic daily usage.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                Around ₹2,500–₹3,500
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Atta: 10 kg • Rice: 5 kg</li>
                                <li>• Dal / Pulses: 3–4 kg mix</li>
                                <li>• Oil: 3–4 litres • Sugar: 2 kg</li>
                                <li>• Tea, masala & basic items</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition"
                            >
                                Customise This Pack on WhatsApp
                            </a>
                        </div>

                        {/* Popular Family Pack */}
                        <div className="relative rounded-3xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-emerald-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-emerald-500/80 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-100">
                                Most Popular
                            </div>
                            <p className="inline-flex items-center rounded-full border border-emerald-500/50 bg-black/40 px-3 py-1 text-[11px] text-emerald-100 w-fit">
                                4–6 Member Family
                            </p>
                            <h3 className="text-sm font-semibold text-emerald-50">
                                Standard Monthly Pack
                            </h3>
                            <p className="text-xs text-emerald-50/85">
                                Ideal for a typical joint family with regular usage.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                Around ₹4,000–₹5,500
                            </p>
                            <ul className="space-y-1 text-xs text-emerald-50/90">
                                <li>• Atta: 20 kg • Rice: 10 kg</li>
                                <li>• Dal / Pulses: 6–8 kg mix</li>
                                <li>• Oil: 5–6 litres • Sugar: 3–4 kg</li>
                                <li>• Extra snacks / biscuits (demo)</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300 transition"
                            >
                                Book Standard Pack on WhatsApp
                            </a>
                        </div>

                        {/* Custom / Bulk Pack */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Big Family / Functions
                            </p>
                            <h3 className="text-sm font-semibold">Custom / Bulk Pack</h3>
                            <p className="text-xs text-slate-400">
                                For big families, events, dhabas, and small canteens.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                Custom Quote
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Bulk atta, rice, dal & oil</li>
                                <li>• Function-based ration lists</li>
                                <li>• Delivery & unloading support (demo)</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition"
                            >
                                Discuss Bulk Order on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Shop & Product Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these placeholder boxes with{" "}
                                <span className="text-slate-200 font-medium">
                                    photos of your kirana shop, shelves and product displays
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Clean, bright photos build trust
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Shop Front & Name Board",
                            "Inside View of Racks & Shelves",
                            "Grain, Flour & Rice Section",
                            "Oil, Ghee & Masala Corner",
                            "Snacks, Biscuits & Cold Drinks",
                            "Billing Counter & Cash Desk",
                        ].map((label) => (
                            <div
                                key={label}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-emerald-400/70 group-hover:text-emerald-200/80 transition">
                                    Image Here
                                </div>
                                <p className="text-[11px] font-medium text-slate-200">
                                    {label}
                                </p>
                                <p className="text-[10px] text-slate-500">
                                    Short description about this shop / rack photo.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews / Testimonials */}
                <section className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Regular Customer Feedback
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show real reviews from{" "}
                                <span className="text-slate-200 font-medium">
                                    families and customers who buy monthly ration from you
                                </span>
                                .
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: You can also add{" "}
                            <span className="text-slate-300">Google review screenshots</span>{" "}
                            below these cards.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Sharma Family",
                                tag: "Monthly Ration Customer",
                                text: "We take our full month ration from here. Rates are proper, items are fresh and they also help in making the list. Very helpful behaviour.",
                            },
                            {
                                name: "Meena General Store (Village)",
                                tag: "Bulk Supply",
                                text: "We buy bulk items for our small village shop. Packing and loading is done properly, and they always inform when new stock comes.",
                            },
                            {
                                name: "Priya & Rohan",
                                tag: "Daily Grocery & Snacks",
                                text: "For daily milk, bread and snacks we always visit here. UPI payment and quick service saves a lot of time.",
                            },
                        ].map((review) => (
                            <div
                                key={review.name}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col h-full"
                            >
                                <div className="flex items-center justify-between gap-3 mb-2">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-50">
                                            {review.name}
                                        </p>
                                        <p className="text-[11px] text-slate-400">{review.tag}</p>
                                    </div>
                                    <div className="text-[11px] text-emerald-300 font-semibold">
                                        ★★★★★
                                    </div>
                                </div>
                                <p className="text-xs text-slate-300 flex-1">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Location & Timing */}
                <section id="contact" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Shop Location, Delivery Area & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Make it easy for customers to know{" "}
                                <span className="text-slate-200 font-medium">
                                    where your shop is and where you deliver
                                </span>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                            <div>
                                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                    Shop Address
                                </p>
                                <p className="text-xs text-slate-200">
                                    Demo Danta Kirana & General Store,
                                    <br />
                                    Near Main Market / Bus Stand,
                                    <br />
                                    Danta, Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Delivery Area
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta town & colonies</li>
                                        <li>• Nearby villages (on request)</li>
                                        <li>• Minimum order for delivery</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Shop Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sun: 7:00 AM – 10:00 PM</li>
                                        <li>Lunch break: 1:30 PM – 2:30 PM</li>
                                        <li>Festival timing: As per notice</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-emerald-300 hover:text-emerald-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.kirana@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace these demo details with your{" "}
                                <span className="text-slate-300">real contact, area & timing</span>.
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col gap-3">
                            <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                                Google Maps Location
                            </p>
                            <div className="flex-1 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-xs text-slate-500">
                                Google Maps embed here
                            </div>
                            <p className="text-[11px] text-slate-500">
                                In the live website, this box will show your{" "}
                                <span className="text-slate-300">exact shop location</span> so
                                customers can easily reach using Google Maps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-emerald-500/60 bg-gradient-to-r from-emerald-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-emerald-100 uppercase tracking-wide">
                                For Kirana & General Store Owners
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-emerald-50">
                                Want this kind of website for your kirana shop?
                            </h2>
                            <p className="text-sm text-emerald-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page kirana website
                                </span>{" "}
                                that shows your items, monthly packs, photos, reviews and{" "}
                                <span className="font-semibold">
                                    lets customers send their list on WhatsApp.
                                </span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-emerald-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Built with Next.js – fast & smooth</li>
                                <li>• Perfect for Danta / Sikar local customers</li>
                                <li>• Easy to share on WhatsApp status & Instagram</li>
                                <li>• Future updates for offers & festival deals</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-emerald-100/80 md:text-right">
                                Send your{" "}
                                <span className="font-semibold">
                                    shop name, location & item categories
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo kirana / general store website layout created by{" "}
                        <span className="text-slate-300 font-medium">
                            Gaurav Kumawat (AI-assisted web developer)
                        </span>{" "}
                        for local businesses in Danta & Sikar.
                    </p>
                </section>
            </main>

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 p-3 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
            >
                <span className="sr-only">Chat on WhatsApp</span>
                {/* Simple WhatsApp Icon */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="h-6 w-6 fill-slate-950"
                >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.64.879 5.08 2.382 7.07L4 29l7.17-2.348A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-4.871-1.295l-.348-.2-4.246 1.39 1.395-4.137-.226-.338A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10Zm5.01 6.995c-.261-.131-1.542-.758-1.781-.843-.239-.087-.413-.13-.588.13-.174.261-.675.843-.827 1.016-.151.174-.304.195-.565.065-.261-.131-1.103-.407-2.102-1.297-.777-.693-1.301-1.548-1.454-1.808-.151-.261-.016-.402.115-.532.118-.117.261-.304.391-.456.13-.152.174-.261.261-.435.087-.174.043-.326-.022-.456-.065-.13-.588-1.421-.806-1.947-.213-.512-.431-.442-.588-.451l-.5-.009c-.174 0-.456.065-.694.326-.239.261-.913.891-.913 2.174 0 1.283.935 2.52 1.065 2.694.13.174 1.84 2.809 4.46 3.937.624.27 1.111.432 1.49.554.626.199 1.196.171 1.647.104.502-.075 1.542-.63 1.76-1.238.217-.608.217-1.129.152-1.238-.065-.108-.239-.174-.5-.304Z" />
                </svg>
            </a>
        </div>
    );
}
