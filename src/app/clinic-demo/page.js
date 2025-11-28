// app/clinic-demo/page.js
"use client";

const WHATSAPP = "917878583600";

export default function ClinicDemo() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your Clinic demo website. Can you build one like this for my clinic?"
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-cyan-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Demo · Clinic / Doctor Website
                </p>

                <h1 className="text-3xl md:text-4xl font-semibold">
                    HealthyLife Clinic & Care
                </h1>

                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    One-page professional website for clinics, doctors and medical centers.
                    Includes services, doctor profile, timings, fees, patient reviews and
                    Google Maps location with WhatsApp appointment booking.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex px-6 py-3 bg-cyan-400 text-slate-900 rounded-full font-medium hover:bg-cyan-300"
                >
                    Get a similar website
                </a>
            </section>

            {/* SERVICES */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Clinic Services</h2>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        {
                            title: "General Checkup",
                            desc: "Fever, weakness, blood pressure, sugar & regular health checkups.",
                        },
                        {
                            title: "Child Care",
                            desc: "Pediatric consultation, vaccination & growth monitoring.",
                        },
                        {
                            title: "Skin & Allergy",
                            desc: "Basic skin issues, allergy treatment and consultation.",
                        },
                        {
                            title: "Diabetes & BP",
                            desc: "Sugar, blood pressure, heart & lifestyle disease management.",
                        },
                        {
                            title: "Minor Injury / Dressing",
                            desc: "First aid, small cuts, burns & wound dressing.",
                        },
                        {
                            title: "Online Consultation",
                            desc: "Phone / video consultation for regular patients.",
                        },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40"
                        >
                            <h3 className="font-medium text-slate-200">{s.title}</h3>
                            <p className="text-slate-400 mt-2">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* DOCTOR PROFILE + TIMINGS */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                {/* Doctor */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">About the Doctor</h2>

                    <div className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40 text-sm">
                        <div className="h-24 rounded-xl bg-slate-800 mb-3 flex items-center justify-center text-[10px] text-slate-400">
                            Doctor Photo
                        </div>
                        <h3 className="font-medium text-slate-100">Dr. Sample Name</h3>
                        <p className="text-cyan-300 text-xs">MBBS, MD (General Medicine)</p>
                        <p className="text-slate-300 mt-2">
                            8+ years experience in treating general & chronic conditions with
                            friendly and patient-focused care.
                        </p>
                    </div>
                </div>

                {/* Timings & Fees */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Timings & Consultation Fees</h2>

                    <div className="p-5 border border-slate-800 rounded-2xl bg-slate-900/40 text-sm space-y-2">
                        <p className="text-slate-300">
                            <span className="font-medium">Morning:</span> 9:00 AM – 1:00 PM
                        </p>
                        <p className="text-slate-300">
                            <span className="font-medium">Evening:</span> 5:00 PM – 8:30 PM
                        </p>
                        <p className="text-slate-300">
                            <span className="font-medium">Closed:</span> Sunday (or as per clinic)
                        </p>
                        <p className="text-slate-300 mt-2">
                            <span className="font-medium">Consultation Fees:</span> ₹200–₹300
                        </p>
                    </div>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-cyan-400 text-slate-900 rounded-full font-medium hover:bg-cyan-300 text-sm"
                    >
                        Book Appointment on WhatsApp
                    </a>
                </div>
            </section>

            {/* GALLERY */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Clinic Photos</h2>

                <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-400">
                    {[
                        "Clinic Front",
                        "Reception",
                        "Waiting Area",
                        "Doctor Cabin",
                        "Pharmacy Counter",
                        "Clinic Board",
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
                    Your actual website will use original photos of your clinic.
                </p>
            </section>

            {/* PATIENT REVIEWS */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Patient Reviews</h2>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Sunita",
                            text: "Doctor listens very patiently and explains everything clearly.",
                        },
                        {
                            name: "Imran",
                            text: "Good treatment and not money-minded. Highly recommended.",
                        },
                        {
                            name: "Kavita",
                            text: "Clean clinic, polite staff and effective medicines.",
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
                        <li>📞 Phone: 98XXXXXX00</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Contact & Appointment</h2>

                    <p className="text-sm text-slate-300">
                        For appointment, timing confirmation or basic queries, you can send a
                        WhatsApp message directly.
                    </p>

                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-cyan-400 text-slate-900 rounded-full font-medium hover:bg-cyan-300"
                    >
                        WhatsApp Now
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-cyan-400/60 bg-cyan-400/10 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want this clinic website for your practice?
                </h2>

                <p className="text-sm text-slate-200">
                    I&apos;ll customize this design with your photo, clinic name, services,
                    timings & contact details. Delivery within 24–48 hours.
                </p>

                <a
                    href={wa}
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-cyan-400 text-slate-900 rounded-full font-medium hover:bg-cyan-300"
                >
                    Chat on WhatsApp
                </a>
            </section>

            {/* Floating Button */}
            <a
                href={wa}
                target="_blank"
                className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-900 rounded-full shadow-lg shadow-cyan-400/40"
            >
                💬 Book Visit
            </a>
        </main>
    );
}
