import { Arrow, ArrowUpRight, ClientLogos, Footer, type NavigateToPage } from './shared'
import { CaseCategoryNav } from './case-categories'
import { contactHref } from '../utils/seo'

type HeadlineVariant = 'outcomes' | 'partner' | 'leverage' | 'chatbots'

function setPointerGlow(event: React.PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`)
}

function Hero({ headlineVariant = 'outcomes' }: { headlineVariant?: HeadlineVariant; showPhoto?: boolean }) {
  const headlines = {
    outcomes: <>I ship <em>AI tools</em> that replace manual work and move revenue.</>,
    partner: <>A senior <em>AI builder</em> founders hire when the prototype needs to become a product.</>,
    leverage: <>Turn slow, manual work into <em>automated tools</em> that run without you.</>,
    chatbots: <>Chatbots people <em>trust</em> — because every answer links to a source.</>,
  };
  const stats = [
    { value: '22', label: 'Tools shipped to production' },
    { value: '$2.4M', label: 'Client cost savings tracked' },
    { value: '$9M+', label: 'Revenue influenced by shipped tools' },
    { value: '5/5', label: 'Average client rating' },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__top">
          <span className="hero__status"><span className="hero__pulse" />Available · Booking Q2{'\u00A0'}2026</span>
          <span className="tiny-mono">Independent AI automation · Est. 2021</span>
        </div>

        <div className="hero__main">
          <div className="hero__impact">
            <div className="eyebrow hero__eyebrow">AI automation · chatbots · Python scripts · MVP SaaS · voice AI</div>
            <h1 className="h-display">
              {headlines[headlineVariant] || headlines.outcomes}
            </h1>
            <p className="lede hero__lede">
              I help founders and teams replace manual workflows with useful AI tools built around how their business actually works.
            </p>
            <div className="hero__actions">
              <a href={contactHref('Booking a 30-minute AI automation call')} className="btn btn--accent btn--lg">Book a 30-min call <Arrow /></a>
              <a href="#work" className="btn btn--ghost btn--lg">See client work <ArrowUpRight /></a>
            </div>
          </div>
          <figure className="hero__visual hero__visual--portrait" onPointerMove={setPointerGlow}>
            <img src="/assets/talha.jpg" alt="Talha Turab" width="1048" height="1043" />
          </figure>
        </div>

        <div
          className="hero__stats"
          onPointerMove={setPointerGlow}
        >
          {stats.map((stat, index) => (
            <div className="hero__stat" key={stat.label} style={{ '--i': index } as React.CSSProperties}>
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <div className="tiny-mono">[ Client result ] Levitate Data</div>
            <p>Turned a technical document product into a buyer-ready story. Sales cycle dropped from weeks to one call.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ Client result ] First Rule</div>
            <p>Contract risk review that used to take days now runs in minutes. The product demo sells itself.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ Client result ] Retina</div>
            <p>Built a forecast tool that turned gut-feel ordering into data-driven planning. Margins lifted 18% across every product line.</p>
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
      project: "Thalamus",
      company: "Levitate Data",
      product: "Thalamus",
      logo: "/assets/logos/levitate-data.png",
      title: <><em>AI</em> document search for complex company knowledge.</>,
      review: "Talha made a hard document product feel simple to explain, sell, and use. Sales went from multi-week cycles to a single demo close.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      status: "site linked",
      visual: "/assets/projects/thalamus-curated-ui-v2.webp",
      visualAlt: "Stylized Thalamus UI mockup showing document search, cited sources, and answer confidence",
      highlights: [
        "Sales cycle from weeks to one call",
        "Buyers understood value in first demo",
        "Setup time cut by two-thirds",
      ],
      metrics: [
        { value: <>66<em>%</em></>, label: "Less build cost" },
        { value: <>6<em> mo</em></>, label: "Saved time" },
      ],
    },
    {
      id: "aletheia",
      idx: "02",
      project: "Aletheia",
      company: "Levitate Data",
      product: "Aletheia",
      logo: "/assets/logos/levitate-data.png",
      title: <>Conversation <em>intelligence</em> for high-stakes customer calls.</>,
      review: "We went from a feature list nobody could pitch to a product with a clear promise: surface the signals hiding inside important conversations.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Voice AI", "MVP SaaS", "Automation"],
      status: "product linked",
      visual: "/assets/projects/aletheia-curated-ui-v2.webp",
      visualAlt: "Stylized Aletheia UI mockup showing call review, transcript, waveform, and signal tracks",
      highlights: [
        "Feature list turned into a clear pitch",
        "Demo-ready after one sprint",
        "Buyers trusted the signal accuracy",
      ],
      metrics: [
        { value: <>3</>, label: "Signal types detected" },
        { value: <>1</>, label: "Clear review flow" },
      ],
    },
    {
      id: "frcm",
      idx: "03",
      project: "First Rule",
      company: "First Rule",
      product: "First Rule Contract Manager",
      logo: "/assets/logos/first-rule-mark.png",
      title: <>Contract <em>review automation</em> for construction teams.</>,
      review: "Talha turned a complicated contract workflow into something anyone could use on day one: upload, see the risks, and move forward — no training needed.",
      reviewBy: "First Rule team",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      status: "site linked",
      visual: "/assets/projects/frcm-curated-ui-v2.webp",
      visualAlt: "Stylized First Rule Contract Manager UI mockup showing contract risk review and playbook guidance",
      highlights: [
        "Review time cut from days to minutes",
        "Risk flags visible on first pass",
        "Sales team could demo without help",
      ],
      metrics: [
        { value: <>1</>, label: "Free upload tier" },
        { value: <>2</>, label: "Contract types live" },
      ],
    },
    {
      id: "retina",
      idx: "04",
      project: "Retina",
      company: "Retina",
      product: "Forecast planning tool",
      logo: "/assets/logos/retina-mark.png",
      title: <>Sales forecast <em>automation</em> that improved buying decisions.</>,
      review: "Our buying decisions were based on instinct and last week's numbers. Talha built a forecast tool that runs on live data — now I know what to order before the week even starts.",
      reviewBy: "Priya Krishnan · Founder, Retina",
      tags: ["Automation", "Python Scripts"],
      status: "10 wk",
      visual: "/assets/projects/retina-curated-ui-v2.webp",
      visualAlt: "Stylized Retina UI mockup showing retail demand forecasting, purchase planning, and chat workflow",
      highlights: [
        "Went from gut-feel ordering to data-driven planning",
        "Stockouts dropped 31% in first quarter",
        "Margins lifted across every product line",
      ],
      metrics: [
        { value: <>10<em> wk</em></>, label: "Idea to production" },
        { value: <>18<em>%</em></>, label: "Margin lift" },
      ],
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header section-header--work">
          <div>
            <div className="eyebrow mb-24">Selected work</div>
            <h2 className="h1">Client work with clear <em>outcomes</em>.</h2>
          </div>
          <CaseCategoryNav />
        </div>

        <div className="cases">
          {cases.map((c, i) => (
            <a key={c.id} className="case" href={`/case-studies/${c.id}`}>
              <div className="case__copy">
                <div className="case__index">
                  <strong>Case Study / {c.idx}</strong>
                  <div className="case__brand-row">
                    {c.logo && <img src={c.logo} alt="" loading="lazy" width="96" height="96" />}
                    <span className="case__project" translate="no">{c.company}</span>
                    <span className="case__divider" aria-hidden="true" />
                    <span className="case__meta-label">Product</span>
                    <span className="case__product-pill" translate="no">{c.product}</span>
                  </div>
                </div>
                <div className="case__body">
                  <div className="case__heading">
                    <h3 className="case__title">{c.title}</h3>
                  </div>
                  <p className="case__review">"{c.review}"</p>
                  <div className="tiny-mono case__review-by">{c.reviewBy}</div>
                  <div className="case__tags">
                    {c.tags.map((t, j) => <span key={j} className="case__tag">{t}</span>)}
                  </div>
                  <div className="case__cta mt-24">Read case study <Arrow /></div>
                </div>
              </div>
              <div className="case__visual">
                <div className="case__thumb case__thumb--curated">
                  <img src={c.visual} alt={c.visualAlt} width="1586" height="992" loading="eager" decoding="async" />
                </div>
                <div className="case__results">
                  <div className="case__results-metrics">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="case__results-metric">
                        <div className="case__results-value">{m.value}</div>
                        <div className="case__results-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="case__results-highlights">
                    {c.highlights.map((h, j) => (
                      <div className="case__results-highlight" key={j}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5L6.5 11.5L12.5 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="case__results-status">
                    Shipped · production · {c.status.replace(' ', '\u00A0')}
                  </div>
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
  const outcomes = [
    {
      num: "01",
      label: "Workflow",
      title: "Daily work gets lighter",
      body: "Reports, routing, reviews, and follow-ups move into one repeatable workflow.",
      proof: "Less copying. Fewer handoffs.",
    },
    {
      num: "02",
      label: "Trust",
      title: "Decisions get clearer",
      body: "The tool shows sources, status, and next actions so the team can use the output.",
      proof: "Less guessing. Faster reviews.",
    },
    {
      num: "03",
      label: "Handoff",
      title: "Handoff gets calmer",
      body: "Docs, alerts, and simple checks make the build easier to run after launch.",
      proof: "Less dependency. More ownership.",
    },
  ];

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="os-panel os-panel--calm">
          <div className="os-panel__intro">
            <div className="eyebrow mb-24">After launch</div>
            <h2 className="h2">Less manual work. More useful <em>momentum</em>.</h2>
            <p className="body">The point is not another AI demo. It is a working tool your team can trust, use, and hand off without extra noise.</p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <article key={outcome.num} className="outcome-card">
                <div className="outcome-card__top">
                  <span>{outcome.num}</span>
                  <small>{outcome.label}</small>
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.body}</p>
                <div className="outcome-card__proof">{outcome.proof}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesHome({ navigate }: { navigate: NavigateToPage }) {
  const services = [
    { num: "01", href: "/case-studies/category/chatbot", title: <>AI <em>chatbots</em></>, desc: "Support bots, internal helpdesks, and knowledge assistants that cite sources — not hallucinate.", problem: "Your team keeps answering the same questions every day." },
    { num: "02", href: "/case-studies/category/automation", title: <><em>Automations</em></>, desc: "Data pipelines, report generators, routing rules, and tools that remove repeat admin from the week.", problem: "Your best people are spending hours on work a script could handle." },
    { num: "03", href: "/case-studies/category/python-scripts", title: <>Python <em>scripts</em></>, desc: "Cleanup, scraping, file processing, data handoffs — small scripts that solve one problem cleanly.", problem: "A spreadsheet or manual process is starting to break at scale." },
    { num: "04", href: "/case-studies/category/mvp-saas", title: <>MVP <em>SaaS</em></>, desc: "A first-version product with the core workflow, clean UI, and a story buyers understand immediately.", problem: "You need something real to show investors, pilots, or first customers." },
    { num: "05", href: "/case-studies/category/voice-ai", title: <>Voice <em>AI</em></>, desc: "Call review, routing, summaries, and follow-up tools built on what was actually said.", problem: "Important signals are locked in calls nobody has time to re-listen to." },
    { num: "06", href: "/case-studies/category/python-scripts", title: <>Forecast <em>tools</em></>, desc: "Sales, inventory, and demand planning tools trained on your actual business data.", problem: "Decisions still come from gut feel because the data is too messy to use." },
    { num: "07", href: "/case-studies/category/document-review", title: <>Knowledge <em>intelligence</em></>, desc: "Contract, policy, and document review that gives sourced answers — not guesses.", problem: "Critical answers are buried in PDFs and docs nobody has time to read." },
    { num: "08", href: "/case-studies/category/mvp-saas", title: <>Fractional <em>AI lead</em></>, desc: "Senior support for roadmap, architecture, vendor calls, hiring, and launch decisions.", problem: "You need experienced AI judgment on the team, but not a full-time hire yet." },
  ];

  return (
    <section className="section" style={{ paddingTop: "calc(var(--section-y) * 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">Services</div>
            <h2 className="h1">Name the <em>bottleneck</em>. I'll build the&nbsp;fix.</h2>
          </div>
          <div>
            <p className="lede">
              Every engagement starts with a real problem: too many tickets, slow reviews, messy data, a stalled product launch. I scope the fix, build it, and ship something your team can use on day one.
            </p>
            <a href="/services#capabilities" className="btn btn--ghost mt-32">
              See engagement options <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <a key={i} className="service" href={s.href}>
              <div className="service__num">CAP / {s.num}</div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
              <div className="service__problem"><strong>For when:</strong> {s.problem}</div>
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
      desc: "You walk me through the problem, the data, and the workflow. I send back a plain-English brief: what is worth building, what is not, what it costs, and what the ROI looks like.",
    },
    {
      num: "02",
      title: <>Prototype — <em>2–3 weeks.</em></>,
      desc: "A working tool running on your real data. Not a slide deck — something your team can test, challenge, and decide whether to keep.",
    },
    {
      num: "03",
      title: <>Production — <em>4–10 weeks.</em></>,
      desc: "Error handling, monitoring, documentation, and launch. The tool keeps working after I leave.",
    },
    {
      num: "04",
      title: <>Handover or <em>retainer.</em></>,
      desc: "Either I document everything and your team runs it, or I stay on part-time for a flat monthly rate. You pick.",
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
              Most AI projects stall because someone jumps from a brainstorm call straight into a full build. I de-risk the investment before you commit a single sprint.
            </p>
          </div>
        </div>

        <div className="process" onPointerMove={setPointerGlow}>
          {steps.map((s, i) => (
            <div key={i} className="process__step" style={{ '--i': i } as React.CSSProperties}>
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
        <div className="about-band" onPointerMove={setPointerGlow}>
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
            <h2 className="h1">A <em>senior</em> AI builder — on demand, not on payroll.</h2>
            <div className="mt-32" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 600 }}>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                I'm a <strong style={{ color: "var(--fg)" }}>Senior developer</strong> who's spent five years shipping tools for funded startups, agencies, and product teams. Every project starts with a real problem and ends with something your team can run without me.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                I work the way a strong senior hire would: write the brief, build the prototype, ship the working tool, document it, and either hand it over or stay on. No 80-page proposals. No recycled templates. No upselling you into a bigger build than you need.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                If you're not sure AI is the right fit for your problem, I'll tell you straight — on the first call. The best work starts with saying no to the wrong projects.
              </p>
            </div>
            <div className="about-stats">
              <div>
                <div className="about-stat__value"><em>22</em></div>
                <div className="about-stat__label">Client projects shipped</div>
              </div>
              <div>
                <div className="about-stat__value"><em>5</em>yr</div>
                <div className="about-stat__label">Building useful AI tools</div>
              </div>
              <div>
                <div className="about-stat__value">5<em>/5</em></div>
                <div className="about-stat__label">Client rating</div>
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
      quote: "Talha made a document product feel simple to explain, sell, and use. Buyers went from confused to convinced in a single demo.",
      name: "Thalamus",
      role: "Document automation · Levitate Data",
      initials: "TH",
    },
    {
      quote: "We went from a feature list nobody could pitch to a clear product promise: understand the signals hiding inside your conversations.",
      name: "Aletheia",
      role: "Voice and video review · Levitate Data",
      initials: "AL",
    },
    {
      quote: "He turned a complicated contract workflow into something anyone could use on day one: upload, see the risks, and move forward.",
      name: "First Rule Contract Manager",
      role: "Construction contract automation",
      initials: "FR",
    },
    {
      quote: "I came in skeptical. Talha told me what not to build, then shipped the one tool that cut our stockouts by a third. Founders — hire him.",
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
            <h2 className="h1">What clients say <em>after</em> the&nbsp;project.</h2>
          </div>
          <div>
            <p className="lede">
              Not cherry-picked. These are the quotes that show up after the tool ships, the team uses it, and the results are in.
            </p>
          </div>
        </div>
        <div className="testimonials" onPointerMove={setPointerGlow}>
          {items.map((t, i) => (
            <div key={i} className="testimonial" style={{ '--i': i } as React.CSSProperties}>
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
        <div className="cta-band" onPointerMove={setPointerGlow}>
          <div className="cta-band__content">
            <div>
              <div className="eyebrow mb-24">Book a call</div>
              <h2 className="h1" style={{ marginBottom: 20 }}>
                Got a problem AI <em>might</em> solve? Let's find out.
              </h2>
              <p className="lede" style={{ maxWidth: 520 }}>
                30 minutes. Free. No NDA needed. You leave with a clear yes-or-no on whether to build — and a one-pager you can forward to your team the same day.
              </p>
            </div>
            <div>
              <div className="cta-band__actions">
                <a href={contactHref('Booking a 30-minute AI automation call')} className="btn btn--accent btn--lg">Pick a time <Arrow /></a>
                <a href={contactHref()} className="btn btn--ghost btn--lg">Contact on Upwork</a>
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
                  <p style={{ fontSize: 14, color: "var(--fg)" }}>$1,000 / week sprint</p>
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
