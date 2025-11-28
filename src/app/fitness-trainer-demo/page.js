"use client";

export default function FitnessTrainerDemoPage() {
    const whatsappLink =
        "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20fitness%20/%20yoga%20training%20business";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Top Bar / Navbar */}
            <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-emerald-500 via-sky-500 to-indigo-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-500/30">
                            FT
                        </div>
                        <div>
                            <p className="text-sm font-semibold tracking-wide">
                                Danta Fitness & Yoga Studio
                            </p>
                            <p className="text-xs text-slate-400">
                                Personal Training • Yoga • Weight Loss Coaching
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
                        <a href="#services" className="text-slate-300 hover:text-emerald-400">
                            Services
                        </a>
                        <a href="#packages" className="text-slate-300 hover:text-emerald-400">
                            Packages
                        </a>
                        <a href="#gallery" className="text-slate-300 hover:text-emerald-400">
                            Gallery
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-emerald-400">
                            Contact
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 shadow-sm hover:bg-emerald-500/20 transition"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
                    <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />

                    <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                        <div className="space-y-5 md:space-y-6">
                            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-emerald-100 shadow-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Fitness & Yoga Trainer Demo • Danta / Sikar Local
                            </p>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                                Personal Fitness &{" "}
                                <span className="text-emerald-300">Yoga Coaching</span> in Danta
                            </h1>

                            <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                                One-page website layout for{" "}
                                <span className="font-semibold text-emerald-100">
                                    personal trainers, yoga teachers, Zumba instructors, and
                                    transformation coaches
                                </span>{" "}
                                who train clients at home, studio, gym or online.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
                                >
                                    Book Free Fitness Consultation
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-200 transition"
                                >
                                    View Training Programs
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-emerald-300">
                                        150+
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Clients trained (demo)
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-emerald-300">
                                        6+ yrs
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Personal training experience
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                                    <p className="text-lg md:text-xl font-semibold text-emerald-300">
                                        4.9★
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Client satisfaction (demo)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Right - Highlight Box */}
                        <div className="space-y-4">
                            <div className="rounded-3xl border border-emerald-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-emerald-500/20">
                                <p className="text-[11px] font-semibold tracking-wide text-emerald-100 uppercase mb-2">
                                    Sample Transformation Focus
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Weight Loss & Strength
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Personalised workout plans</li>
                                            <li>• Fat loss & muscle gain</li>
                                            <li>• Home / gym-based training</li>
                                            <li>• Progress tracking every week</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="font-semibold text-slate-100">
                                            Yoga & Flexibility
                                        </p>
                                        <ul className="space-y-0.5 text-slate-300">
                                            <li>• Morning yoga batches</li>
                                            <li>• Stress relief & breathing</li>
                                            <li>• Posture & back pain focus</li>
                                            <li>• Online & offline options</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400">
                                    *Replace this section with{" "}
                                    <span className="text-slate-200">your real training style</span>{" "}
                                    and focus areas.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ 1-on-1 personal training
                                    <br />
                                    ✓ Home visit / gym training
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                                    ✓ Yoga & group classes
                                    <br />
                                    ✓ Online coaching plans
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
                                Fitness & Yoga Services
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Clearly show all the ways you can help clients with{" "}
                                <span className="text-slate-200 font-medium">
                                    fat loss, strength, flexibility and overall health
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Personal Training • Yoga • Online Coaching • Group Batches
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            {
                                title: "1-on-1 Personal Training",
                                desc: "Fully personalised workouts based on your body type, schedule, and goals.",
                                points: [
                                    "Home or gym-based sessions",
                                    "Weight loss & muscle gain focus",
                                    "Form correction & injury safety",
                                ],
                            },
                            {
                                title: "Yoga & Meditation Classes",
                                desc: "Morning and evening yoga batches for strength, flexibility and peace of mind.",
                                points: [
                                    "Beginner to advanced asanas",
                                    "Pranayama & guided relaxation",
                                    "Special focus on back & neck pain",
                                ],
                            },
                            {
                                title: "Ladies-Only Fitness Batches",
                                desc: "Comfortable and safe environment for women to train in small groups.",
                                points: [
                                    "Weight loss & toning programs",
                                    "Post-pregnancy fitness support",
                                    "Home visit / studio options",
                                ],
                            },
                            {
                                title: "Online Coaching & Diet Plans",
                                desc: "WhatsApp + video call-based coaching for clients outside Danta or busy schedules.",
                                points: [
                                    "Weekly workout schedule",
                                    "Basic diet guidelines & tips",
                                    "Progress check-ins & tracking",
                                ],
                            },
                            {
                                title: "Teenage & Student Fitness",
                                desc: "Fitness basics for students preparing for defence, police or sports tests.",
                                points: [
                                    "Endurance & stamina building",
                                    "Strength & speed training",
                                    "Stretching to avoid injuries",
                                ],
                            },
                            {
                                title: "Senior Citizen & Rehab",
                                desc: "Light movement, yoga, and mobility routines for elders with low impact.",
                                points: [
                                    "Joint-friendly exercises",
                                    "Balance & posture support",
                                    "Slow & safe guided sessions",
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
                                Training Packages & Fees (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show clear monthly packages so people know{" "}
                                <span className="text-slate-200">how to start training with you</span>.{" "}
                                You can easily adjust these rates as per your experience and city.
                            </p>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            *Actual price will depend on{" "}
                            <span className="text-slate-300">location, frequency & mode</span>.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Group Yoga Batch */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Studio / Park Group
                            </p>
                            <h3 className="text-sm font-semibold">Yoga Group Batch</h3>
                            <p className="text-xs text-slate-400">
                                Ideal for beginners who want to start yoga with a friendly group.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                ₹999–₹1,499
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    / month
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• 3–5 days per week</li>
                                <li>• Morning / evening batches</li>
                                <li>• Basic diet & lifestyle tips</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition"
                            >
                                Join Yoga Group
                            </a>
                        </div>

                        {/* Popular Personal Training */}
                        <div className="relative rounded-3xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-emerald-500/20">
                            <div className="absolute -top-3 right-4 rounded-full border border-emerald-500/80 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-100">
                                Most Popular
                            </div>
                            <p className="inline-flex items-center rounded-full border border-emerald-500/50 bg-black/40 px-3 py-1 text-[11px] text-emerald-100 w-fit">
                                1-on-1 Coaching
                            </p>
                            <h3 className="text-sm font-semibold text-emerald-50">
                                Personal Training Plan
                            </h3>
                            <p className="text-xs text-emerald-50/85">
                                For serious transformation and full personal attention in each
                                session.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                ₹3,500–₹6,000
                                <span className="text-xs font-normal text-emerald-100/80">
                                    {" "}
                                    / month
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-emerald-50/90">
                                <li>• 3–5 personal sessions per week</li>
                                <li>• Custom workout + basic diet guidance</li>
                                <li>• Weekly progress tracking & support</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300 transition"
                            >
                                Start Personal Training
                            </a>
                        </div>

                        {/* Online Coaching */}
                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
                            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                                Online / Hybrid
                            </p>
                            <h3 className="text-sm font-semibold">Online Coaching Plan</h3>
                            <p className="text-xs text-slate-400">
                                For clients outside Danta or with busy schedules who still want
                                guidance.
                            </p>
                            <p className="text-2xl font-semibold text-emerald-300">
                                From ₹1,999
                                <span className="text-xs font-normal text-slate-400">
                                    {" "}
                                    / month
                                </span>
                            </p>
                            <ul className="space-y-1 text-xs text-slate-300">
                                <li>• Weekly workout & diet plan</li>
                                <li>• WhatsApp support & check-ins</li>
                                <li>• Monthly video call review</li>
                            </ul>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition"
                            >
                                Enquire for Online Coaching
                            </a>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold">
                                Training & Transformation Gallery (Demo)
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Replace these boxes with{" "}
                                <span className="text-slate-200 font-medium">
                                    client transformation photos, yoga sessions, group classes,
                                    and workout moments
                                </span>
                                .
                            </p>
                        </div>
                        <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                            Show real results & training environment
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 text-xs">
                        {[
                            "Client Transformation (Before / After)",
                            "Morning Yoga Batch in Park",
                            "Personal Training Session",
                            "Ladies Group Workout",
                            "Stretching & Mobility Training",
                            "Meditation / Relaxation Session",
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
                                    Short description about this training photo or result.
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
                                Client Success Stories
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Use real reviews from{" "}
                                <span className="text-slate-200 font-medium">
                                    clients who achieved weight loss, better health, and more
                                    confidence
                                </span>{" "}
                                with your training.
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
                                name: "Neha Sharma",
                                tag: "Weight Loss • 3 Months",
                                text: "I lost 7 kg with his personal training and simple diet guidance. Sessions are motivating, and form correction is always done properly. I feel more energetic and confident now.",
                            },
                            {
                                name: "Vikram Singh",
                                tag: "Strength & Fitness • 6 Months",
                                text: "Started as a complete beginner. Now I can lift properly and feel much stronger. He focuses a lot on technique and safety which I really liked.",
                            },
                            {
                                name: "Suman Devi",
                                tag: "Yoga & Back Pain Relief",
                                text: "Regular yoga sessions helped reduce my back pain and stiffness. Breathing exercises and stretching routines are very relaxing. Highly recommended for elders.",
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
                                Training Location, Service Area & Timings
                            </h2>
                            <p className="text-sm text-slate-400 max-w-xl mt-1">
                                Show clearly{" "}
                                <span className="text-slate-200 font-medium">
                                    where you train clients, what areas you cover, and your batch
                                    timings
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
                                    Studio / Training Location
                                </p>
                                <p className="text-xs text-slate-200">
                                    Demo Fitness & Yoga Studio,
                                    <br />
                                    Near Main Market, Danta,
                                    <br />
                                    Sikar, Rajasthan – 332001
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Home Visit Areas
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>• Danta town</li>
                                        <li>• Nearby colonies / villages</li>
                                        <li>• Selected areas on request</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                                        Batch Timings
                                    </p>
                                    <ul className="space-y-0.5 text-slate-300">
                                        <li>Morning: 6:00 AM – 10:00 AM</li>
                                        <li>Evening: 5:00 PM – 8:30 PM</li>
                                        <li>Sunday special sessions</li>
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
                                <p className="text-slate-200">demo.fitness@example.com</p>
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
                                In the live website, this section will show your{" "}
                                <span className="text-slate-300">studio / park location</span>{" "}
                                so clients can easily find where sessions happen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="space-y-4">
                    <div className="rounded-3xl border border-emerald-500/50 bg-gradient-to-r from-emerald-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-emerald-100 uppercase tracking-wide">
                                For Fitness Trainers & Yoga Coaches
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold text-emerald-50">
                                Want this kind of website for your fitness / yoga business?
                            </h2>
                            <p className="text-sm text-emerald-50/85 max-w-xl">
                                Get a{" "}
                                <span className="font-semibold">
                                    professional one-page website
                                </span>{" "}
                                that shows your services, packages, transformations, reviews and
                                lets people{" "}
                                <span className="font-semibold">contact you directly on WhatsApp.</span>
                            </p>
                            <ul className="mt-2 grid gap-1 text-xs text-emerald-50/85 md:grid-cols-2 max-w-xl">
                                <li>• Fast Next.js website with modern design</li>
                                <li>• Perfect for sharing on Instagram & WhatsApp</li>
                                <li>• Works on all mobiles & laptops</li>
                                <li>• Easy to update plans & photos later</li>
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
                                    name, training type & location
                                </span>{" "}
                                and I’ll convert this demo into{" "}
                                <span className="font-semibold">your branded website.</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                        This is a demo fitness & yoga trainer website layout created by{" "}
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
