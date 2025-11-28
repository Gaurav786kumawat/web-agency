"use client";

export default function DjSoundTentDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20DJ%20sound%20/%20tent%20house%20business";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-amber-400 flex items-center justify-center text-xs font-bold shadow-lg shadow-fuchsia-500/30">
                            DJ
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta DJ & Tent House
                            </p>
                            <p className="text-xs text-slate-400">
                                DJ Sound • Lighting • Tent • Decor • Stage
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-fuchsia-300">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-fuchsia-300">
                            Packages
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-fuchsia-300">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-fuchsia-300">
                            Location
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-fuchsia-500/70 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-100 shadow-sm hover:bg-fuchsia-500/20 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-fuchsia-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-fuchsia-500/25 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-fuchsia-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                DJ & Tent House Demo Website • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Complete{" "}
                                <span className="text-fuchsia-300">
                                    DJ Sound & Tent House Setup
                                </span>{" "}
                                for Weddings & Events in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                One-page website layout for{" "}
                                <span className="font-semibold text-fuchsia-100">
                                    DJ owners, sound system providers, tent houses, light & decor
                                    setup teams
                                </span>{" "}
                                serving Danta, Sikar and nearby villages.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition"
                                >
                                    Book DJ / Tent on WhatsApp
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-fuchsia-300 hover:text-fuchsia-200 transition"
                                >
                                    View Demo Packages
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-fuchsia-300">
                                        50–2000+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Guests per event handled
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-fuchsia-300">
                                        7+ yrs
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Event & wedding experience
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-fuchsia-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Client rating (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-fuchsia-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-fuchsia-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-fuchsia-100 uppercase mb-2">
                                    Event Types We Cover (Demo)
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            DJ Sound & Lighting
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Wedding & Sangeet DJ</li>
                                            <li>• Baraat & procession DJ</li>
                                            <li>• Birthday / party sound</li>
                                            <li>• School / college events</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Tent & Decor Setup
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Wedding tent & pandal</li>
                                            <li>• Stage & backdrop design</li>
                                            <li>• Lighting & entry gate</li>
                                            <li>• Seating & carpet arrangements</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *Replace these with{" "}
                                    <span className="text-slate-200">your actual services</span>{" "}
                                    and event expertise.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Sound + light + smoke combo
                                    <br />
                                    ✓ Full stage & tent package
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Village & city events
                                    <br />
                                    ✓ 24/7 booking support (demo)
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
                                DJ Sound & Tent Services
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show all your{" "}
                                <span className="text-slate-200 font-medium">
                                    sound, light, tent and event setup services
                                </span>{" "}
                                in one place.
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Wedding • Sangeet • Baraat • Parties • Corporate
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "DJ Sound System",
                                desc: "High quality sound system for wedding, reception, sangeet, parties and events.",
                                points: [
                                    "2-way / 3-way speaker setups (demo)",
                                    "Mic for announcements & anchors",
                                    "Baraat DJ trolley / open jeep sound",
                                ],
                            },
                            {
                                title: "Lighting & Effects",
                                desc: "Stage and hall lighting to create perfect event atmosphere.",
                                points: [
                                    "LED par lights & moving heads",
                                    "Stage focus lights & halogens",
                                    "Smoke machine & basic effects",
                                ],
                            },
                            {
                                title: "Tent & Pandal Setup",
                                desc: "Tent house setup for small and big functions in Danta & nearby.",
                                points: [
                                    "Marriage garden style tent (demo)",
                                    "Pandal for home & street functions",
                                    "Colour theme-wise decoration",
                                ],
                            },
                            {
                                title: "Stage, Backdrop & Entry Gate",
                                desc: "Design and setup for main stage and entry decoration.",
                                points: [
                                    "Wedding & ring ceremony stage",
                                    "Flower & cloth backdrop designs",
                                    "LED entry gate & welcome board",
                                ],
                            },
                            {
                                title: "Seating, Carpet & Dining",
                                desc: "Complete seating arrangements for guests.",
                                points: [
                                    "Sofa set & chair arrangement",
                                    "Round table & cover setup",
                                    "Carpet, shamiyana & side walls",
                                ],
                            },
                            {
                                title: "Custom Event Packages",
                                desc: "Full event solution with DJ, tent and decor combined.",
                                points: [
                                    "Wedding & reception full package",
                                    "Village program & jagran setup",
                                    "School & college annual functions",
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
                                Sample DJ & Tent Packages (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Use this section to show{" "}
                                <span className="text-slate-200 font-medium">
                                    easy-to-understand event packages
                                </span>{" "}
                                for local clients. You can fully change names and prices.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *Final price depends on{" "}
                            <span className="text-slate-300">
                                location, hours, setup size & date
                            </span>
                            .
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Basic Function */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Small Function
                            </p>
                            <h3 className="text-sm font-semibold">Basic DJ Package</h3>
                            <p className="text-xs text-slate-400">
                                For birthdays, small parties, school events and society
                                functions.
                            </p>
                            <p className="text-2xl font-semibold text-fuchsia-300">
                                From ₹5,000
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    (Demo)
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• 3–4 hours DJ sound</li>
                                <li>• Basic lighting setup</li>
                                <li>• 1 wireless mic for anchor</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-fuchsia-400 hover:text-fuchsia-200 transition"
                            >
                                Get Exact Quote for Your Event
                            </a>
                        </div>

                        {/* Wedding / Popular */}
                        <div className="relative rounded-3xl border border-fuchsia-500/70 bg-gradient-to-br from-fuchsia-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-fuchsia-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-fuchsia-500/80 bg-fuchsia-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-fuchsia-50">
                                Most Popular
                            </div>
                            <p className="inline-flex items-center rounded-full border border-fuchsia-500/50 bg-black/40 px-3 py-1 text-[11px] text-fuchsia-100 w-fit">
                                Wedding / Sangeet
                            </p>
                            <h3 className="text-sm font-semibold text-fuchsia-50">
                                Wedding DJ + Stage Light
                            </h3>
                            <p className="text-xs text-fuchsia-50/85">
                                Ideal for engagement, sangeet, reception and wedding nights.
                            </p>
                            <p className="text-2xl font-semibold text-fuchsia-300">
                                From ₹15,000
                                <span className="text-xs font-normal text-fuchsia-100/80">
                                    {" "}
                                    (Demo)
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-fuchsia-50/90">
                                <li>• Full DJ sound with bass & sub</li>
                                <li>• Stage & dance floor lighting</li>
                                <li>• 1–2 smoke / effect machines (optional)</li>
                                <li>• 1–2 dedicated sound operators</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-fuchsia-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-fuchsia-300 transition"
                            >
                                Discuss Your Wedding Plan
                            </a>
                        </div>

                        {/* Full DJ + Tent */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                DJ + Tent + Decor
                            </p>
                            <h3 className="text-sm font-semibold">
                                Complete Event Package (Demo)
                            </h3>
                            <p className="text-xs text-slate-400">
                                Full solution including tent house, DJ, light and basic decor.
                            </p>
                            <p className="text-2xl font-semibold text-fuchsia-300">
                                Custom Quote
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Tent & pandal setup</li>
                                <li>• DJ sound, stage & lights</li>
                                <li>• Entry gate & seating arrangement</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-fuchsia-400 hover:text-fuchsia-200 transition"
                            >
                                Plan Full Event Package
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Event & Setup Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these cards with{" "}
                                <span className="text-slate-200 font-medium">
                                    real photos of your DJ setup, tent, decor & events
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Strong photos = strong bookings
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Wedding Stage Setup",
                            "Dance Floor & Lighting",
                            "DJ Console & Speakers",
                            "Tent & Pandal Decoration",
                            "Entry Gate & Welcome Board",
                            "Village Function / Jagran Night",
                        ].map((label) => (
                            <div
                                key={label}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-fuchsia-400/70 group-hover:text-fuchsia-200/80 transition">
                                    Image Here
                                </div>
                                <p className="text-[11px] font-medium text-slate-200">
                                    {label}
                                </p>
                                <p className="text-[10px] text-slate-500">
                                    Short description about this event / setup photo.
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
                                Show real feedback from{" "}
                                <span className="text-slate-200 font-medium">
                                    wedding families, event organisers and local clients
                                </span>
                                .
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: Add{" "}
                            <span className="text-slate-300">Google / WhatsApp reviews</span>{" "}
                            screenshots below.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Priya & Ankit Sharma",
                                tag: "Wedding & Sangeet Night",
                                text: "DJ sound and lighting were perfect for our sangeet and wedding. Stage setup looked beautiful in photos and videos. They cooperated well with our other vendors.",
                            },
                            {
                                name: "Mahesh Tent & Events",
                                tag: "Combined Event Package",
                                text: "We booked full DJ + tent package for a village wedding. Setup was on time and they handled sound and lighting smoothly throughout all functions.",
                            },
                            {
                                name: "Sunrise Public School",
                                tag: "Annual Function Event",
                                text: "They provided sound system, stage, and lighting for our annual function. Announcements were clear and music setup was handled professionally.",
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
                                    <div className="text-[11px] text-fuchsia-300 font-semibold">
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
                                Office Location, Service Area & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Clearly show{" "}
                                <span className="text-slate-200 font-medium">
                                    where your office / godown is and which areas you serve
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
                                    Office / Godown Address
                                </p>
                                <p className="text-xs text-slate-200">
                                    Demo Danta DJ & Tent House,
                                    <br />
                                    Near Main Road / Marriage Garden,
                                    <br />
                                    Danta, Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Service Areas
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta town & nearby villages</li>
                                        <li>• Sikar city (on request)</li>
                                        <li>• Nearby towns for big events</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Booking Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sun: 9:00 AM – 9:00 PM</li>
                                        <li>Event support: As per booking</li>
                                        <li>Advance booking recommended</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-fuchsia-300 hover:text-fuchsia-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.djtent@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace these demo details with your{" "}
                                <span className="text-slate-300">
                                    real phone, email & address
                                </span>
                                .
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
                                In the live website, this will show your{" "}
                                <span className="text-slate-300">office / godown location</span>{" "}
                                so clients can easily visit for booking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-fuchsia-500/60 bg-gradient-to-r from-fuchsia-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-fuchsia-100 uppercase tracking-wide">
                                For DJ Sound & Tent House Owners
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-50">
                                Want this kind of website for your DJ / tent business?
                            </h2>
                            <p className="text-sm text-fuchsia-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page DJ & tent website
                                </span>{" "}
                                that shows your services, packages, gallery, reviews and{" "}
                                <span className="font-semibold">
                                    lets clients contact you directly on WhatsApp.
                                </span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-fuchsia-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Built with Next.js – fast & lightweight</li>
                                <li>• Designed for mobile & local clients</li>
                                <li>• Easy to share on WhatsApp & Instagram</li>
                                <li>• Future updates for offers & seasons</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-fuchsia-100/80 md:text-right">
                                Send your{" "}
                                <span className="font-semibold">
                                    business name, location & service details
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo DJ sound & tent house website layout created by{" "}
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
