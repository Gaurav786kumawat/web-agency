"use client";

export default function CarBazaarDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20used%20car%20%2F%20car%20bazaar%20business";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-400 to-sky-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-orange-500/30">
                            CB
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Car Bazaar
                            </p>
                            <p className="text-xs text-slate-400">
                                Verified Used Cars • Buy • Sell • Exchange
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-orange-400">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-orange-400">
                            Listing Plans
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-orange-400">
                            Inventory
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-orange-400">
                            Location
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-orange-500/70 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-100 shadow-sm hover:bg-orange-500/20 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-orange-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-orange-500/25 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-orange-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Car Bazaar Demo Website • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Verified Used Cars{" "}
                                <span className="text-orange-300">Buy • Sell • Exchange</span>{" "}
                                in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                One-page website layout for{" "}
                                <span className="font-semibold text-orange-100">
                                    used car dealers, car bazaar owners, second-hand car sellers
                                    and small showrooms
                                </span>{" "}
                                in Danta, Sikar and nearby areas.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:bg-orange-400 transition"
                                >
                                    List Your Car via WhatsApp
                                </a>
                                <a
                                    href="#gallery"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-orange-400 hover:text-orange-200 transition"
                                >
                                    View Demo Inventory
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-orange-300">
                                        100+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Cars sold (demo count)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-orange-300">
                                        12–60
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Months finance support
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-orange-300">
                                        4.8★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Customer rating (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-orange-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-orange-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-orange-100 uppercase mb-2">
                                    Sample Featured Car (Demo Listing)
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            2018 Maruti Swift VXI
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Petrol • Manual</li>
                                            <li>• 42,000 km driven</li>
                                            <li>• Second Owner</li>
                                            <li>• Full insurance valid</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Deal Highlights
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• No accidental history (claimed)</li>
                                            <li>• Test drive available</li>
                                            <li>• Easy finance possible</li>
                                            <li>• RC & RTO support</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm font-semibold text-orange-300">
                                    ₹5,10,000
                                    <span className="ml-1 text-[11px] font-normal text-orange-100/80">
                                        (Negotiable)
                                    </span>
                                </p>
                                <p className="mt-1 text-[11px] text-slate-400">
                                    *You can replace this with{" "}
                                    <span className="text-slate-200">actual featured cars</span>{" "}
                                    from your stock.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Buy & sell used cars
                                    <br />
                                    ✓ Old car exchange offers
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Finance & loan assistance
                                    <br />
                                    ✓ RC & RTO paperwork support
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Car Bazaar Services
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Clearly show how you help customers to{" "}
                                <span className="text-slate-200 font-medium">
                                    buy, sell, finance and transfer ownership
                                </span>{" "}
                                of used cars.
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Hatchback • Sedan • SUV • Commercial
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "Buy Verified Used Cars",
                                desc: "Wide range of well-maintained cars to choose from as per your budget and need.",
                                points: [
                                    "Multi-brand used cars",
                                    "Test drive option available",
                                    "Basic mechanical check (demo)",
                                ],
                            },
                            {
                                title: "Sell Your Old Car",
                                desc: "Get your car inspected and receive a fair market price quote with quick deal closure.",
                                points: [
                                    "Free basic car evaluation",
                                    "Instant quote & negotiation",
                                    "Payment & paperwork support",
                                ],
                            },
                            {
                                title: "Car Exchange Offers",
                                desc: "Upgrade your old car by exchanging it with a better model from our stock.",
                                points: [
                                    "Exchange old car for different brand",
                                    "Adjust price difference easily",
                                    "Faster upgrade process",
                                ],
                            },
                            {
                                title: "Finance & Loan Assistance",
                                desc: "Help in arranging car finance through partnered banks / NBFCs.",
                                points: [
                                    "Up to 80–90% funding (depends on profile)",
                                    "12–60 month flexible EMI options",
                                    "Document & application guidance",
                                ],
                            },
                            {
                                title: "RTO & RC Transfer Work",
                                desc: "End-to-end support for name transfer and RTO related formalities.",
                                points: [
                                    "Ownership transfer support",
                                    "Insurance transfer assistance",
                                    "Re-registration guidance",
                                ],
                            },
                            {
                                title: "Car Inspection & Guidance",
                                desc: "Help first-time buyers understand car condition before finalizing.",
                                points: [
                                    "Basic physical inspection (demo)",
                                    "Service & repair history (if available)",
                                    "Fair guidance for decision",
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

                {/* Packages / Pricing / Listing Plans */}
                <section id="packages" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Sample Dealer Plans & Commission (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                You can use this space to show{" "}
                                <span className="text-slate-200 font-medium">
                                    car seller commission, listing charges or service fees
                                </span>{" "}
                                in a simple way.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *All prices & percentages shown are just{" "}
                            <span className="text-slate-300">demo values</span>.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Direct Seller */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                For Individual Sellers
                            </p>
                            <h3 className="text-sm font-semibold">Direct Sale Assistance</h3>
                            <p className="text-xs text-slate-400">
                                For people who want to sell their own car through our bazaar.
                            </p>
                            <p className="text-2xl font-semibold text-orange-300">
                                1–2%
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    of deal value
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Basic inspection & photoshoot</li>
                                <li>• Listing display at yard</li>
                                <li>• Buyer negotiation support</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-orange-400 hover:text-orange-200 transition"
                            >
                                Check Commission for Your Car
                            </a>
                        </div>

                        {/* Dealer / Bazaar Plan */}
                        <div className="relative rounded-3xl border border-orange-500/70 bg-gradient-to-br from-orange-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-orange-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-orange-500/80 bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-50">
                                Most Used
                            </div>
                            <p className="inline-flex items-center rounded-full border border-orange-500/50 bg-black/40 px-3 py-1 text-[11px] text-orange-100 w-fit">
                                Standard Dealer Margin
                            </p>
                            <h3 className="text-sm font-semibold text-orange-50">
                                Buy & Resell Margin
                            </h3>
                            <p className="text-xs text-orange-50/85">
                                For car bazaar owners who buy cars and re-sell with margin.
                            </p>
                            <p className="text-2xl font-semibold text-orange-300">
                                Flexible
                                <span className="text-xs font-normal text-orange-100/80">
                                    {" "}
                                    as per deal
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-orange-50/90">
                                <li>• Margin based on car condition & demand</li>
                                <li>• Option to show “price negotiable”</li>
                                <li>• Finance & RTO support available</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-orange-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-orange-300 transition"
                            >
                                Discuss Dealer Margins
                            </a>
                        </div>

                        {/* Online Listing */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                For Showroom Owners
                            </p>
                            <h3 className="text-sm font-semibold">Online Listing Package</h3>
                            <p className="text-xs text-slate-400">
                                Show selected cars on your website as “Featured Stock”.
                            </p>
                            <p className="text-2xl font-semibold text-orange-300">
                                Custom
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Add up to 10–30 car listings</li>
                                <li>• Photos, details & price display</li>
                                <li>• Direct WhatsApp enquiry buttons</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-orange-400 hover:text-orange-200 transition"
                            >
                                Get Website Listing Plan
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery / Inventory Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Demo Inventory / Car Gallery
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these cards with your{" "}
                                <span className="text-slate-200 font-medium">
                                    real car stock photos, model details, and prices
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Show 6–12 best cars on homepage
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                title: "2017 Hyundai i20 Sportz",
                                meta: "Petrol • Manual • 58,000 km",
                                price: "₹5,40,000",
                                tag: "Single Owner • Service Record",
                            },
                            {
                                title: "2016 Maruti Baleno Zeta",
                                meta: "Diesel • Manual • 72,000 km",
                                price: "₹6,10,000",
                                tag: "Top Model • New Tyres",
                            },
                            {
                                title: "2019 Tata Tiago XZ",
                                meta: "Petrol • AMT • 31,000 km",
                                price: "₹5,25,000",
                                tag: "Low Running • Touchscreen",
                            },
                            {
                                title: "2015 Honda City SV",
                                meta: "Diesel • Manual • 85,000 km",
                                price: "₹6,75,000",
                                tag: "Family Car • Good Condition",
                            },
                            {
                                title: "2018 Maruti WagonR VXI",
                                meta: "Petrol • Manual • 49,000 km",
                                price: "₹4,10,000",
                                tag: "Ideal City Car • CNG Possible",
                            },
                            {
                                title: "2014 Mahindra Bolero",
                                meta: "Diesel • Manual • 1,10,000 km",
                                price: "₹5,90,000",
                                tag: "Rural Use • Strong Body",
                            },
                        ].map((car) => (
                            <div
                                key={car.title}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-orange-400/70 group-hover:text-orange-200/80 transition">
                                    Car Image Here
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-[11px] font-semibold text-slate-200">
                                        {car.title}
                                    </p>
                                    <p className="text-[11px] font-semibold text-orange-300">
                                        {car.price}
                                    </p>
                                </div>
                                <p className="text-[11px] text-slate-400">{car.meta}</p>
                                <p className="text-[10px] text-slate-500">{car.tag}</p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-orange-400 hover:text-orange-200 transition"
                                >
                                    Enquire on WhatsApp
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews / Testimonials */}
                <section className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Customer Reviews & Stories
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show real feedback from{" "}
                                <span className="text-slate-200 font-medium">
                                    buyers and sellers who had a good experience at your car bazaar
                                </span>
                                .
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: You can also embed{" "}
                            <span className="text-slate-300">Google / Facebook reviews</span>{" "}
                            here.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Sanjeev Meena",
                                tag: "Bought Hyundai i20",
                                text: "Very good experience in buying my first car. They explained all options in my budget and allowed test drive. Paperwork and RC transfer was handled smoothly.",
                            },
                            {
                                name: "Ritu & Mahesh Sharma",
                                tag: "Upgraded Family Car",
                                text: "We exchanged our old car with a bigger family car. The deal was transparent and we got decent price for our old car. Finance process was also guided properly.",
                            },
                            {
                                name: "Rohit Traders",
                                tag: "Business Travel Car",
                                text: "Needed a car for business visits. They helped shortlisting 3–4 options and suggested the best one as per running and maintenance. Happy with the purchase.",
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
                                    <div className="text-[11px] text-orange-300 font-semibold">
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
                                Yard Location, Service Area & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Tell customers clearly{" "}
                                <span className="text-slate-200 font-medium">
                                    where your car bazaar is located and when they can visit
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
                                    Car Bazaar Address
                                </p>
                                <p className="text-xs text-slate-200">
                                    Demo Danta Car Bazaar,
                                    <br />
                                    Near Bus Stand / Highway,
                                    <br />
                                    Danta, Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Customers We Serve
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta town & villages</li>
                                        <li>• Sikar city & nearby</li>
                                        <li>• Outstation buyers on request</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Working Hours
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sun: 10:00 AM – 8:00 PM</li>
                                        <li>Test drive by appointment</li>
                                        <li>Closed on major festivals</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-orange-300 hover:text-orange-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.carbazaar@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace these demo details with your{" "}
                                <span className="text-slate-300">real phone, email & address</span>.
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
                                <span className="text-slate-300">exact yard / showroom location</span>{" "}
                                so buyers can easily visit for test drive and car inspection.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-orange-500/60 bg-gradient-to-r from-orange-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-orange-100 uppercase tracking-wide">
                                For Car Bazaar Owners & Used Car Dealers
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-orange-50">
                                Want this kind of website for your used car business?
                            </h2>
                            <p className="text-sm text-orange-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page car bazaar website
                                </span>{" "}
                                that shows your stock, services, reviews and lets buyers{" "}
                                <span className="font-semibold">contact you directly on WhatsApp.</span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-orange-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Next.js website – fast & lightweight</li>
                                <li>• Mobile friendly – works on all phones</li>
                                <li>• Car listing cards & enquiry buttons</li>
                                <li>• Perfect to share on Instagram & WhatsApp</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-orange-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:bg-orange-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-orange-100/80 md:text-right">
                                Send your{" "}
                                <span className="font-semibold">
                                    yard name, location & business details
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded car bazaar website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo used car / car bazaar website layout created by{" "}
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
