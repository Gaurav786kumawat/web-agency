import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-[70vh] flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-3xl font-semibold">Page Not Found</h1>
            <p className="text-slate-400 max-w-md">
                The page you’re looking for doesn’t exist — but I can help you build the
                right one for your business.
            </p>
            <Link
                href="/"
                className="px-5 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium hover:bg-emerald-400 transition"
            >
                Back to Home
            </Link>
        </main>
    );
}
