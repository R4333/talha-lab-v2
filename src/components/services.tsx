import { CTA } from './home'
import { Footer, type NavigateToPage } from './shared'

export function ServicesPage({ navigate }: { navigate: NavigateToPage }) {
  const tiers = [
    {
      id: "sprint",
      name: "Sprint",
      price: "$1,000 / week",
      tag: "Fixed scope · 4 weeks",
      desc: "One narrow problem, one shipped solution. Best for a chatbot, automation, Python script, forecast helper, or first SaaS feature.",
      includes: [
        "Discovery and written brief",
        "Working tool on real data",
        "Simple checks and launch notes",
        "Documented handover",
      ],
      best: "Founders, agencies, and teams that need a useful tool in four weeks.",
    },
    {
      id: "embedded",
      name: "Embedded",
      price: "from $14k / month",
      tag: "Part-time · 3 month min",
      desc: "I work as your part-time AI builder for bigger product pushes. Useful when one sprint is not enough.",
      includes: [
        "20-30 hrs / week",
        "Product, code, and launch help",
        "Direct access on Slack or Linear",
        "Weekly written status",
      ],
      best: "Product teams that need steady senior execution without a full-time hire.",
      featured: true,
    },
    {
      id: "advisory",
      name: "Advisory",
      price: "from $4k / month",
      tag: "Fractional · async",
      desc: "Ongoing technical advisor for deciding what to build, what to avoid, and who to hire.",
      includes: [
        "Bi-weekly 60-min calls",
        "Async Slack review",
        "Build plan notes",
        "Hiring and vendor support",
      ],
      best: "Founders who need a senior AI builder on call.",
    },
  ];

  const services = [
    { id: "ai-chatbots", href: "/case-studies/category/chatbot", num: "01", title: "AI chatbots", desc: "Customer support, internal helpdesk, and knowledge assistants.", problem: "Customers or staff keep asking the same questions." },
    { id: "automations", href: "/case-studies/category/automation", num: "02", title: "Automations", desc: "Tools that move data, create reports, route work, and remove repeat admin.", problem: "Your team repeats the same manual task every week." },
    { id: "python-scripts", href: "/case-studies/category/python-scripts", num: "03", title: "Python scripts", desc: "Small scripts for cleanup, scraping, reports, file processing, and data handoffs.", problem: "A spreadsheet or manual process is starting to break." },
    { id: "mvp-saas", href: "/case-studies/category/mvp-saas", num: "04", title: "MVP SaaS", desc: "First-version products with the core workflow, simple UI, and buyer-ready story.", problem: "You need a usable product before investing in a full team." },
    { id: "voice-ai", href: "/case-studies/category/voice-ai", num: "05", title: "Voice AI", desc: "Voice, call, and audio tools for review, routing, summaries, and follow-up.", problem: "Calls and recordings contain useful work nobody has time to review." },
    { id: "forecast-tools", href: "/case-studies/category/python-scripts", num: "06", title: "Forecast tools", desc: "Sales, inventory, demand, and planning tools trained on your business data.", problem: "You have data, but decisions still happen from gut feel." },
    { id: "document-review", href: "/case-studies/category/document-review", num: "07", title: "Knowledge intelligence", desc: "Contract, policy, PDF, and knowledge-base review with source-backed answers.", problem: "Important answers are buried in documents nobody has time to read." },
    { id: "fractional-ai-lead", href: "/case-studies/category/mvp-saas", num: "08", title: "Fractional AI lead", desc: "Senior build support for roadmap, code, vendors, hiring, and launch decisions.", problem: "You need senior AI judgment, but not a full-time hire yet." },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <div className="cs-hero__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Services</span>
          </div>
          <div className="eyebrow mb-24">What I do</div>
          <h1 className="h-display" style={{ maxWidth: 1100 }}>
            Simple AI services built around <em>your problem</em>, not my stack.
          </h1>
          <p className="lede mt-32" style={{ maxWidth: 720 }}>
            Three ways to work with me. Pick the one that matches the shape of your problem and your timeline.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {tiers.map((t, i) => (
              <div key={t.id} id={`plan-${t.id}`} className="service" style={{
                minHeight: 460,
                background: t.featured ? "var(--bg-2)" : "var(--bg)",
                borderLeft: t.featured ? "2px solid var(--accent)" : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="service__num">PLAN / 0{i + 1}</div>
                  {t.featured && <span className="case__tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Most picked</span>}
                </div>
                <h3 className="service__title" style={{ fontSize: 36, marginTop: 8 }}>{t.name}</h3>
                <div className="tiny-mono" style={{ color: "var(--fg-2)" }}>{t.tag}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "var(--accent)", fontStyle: "italic", fontVariationSettings: '"SOFT" 100, "WONK" 1', marginTop: 4 }}>
                  {t.price}
                </div>
                <p className="service__desc" style={{ flex: "none", marginTop: 12 }}>{t.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" }}>
                  {t.includes.map((x, j) => (
                    <li key={j} style={{ fontSize: 14, color: "var(--fg-2)", display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>✓</span>{x}
                    </li>
                  ))}
                </ul>
              <div className="service__problem" style={{ marginTop: "auto" }}>
                  <strong>Best for:</strong> {t.best}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow mb-24">Capabilities</div>
              <h2 className="h1">Everything I&nbsp;build.</h2>
            </div>
            <div>
              <p className="lede">Most clients need one focused piece first. The discovery call narrows it down.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <a key={s.id} id={`cap-${s.num}`} className="service" href={s.href}>
                <div className="service__num">CAP / {s.num}</div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
                <div className="service__problem"><strong>For when:</strong>{s.problem}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="divider-mono">
            <span>Frequently asked</span>
            <span>06 / questions</span>
          </div>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
            {[
              { q: "How fast can you start?", a: "I usually have one slot opening per month. The earliest is typically 2-3 weeks out, and I reply within 24 hours." },
              { q: "Do you work with non-technical founders?", a: "Most of my clients are non-technical or technical-but-not-AI. I write the brief in plain English and translate it into engineering. That's half the job." },
              { q: "Can you white-label for my agency?", a: "Yes. About a third of my work is sub-contracted through agencies. I can work under your brand, and your client only sees my name if you want that." },
              { q: "Do you take equity?", a: "For early-stage companies, partial-equity engagements are possible after the first paid sprint. I won't do equity-only." },
              { q: "What do you build with?", a: "Whatever fits the job. Most projects use Python, a clean database, a simple web app, and the right AI model. The stack follows the problem." },
              { q: "Do you sign NDAs?", a: "Always, before any code or data is shared. The discovery call doesn't require one." },
            ].map((f, i) => (
              <details key={i} style={{ borderTop: "1px solid var(--line)", padding: "24px 0" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", listStyle: "none" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, letterSpacing: "-0.02em", fontWeight: 400 }}>{f.q}</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--fg-3)", fontSize: 12 }}>0{i + 1} / 06</span>
                </summary>
                <p style={{ color: "var(--fg-2)", marginTop: 12, fontSize: 16, maxWidth: 720, lineHeight: 1.55 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer navigate={navigate} />
    </>
  );
}
