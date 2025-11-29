// src/app/page.js
"use client";

import Link from "next/link";

const WHATSAPP = "917878583600";

const services = [
  {
    name: "One-Page Business Website",
    desc: "Clean, modern single-page websites for restaurants, gyms, salons, clinics, coaching, cafes, car bazaars & more — ready in 24–48 hours.",
    note: "Built with Next.js + Tailwind, mobile-first & fast.",
  },
  {
    name: "Multi-Page & Advanced Business Websites",
    desc: "Fully customised websites with multiple pages, service sections, gallery, pricing, forms, branding & more — tailored for growing businesses.",
    note: "Best for clinics, coaching, real estate, salons, studios, cafes & service providers.",
  },
  {
    name: "Full-Stack Platforms (Login, Payments, Dashboard)",
    desc: "Advanced business platforms with authentication, payment integration (Razorpay/Stripe), admin panels, dashboards, bookings & product listings.",
    note: "For startups, brands & businesses that need powerful digital systems.",
  },
  {
    name: "City-Specific Website + Local Directory",
    desc: "Hyperlocal website + business listing platform for Danta, Sikar & nearby areas.",
    note: "Ideal for local brands, pages & community projects.",
  },
  {
    name: "WhatsApp Automation & Business Setup",
    desc: "Auto-replies, greeting messages, catalog setup, FAQs & lead-capture flows for WhatsApp Business.",
    note: "Perfect for shops & service providers.",
  },
  {
    name: "AI Tools & Content Helpers",
    desc: "Caption generator, hashtag generator, blog drafts, QR tool, image compressor and more small utilities.",
    note: "Time-saving tools for creators & business owners.",
  },
  {
    name: "Website Speed & Optimization",
    desc: "Image compression, WebP conversion, code cleanup & Lighthouse score improvements.",
    note: "Faster loading = more conversions.",
  },
  {
    name: "Portfolio + Resume + LinkedIn Setup",
    desc: "Clean personal portfolio websites, ATS-friendly resumes & LinkedIn guidance.",
    note: "Perfect for students, job-seekers & professionals.",
  },
];


const pricing = [
  {
    title: "Starter Website",
    price: "₹1,499 – ₹2,499",
    bestFor: "Small shops, freelancers, students",
    items: [
      "1-page website (based on existing demo)",
      "Basic content, logo & photo setup",
      "WhatsApp click-to-chat button",
      "Mobile-friendly, clean and fast",
      "Delivery within 24–48 hours",
    ],
  },
  {
    title: "Business Website",
    price: "₹2,999 – ₹4,999",
    bestFor: "Running businesses & local brands",
    highlight: true,
    items: [
      "Customised 1-page or multi-section design",
      "Services / menu / packages / gallery sections",
      "Google Maps & contact integrations",
      "Basic SEO titles + description",
      "Performance & mobile responsiveness checks",
    ],
  },
  {
    title: "Multi-Page Website",
    price: "₹5,000 – ₹12,000",
    bestFor: "Clinics, coaching, salons, real estate, studios & service businesses",
    items: [
      "2–6 page custom website",
      "Advanced sections (FAQs, gallery, reviews, pricing)",
      "Lead/contact forms",
      "Brand colours & personalised layout",
      "Delivery: 4–7 days depending on content",
    ],
  },
  {
    title: "Full-Stack Website / Platform",
    price: "₹20,000 – ₹60,000+",
    bestFor: "Startups, portals, advanced business systems",
    items: [
      "Authentication (login/signup)",
      "Payment integration (Razorpay / Stripe)",
      "Admin panel / dashboard",
      "Bookings, product listings, API-based features",
      "Role-based access (admin, user, staff)",
      "Built with modern frameworks + AI-assisted workflow",
    ],
  },
  {
    title: "Support & Maintenance",
    price: "From ₹499 / year",
    bestFor: "Existing websites & repeat clients",
    items: [
      "Small text / photo updates",
      "Minor fixes & speed tweaks",
      "WhatsApp support",
      "Festival / offer updates (add-on)",
    ],
  },
];


const process = [
  {
    step: "1",
    title: "You pick a demo",
    text: "From my demo gallery, you choose any layout closest to your business (restaurant, gym, salon, etc.).",
  },
  {
    step: "2",
    title: "Share basic details",
    text: "You send name, logo (if any), services, pricing, address, photos & WhatsApp number.",
  },
  {
    step: "3",
    title: "I customise & launch",
    text: "I adapt the chosen design, plug in your content, connect WhatsApp & deploy it live.",
  },
  {
    step: "4",
    title: "Ongoing support",
    text: "If you need changes or upgrades, I handle them with simple, fixed pricing.",
  },
];

const demoHighlights = [
  {
    slug: "restaurant-demo",
    label: "Restaurant / Dhaba",
    note: "Menu, offers, photos & WhatsApp orders.",
  },
  {
    slug: "gym-demo",
    label: "Gym / Fitness",
    note: "Plans, trainers & transformation-focused layout.",
  },
  {
    slug: "salon-demo",
    label: "Salon / Beauty",
    note: "Services, packages & appointment booking.",
  },
  {
    slug: "kirana-shop-demo",
    label: "Kirana / General Store",
    note: "Ration packs, items & home delivery orders.",
  },
  {
    slug: "clinic-demo",
    label: "Clinic / Doctor",
    note: "Doctor profile, timings & fees.",
  },
  {
    slug: "beauty-of-danta-demo",
    label: "Beauty of Danta",
    note: "Hyperlocal Danta showcase + business directory.",
  },
];

