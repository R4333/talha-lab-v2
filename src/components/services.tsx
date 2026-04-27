import { CTA } from './home'
import { ArrowUpRight, Footer, type NavigateToPage } from './shared'

export function ServicesPage({ navigate }: { navigate: NavigateToPage }) {
  const tiers = [
    {
      id: "sprint",
      name: "Sprint",
      price: "from $8k",
      tag: "Fixed scope · 4 weeks",
      desc: "One narrow problem, one shipped solution. Best for: 'we need a working RAG/chatbot/forecast model and we need it before next quarter.'",
      includes: [
        "Discovery & written brief",
        "Working prototype on real data",
        "Eval pipeline + observability",
        "Documented handover to your team",
      ],
      best: "AI startups, agencies, founders building MVPs.",
    },
    {
      id: "embedded",
      name: "Embedded",
      price: "from $14k / mo",
      tag: "Fractional · 3 mo min",
      desc: "I work as your part-time AI engineer. 2–3 days a week, deep in your codebase, in your standups, on your Slack.",
      includes: [
        "20–30 hrs / week",
        "Architecture, code, hiring help",
        "Direct access on Slack/Linear",
        "Weekly written status",
      ],
      best: "Series A/B teams without an in-house ML lead.",
      featured: true,
    },
    {
      id: "advisory",
      name: "Advisory",
      price: "from $4k / mo",
      tag: "Fractional · async",
      desc: "Ongoing technical advisor. Code reviews, architecture calls, vendor selection, hiring panels.",
      includes: [
        "Bi-weekly 60-min calls",
        "Async Slack / async review",
        "Architecture decision docs",
        "Hiring & vendor support",
      ],
      best: "Founders who need a senior brain on call.",
    },
  ];

  const services = [
    { id: "ai-chatbots", num: "01", title: "AI chatbots", desc: "Customer support, internal helpdesk, knowledge concierge.", problem: "Your support team is drowning in repeat questions." },
    { id: "rag-systems", num: "02", title: "RAG systems", desc: "Search & chat grounded in your contracts, docs, code, tickets.", problem: "Your data is locked in 6 different SaaS tools." },
    { id: "ai-agents", num: "03", title: "AI agents", desc: "Multi-step workflow agents that book, draft, classify, escalate.", problem: "Hiring ops people to do work an agent should do." },
    { id: "llm-apps", num: "04", title: "LLM apps", desc: "Custom copilots, assistants and chat experiences with eval & streaming.", problem: "Prototype works in dev, breaks in production." },
    { id: "ml-model-dev", num: "05", title: "ML model dev", desc: "Forecasting, scoring, ranking, classification — trained on your data.", problem: "You have data. You don't have a model running on it." },
    { id: "mlops", num: "06", title: "MLOps", desc: "Deployment, eval pipelines, monitoring, cost & retrieval-quality dashboards.", problem: "Your AI feature degraded and nobody noticed." },
    { id: "ai-consulting", num: "07", title: "AI consulting", desc: "Architecture reviews, vendor selection, build-vs-buy, hiring panels.", problem: "You're about to spend 6 figures on the wrong stack." },
    { id: "fractional-ai-lead", num: "08", title: "Fractional AI lead", desc: "Embedded part-time or full-time. Ship code, hire, set the roadmap.", problem: "You need a senior AI hire — but not for 12 months yet." },
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
            Engagements built around <em>your problem</em>, not my stack.
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
                  <strong>Best for:</strong>{t.best}
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
              <p className="lede">Not every project needs all of these. The discovery call narrows it down.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.id} id={`cap-${s.num}`} className="service">
                <div className="service__num">CAP / {s.num}</div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
                <div className="service__problem"><strong>For when:</strong>{s.problem}</div>
              </div>
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
              { q: "How fast can you start?", a: "I usually have one slot opening per month. The earliest is typically 2–3 weeks out — but I always reply within 24 hours so we'll know quickly." },
              { q: "Do you work with non-technical founders?", a: "Most of my clients are non-technical or technical-but-not-AI. I write the brief in plain English and translate it into engineering. That's half the job." },
              { q: "Can you white-label for my agency?", a: "Yes — about a third of my work is sub-contracted through agencies. I'll show up under your brand, your client never sees my name unless you want them to." },
              { q: "Do you take equity?", a: "For early-stage companies, partial-equity engagements are possible after the first paid sprint. I won't do equity-only." },
              { q: "What stack do you use?", a: "Whatever fits. Usually: Python, FastAPI, Postgres, Pinecone or pgvector, OpenAI/Anthropic/open models, LangGraph or hand-rolled orchestration, Modal/Render/AWS for serving. Stack follows the problem." },
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
