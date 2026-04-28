import { Arrow, ArrowUpRight, ClientLogos, Footer, type NavigateToPage } from './shared'
import { contactHref } from '../utils/seo'

type HeadlineVariant = 'outcomes' | 'partner' | 'leverage' | 'chatbots'

function Hero({ headlineVariant = 'outcomes' }: { headlineVariant?: HeadlineVariant; showPhoto?: boolean }) {
  const headlines = {
    outcomes: <>I help founders ship <em>production AI</em> that actually makes money.</>,
    partner: <>The <em>AI engineer</em> founders call when the prototype has to become revenue.</>,
    leverage: <>Turn messy company data into <em>measurable leverage.</em></>,
    chatbots: <>Build AI products your users <em>trust</em> and your team can measure.</>,
  };
  const stats = [
    { value: '22', label: 'AI systems shipped' },
    { value: '$2.4M', label: 'Tracked client savings' },
    { value: '66%', label: 'RAG TCO reduction' },
    { value: '100%', label: 'Delivered on scope' },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__top">
          <span className="hero__status"><span className="hero__pulse" />Available · Booking Q2{'\u00A0'}2026</span>
          <span className="tiny-mono">Independent AI engineering · Est. 2021</span>
        </div>

        <div className="hero__impact">
          <div className="eyebrow hero__eyebrow">ML engineer · RAG · Agents · LLM apps · MLOps</div>
          <h1 className="h-display">
            {headlines[headlineVariant] || headlines.outcomes}
          </h1>
          <p className="lede hero__lede">
            Twelve shipped engagements across support automation, contract AI, forecasting and internal copilots. I turn AI from a deck into production systems that move revenue, margin, speed and headcount.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn btn--accent btn--lg">Book a 30-min call <Arrow /></a>
            <a href="#work" className="btn btn--ghost btn--lg">Projects that moved numbers <ArrowUpRight /></a>
          </div>
        </div>

        <div className="hero__stats">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <div className="tiny-mono">[ 01 ] What I build</div>
            <p>RAG systems · AI agents · LLM apps · ML models · MLOps</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ 02 ] Who I work with</div>
            <p>Funded startups, AI agencies, product teams without an in-house ML lead.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ 03 ] How I engage</div>
            <p>Fixed-scope projects · fractional retainer · embedded with your team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesHome({ navigate }: { navigate: NavigateToPage }) {
  const cases = [
    {
      id: "thalamus",
      idx: "01",
      client: "Thalamus · Levitate Data · Enterprise RAG",
      title: <>Enterprise-grade <em>agentic RAG</em> for high-stakes documents.</>,
      desc: "Retrieval infrastructure for AI products that need answers users can trust. Thalamus turns messy enterprise knowledge into citation-backed intelligence with multimodal ingestion, agentic retrieval, auditability, and a stronger build-vs-buy case.",
      tags: ["Agentic RAG", "Retrieval", "Multimodal", "Citations", "TCO"],
      screenshot: "/assets/projects/thalamus-curated.webp",
      status: "site linked",
      profile: [
        { label: "Trust", value: 92 },
        { label: "Speed", value: 84 },
        { label: "Coverage", value: 88 },
      ],
      metrics: [
        { value: <>66<em>%</em></>, label: "Lower TCO" },
        { value: <>$485<em>K</em></>, label: "Avg. savings" },
      ],
    },
    {
      id: "aletheia",
      idx: "02",
      client: "Aletheia · Levitate Data · Behavioral AI",
      title: <>Multimodal <em>behavioral intelligence</em> for high-stakes communication.</>,
      desc: "A foundational AI layer for seeing beyond words. Aletheia fuses visual, vocal, and linguistic signals to reveal emotion, tone, confidence, stress, and explainable behavioral timelines across video, audio, and conversation.",
      tags: ["Multimodal AI", "Emotion", "Signal Fusion", "Realtime", "API"],
      screenshot: "/assets/projects/aletheia-curated.webp",
      status: "product linked",
      profile: [
        { label: "Visual", value: 88 },
        { label: "Vocal", value: 84 },
        { label: "Fusion", value: 92 },
      ],
      metrics: [
        { value: <>3</>, label: "Signal types" },
        { value: <>API</>, label: "Integration" },
      ],
    },
    {
      id: "frcm",
      idx: "03",
      client: "First Rule · Construction contract AI",
      title: <>Construction contract <em>review</em> with clause-linked AI playbooks.</>,
      desc: "Construction-trained contract review for teams that need risk visible before kickoff. FRCM surfaces clause-level issues, anchors guidance to source language, applies playbooks, and turns contract review into a project-ready handoff.",
      tags: ["Contract AI", "Playbooks", "Risk Review", "Marten", "Construction"],
      screenshot: "/assets/projects/frcm-curated.webp",
      status: "site linked",
      profile: [
        { label: "Risk", value: 86 },
        { label: "Standards", value: 90 },
        { label: "Handoff", value: 82 },
      ],
      metrics: [
        { value: <>1</>, label: "Free upload" },
        { value: <>Prime + Sub</>, label: "Coverage" },
      ],
    },
    {
      id: "retina",
      idx: "04",
      client: "Retina · Bootstrapped · DTC analytics",
      title: <>A <em>forecast model</em> that finally beat the founder's gut.</>,
      desc: "Built an end-to-end demand forecasting pipeline — feature store, training, eval, and a Slack-native interface. Founders went from quarterly buy decisions to weekly, with full confidence intervals attached.",
      tags: ["XGBoost", "MLOps", "Airflow", "Modal", "Slack API"],
      screenshot: "/assets/projects/retina-curated.webp",
      status: "10 wk",
      profile: [
        { label: "Cadence", value: 86 },
        { label: "Accuracy", value: 86 },
        { label: "Margin", value: 58 },
      ],
      metrics: [
        { value: <>−31<em>%</em></>, label: "Stockouts" },
        { value: <>+18<em>%</em></>, label: "Margin per SKU" },
      ],
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">Selected work</div>
            <h2 className="h1">Projects that moved numbers.</h2>
          </div>
          <div>
            <p className="lede">
              Four engagements where AI moved a real business metric. Click through for the brief, architecture, and the numbers.
            </p>
          </div>
        </div>

        <div className="cases">
          {cases.map((c, i) => (
            <a key={c.id} className="case" href={`/case-studies/${c.id}`}>
              <div className="case__index">
                <strong>CS / {c.idx}</strong>
                <div style={{ marginTop: 12 }}>{c.client}</div>
              </div>
              <div>
                <div className="case__client" style={{ display: i === 0 ? "block" : "none" }}>{c.client}</div>
                <h3 className="case__title">{c.title}</h3>
                <p className="case__desc">{c.desc}</p>
                <div className="case__tags">
                  {c.tags.map((t, j) => <span key={j} className="case__tag">{t}</span>)}
                </div>
                <div className="case__cta mt-24">Read case study <Arrow /></div>
              </div>
              <div className="case__visual">
                {c.screenshot && (
                  <div className="case__thumb" aria-hidden="true">
                    <img src={c.screenshot} alt="" loading="lazy" width="1600" height="1000" />
                  </div>
                )}
                <div className="case__profile" aria-hidden="true">
                  {c.profile.map((item) => (
                    <div className="case__profile-row" key={item.label} style={{ '--value': item.value } as React.CSSProperties}>
                      <span>{item.label}</span>
                      <i />
                    </div>
                  ))}
                </div>
                <div className="tiny-mono mb-16">[ Outcome ]</div>
                <div className="case__metrics">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="metric">
                      <div className="metric__value">{m.value}</div>
                      <div className="metric__label">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="tiny-mono" style={{ paddingTop: 14, borderTop: "1px dashed var(--line)" }}>
                  Shipped · production · {c.status.replace(' ', '\u00A0')}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingSystem() {
  const lanes = [
    {
      num: "01",
      title: "Find the leverage",
      desc: "Map the workflow, data, risk, and metric before a single model decision gets made.",
      items: ["Business metric", "Data surface", "Failure modes"],
      score: 74,
    },
    {
      num: "02",
      title: "Build the engine",
      desc: "Ship the retrieval, agent, model, eval, and interface as one production system.",
      items: ["RAG / agents", "Evals", "UX surface"],
      score: 88,
    },
    {
      num: "03",
      title: "Prove it holds",
      desc: "Add observability, cost guardrails, regression checks, and a handover path.",
      items: ["Monitoring", "Cost control", "Docs"],
      score: 82,
    },
  ];

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="os-panel">
          <div className="os-panel__intro">
            <div className="eyebrow mb-24">Operating system</div>
            <h2 className="h2">AI projects need a <em>decision loop</em>, not a demo loop.</h2>
            <p className="body">
              The best systems compound because every release teaches the next one what to retrieve, measure, and improve.
            </p>
          </div>
          <div className="os-lanes">
            {lanes.map((lane) => (
              <div className="os-lane" key={lane.num} style={{ '--score': lane.score } as React.CSSProperties}>
                <div className="os-lane__top">
                  <span>{lane.num}</span>
                  <strong>{lane.title}</strong>
                </div>
                <p>{lane.desc}</p>
                <div className="os-lane__items">
                  {lane.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="os-lane__bar" aria-hidden="true"><span /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesHome({ navigate }: { navigate: NavigateToPage }) {
  const services = [
    { num: "01", title: <>AI <em>chatbots</em></>, desc: "Customer support, internal helpdesk, knowledge concierge.", problem: "Your support team is drowning in repeat questions." },
    { num: "02", title: <>RAG <em>systems</em></>, desc: "Search & chat grounded in your contracts, docs, code, tickets.", problem: "Your data is locked in 6 different SaaS tools." },
    { num: "03", title: <>AI <em>agents</em></>, desc: "Multi-step workflow agents that book, draft, classify, escalate.", problem: "Hiring ops people to do work an agent should do." },
    { num: "04", title: <>LLM <em>apps</em></>, desc: "Custom copilots, assistants and chat experiences with eval & streaming.", problem: "Prototype works in dev, breaks in production." },
    { num: "05", title: <>ML <em>model dev</em></>, desc: "Forecasting, scoring, ranking, classification — trained on your data.", problem: "You have data. You don't have a model running on it." },
    { num: "06", title: <>MLOps</>, desc: "Deployment, eval pipelines, monitoring, cost & retrieval-quality dashboards.", problem: "Your AI feature degraded and nobody noticed." },
    { num: "07", title: <>AI <em>consulting</em></>, desc: "Architecture reviews, vendor selection, build-vs-buy, hiring panels.", problem: "You're about to spend 6 figures on the wrong stack." },
    { num: "08", title: <>Fractional <em>AI lead</em></>, desc: "Embedded part-time or full-time. Ship code, hire, set the roadmap.", problem: "You need a senior AI hire — but not for 12 months yet." },
  ];

  return (
    <section className="section" style={{ paddingTop: "calc(var(--section-y) * 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">Services</div>
            <h2 className="h1">Pick the <em>outcome</em>. I'll bring the&nbsp;stack.</h2>
          </div>
          <div>
            <p className="lede">
              Clients don't buy <span translate="no">LangGraph</span> or <span translate="no">Pinecone</span>. They buy chatbots that resolve, agents that ship, and models that earn their compute. Here's what I deliver.
            </p>
            <a href="/services#capabilities" className="btn btn--ghost mt-32">
              See engagement options <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <a key={i} className="service" href={`/services#cap-${s.num}`}>
              <div className="service__num">CAP / {s.num}</div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
              <div className="service__problem"><strong>For when:</strong>{s.problem}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  const steps = [
    {
      num: "01",
      title: <>Discovery — <em>1 week, free.</em></>,
      desc: "We get on a call, you show me your data and the problem. I come back with a written brief: what's actually buildable, what isn't, what it costs, what it'll move.",
    },
    {
      num: "02",
      title: <>Prototype — <em>2–3 weeks.</em></>,
      desc: "Working system on real data. Not a demo. Not a Streamlit toy. Something your team can poke at, break, and form an opinion on.",
    },
    {
      num: "03",
      title: <>Production — <em>4–10 weeks.</em></>,
      desc: "Eval pipelines, observability, cost guardrails, retrieval-quality dashboards. The boring infra that keeps AI alive after launch.",
    },
    {
      num: "04",
      title: <>Handover or <em>retainer.</em></>,
      desc: "Either I document everything and your team takes over, or I stay on as fractional AI engineer at a predictable monthly. Your choice.",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">How I work</div>
            <h2 className="h1">Four steps. No bait-and-switch.</h2>
          </div>
          <div>
            <p className="lede">
              Most AI projects fail because they jump from a slide deck to a hire. I run a process built for de-risking spend before you commit headcount.
            </p>
          </div>
        </div>

        <div className="process">
          {steps.map((s, i) => (
            <div key={i} className="process__step">
              <div className="process__num"><strong>0{i + 1}</strong></div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ showPhoto = true }: { showPhoto?: boolean }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-band">
          {showPhoto && (
            <div>
              <div className="about-photo">
                <img src="/assets/talha.jpg" alt="Talha Turab" loading="lazy" width="1048" height="1043" />
              </div>
              <div className="tiny-mono mt-16">Talha Turab — Lahore · 2024</div>
            </div>
          )}
          <div>
            <div className="eyebrow mb-24">About</div>
            <h2 className="h1">A <em>senior</em> hire — without the&nbsp;headcount.</h2>
            <div className="mt-32" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 600 }}>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                I'm a <strong style={{ color: "var(--fg)" }}>machine learning engineer</strong> who's spent the last five years shipping AI systems for funded startups, agencies and product teams. Before that, research labs and a stint in classical ML.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                I work the way a good senior hire would: write a brief, build the prototype, ship the production system, document it, and either hand it over or stay on. No discovery calls that don't go anywhere. No 80-page proposals. No reselling of someone else's work.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                If you've got a problem and you're not sure whether AI is the right tool — I'll tell you, on the first call. The best work comes from saying no to the wrong projects.
              </p>
            </div>
            <div className="about-stats">
              <div>
                <div className="about-stat__value"><em>22</em></div>
                <div className="about-stat__label">Production AI systems shipped</div>
              </div>
              <div>
                <div className="about-stat__value"><em>5</em>yr</div>
                <div className="about-stat__label">Building ML & LLM systems</div>
              </div>
              <div>
                <div className="about-stat__value">100<em>%</em></div>
                <div className="about-stat__label">Projects delivered on scope</div>
              </div>
              <div>
                <div className="about-stat__value">$2.4<em>M</em></div>
                <div className="about-stat__label">Tracked client savings (2024–25)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Thalamus gives teams a retrieval layer they can trust when the answer has to be grounded, auditable, and ready for production.",
      name: "Thalamus",
      role: "Enterprise RAG platform · Levitate Data",
      initials: "TH",
    },
    {
      quote: "Aletheia brings the human signal back into AI, turning voice, expression, and language into explainable behavioral intelligence.",
      name: "Aletheia",
      role: "Multimodal behavioral intelligence · Levitate Data",
      initials: "AL",
    },
    {
      quote: "First Rule Contract Manager helps construction teams see clause risk earlier, apply consistent playbooks, and carry better contract decisions into the field.",
      name: "First Rule Contract Manager",
      role: "Construction contract review platform",
      initials: "FR",
    },
    {
      quote: "I came in skeptical of AI. Talha did a one-week paid discovery, told me what wasn't worth building, and shipped the one piece that was. Founders, hire him.",
      name: "Priya Krishnan",
      role: "Founder · Retina",
      initials: "PK",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">Testimonials</div>
            <h2 className="h1">From the <em>people</em> who hired&nbsp;me.</h2>
          </div>
          <div>
            <p className="lede">
              Four quotes that capture how I actually work — and what clients say when the project is over.
            </p>
          </div>
        </div>
        <div className="testimonials">
          {items.map((t, i) => (
            <div key={i} className="testimonial">
              <p className="testimonial__quote">{t.quote}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial__name" translate="no">{t.name}</div>
                  <div className="testimonial__role" translate="no">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section" id="book">
      <div className="container">
        <div className="cta-band">
          <div className="cta-band__content">
            <div>
              <div className="eyebrow mb-24">Book a call</div>
              <h2 className="h1" style={{ marginBottom: 20 }}>
                Got a problem AI <em>might</em> solve?
              </h2>
              <p className="lede" style={{ maxWidth: 520 }}>
                30 minutes. Free. You leave with a clear yes/no on whether to build, and a one-pager you can forward to your team.
              </p>
            </div>
            <div>
              <div className="cta-band__actions">
                <a href={contactHref('Booking a 30-minute AI engineering call')} className="btn btn--accent btn--lg">Pick a time <Arrow /></a>
                <a href={contactHref()} className="btn btn--ghost btn--lg">Email instead</a>
              </div>
              <div className="cta-band__meta">
                <div className="cta-band__meta-item">
                  <div className="tiny-mono">[ Response ]</div>
                  <p style={{ fontSize: 14, color: "var(--fg)" }}>Within 24{'\u00A0'}hours</p>
                </div>
                <div className="cta-band__meta-item">
                  <div className="tiny-mono">[ Timezone ]</div>
                  <p style={{ fontSize: 14, color: "var(--fg)" }}>GMT+5 · flexible</p>
                </div>
                <div className="cta-band__meta-item">
                  <div className="tiny-mono">[ Discovery ]</div>
                  <p style={{ fontSize: 14, color: "var(--fg)" }}>Free · no NDA needed</p>
                </div>
                <div className="cta-band__meta-item">
                  <div className="tiny-mono">[ Engagement ]</div>
                  <p style={{ fontSize: 14, color: "var(--fg)" }}>From $8k / 4{'\u00A0'}wks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({
  navigate,
  headlineVariant = 'outcomes',
  showPhoto = true,
}: {
  navigate: NavigateToPage
  headlineVariant?: HeadlineVariant
  showPhoto?: boolean
}) {
  return (
    <>
      <Hero headlineVariant={headlineVariant} showPhoto={showPhoto} />
      <ClientLogos />
      <OperatingSystem />
      <CaseStudiesHome navigate={navigate} />
      <ServicesHome navigate={navigate} />
      <About showPhoto={showPhoto} />
      <Testimonials />
      <HowIWork />
      <CTA />
      <Footer navigate={navigate} />
    </>
  );
}
