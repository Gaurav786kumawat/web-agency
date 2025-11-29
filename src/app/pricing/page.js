// src/app/pricing/page.js
"use client";

import Link from "next/link";

const WHATSAPP = "917878583600";

const websitePlans = [
  {
    title: "Starter 1-Page Website",
    price: "₹1,499 – ₹2,499 (one-time)",
    bestFor: "Small shops, students & simple needs",
    points: [
      "1-page website based on an existing demo layout",
      "Your name, logo, services, pricing & contact added",
      "WhatsApp click-to-chat button",
      "Mobile-friendly, clean and fast",
      "Delivery within 24–48 hours after content is shared",
    ],
  },
  {
    title: "Business Website",
    price: "₹2,999 – ₹4,999 (one-time)",
    bestFor: "Running businesses: clinics, gyms, salons, coaching, cafes, etc.",
    points: [
      "Customised 1-page or multi-section layout using any demo",
      "Menu / services / packages / FAQs sections",
      "Google Maps + contact integrations",
      "Basic SEO titles & descriptions",
      "Performance & mobile responsiveness checks",
    ],
  },
  {
    title: "Custom / Multi-Page Website",
    price: "From ₹5,000+",
    bestFor: "When you need more than a simple 1-page setup",
    points: [
      "Multi-section or simple multi-page layouts",
      "Extra sections like blogs, gallery, reviews & forms",
      "Designed fully around your brand requirements",
      "Final pricing shared after a short WhatsApp discussion",
    ],
  },
  {
    title: "Full-Stack Business Website / Platform",
    price: "Typically ₹20,000 – ₹60,000+",
    bestFor: "Serious businesses, startups & advanced requirements",
    highlight: true,
    points: [
      "Multi-page website or full web app with clear information architecture",
      "Authentication (login / signup) using modern auth providers",
      "Payment integration (Razorpay / Stripe)",
      "Admin panel / CMS / dashboards for data management",
      "Advanced forms, product listings & booking flows",
      "API-based features + role-based access control",
      "Final scope & quotation after detailed WhatsApp discussion",
    ],
  },
];


const recurring = [
  {
    title: "Yearly Hosting & Maintenance",
    price: "₹499 – ₹1,499 / year",
    points: [
      "Small text / photo updates",
      "Basic bug fixes & speed tweaks",
      "Help with domain & hosting renewals",
      "WhatsApp support for minor issues",
    ],
  },
  {
    title: "WhatsApp Business Setup & Automation",
    price: "₹399 – ₹999 (one-time)",
    points: [
      "Greeting & away messages",
      "FAQ quick replies & templates",
      "Catalog / services listing setup",
      "Ideal for salons, clinics, shops & coaching centres",
    ],
  },
  {
    title: "Beauty of Danta Directory Listing",
    price: "Planned: ₹299 / month or ₹499 / year",
    points: [
      "Your business listed in the upcoming directory (demo for now)",
      "Name, photo, category, contact details & map location",
      "Great for businesses in Danta & nearby areas",
      "Final pricing will be confirmed after launch",
    ],
  },
];


const addons = [
  {
    title: "Website Speed Optimization",
    price: "₹499 – ₹1,499",
    points: [
      "Image compression & WebP conversion",
      "CSS/JS cleanup where possible",
      "Basic PageSpeed / Lighthouse improvements",
    ],
  },
  {
    title: "Festival / Offer Landing Page",
    price: "₹399 – ₹999 each",
    points: [
      "Special promotional pages for Diwali, Holi, New Year, etc.",
      "Offer details, countdown timer & CTA sections",
      "Great for seasonal campaigns & repeat customers",
    ],
  },
  {
    title: "AI Tools Access (Captions, Hashtags, QR, etc.)",
    price: "₹99 – ₹499",
    points: [
      "Access to time-saving AI tools for daily content",
      "Custom tools can be developed separately",
    ],
  },
  {
    title: "Portfolio / Resume / LinkedIn Package",
    price: "₹799 – ₹1,999",
    points: [
      "Clean professional portfolio site",
      "ATS-friendly resume (PDF)",
      "LinkedIn optimisation guidance",
    ],
  },
];

const faqs = [
  {
    q: "How is the exact price decided?",
    a: "After you share your requirements on WhatsApp — business type, number of pages, features and content — I provide a clear price range. The final quote is confirmed before work begins.",
  },
  {
    q: "What is the payment process?",
    a: "For most projects, it's 50% advance and 50% after completion. UPI / PhonePe / Google Pay preferred. Larger or advanced projects can use milestone-based payments.",
  },
  {
    q: "How long will it take to build my website?",
    a: "If your content is ready, a 1-page website typically goes live within 24–48 hours. Multi-page or advanced websites depend on scope and complexity.",
  },
  {
    q: "What if I need changes later?",
    a: "Small text or photo updates are covered under yearly maintenance. Bigger updates (new pages, new sections, new features) have clear pricing shared beforehand.",
  },
  {
    q: "Do you build advanced websites (login, payments, dashboards, etc.)?",
    a: "Yes. I build websites with authentication, payment integration, dashboards, booking systems, product listings and API features using modern development and AI-assisted workflows. A detailed WhatsApp discussion is required to finalise scope.",
  },
];



