"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { href: "/", label: "Services" },
    { href: "/demos", label: "Demo Websites" },
    { href: "/tools", label: "AI Tools Hub" },
    { href: "/pricing", label: "Pricing" },
    { href: "/beauty-of-danta-demo", label: "Our City Landing Page" },
    { href: "/about", label: "About Me" },
];

export default function SiteHeader({ whatsappLink }) {
    const pathname = usePathname() || "/";
    const [isOpen, setIsOpen] = useState(false);

    // Route change → hamburger auto close
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href);
    };

    return (
        <header
            className="sticky top-0 z-40 rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl shadow-xl px-3 py-2 md:px-4 md:py-3"
            role="banner"
            aria-label="Main Navigation"
        >
            {/* Row: Brand + CTA + Hamburger */}
            <div className="flex items-center justify-between gap-3">
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                    aria-label="Home — Gaurav Kumawat"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative">
                        <span
                            className="h-9 w-9 md:h-10 md:w-10 rounded-2xl 
              bg-gradient-to-br from-emerald-400 to-cyan-400
              text-slate-950 flex items-center justify-center text-sm font-extrabold
              shadow-[0_6px_30px_rgba(45,212,191,0.35)] group-hover:scale-105 transition-transform"
                            aria-hidden="true"
                        >
                            GK
                        </span>
                    </div>

                    <div className="leading-tight">
                        <p className="text-sm md:text-[15px] font-semibold tracking-tight">
                            Gaurav Kumawat
                        </p>
                        <p className="text-[11px] md:text-[12px] text-slate-400">
                            AI-Assisted Web Developer · Sikar, Rajasthan
                        </p>
                        <p className="mt-0.5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-[4px] text-[10px] font-medium text-emerald-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            Open for new projects
                        </p>
                    </div>
                </Link>

                {/* Desktop CTA */}
                <div className="hidden sm:flex items-center gap-2">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full 
            bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs md:text-sm font-semibold
            px-3.5 py-1.5 shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-transform hover:-translate-y-[2px] focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                        aria-label="Chat with Gaurav on WhatsApp — Get a website quote"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-1.657 0-3.215-.365-4.617-1.044L2 22l1.044-5.383A9.956 9.956 0 012 12z"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>WhatsApp</span>
                        <span className="hidden md:inline text-[11px] bg-emerald-900/12 rounded-full px-2 py-[1px]">
                            Get a website quote
                        </span>
                    </a>
                </div>

                {/* Hamburger (mobile only) */}
                <button
                    type="button"
                    onClick={() => setIsOpen((o) => !o)}
                    className="sm:hidden flex flex-col justify-center items-center w-9 h-9 rounded-xl border border-slate-700 bg-slate-900/70 cursor-pointer gap-[4px] transition hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`w-4 h-[2px] bg-slate-200 rounded-full transition-transform origin-center ${isOpen ? "translate-y-[3px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`w-4 h-[2px] bg-slate-200 rounded-full transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`w-4 h-[2px] bg-slate-200 rounded-full transition-transform origin-center ${isOpen ? "-translate-y-[3px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* NAV LINKS */}
            <nav
                className="mt-3 sm:mt-3 sm:flex sm:items-center sm:justify-between"
                aria-label="Primary"
            >
                {/* MOBILE MENU */}
                <div
                    className={`sm:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 text-xs md:text-sm text-slate-300 pb-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-3 py-1.5 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-500/30
                  ${isActive(item.href)
                                        ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/40"
                                        : "hover:text-emerald-200 hover:bg-slate-800/80"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile CTA inside menu */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl 
              bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold
              px-3 py-1.5 shadow-[0_6px_24px_rgba(16,185,129,0.28)] transition focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden sm:flex gap-2 text-xs md:text-sm text-slate-300">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-emerald-500/30
                ${isActive(item.href)
                                    ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/40"
                                    : "hover:text-emerald-200 hover:bg-slate-800/80"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
