// app/restaurant-demo/page.js

const WHATSAPP_NUMBER = "917878583600";

export default function RestaurantDemoPage() {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Gaurav! I saw your restaurant website demo. Can you make a similar site for my business?"
    )}`;

    return (
        <main className="relative space-y-12 pb-24">
            {/* HERO BANNER */}
            <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                    Demo · Local Restaurant Website
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Taste Street Bistro
                </h1>
                <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                    A clean, modern one-page website for local restaurants. Menu, photos,
                    reviews and WhatsApp orders in one place. Your business can look like
                    this online.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition"
                    >
                        Get a similar website
                    </a>
                    <span className="text-xs text-slate-400">
                        Demo only · Content & photos can be fully customized.
                    </span>
                </div>
            </section>

            {/* MENU / SERVICES */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Today&apos;s Specials</h2>
                    <p className="text-sm text-slate-300">
                        Show your best sellers, combos and offers with clear pricing.
                    </p>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                            <span>Paneer Tikka Platter</span>
                            <span className="font-medium text-emerald-400">₹249</span>
                        </div>
                        <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                            <span>Masala Pasta Bowl</span>
                            <span className="font-medium text-emerald-400">₹199</span>
                        </div>
                        <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                            <span>Loaded Fries with Cheese</span>
                            <span className="font-medium text-emerald-400">₹159</span>
                        </div>
                        <div className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                            <span>Family Combo (2 mains + 2 drinks)</span>
                            <span className="font-medium text-emerald-400">₹499</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Why this works for your shop</h2>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>• Customers quickly see what you offer & price range</li>
                        <li>• You can highlight best sellers & combos</li>
                        <li>• Easy to update menu items in future</li>
                    </ul>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">What customers say</h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {[
                        {
                            name: "Rohit S.",
                            text: "Super fast delivery and the food was fresh. We keep coming back every weekend!",
                        },
                        {
                            name: "Aarti & family",
                            text: "Loved the family combo. Great value and tasty. The online menu made it easy to decide.",
                        },
                        {
                            name: "College group",
                            text: "Perfect place for evening hangouts. Easy to share the menu link in WhatsApp groups.",
                        },
                    ].map((t) => (
                        <div
                            key={t.name}
                            className="border border-slate-800 rounded-2xl p-4 bg-slate-900/40"
                        >
                            <p className="text-slate-200 mb-2">&ldquo;{t.text}&rdquo;</p>
                            <p className="text-[11px] text-slate-400">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY + MAP */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Photo Gallery</h2>
                    <p className="text-sm text-slate-300">
                        Show your ambience, food photos and real experience.
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-400">
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Front View / Logo
                        </div>
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Interior / Seating
                        </div>
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Best Seller Dish
                        </div>
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Family Area
                        </div>
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Kitchen / Hygiene
                        </div>
                        <div className="h-24 rounded-xl bg-slate-800 flex items-center justify-center">
                            Offers / Combos
                        </div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                        In real client project, we will use your actual photos.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Location & Timing</h2>
                    <p className="text-sm text-slate-300">
                        Customers can easily find you using Google Maps & contact with one
                        tap.
                    </p>
                    <div className="rounded-2xl border border-slate-800 h-48 bg-slate-900/40 flex items-center justify-center text-xs text-slate-500">
                        Google Maps embed goes here (we&apos;ll add your real location in
                        your website)
                    </div>
                    <ul className="text-sm text-slate-300 space-y-1">
                        <li>📍 Main Market Road, Sample City</li>
                        <li>🕒 Open: 11 AM – 11 PM (Mon–Sun)</li>
                        <li>📞 Tap WhatsApp button to call / message</li>
                    </ul>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="rounded-3xl border border-emerald-500/60 bg-emerald-500/5 p-6 space-y-3">
                <h2 className="text-xl font-semibold">
                    Want a similar website for your restaurant or shop?
                </h2>
                <p className="text-sm text-slate-200">
                    I&apos;ll customize this design with your name, photos, menu & map.
                    Delivery usually within 24–48 hours.
                </p>
                <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition"
                >
                    Talk to me on WhatsApp
                </a>
            </section>

            {/* WHATSAPP FLOATING BUTTON */}
            <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 right-5 md:bottom-7 md:right-[max(3rem,calc(50%-540px))] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
                <span className="text-lg">💬</span>
                <span>Order / Enquiry</span>
            </a>
        </main>
    );
}
