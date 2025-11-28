// app/coaching-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function CoachingDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your coaching demo website. Can you build a similar one for my institute?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                    Demo · Coaching Institute Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    BrightFuture Coaching Institute
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    A high-quality one-page website for coaching centers, tuition teachers,
                    and institutes. Includes courses, batch timings, faculty profiles,
                    testimonials, and WhatsApp admission inquiry.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-blue-400 text-slate-900 rounded-full font-medium hover:bg-blue-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* COURSES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Courses We Offer</h2>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            title: "Class 6–10 (All Subjects)",
                            desc: "Maths, Science, English, SST, Hindi – Strong concept building.",
                        },
                        {
                            title: "Class 11–12 Science",
                            desc: "Physics, Chemistry, Maths, Biology with expert faculty.",
                        },
                        {
                            title: "Class 11–12 Commerce",
                            desc: "Accounts, Economics, Business Studies with notes.",
                        },
                        {
                            title: "Competitive Exams",
                            desc: "SSC, Police, Patwari, Railway – Full course + tests.",
                        },
                    ].map((c) => (
                        <div
                            key={c.title}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <h3 className="font-medium text-slate-200">{c.title}</h3>
                            <p className="text-slate-400 mt-2">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BATCHES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Batch Timings & Fees</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            title: "Morning Batch",
                            time: "7 AM – 10 AM",
                            fee: "₹799 / month",
                        },
                        {
                            title: "Evening Batch",
                            time: "4 PM – 7 PM",
                            fee: "₹999 / month",
                            highlight: true,
                        },
                        {
                            title: "Weekend Batch",
                            time: "Sat–Sun | 2 hrs/day",
                            fee: "₹599 / month",
                        },
                    ].map((b) => (
                        <div
                            key={b.title}
                            className={`p-5 border rounded-2xl ${b.highlight
                                    ? "border-blue-400 bg-blue-400/10"
                                    : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <h3 className="font-medium text-slate-100">{b.title}</h3>
                            <p className="text-blue-400 text-sm mt-1">{b.time}</p>
                            <p className="text-slate-300 mt-2">Fees: {b.fee}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FACULTY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Faculty</h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    {[
                        { name: "Rahul Sir", subject: "Physics & Maths" },
                        { name: "Neha Ma’am", subject: "Biology & Chemistry" },
                        { name: "Sanjay Sir", subject: "Commerce & Accounts" },
                    ].map((t) => (
                        <div
                            key={t.name}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <div className="h-24 rounded-xl bg-slate-800 mb-3 flex items-center justify-center text-[10px] text-slate-400">
                                Faculty Photo
                            </div>
                            <h3 className="font-medium text-slate-200">{t.name}</h3>
                            <p className="text-blue-400 text-xs">{t.subject}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Classroom Gallery</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Classroom 1",
                        "Classroom 2",
                        "Smart Board",
                        "Library",
                        "Study Room",
                        "Test Room",
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
                    Your actual website will use your real classroom photos.
                </p>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Student Results & Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Aditi",
                            text: "Improved my maths marks from 54 to 89! Best coaching in town.",
                        },
                        {
                            name: "Rohan",
                            text: "Friendly teachers and regular tests. Amazing experience!",
                        },
                        {
                            name: "Deepa",
                            text: "Science classes are very clear and easy to understand.",
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
                    <h2 className="text-2xl font-semibold">Location</h2>

                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps Embed Here
                    </div>

                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Near Main Market, Sample City</li>
                        <li>🕒 8 AM – 8 PM (Mon–Sat)</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Admission Inquiry</h2>
                    <p className="text-sm text-slate-300">
                        Tap below & send your class + subject. We will guide you.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-blue-400 text-slate-900 rounded-full font-medium hover:bg-blue-300"
                    >
                        WhatsApp Inquiry
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-blue-400/60 bg-blue-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this coaching website for your institute?
                </h2>

                <p className="text-sm text-slate-200">
                    I will customize this with your logo, teachers, courses, timings &
                    maps. Delivery in 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-blue-400 text-slate-900 rounded-full font-medium hover:bg-blue-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-blue-400 text-slate-900 rounded-full shadow-lg shadow-blue-400/40"
            >
                💬 Admission
            </a>
        </main>
    );
}
