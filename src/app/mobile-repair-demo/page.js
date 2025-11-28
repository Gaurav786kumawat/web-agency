"use client";

export default function MobileRepairDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20mobile%20repair%20%26%20accessories%20shop";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-cyan-500/30">
                            MR
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Mobile Care
                            </p>
                            <p className="text-xs text-slate-400">
                                Mobile Repair • Accessories • Buy & Sell
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-cyan-400">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-cyan-400">
                            Pricing
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-cyan-400">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-cyan-400">
                            Contact
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/70 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-sm hover:bg-cyan-500/20 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-cyan-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-cyan-500/25 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-cyan-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Mobile Repair Demo Website • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Fast Mobile Repair &{" "}
                                <span className="text-cyan-300">Accessories Shop</span> in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                Perfect one-page website for{" "}
                                <span className="font-semibold text-cyan-100">
                                    mobile repair shops, accessories stores, second-hand phone
                                    sellers and gadget service centres
                                </span>{" "}
                                in Danta, Sikar and nearby areas.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
                                >
                                    Book Repair via WhatsApp
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition"
                                >
                                    See All Services
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-cyan-300">
                                        30 min*
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Fast repair (basic issues)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-cyan-300">
                                        2000+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Phones repaired (demo)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-cyan-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Local rating (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-cyan-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-cyan-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-cyan-100 uppercase mb-2">
                                    Common Problems We Fix (Demo)
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Mobile Repair
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Broken display / touch</li>
                                            <li>• Battery backup issue</li>
                                            <li>• Charging / USB problem</li>
                                            <li>• Mic / speaker not working</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Software & Others
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Hanging / slow phone</li>
                                            <li>• Format / data backup</li>
                                            <li>• Network & SIM issues</li>
                                            <li>• App & update problems</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *Replace this list with{" "}
                                    <span className="text-slate-200">your real services</span>{" "}
                                    and specializations (Android / iPhone / Tablet, etc.).
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ All brands: Samsung, Vivo, Oppo
                                    <br />
                                    ✓ iPhone repair (basic demo)
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Original / good quality parts
                                    <br />
                                    ✓ Accessories & covers available
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
                                Mobile Repair & Shop Services
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show all the services your shop provides so customers know{" "}
                                <span className="text-slate-200 font-medium">
                                    exactly when to visit or WhatsApp you
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Mobile Repair • Accessories • Buy / Sell • SIM & Recharge
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "Display & Touch Replacement",
                                desc: "Broken screen, lines on display, touch not working – we replace with quality parts.",
                                points: [
                                    "Most models same-day replacement (demo)",
                                    "Basic fitting & testing included",
                                    "Glass / full display options",
                                ],
                            },
                            {
                                title: "Battery & Charging Issues",
                                desc: "Phone not charging or battery draining too fast? We diagnose and fix.",
                                points: [
                                    "Charging jack / port repair",
                                    "Original / compatible batteries",
                                    "Power IC check (if needed)",
                                ],
                            },
                            {
                                title: "Speaker, Mic & Camera",
                                desc: "Low sound, mic not working, or camera issues solved with proper checking.",
                                points: [
                                    "Speaker / mic change",
                                    "Camera focus / quality issues",
                                    "Dust cleaning for sound clarity",
                                ],
                            },
                            {
                                title: "Software & Hanging Problems",
                                desc: "Slow phone, storage full, stuck logo, or restart issues – we help format & update.",
                                points: [
                                    "Data backup (if possible)",
                                    "Software update / reinstall",
                                    "Basic app & setting support",
                                ],
                            },
                            {
                                title: "Accessories & Protection",
                                desc: "All types of covers, back case, tempered glass, chargers, earphones, cables etc.",
                                points: [
                                    "Back covers & designer cases",
                                    "Tempered glass fitting",
                                    "Chargers, cables, neckbands",
                                ],
                            },
                            {
                                title: "Buy / Sell Used Phones",
                                desc: "Buy second-hand phones or sell your old phone at a fair price (demo text).",
                                points: [
                                    "Budget friendly phones available",
                                    "Basic checking before sale",
                                    "Exchange offers on old phone",
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

                {/* Packages / Pricing */}
                <section id="packages" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Sample Pricing (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show simple and transparent pricing ranges so people get{" "}
                                <span className="text-slate-200 font-medium">
                                    basic idea before visiting
                                </span>
                                . You can change these values anytime.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *Prices vary by{" "}
                            <span className="text-slate-300">brand, model & part quality</span>.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Basic Service */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Basic Service
                            </p>
                            <h3 className="text-sm font-semibold">Minor Repair / Service</h3>
                            <p className="text-xs text-slate-400">
                                For small problems like speaker, mic, charging, or button
                                issues.
                            </p>
                            <p className="text-2xl font-semibold text-cyan-300">
                                ₹150–₹400
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    (Service)
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Basic checking & cleaning</li>
                                <li>• Small part replacement (extra)</li>
                                <li>• Quick same-day solution</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition"
                            >
                                Ask Repair Cost on WhatsApp
                            </a>
                        </div>

                        {/* Popular Display */}
                        <div className="relative rounded-3xl border border-cyan-500/70 bg-gradient-to-br from-cyan-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-cyan-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-cyan-500/80 bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-100">
                                Most Common
                            </div>
                            <p className="inline-flex items-center rounded-full border border-cyan-500/50 bg-black/40 px-3 py-1 text-[11px] text-cyan-100 w-fit">
                                Display / Glass Change
                            </p>
                            <h3 className="text-sm font-semibold text-cyan-50">
                                Display & Touch Replacement
                            </h3>
                            <p className="text-xs text-cyan-50/85">
                                Approximate range for common Android phone models (demo).
                            </p>
                            <p className="text-2xl font-semibold text-cyan-300">
                                ₹1,200–₹3,500
                            </p>
                            <ul className="space-y-1 text-xs text-cyan-50/90">
                                <li>• Depends on model & part quality</li>
                                <li>• Fitting & testing included</li>
                                <li>• Basic usage warranty (demo)</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300 transition"
                            >
                                Get Exact Price for Your Phone
                            </a>
                        </div>

                        {/* Accessories */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Accessories
                            </p>
                            <h3 className="text-sm font-semibold">Covers & Glass</h3>
                            <p className="text-xs text-slate-400">
                                Price range for common back covers and tempered glass (demo).
                            </p>
                            <p className="text-2xl font-semibold text-cyan-300">
                                ₹80–₹500
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Normal & premium tempered glass</li>
                                <li>• Simple & designer back covers</li>
                                <li>• Chargers, cables & earphones</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-200 transition"
                            >
                                Check Accessories Availability
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery / Work Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Shop & Repair Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these boxes with{" "}
                                <span className="text-slate-200 font-medium">
                                    photos of your shop, workbench, repaired phones, and accessories
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Clean shop photos build customer trust
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Shop Front & Board",
                            "Repair Table / Workbench",
                            "Display of Accessories",
                            "Before / After Broken Screen",
                            "Customer Delivery Photo",
                            "Second-hand Phones Showcase",
                        ].map((label) => (
                            <div
                                key={label}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-cyan-400/70 group-hover:text-cyan-200/80 transition">
                                    Image Here
                                </div>
                                <p className="text-[11px] font-medium text-slate-200">
                                    {label}
                                </p>
                                <p className="text-[10px] text-slate-500">
                                    Short description about this shop / work photo.
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
                                Local Customer Reviews
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Real reviews from{" "}
                                <span className="text-slate-200 font-medium">
                                    people who repaired their phones or bought accessories
                                </span>{" "}
                                from your shop.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: You can also add{" "}
                            <span className="text-slate-300">Google review screenshots</span>{" "}
                            here.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Ankit Sharma",
                                tag: "Display Change • Redmi Phone",
                                text: "My display was completely broken. They changed it same day and phone is working smoothly now. Rate was reasonable compared to others.",
                            },
                            {
                                name: "Pooja Kumari",
                                tag: "Battery & Accessories",
                                text: "Got my battery changed and also bought a nice back cover and tempered glass. Good collection and quick fitting.",
                            },
                            {
                                name: "Rajesh Electronics",
                                tag: "Multiple Phone Repairs",
                                text: "We regularly send phones here for repair. Work is neat, rate is fair and they always call if any extra part is required.",
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
                                    <div className="text-[11px] text-cyan-300 font-semibold">
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
                                Shop Location & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Make it easy for people to{" "}
                                <span className="text-slate-200 font-medium">
                                    find your shop and know your working hours
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
                                    Demo Danta Mobile Care,
                                    <br />
                                    Near Main Market / Bus Stand,
                                    <br />
                                    Danta, Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Service Area
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta town & villages</li>
                                        <li>• Nearby localities</li>
                                        <li>• Outstation via courier (on request)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sun: 10:00 AM – 9:00 PM</li>
                                        <li>Lunch break: 2:00 PM – 3:00 PM</li>
                                        <li>Sunday half-day (optional)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-cyan-300 hover:text-cyan-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.mobilecare@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace this demo info with your{" "}
                                <span className="text-slate-300">real contact & address</span>.
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
                                In the live website, this section will show your{" "}
                                <span className="text-slate-300">exact shop location</span> so
                                customers can easily navigate using Google Maps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-cyan-500/60 bg-gradient-to-r from-cyan-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-cyan-100 uppercase tracking-wide">
                                For Mobile Repair & Accessories Shop Owners
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-cyan-50">
                                Want this kind of website for your mobile repair shop?
                            </h2>
                            <p className="text-sm text-cyan-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page website
                                </span>{" "}
                                that shows your repair services, pricing, photos, reviews and{" "}
                                <span className="font-semibold">
                                    lets customers contact you directly on WhatsApp.
                                </span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-cyan-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Built with Next.js – fast & smooth</li>
                                <li>• Mobile-first design for local customers</li>
                                <li>• Easy to share on Instagram & WhatsApp</li>
                                <li>• Future updates for offers & new services</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-cyan-100/80 md:text-right">
                                Send your{" "}
                                <span className="font-semibold">
                                    shop name, location & service details
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo mobile repair & accessories shop website layout
                        created by{" "}
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