export default function PricingPage() {
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your pricing page. I want to know which plan is best for my website idea."
    )}`;

    return (
        <main className="space-y-12 pb-24">
            {/* HERO */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                    Pricing · Simple & transparent
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Website & Service Pricing — Clearly Explained
                </h1>
                <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                    Every business has different needs. Instead of one fixed price, I provide clear ranges based on your pages, features and goals. This page will help you understand what to expect — from simple one-page sites to advanced full-stack platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium hover:bg-emerald-400 transition"
                    >
                        Ask which plan fits my idea
                    </a>
                    <Link
                        href="/demos"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-600 text-sm hover:border-emerald-400 hover:text-emerald-300 transition"
                    >
                        First see demo websites
                    </Link>
                </div>
            </section>

            {/* WEBSITE PLANS */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    WEBSITE PACKAGES (ONE-TIME)
                </h2>
                <p className="text-sm text-slate-300 max-w-3xl">
                    This is the base pricing range. Depending on your business needs, the final quote may vary slightly. Most projects fall into these categories — from simple one-page websites to fully custom multi-page or full-stack platforms.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {websitePlans.map((plan) => (
                        <div
                            key={plan.title}
                            className={`rounded-2xl p-5 border ${plan.highlight
                                ? "border-emerald-500 bg-emerald-500/10"
                                : "border-slate-800 bg-slate-900/40"
                                }`}
                        >
                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                {plan.title}
                            </p>
                            <p className="mt-2 text-lg font-semibold">{plan.price}</p>
                            <p className="mt-1 text-[11px] text-slate-400">{plan.bestFor}</p>
                            <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                                {plan.points.map((p) => (
                                    <li key={p} className="flex gap-2">
                                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* RECURRING / LONG TERM */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Long-term & recurring services
                </h2>
                <p className="text-sm text-slate-300 max-w-3xl">
                    These services ensure you continue receiving support, updates and added value even after your website is live. They help maintain long-term stability and growth as your business expands.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {recurring.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl p-5 border border-slate-800 bg-slate-900/40"
                        >
                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                {item.title}
                            </p>
                            <p className="mt-2 text-lg font-semibold">{item.price}</p>
                            <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                                {item.points.map((p) => (
                                    <li key={p} className="flex gap-2">
                                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ADD-ONS */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Add-ons & extra services
                </h2>
                <p className="text-sm text-slate-300 max-w-3xl">
                    These are optional add-on services that you can include anytime — such as speed improvements, festival landing pages, AI tools, portfolios and more.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {addons.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl p-5 border border-slate-800 bg-slate-900/40"
                        >
                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                {item.title}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-emerald-300">
                                {item.price}
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                                {item.points.map((p) => (
                                    <li key={p} className="flex gap-2">
                                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Common questions
                </h2>
                <div className="space-y-3 text-sm">
                    {faqs.map((f) => (
                        <div
                            key={f.q}
                            className="border border-slate-800 rounded-2xl bg-slate-900/40 p-4"
                        >
                            <p className="font-medium text-slate-100 mb-1">{f.q}</p>
                            <p className="text-slate-300 text-sm">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-emerald-500/60 bg-emerald-500/10 p-6 md:p-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    If you&apos;re unsure which package aligns with your requirements, feel free to send a short WhatsApp message or voice note.

                </h2>
                <p className="text-sm md:text-base text-slate-100 max-w-3xl">
                    Just mention your business type, estimated number of pages and budget range — I&apos;ll recommend the most appropriate solution for your needs.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={wa}
                        target="_blank"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium hover:bg-emerald-400 transition"
                    >
                        Talk on WhatsApp
                    </a>
                    <Link
                        href="/demos"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700 text-sm hover:border-emerald-400 hover:text-emerald-300 transition"
                    >
                        See demo layouts again
                    </Link>
                </div>

                <p className="text-[11px] text-slate-300">
                    Note: Pricing is flexible — especially for early-stage businesses, students and long-term clients. We can always discuss budget-friendly options based on your situation and requirements.
                </p>
            </section>

            {/* FLOATING WHATSAPP (optional – uncomment if needed) */}
            {/*
      <a
        href={wa}
        target="_blank"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-[max(1.5rem,calc(50%-640px))] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
      >
        💬 Ask about pricing
      </a>
      */}
        </main>
    );
}

