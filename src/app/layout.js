// src/app/layout.js
import "./globals.css";
import Link from "next/link";
import SiteHeader from "./SiteHeader";

export const metadata = {
  title: "Web Agency – Modern Business Websites & Tools",
  description:
    "A modern web agency platform offering business websites, demos, AI tools and services. Built with Next.js and Tailwind.",
  openGraph: {
    title: "Web Agency – Next.js Business Website Builder",
    description:
      "Business demos, pricing, tools and services. Built with Next.js.",
    url: "https://services.gauravkumawat.online",
    siteName: "Web Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const WHATSAPP_NUMBER = "917878583600";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gaurav%2C%20I%20want%20a%20website%20for%20my%20business`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium"
        >
          Skip to content
        </a>

        {/* Soft gradient background */}
        <div
          className="fixed inset-0 -z-10 
          bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.10),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="fixed inset-0 -z-20 bg-slate-950/95" aria-hidden="true" />

        {/* MAIN WRAPPER (extra bottom padding for fixed footer + floating CTA) */}
        <div className="relative max-w-6xl mx-auto px-4 pt-4 md:pt-6 pb-32 space-y-6">
          {/* TOP NAVBAR (client component) */}
          <SiteHeader whatsappLink={WHATSAPP_LINK} />

          {/* MAIN CONTENT */}
          <main id="main" className="pt-2 md:pt-4 pb-4 md:pb-6 space-y-8">
            {children}
          </main>
        </div>

        {/* FIXED FOOTER (always at bottom) */}
        <footer className="fixed bottom-0 inset-x-0 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <p className="leading-snug">
                © 2025 Gaurav Kumawat.{" "}
                  <br></br>
                  <span className="text-slate-400">
                    Designed and developed with modern tools and clean, efficient workflows.
                  </span>
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                  Sikar · Rajasthan
                </span>
                <Link
                  href="/demos"
                  className="underline-offset-4 hover:underline text-emerald-300"
                >
                  View demo websites →
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/pricing" className="text-slate-400 hover:text-emerald-300">
                Pricing
              </Link>
              <Link href="/" className="text-slate-400 hover:text-emerald-300">
                Services
              </Link>
            </div>
          </div>
        </footer>

        {/* FLOATING CTA — sticky WhatsApp button */}
        <div className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-50">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat with Gaurav — Get a website quote"
            className="group relative inline-flex items-center gap-2 sm:gap-3 rounded-full bg-emerald-500 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_12px_40px_rgba(16,185,129,0.22)] transform transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 max-w-[260px]"
          >
            {/* icon */}
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-slate-950"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-1.657 0-3.215-.365-4.617-1.044L2 22l1.044-5.383A9.956 9.956 0 012 12z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm font-semibold text-slate-950">
                Chat on WhatsApp
              </span>
              <span className="hidden sm:inline text-[11px] text-slate-900/70">
                Get a website quote
              </span>
            </div>

            {/* subtle pulse ring */}
            <span
              className="absolute -inset-1 rounded-full animate-pulse-slow opacity-60 pointer-events-none"
              style={{
                boxShadow: "0 8px 30px rgba(16,185,129,0.12)",
              }}
              aria-hidden="true"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
