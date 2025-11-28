// src/app/demos/page.js
import Link from "next/link";

const demos = [
    {
        slug: "beauty-of-danta-demo",
        name: "Beauty of Danta (Hyperlocal Brand)",
        tag: "City Brand",
        blurb: "Danta places, events & local business directory.",
    },
    {
        slug: "restaurant-demo",
        name: "Restaurant / Dhaba",
        tag: "Food & Dining",
        blurb: "Menu, offers, photos & WhatsApp orders for local restaurants.",
    },
    {
        slug: "gym-demo",
        name: "Gym / Fitness Center",
        tag: "Fitness",
        blurb: "Plans, trainers, gallery & trial booking for gyms.",
    },
    {
        slug: "salon-demo",
        name: "Salon / Beauty Parlour",
        tag: "Beauty",
        blurb: "Services, packages, photos & appointment booking.",
    },
    {
        slug: "clinic-demo",
        name: "Clinic / Doctor",
        tag: "Medical",
        blurb: "Doctor profile, timings, fees & WhatsApp appointments.",
    },
    {
        slug: "coaching-demo",
        name: "Coaching / Tuition",
        tag: "Education",
        blurb: "Courses, batches, faculty & admission inquiry.",
    },
    {
        slug: "photography-demo",
        name: "Photography Studio",
        tag: "Media",
        blurb: "Gallery, packages & shoot booking.",
    },
    {
        slug: "real-estate-demo",
        name: "Real Estate / Property Dealer",
        tag: "Property",
        blurb: "Featured properties, categories & WhatsApp inquiry.",
    },
    {
        slug: "cafe-demo",
        name: "Cafe / Bakery / Tea Shop",
        tag: "Food & Cafe",
        blurb: "Menu, combos, photos & table/parcel booking.",
    },
    {
        slug: "event-planner-demo",
        name: "Event / Wedding Planner",
        tag: "Events",
        blurb: "Services, packages, decor gallery & event booking.",
    },
    {
        slug: "catering-demo",
        name: "Catering Services",
        tag: "Food & Events",
        blurb: "Event catering menu, packages & enquiry.",
    },
    {
        slug: "electrician-demo",
        name: "Electrician / Repair",
        tag: "Local Service",
        blurb: "Services list, emergency contact & visit booking.",
    },
    {
        slug: "fitness-trainer-demo",
        name: "Fitness / Yoga Trainer",
        tag: "Coaching",
        blurb: "Plans, transformations & WhatsApp join link.",
    },
    {
        slug: "car-bazar-demo",
        name: "Car Bazar / Used Cars",
        tag: "Automobile",
        blurb: "Car listings, prices & test drive booking.",
    },
    {
        slug: "kirana-shop-demo",
        name: "Kirana / General Store",
        tag: "Daily Needs",
        blurb: "Ration packs, items & home delivery orders.",
    },
    {
        slug: "mobile-repair-demo",
        name: "Mobile Repair Shop",
        tag: "Electronics",
        blurb: "Repairs, accessories & contact.",
    },
    {
        slug: "stationery-shop-demo",
        name: "Stationery / Book Shop",
        tag: "Education",
        blurb: "Books, copies, school items & bulk orders.",
    },
    {
        slug: "dj-sound-tent-demo",
        name: "DJ / Sound / Tent",
        tag: "Events",
        blurb: "Sound system, tent & lighting packages.",
    },
];

export default function DemosPage() {
    return (
        <main className="space-y-10 pb-24">
            <section className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                    Demo Gallery
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Ready-to-Use Business Website Demos
                </h1>
                <p className="text-sm md:text-base text-slate-300 max-w-3xl">
                    These are one-page demo layouts I have built for local businesses in
                    Danta, Sikar and nearby areas. For any business, I simply customise
                    the content, photos and contact details and launch it within 24–48
                    hours.
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
                {demos.map((demo) => (
                    <Link
                        key={demo.slug}
                        href={`/${demo.slug}`}
                        className="group border border-slate-800 rounded-2xl bg-slate-900/40 p-5 hover:border-emerald-400/80 hover:bg-slate-900 transition"
                    >
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <h2 className="text-lg font-semibold text-slate-50">
                                {demo.name}
                            </h2>
                            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200">
                                {demo.tag}
                            </span>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">{demo.blurb}</p>
                        <p className="text-xs text-emerald-300 group-hover:underline">
                            View demo →
                        </p>
                    </Link>
                ))}
            </section>

            <section className="text-xs text-slate-500">
                <p>
                    Note: All demos are examples. For real clients I replace text,
                    pricing, images and contact details as per their business.
                </p>
            </section>
        </main>
    );
}
