"use client";

export default function ElectricianDemoPage() {
  const whatsappLink =
    "https://wa.me/917878583600?text=Hi%20Gaurav,%20I%20want%20a%20website%20for%20my%20electrician%20/%20repair%20service%20business";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top Bar / Navbar */}
      <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-xs font-bold shadow-lg shadow-sky-500/30">
              DE
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">
                Danta Electric Care
              </p>
              <p className="text-xs text-slate-400">
                Electrician & Home Appliance Repair Services
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs md:text-sm">
            <a href="#services" className="text-slate-300 hover:text-sky-400">
              Services
            </a>
            <a href="#packages" className="text-slate-300 hover:text-sky-400">
              Packages
            </a>
            <a href="#gallery" className="text-slate-300 hover:text-sky-400">
              Gallery
            </a>
            <a href="#contact" className="text-slate-300 hover:text-sky-400">
              Contact
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-100 shadow-sm hover:bg-sky-500/20 transition"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 space-y-12 pb-24 pt-8 md:pt-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-900/80 px-6 py-10 md:px-10 md:py-14">
          <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-5 md:space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-black/40 px-3 py-1 text-[11px] font-medium text-sky-100 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Electrician Demo Website • Danta / Sikar Local
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                Trusted Electrician &{" "}
                <span className="text-sky-300">Home Repair Services</span> in
                Danta
              </h1>

              <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                Perfect one-page website for{" "}
                <span className="font-semibold text-sky-100">
                  electricians, wiring experts, inverter & appliance repair
                  technicians
                </span>{" "}
                serving Danta, Sikar, and nearby areas.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition"
                >
                  Book Electrician via WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2.5 text-xs md:text-sm font-medium text-slate-200 hover:border-sky-400 hover:text-sky-200 transition"
                >
                  See All Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 max-w-md text-xs md:text-sm">
                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                  <p className="text-lg md:text-xl font-semibold text-sky-300">
                    24/7
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Emergency call-out support
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                  <p className="text-lg md:text-xl font-semibold text-sky-300">
                    10+ yrs
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Local service experience
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-black/40 px-3 py-2.5">
                  <p className="text-lg md:text-xl font-semibold text-sky-300">
                    4.9★
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Customer rating (demo)
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right - Highlight Box */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-sky-500/40 bg-black/40 p-4 md:p-5 shadow-lg shadow-sky-500/20">
                <p className="text-[11px] font-semibold tracking-wide text-sky-100 uppercase mb-2">
                  Same-Day Electrical Fixes
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1.5">
                    <p className="font-semibold text-slate-100">
                      Home Electrical
                    </p>
                    <ul className="space-y-0.5 text-slate-300">
                      <li>• MCB / Fuse issues</li>
                      <li>• Fan & light fitting</li>
                      <li>• Wiring & short circuit</li>
                      <li>• Switchboard repair</li>
                    </ul>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-semibold text-slate-100">
                      Appliances & Power
                    </p>
                    <ul className="space-y-0.5 text-slate-300">
                      <li>• Inverter & battery</li>
                      <li>• Motor & pump wiring</li>
                      <li>• Geyser & AC points</li>
                      <li>• Earthing & safety checks</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  *You can customize this area with your{" "}
                  <span className="text-slate-200">actual services</span> and
                  specialties.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                  ✓ House / Shop electrical work
                  <br />
                  ✓ New wiring & renovation
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2.5">
                  ✓ Emergency breakdown support
                  <br />
                  ✓ Regular maintenance plans
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Electrician & Repair Services
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Highlight all your core services clearly so that local customers
                know exactly{" "}
                <span className="text-slate-200 font-medium">
                  when to call you for help
                </span>
                .
              </p>
            </div>
            <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
              Homes • Shops • Offices • Small Industries
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            {[
              {
                title: "Home Electrical Repair",
                desc: "Quick fixing of fans, lights, switches, plug points, doorbells, and minor electrical issues.",
                points: [
                  "Fault finding & troubleshooting",
                  "MCB tripping & fuse blown issues",
                  "New switchboard & plug points",
                ],
              },
              {
                title: "Full House / Shop Wiring",
                desc: "Complete wiring for new homes, shops, showrooms, and renovation projects.",
                points: [
                  "Concealed & surface wiring",
                  "Load calculation & planning",
                  "DB / MCB box installation",
                ],
              },
              {
                title: "Inverter & Battery Setup",
                desc: "Installation, shifting, and connection for home inverter & battery backup systems.",
                points: [
                  "Inverter fitting & wiring",
                  "Battery connection & safety",
                  "Regular inverter check-up",
                ],
              },
              {
                title: "Motor, Pump & Borewell",
                desc: "Wiring, starter panels, and repair for motors, submersible pumps & borewell systems.",
                points: [
                  "Starter panel connection",
                  "Timer & auto-cut systems",
                  "Three-phase wiring support",
                ],
              },
              {
                title: "Geyser, AC & Heavy Load",
                desc: "Safe wiring for geysers, AC units, refrigerators, and other heavy appliances.",
                points: [
                  "Dedicated power points",
                  "Proper earthing & MCB selection",
                  "AC outdoor / indoor wiring",
                ],
              },
              {
                title: "Safety & Inspection",
                desc: "Check complete wiring and suggest safety improvements to avoid future problems.",
                points: [
                  "Earthing & leakage checks",
                  "Old wiring inspection",
                  "Surge protection suggestions",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col gap-2"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
                <ul className="mt-1 space-y-1 text-xs text-slate-300">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Packages / Pricing */}
        <section id="packages" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Sample Visit Charges & Packages
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Show simple and transparent pricing for{" "}
                <span className="text-slate-200">visits, repair work, and new
                installations.</span>{" "}
                You can adjust these prices as per your local market.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              *Final cost depends on{" "}
              <span className="text-slate-300">problem, material & time</span>.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Basic Visit */}
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
              <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                Normal Visit
              </p>
              <h3 className="text-sm font-semibold">Basic Home Visit</h3>
              <p className="text-xs text-slate-400">
                For small issues like fan, light, switch repair, and minor work.
              </p>
              <p className="text-2xl font-semibold text-sky-300">
                ₹150–₹250
                <span className="text-xs font-normal text-slate-400">
                  {" "}
                  / visit
                </span>
              </p>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• Up to 1 hour technician time</li>
                <li>• Basic tools & fault-finding</li>
                <li>• Extra work on actual basis</li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-200 transition"
              >
                Book a Basic Visit
              </a>
            </div>

            {/* Standard / Popular */}
            <div className="relative rounded-3xl border border-sky-500/70 bg-gradient-to-br from-sky-500/15 via-slate-950 to-slate-900/80 p-5 flex flex-col gap-3 shadow-lg shadow-sky-500/20">
              <div className="absolute -top-3 right-4 rounded-full border border-sky-500/80 bg-sky-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-100">
                Most Booked
              </div>
              <p className="inline-flex items-center rounded-full border border-sky-500/50 bg-black/40 px-3 py-1 text-[11px] text-sky-100 w-fit">
                Wiring & Installation
              </p>
              <h3 className="text-sm font-semibold text-sky-50">
                New Point / Appliance Fit
              </h3>
              <p className="text-xs text-sky-50/85">
                For adding new points, fitting geyser / AC points, or small new
                wiring work.
              </p>
              <p className="text-2xl font-semibold text-sky-300">
                From ₹350
                <span className="text-xs font-normal text-sky-100/80">
                  {" "}
                  / point
                </span>
              </p>
              <ul className="space-y-1 text-xs text-sky-50/90">
                <li>• New fan / light / plug installation</li>
                <li>• Geyser / AC heavy load wire</li>
                <li>• Proper earthing & MCB selection</li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-300 transition"
              >
                Get a Custom Estimate
              </a>
            </div>

            {/* AMC / Contract */}
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-3">
              <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 w-fit">
                Shops & Offices
              </p>
              <h3 className="text-sm font-semibold">Monthly Maintenance Plan</h3>
              <p className="text-xs text-slate-400">
                For shops, small showrooms, and offices that want regular
                checkups & priority support.
              </p>
              <p className="text-2xl font-semibold text-sky-300">
                From ₹999
                <span className="text-xs font-normal text-slate-400">
                  {" "}
                  / month
                </span>
              </p>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• Fixed monthly visits</li>
                <li>• Priority breakdown support</li>
                <li>• Basic material at discounted rate</li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-black/40 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-200 transition"
              >
                Discuss Maintenance Plan
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Work & Project Gallery (Demo)
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Replace these boxes with photos of your{" "}
                <span className="text-slate-200 font-medium">
                  wiring work, panels, inverter setups, shop projects, and
                  before/after repairs
                </span>
                .
              </p>
            </div>
            <span className="hidden md:inline-flex rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
              Show neat wiring & professional work quality
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-xs">
            {[
              "Neat House DB / MCB Panel",
              "Complete Shop Wiring Project",
              "Inverter & Battery Setup",
              "Ceiling Fan & Light Fitting",
              "Motor & Pump Control Panel",
              "Night Emergency Repair Visit",
            ].map((label) => (
              <div
                key={label}
                className="group flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-3"
              >
                <div className="aspect-video w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-[11px] text-slate-500 group-hover:border-sky-400/70 group-hover:text-sky-200/80 transition">
                  Image Here
                </div>
                <p className="text-[11px] font-medium text-slate-200">
                  {label}
                </p>
                <p className="text-[10px] text-slate-500">
                  Short description about this work photo or project.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews / Testimonials */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Local Customer Reviews
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Build trust with real reviews from{" "}
                <span className="text-slate-200 font-medium">
                  home owners, shop owners, and offices
                </span>{" "}
                you have helped.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              Tip: You can also embed{" "}
              <span className="text-slate-300">Google / WhatsApp feedback</span>{" "}
              screenshots here.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 text-xs">
            {[
              {
                name: "Ramesh Kumar",
                tag: "Home Owner • Danta",
                text: "Same day visit for a serious wiring issue. He quickly found the fault and fixed it neatly. Now all lights and fans are working perfectly. Very polite behaviour.",
              },
              {
                name: "Shree Mobile & Electronics",
                tag: "Shop Owner • Main Market",
                text: "Did complete shop wiring with proper lights and display fittings. Work was clean and rate was reasonable. Also helped in inverter and power backup setup.",
              },
              {
                name: "Sunrise Coaching Center",
                tag: "Institute • Sikar Road",
                text: "We call him regularly for any fan, tube light or wiring related problem. Always responds on time and gives proper solution with safety in mind.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col h-full"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-slate-400">{review.tag}</p>
                  </div>
                  <div className="text-[11px] text-sky-300 font-semibold">
                    ★★★★★
                  </div>
                </div>
                <p className="text-xs text-slate-300 flex-1">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Timing */}
        <section id="contact" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Service Area, Location & Timings
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mt-1">
                Use this area to clearly show{" "}
                <span className="text-slate-200 font-medium">
                  where you are based, which areas you cover, and your contact
                  timings
                </span>
                .
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1">
                  Workshop / Office Address
                </p>
                <p className="text-xs text-slate-200">
                  Demo Electric Service Shop,
                  <br />
                  Near Bus Stand, Danta,
                  <br />
                  Sikar, Rajasthan – 332001
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                    Service Areas
                  </p>
                  <ul className="space-y-0.5 text-slate-300">
                    <li>• Danta & nearby villages</li>
                    <li>• Sikar city (selected areas)</li>
                    <li>• Nearby towns on request</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide mb-1">
                    Timings
                  </p>
                  <ul className="space-y-0.5 text-slate-300">
                    <li>Mon–Sun: 9:00 AM – 8:00 PM</li>
                    <li>Emergency support: 24/7</li>
                    <li>Festival / night extra charges</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5 text-xs">
                <span className="text-slate-400">WhatsApp:</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-300 hover:text-sky-200"
                >
                  +91 78785 83600
                </a>
                <span className="text-slate-400">Call:</span>
                <p className="text-slate-200">+91 78785 83600</p>
                <span className="text-slate-400">Email:</span>
                <p className="text-slate-200">demo.electric@example.com</p>
              </div>

              <p className="mt-2 text-[11px] text-slate-500">
                *Replace these demo contact details with your{" "}
                <span className="text-slate-300">real phone, email & address</span>.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col gap-3">
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                Google Maps Location
              </p>
              <div className="flex-1 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 flex items-center justify-center text-xs text-slate-500">
                Google Maps embed here
              </div>
              <p className="text-[11px] text-slate-500">
                In your live website, this section will show your{" "}
                <span className="text-slate-300">Google Maps</span> location so
                customers can easily navigate to your shop or call you directly.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="space-y-4">
          <div className="rounded-3xl border border-sky-500/50 bg-gradient-to-r from-sky-500/15 via-slate-950 to-slate-900/80 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-sky-100 uppercase tracking-wide">
                For Electricians & Repair Technicians
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-sky-50">
                Want this kind of website for your electrician / repair service?
              </h2>
              <p className="text-sm text-sky-50/85 max-w-xl">
                Get a{" "}
                <span className="font-semibold">
                  fast, mobile-friendly landing page
                </span>{" "}
                with services, pricing, gallery, reviews and direct WhatsApp
                enquiry buttons – perfect for local promotion.
              </p>
              <ul className="mt-2 grid gap-1 text-xs text-sky-50/85 md:grid-cols-2 max-w-xl">
                <li>• Built with Next.js (super fast)</li>
                <li>• One-tap WhatsApp enquiries</li>
                <li>• Works on all phones & devices</li>
                <li>• Easy to share on Instagram / WhatsApp</li>
              </ul>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-300 transition"
              >
                Message on WhatsApp to Get This
              </a>
              <p className="text-[11px] text-sky-100/80 md:text-right">
                Send your{" "}
                <span className="font-semibold">
                  name, location & service details
                </span>{" "}
                and I’ll turn this demo into your fully branded electrician
                website.
              </p>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center">
            This is a demo electrician & repair service website layout created
            by{" "}
            <span className="text-slate-300 font-medium">
              Gaurav Kumawat (AI-assisted web developer)
            </span>{" "}
            for local businesses in Danta & Sikar.
          </p>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 p-3 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        {/* Simple WhatsApp Icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-slate-950"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.64.879 5.08 2.382 7.07L4 29l7.17-2.348A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-4.871-1.295l-.348-.2-4.246 1.39 1.395-4.137-.226-.338A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10Zm5.01 6.995c-.261-.131-1.542-.758-1.781-.843-.239-.087-.413-.13-.588.13-.174.261-.675.843-.827 1.016-.151.174-.304.195-.565.065-.261-.131-1.103-.407-2.102-1.297-.777-.693-1.301-1.548-1.454-1.808-.151-.261-.016-.402.115-.532.118-.117.261-.304.391-.456.13-.152.174-.261.261-.435.087-.174.043-.326-.022-.456-.065-.13-.588-1.421-.806-1.947-.213-.512-.431-.442-.588-.451l-.5-.009c-.174 0-.456.065-.694.326-.239.261-.913.891-.913 2.174 0 1.283.935 2.52 1.065 2.694.13.174 1.84 2.809 4.46 3.937.624.27 1.111.432 1.49.554.626.199 1.196.171 1.647.104.502-.075 1.542-.63 1.76-1.238.217-.608.217-1.129.152-1.238-.065-.108-.239-.174-.5-.304Z" />
        </svg>
      </a>
    </div>
  );
}