export default function HomePage() {
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Gaurav! I saw your services website. I want to discuss a website / automation for my business."
  )}`;

  const portfolioLink = "https://portfolio.gauravkumawat.online";

  return (
    <main className="space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          Web · Automation · Local Business · Startups
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          I build{" "}
          <span className="text-emerald-400">
            fast, simple and complex multipage websites & tools
          </span>{" "}
          for local businesses, creators & startups. 
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl">
          Based in Danta, Sikar (Rajasthan). Using modern tools and AI assistance, I deliver everything from simple one-page business websites to complex multi-page setups with payments, login systems and dashboards — all built fast, clean and tailored to your needs.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={wa}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition"
          >
            Discuss your website on WhatsApp
          </a>
          <Link
            href="/demos"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-slate-600 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            View all demo websites
          </Link>
          <Link
            href={portfolioLink}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-slate-600 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            View my Portfolio
          </Link>
        </div>

        <p className="text-[11px] text-slate-500">
          Typical delivery: 24–48 hours for 1-page sites once content is shared.
        </p>
      </section>

      {/* SERVICES */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">What I can do for you</h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          From shops and coaching institutes to clinics and service providers, I create sharp, focused websites that clearly explain what you offer — and help customers contact you without confusion.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="border border-slate-800 rounded-2xl bg-slate-900/40 p-5"
            >
              <h3 className="text-base font-semibold text-slate-50">
                {s.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2">{s.desc}</p>
              {s.note && (
                <p className="text-[11px] text-slate-500 mt-2">{s.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DEMO HIGHLIGHTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready demo layouts
          </h2>
          <Link
            href="/demos"
            className="text-xs md:text-sm text-emerald-300 hover:underline"
          >
            View full demo gallery →
          </Link>
        </div>
        <p className="text-sm text-slate-300 max-w-3xl">
          I&apos;ve already built ready-to-customise layouts for several common
          business types. This helps us launch your site faster — we just
          customise text, pricing, photos and contact details.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {demoHighlights.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="group border border-slate-800 rounded-2xl bg-slate-900/40 p-5 hover:border-emerald-400/80 hover:bg-slate-900 transition"
            >
              <p className="text-xs text-slate-400 mb-1">Demo layout</p>
              <h3 className="text-base font-semibold text-slate-50">
                {d.label}
              </h3>
              <p className="text-sm text-slate-300 mt-2">{d.note}</p>
              <p className="text-[11px] text-emerald-300 mt-3 group-hover:underline">
                Open demo →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How we will work</h2>
        <div className="grid md:grid-cols-4 gap-5 text-sm">
          {process.map((p) => (
            <div
              key={p.step}
              className="border border-slate-800 rounded-2xl bg-slate-900/40 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-6 w-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-bold">
                  {p.step}
                </span>
                <h3 className="font-medium text-slate-100">{p.title}</h3>
              </div>
              <p className="text-slate-300 text-xs md:text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Pricing Overview
          </h2>
          <Link
            href="/demos"
            className="text-xs md:text-sm text-emerald-300 hover:underline"
          >
            View full pricing list →
          </Link>
        </div>
        <p className="text-sm text-slate-300 max-w-3xl">
          Exact quote depends on your content and requirements, but most local
          business websites fit in these simple ranges. I&apos;ll tell you the
          exact amount before starting.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((plan) => (
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
              <p className="mt-2 text-xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-xs text-slate-400">{plan.bestFor}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Who this is perfect for
        </h2>
        <div className="grid md:grid-cols-3 gap-5 text-sm">
          <div className="border border-slate-800 rounded-2xl bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-100 mb-2">
              Local shop owners
            </h3>
            <p className="text-slate-300 text-sm">
              Restaurants, cafes, kirana stores, salons, gyms, clinics,
              coaching centres, car wash, car bazar and more.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-100 mb-2">
              Creators & freelancers
            </h3>
            <p className="text-slate-300 text-sm">
              Photographers, trainers, tutors, event planners, YouTubers — anyone
              who needs a simple public page.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl bg-slate-900/40 p-4">
            <h3 className="font-medium text-slate-100 mb-2">
              Students & freshers
            </h3>
            <p className="text-slate-300 text-sm">
              Portfolios, resumes and LinkedIn-friendly profiles to help you get
              noticed faster.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="rounded-3xl border border-emerald-500/60 bg-emerald-500/10 p-6 md:p-8 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Tell me what you need in 1–2 lines.
        </h2>
        <p className="text-sm md:text-base text-slate-400 md:text-slate-100 max-w-3xl">
          Example: “Restaurant website with menu + photos” or “Gym page with
          trainers & fees” or “Clinic timings + appointment button”. I&apos;ll
          reply and tell you what&apos;s possible, time and pricing.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={wa}
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-slate-950 text-emerald-400 border border-emerald-400 hover:bg-slate-900 transition"
          >
            Open WhatsApp chat
          </a>
          <Link
            href="/demos"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-slate-700 text-slate-300 md:text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            First see demo layouts
          </Link>
        </div>

        <p className="text-[11px] text-slate-300 md:text-slate-300">
          Languages: Hindi / English · Location: Danta, Sikar (Rajasthan) ·
          Work: Mostly remote via WhatsApp.
        </p>
      </section>

      {/* FLOATING WHATSAPP BUTTON
      <a
        href={wa}
        target="_blank"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-[max(1.5rem,calc(50%-640px))] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
      >
        <span className="text-lg">💬</span>
        <span>WhatsApp Gaurav</span>
      </a> */}
    </main>
  );
}
