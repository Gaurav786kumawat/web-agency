"use client";

export default function StationeryShopDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20stationery%20/%20xerox%20/%20book%20shop";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-sky-500 via-violet-500 to-emerald-400 flex items-center justify-center text-xs font-bold shadow-lg shadow-sky-500/30">
                            ST
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Stationery & Xerox Point
                            </p>
                            <p className="text-xs text-slate-400">
                                Stationery • Xerox • Printout • Forms • Books
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-sky-300">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-sky-300">
                            Pricing
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-sky-300">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-sky-300">
                            Location
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-sky-500/70 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100 shadow-sm hover:bg-sky-500/20 transition"
                        >
                            WhatsApp Enquiry
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-sky-500/25 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-sky-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Stationery / Xerox Shop Demo • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Stationery, Xerox &{" "}
                                <span className="text-sky-300">Print Solutions</span> for
                                Students & Offices in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                One-page website layout for{" "}
                                <span className="font-semibold text-sky-100">
                                    stationery shops, xerox & printout centres, book & forms
                                    stores, online form filling points
                                </span>{" "}
                                in Danta, Sikar and nearby areas.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
                                >
                                    Send Document on WhatsApp
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-sky-300 hover:text-sky-200 transition"
                                >
                                    View All Services
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-sky-300">
                                        Near
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        School / college friendly location (demo)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-sky-300">
                                        8 AM–9 PM
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Open timing (customisable)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-sky-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Student rating (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-sky-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-sky-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-sky-100 uppercase mb-2">
                                    Everything for Students & Offices (Demo)
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Stationery & Books
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Notebooks, registers, files</li>
                                            <li>• Pens, pencils, markers</li>
                                            <li>• School & college books</li>
                                            <li>• Drawing & project material</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Xerox & Print Services
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• B/W & colour xerox</li>
                                            <li>• Printout from phone / pen drive</li>
                                            <li>• Lamination & spiral binding</li>
                                            <li>• Online form & application print</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *Replace with{" "}
                                    <span className="text-slate-200">
                                        your real products & services
                                    </span>{" "}
                                    list.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Photocopy, print, scan & email help
                                    <br />
                                    ✓ College project & assignment support
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Online forms & exam applications
                                    <br />
                                    ✓ PAN, Aadhar & document Xerox
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
                                Stationery, Xerox & Print Services
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show all your{" "}
                                <span className="text-slate-200 font-medium">
                                    shop services clearly
                                </span>{" "}
                                so students, parents and offices know when to visit.
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Students • Offices • Coaching • Government Work
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "B/W & Colour Xerox",
                                desc: "Clear photocopies for forms, documents, ID proofs and question papers.",
                                points: [
                                    "Single & double side xerox",
                                    "Colour copies for important docs (demo)",
                                    "Bulk xerox for coaching / office",
                                ],
                            },
                            {
                                title: "Printout from Phone & Pen Drive",
                                desc: "Easily take print from WhatsApp, email or USB drive.",
                                points: [
                                    "A4 & legal size printouts",
                                    "Resume, application & project prints",
                                    "Photo print (basic demo text)",
                                ],
                            },
                            {
                                title: "Lamination & Spiral Binding",
                                desc: "Protect important documents and bind projects properly.",
                                points: [
                                    "ID card & Aadhar lamination",
                                    "Certificate & marksheet lamination",
                                    "Spiral binding for projects / notes",
                                ],
                            },
                            {
                                title: "School & Office Stationery",
                                desc: "All types of stationery items for students and office use.",
                                points: [
                                    "Notebooks, registers, long books",
                                    "Pens, pencils, markers, geometry",
                                    "Files, folders, staplers & more",
                                ],
                            },
                            {
                                title: "Books & Forms (Demo Text)",
                                desc: "Textbooks, guides and common government / bank forms.",
                                points: [
                                    "School & competitive books (if available)",
                                    "Entrance & exam forms (demo)",
                                    "Common govt / bank forms stock",
                                ],
                            },
                            {
                                title: "Online Form Filling Help",
                                desc: "Help for online applications & document upload.",
                                points: [
                                    "Exam & scholarship forms (demo)",
                                    "Photo & signature resizing",
                                    "Print of submitted forms & receipts",
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

                {/* Packages / Pricing Section */}
                <section id="packages" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Sample Pricing (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show simple{" "}
                                <span className="text-slate-200 font-medium">
                                    starting price range
                                </span>{" "}
                                so people know your charges before coming.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *Actual prices depend on{" "}
                            <span className="text-slate-300">
                                paper size, quantity & colour
                            </span>
                            .
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Xerox / Print */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Xerox & Print
                            </p>
                            <h3 className="text-sm font-semibold">Basic Print & Xerox</h3>
                            <p className="text-xs text-slate-400">
                                For regular documents, notes and forms.
                            </p>
                            <p className="text-2xl font-semibold text-sky-300">
                                From ₹2–₹5
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    / page (demo)
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• B/W xerox per page approx</li>
                                <li>• Colour xerox / print extra</li>
                                <li>• Bulk xerox discount possible</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-200 transition"
                            >
                                Ask Print / Xerox Rate on WhatsApp
                            </a>
                        </div>

                        {/* Popular Lamination */}
                        <div className="relative rounded-3xl border border-sky-500/70 bg-gradient-to-br from-sky-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-sky-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-sky-500/80 bg-sky-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-50">
                                Common Use
                            </div>
                            <p className="inline-flex items-center rounded-full border border-sky-500/50 bg-black/40 px-3 py-1 text-[11px] text-sky-100 w-fit">
                                Lamination & Binding
                            </p>
                            <h3 className="text-sm font-semibold text-sky-50">
                                Lamination / Spiral Binding
                            </h3>
                            <p className="text-xs text-sky-50/85">
                                Protect important documents & projects.
                            </p>
                            <p className="text-2xl font-semibold text-sky-300">
                                From ₹20–₹80
                            </p>
                            <ul className="space-y-1 text-xs text-sky-50/90">
                                <li>• ID card & A4 lamination (demo)</li>
                                <li>• Certificate & marksheet lamination</li>
                                <li>• Spiral binding for notes & projects</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-300 transition"
                            >
                                Check Lamination / Binding Price
                            </a>
                        </div>

                        {/* Stationery Packs */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Student Kit
                            </p>
                            <h3 className="text-sm font-semibold">Sample Stationery Pack</h3>
                            <p className="text-xs text-slate-400">
                                Prepare ready-made school / college kits.
                            </p>
                            <p className="text-2xl font-semibold text-sky-300">
                                From ₹199
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• 3–5 notebooks / registers</li>
                                <li>• Pen, pencil, eraser, scale</li>
                                <li>• Extra items as per class (demo)</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-200 transition"
                            >
                                Ask for Custom Stationery Pack
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Shop & Work Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these boxes with{" "}
                                <span className="text-slate-200 font-medium">
                                    photos of your shop, shelves, printing area and students
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Clean, bright photos = more trust
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Shop Front & Name Board",
                            "Inside View of Stationery Racks",
                            "Xerox / Printout Machine Area",
                            "Lamination & Binding Table",
                            "Student Buying Books & Copies",
                            "Online Form Filling Desk",
                        ].map((label) => (
                            <div
                                key={label}
                                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
                            >
                                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-sky-400/70 group-hover:text-sky-200/80 transition">
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
                                Student & Customer Reviews
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show real feedback from{" "}
                                <span className="text-slate-200 font-medium">
                                    students, parents and office customers
                                </span>{" "}
                                who regularly visit your shop.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Tip: Add{" "}
                            <span className="text-slate-300">Google review screenshots</span>{" "}
                            or WhatsApp feedback here.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            {
                                name: "Rahul Singh",
                                tag: "College Student",
                                text: "All my printout, xerox and project binding work is done here. They quickly take prints from WhatsApp and pendrive. Very helpful for last minute assignments.",
                            },
                            {
                                name: "Sunrise Coaching Institute",
                                tag: "Bulk Xerox & Print",
                                text: "We regularly print notes and test papers here. Bulk xerox is done on time and quality is good. Rates are also reasonable.",
                            },
                            {
                                name: "Meena Traders",
                                tag: "Office Stationery",
                                text: "We purchase office stationery and files from this shop. They keep all items in one place and can arrange special items on order as well.",
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
                                    <div className="text-[11px] text-sky-300 font-semibold">
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
                                Help people know{" "}
                                <span className="text-slate-200 font-medium">
                                    where your shop is and when they can visit
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
                                    Demo Danta Stationery & Xerox Point,
                                    <br />
                                    Near School / College / Main Market,
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
                                        <li>• School & college students</li>
                                        <li>• Coaching centres & staff</li>
                                        <li>• Offices & general customers</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Mon–Sat: 8:00 AM – 9:00 PM</li>
                                        <li>Sunday: 9:00 AM – 2:00 PM (demo)</li>
                                        <li>Exam days: Extra timing possible</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                                <span className="text-slate-400">WhatsApp:</span>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-sky-300 hover:text-sky-200"
                                >
                                    +91 78785 83600
                                </a>
                                <span className="text-slate-400">Call:</span>
                                <p className="text-slate-200">+91 78785 83600</p>
                                <span className="text-slate-400">Email:</span>
                                <p className="text-slate-200">demo.stationery@example.com</p>
                            </div>

                            <p className="mt-2 text-[11px] text-slate-500">
                                *Replace these demo details with your{" "}
                                <span className="text-slate-300">
                                    real contact info & timings
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
                                In the live website, this box will show your{" "}
                                <span className="text-slate-300">exact shop location</span> so
                                customers can easily reach you using Google Maps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-sky-500/60 bg-gradient-to-r from-sky-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-sky-100 uppercase tracking-wide">
                                For Stationery, Xerox & Book Shop Owners
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-sky-50">
                                Want this kind of website for your stationery / xerox shop?
                            </h2>
                            <p className="text-sm text-sky-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    modern one-page shop website
                                </span>{" "}
                                that shows all your services, pricing, photos, reviews and{" "}
                                <span className="font-semibold">
                                    lets customers send documents & enquiries on WhatsApp.
                                </span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-sky-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Built with Next.js – fast & smooth</li>
                                <li>• Mobile-first design for local students</li>
                                <li>• Easy to share on WhatsApp & Instagram</li>
                                <li>• Future updates for offers & exam seasons</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-300 transition"
                            >
                                Message on WhatsApp to Get This
                            </a>
                            <p className="text-[11px] text-sky-100/80 md:text-right">
                                Send your{" "}
                                <span className="font-semibold">
                                    shop name, location & services list
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo stationery / xerox shop website layout created by{" "}
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
