export default function AboutPage() {
    const portfolioLink = "https://portfolio.gauravkumawat.online";
    return (
        <main className="space-y-6 pb-20">
            <h1 className="text-3xl font-semibold">About Me</h1>

            <p className="text-slate-300 leading-relaxed">
                I’m <span className="text-emerald-400 font-medium">Gaurav Kumawat</span>, an
                AI-assisted web developer focused on building clean, fast and modern
                websites for businesses, creators and startups.
            </p>

            <p className="text-slate-300 leading-relaxed">
                I use a combination of modern tools like Next.js, React and Tailwind
                along with AI-driven workflows to deliver professional websites quickly
                and efficiently.
            </p>

            <p className="text-slate-300 leading-relaxed">
                My goal is to help small businesses and growing brands build a strong
                online presence with simple, clear and high-performing websites.
            </p>

            <p className="text-slate-300 leading-relaxed">
                Whether you need a one-page site, a business website, or a full-scale
                multi-page platform with authentication and payments — I can help you
                build it.
            </p>

            <a
                href={portfolioLink}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition"
            >
                View My Portfolio Website
            </a>
        </main>
    );
}
