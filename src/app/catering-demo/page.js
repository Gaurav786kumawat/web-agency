"use client";

export default function CateringDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20catering%20business";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/30">
                            DC
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Catering Co.
                            </p>
                            <p className="text-xs text-slate-400">
                                Premium Food & Event Catering in Danta
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-amber-400">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-amber-400">
                            Packages
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-amber-400">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-amber-400">
                            Contact
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-amber-500/60 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-200 shadow-sm hover:bg-amber-500/20 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-amber-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-amber-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Catering Demo Website • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Premium Catering Services{" "}
                                <span className="text-amber-300">
                                    for Weddings & Events in Danta
                                </span>
                            </h1>

                            <p className="text-sm md:text-base text-slate-300 max-w-xl">
                                Show your food, packages, and event specialties in one premium
                                page. Perfect for{" "}
                                <span className="font-semibold text-amber-200">
                                    wedding caterers, event caterers, tiffin & banquet services
                                </span>{" "}
                                in Danta, Sikar, and nearby areas.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition"
                                >
                                    Book Catering via WhatsApp
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-amber-400 hover:text-amber-200 transition"
                                >
                                    View Services & Menus
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-amber-300">
                                        50–1000+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Guests per event handled
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-amber-300">
                                        40+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Veg & non-veg dishes
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-amber-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Average client rating
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right / Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-amber-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-amber-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-amber-200 uppercase mb-2">
                                    Sample Event Menu Highlight
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Starters & Live Counters
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Paneer Tikka / Afghani Chaap</li>
                                            <li>• Hara Bhara Kebab</li>
                                            <li>• Live Chaat & Gol Gappa</li>
                                            <li>• Soup & Welcome Drink</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Main Course & Desserts
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Dal Makhani & Shahi Paneer</li>
                                            <li>• Naan, Roti, Pulao, Rice</li>
                                            <li>• Salad & Raita Counters</li>
                                            <li>• Gulab Jamun, Ice Cream</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *All menus fully customizable as per your event & budget.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Weddings & Receptions
                                    <br />
                                    ✓ Ring Ceremony, Sangeet, Haldi
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Birthday, Kitty, Naamkaran
                                    <br />
                                    ✓ Corporate & School Events
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
                                Catering Services We Provide
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Full-service catering with staff, setup, and complete food
                                management for all small and big functions in{" "}
                                <span className="text-slate-200 font-medium">
                                    Danta, Sikar, and nearby villages
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Flexible menus • Pure veg & non-veg options
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "Wedding & Reception Catering",
                                desc: "Grand wedding feasts, reception dinners, and complete food management with staff, buffet setup, and serving.",
                                points: [
                                    "Custom multi-course wedding menu",
                                    "Live counters & dessert tables",
                                    "On-site kitchen & service team",
                                ],
                            },
                            {
                                title: "Pre-Wedding & Family Functions",
                                desc: "Haldi, Mehendi, Sangeet, Ring Ceremony, Roka, and all small events with elegant setup and tasty food.",
                                points: [
                                    "Themed counters & welcome drinks",
                                    "Snacks, starters & main course",
                                    "Tea, coffee & hi-tea options",
                                ],
                            },
                            {
                                title: "Birthday & Private Parties",
                                desc: "Birthday, anniversary, kitty party, house party, and terrace get-together catering.",
                                points: [
                                    "Kids-friendly menus & snacks",
                                    "Cake cutting arrangements",
                                    "Buffet & live counter service",
                                ],
                            },
                            {
                                title: "Corporate & School Events",
                                desc: "Meetings, seminars, school functions, picnics, and annual functions catering.",
                                points: [
                                    "Tea & snacks counters",
                                    "Packed meals / buffet options",
                                    "On-time delivery & service",
                                ],
                            },
                            {
                                title: "Pure Veg & Regional Menus",
                                desc: "Rajasthani, North Indian, Marwari, Jain, and festival-special menus designed for every occasion.",
                                points: [
                                    "Authentic Rajasthani thali",
                                    "Jain-only preparations on request",
                                    "Festival bhog & prasad menus",
                                ],
                            },
                            {
                                title: "Home / Small Function Catering",
                                desc: "Small gatherings at home, pooja, havan, or weekend house parties with full food setup.",
                                points: [
                                    "Minimum 25–50 guests",
                                    "Buffet or plated service",
                                    "Disposable / steel crockery options",
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
                                Sample Catering Packages & Pricing
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Pricing depends on menu, number of items, and total guests.
                                Below are sample packages to help you understand how your
                                catering can be planned.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *Final price will be shared after understanding your{" "}
                            <span className="text-slate-300">menu + guest count + venue</span>.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Basic Package */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Starter Package
                            </p>
                            <h3 className="text-sm font-semibold">Classic Veg Package</h3>
                            <p className="text-xs text-slate-400">
                                Ideal for birthday, small functions, and simple gatherings.
                            </p>
                            <p className="text-2xl font-semibold text-amber-300">
                                ₹350–₹550
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    / plate
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• 2 Starters + 1 Welcome Drink</li>
                                <li>• 2 Sabzi + Dal + Rice / Pulao</li>
                                <li>• Roti / Naan + Salad + Raita</li>
                                <li>• 1 Dessert (Gulab Jamun / Ice Cream)</li>
                                <li>• Buffet Setup & Serving Staff</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-amber-400 hover:text-amber-200 transition"
                            >
                                Get Exact Quote on WhatsApp
                            </a>
                        </div>

                        {/* Popular Package */}
                        <div className="relative rounded-3xl border border-amber-500/70 bg-gradient-to-br from-amber-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-amber-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-amber-500/80 bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-100">
                                Most Popular
                            </div>
                            <p className="inline-flex items-center rounded-full border border-amber-500/50 bg-black/40 px-3 py-1 text-[11px] text-amber-100 w-fit">
                                Wedding / Reception
                            </p>
                            <h3 className="text-sm font-semibold text-amber-50">
                                Royal Wedding Buffet
                            </h3>
                            <p className="text-xs text-amber-100/80">
                                Perfect for wedding, reception, and engagement functions with
                                rich variety and live counters.
                            </p>
                            <p className="text-2xl font-semibold text-amber-300">
                                ₹650–₹1100
                                <span className="text-xs font-normal text-amber-100/80">
                                    {" "}
                                    / plate
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-amber-50/90">
                                <li>• 4–6 Starters + Welcome Drink Counter</li>
                                <li>• 3–4 Sabzi + Dal Makhani + Rice + Pulao</li>
                                <li>• Indian Breads, Salad Bar, Papad & Achar</li>
                                <li>• 2 Desserts + Ice Cream / Kulfi</li>
                                <li>• Live Chaat / Chinese / Pasta Counter</li>
                                <li>• Complete Buffet, Decoration & Service</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-amber-300 transition"
                            >
                                Discuss Your Wedding Menu
                            </a>
                        </div>

                        {/* Premium / Custom */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Premium & Custom
                            </p>
                            <h3 className="text-sm font-semibold">Luxury & Theme Catering</h3>
                            <p className="text-xs text-slate-400">
                                For high-end events, NRI weddings, and fully customized
                                experiences with premium menu & decor.
                            </p>
                            <p className="text-2xl font-semibold text-amber-300">
                                Custom Quote
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Multi-cuisine menus (Indian & International)</li>
                                <li>• Themed counters & decor coordination</li>
                                <li>• Live mocktail, dessert & snack stations</li>
                                <li>• Premium crockery & service staff</li>
                                <li>• On-site tasting session (on request)</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-amber-400 hover:text-amber-200 transition"
                            >
                                Plan a Premium Event
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Event & Food Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these boxes with your real catering photos – buffet
                                setup, food shots, wedding decor, team, and live counters.
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Show your best events & special dishes here
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Wedding Buffet Setup",
                            "Stage-side Food Counters",
                            "Live Chaat & Gol Gappa",
                            "Dessert & Sweets Table",
                            "Rajasthani Thali Service",
                            "Team Serving Guests",
                        ].map((label) => (
                            <div
                                key={label}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-amber-400/70 group-hover:text-amber-200/80 transition">
                                    Image Here
                                </div>
                                <p className="text-[11px] font-medium text-slate-200">
                                    {label}
                                </p>
                                <p className="text-[10px] text-slate-500">
                                    Add a short line about this event photo or setup.
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
                                Client Reviews & Feedback
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Build trust by showing genuine reviews from weddings, parties,
                                and corporate events you’ve catered in Danta & nearby areas.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: You can also embed{" "}
                            <span className="text-slate-300">Google / Instagram reviews</span>{" "}
                            here.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Priya & Rohit Sharma",
                                tag: "Wedding Catering • Danta",
                                text: "Food was appreciated by every guest. Starters were hot, main course was rich in taste, and dessert counter was a big hit. Service staff was very polite and professional.",
                            },
                            {
                                name: "Rajesh Jain",
                                tag: "Ring Ceremony • Sikar",
                                text: "They handled complete food, setup, and serving for our ring ceremony. No tension at all, everything was on time and well organized. Highly recommended for family functions.",
                            },
                            {
                                name: "ABC Public School",
                                tag: "Annual Function • Catering",
                                text: "From snacks to dinner, everything was properly managed for our full-day event. Quality was very good and they managed large crowd smoothly.",
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
                                    <div className="text-[11px] text-amber-300 font-semibold">
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
                                Location, Service Area & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Use this section to clearly show where your kitchen / office is,
                                which areas you serve, and how people can reach you.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                            <div>
                                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                    Kitchen / Office Address
                                </p>
                                <p className="text-xs text-slate-200">
                                    Demo Catering Kitchen,
                                    <br />
                                    Near Main Market, Danta,
                                    <br />
                                    Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Service Areas
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta & nearby villages</li>
                                        <li>• Sikar city</li>
                                        <li>• Nearby towns on request</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Event Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sun: 8:00 AM – 11:00 PM</li>
                                        <li>Early morning / late night</li>
                                        <li>events possible on request</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-amber-300 hover:text-amber-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.catering@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace contact details with your real number, email, and
                                address.
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
                                In your live website, this box will show your{" "}
                                <span className="text-slate-300">Google Maps</span> location so
                                customers can easily navigate to your kitchen / office or event
                                venue.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-amber-500/50 bg-gradient-to-r from-amber-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-amber-200 uppercase tracking-wide">
                                For Catering Business Owners in Danta & Sikar
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-amber-50">
                                Want this kind of website for your catering business?
                            </h2>
                            <p className="text-sm text-amber-50/80 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page catering website
                                </span>{" "}
                                with menu, packages, gallery, reviews, and WhatsApp booking –
                                designed to convert local enquiries into confirmed bookings.
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-amber-50/80 md:grid-cols-2 max-w-xl">
                                <li>• Built with Next.js + super fast loading</li>
                                <li>• WhatsApp enquiry buttons everywhere</li>
                                <li>• Mobile + desktop friendly layout</li>
                                <li>• Perfect for sharing on Instagram / WhatsApp</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-amber-100/80 md:text-right">
                                Share your catering business details and I’ll convert this demo
                                into your{" "}
                                <span className="font-semibold">fully branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo catering website layout created by{" "}
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
