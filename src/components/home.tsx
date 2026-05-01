import { Arrow, ArrowUpRight, ClientLogos, Footer, type NavigateToPage } from './shared'
import { CaseCategoryNav } from './case-categories'
import { contactHref } from '../utils/seo'

type HeadlineVariant = 'outcomes' | 'partner' | 'leverage' | 'chatbots'

function Hero({ headlineVariant = 'outcomes' }: { headlineVariant?: HeadlineVariant; showPhoto?: boolean }) {
  const headlines = {
    outcomes: <>I build practical <em>AI tools</em> that save time and make money.</>,
    partner: <>A senior <em>AI builder</em> founders hire when the idea needs to ship.</>,
    leverage: <>Turn messy company work into <em>clear, useful automation.</em></>,
    chatbots: <>Build chatbots people <em>trust</em> because the answers are grounded.</>,
  };
  const stats = [
    { value: '22', label: 'Client projects shipped' },
    { value: '$2.4M', label: 'Client savings tracked' },
    { value: '31%', label: 'Fewer stockouts' },
    { value: '100%', label: 'Delivered as promised' },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__top">
          <span className="hero__status"><span className="hero__pulse" />Available · Booking Q2{'\u00A0'}2026</span>
          <span className="tiny-mono">Independent AI automation · Est. 2021</span>
        </div>

        <div className="hero__impact">
          <div className="eyebrow hero__eyebrow">AI automation · chatbots · Python scripts · MVP SaaS · voice AI</div>
          <h1 className="h-display">
            {headlines[headlineVariant] || headlines.outcomes}
          </h1>
          <p className="lede hero__lede">
            I help founders and teams turn repeat work into useful software: support bots, document tools, forecast helpers, scripts, and first-version SaaS products.
          </p>
          <div className="hero__actions">
            <a href={contactHref('Booking a 30-minute AI automation call')} className="btn btn--accent btn--lg">Book a 30-min call <Arrow /></a>
            <a href="#work" className="btn btn--ghost btn--lg">See client work <ArrowUpRight /></a>
          </div>
        </div>

        <div
          className="hero__stats"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`)
            event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`)
          }}
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
            <div className="tiny-mono">[ 01 ] What I build</div>
            <p>Automations · Chatbots · Python scripts · MVP SaaS · Voice AI</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ 02 ] Who I work with</div>
            <p>Founders, agencies, and product teams that need one senior builder.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ 03 ] How I engage</div>
            <p>Fixed-scope sprint · monthly support · part-time build partner.</p>
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
      title: <>Document search <em>automation</em> for complex company knowledge.</>,
      review: "Talha made a hard document product feel simple to explain, sell, and use. The new story helped buyers understand the value in minutes.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      screenshot: "/assets/projects/thalamus-curated.webp",
      status: "site linked",
      profile: [
        { label: "Setup time saved", value: 66 },
        { label: "Answer trust", value: 92 },
        { label: "Docs covered", value: 88 },
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
      title: <>Voice and video <em>review tools</em> for high-stakes calls.</>,
      review: "The product went from technical feature list to a clear business promise: understand the signals inside important conversations.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Voice AI", "MVP SaaS", "Automation"],
      screenshot: "/assets/projects/aletheia-curated.webp",
      status: "product linked",
      profile: [
        { label: "Voice context", value: 84 },
        { label: "Video context", value: 88 },
        { label: "Review clarity", value: 92 },
      ],
      metrics: [
        { value: <>3</>, label: "Signal types" },
        { value: <>1</>, label: "Clear review" },
      ],
    },
    {
      id: "frcm",
      idx: "03",
      project: "First Rule",
      company: "First Rule",
      product: "First Rule Contract Manager",
      title: <>Contract <em>review automation</em> for construction teams.</>,
      review: "Talha turned a complicated contract workflow into a product people could understand right away: upload, review risk, and move forward.",
      reviewBy: "First Rule team",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      screenshot: "/assets/projects/frcm-curated.webp",
      status: "site linked",
      profile: [
        { label: "Risk found earlier", value: 86 },
        { label: "Consistent rules", value: 90 },
        { label: "Cleaner handoff", value: 82 },
      ],
      metrics: [
        { value: <>1</>, label: "Free upload" },
        { value: <>2</>, label: "Contract types" },
      ],
    },
    {
      id: "retina",
      idx: "04",
      project: "Retina",
      company: "Retina",
      product: "Forecast planning tool",
      title: <>Sales forecast <em>automation</em> that improved buying decisions.</>,
      review: "I came in skeptical of AI. Talha told me what was not worth building, then shipped the one tool that changed my buying decisions.",
      reviewBy: "Priya Krishnan · Founder, Retina",
      tags: ["Automation", "Python Scripts"],
      screenshot: "/assets/projects/retina-curated.webp",
      status: "10 wk",
      profile: [
        { label: "Planning speed", value: 86 },
        { label: "Forecast trust", value: 86 },
        { label: "Margin lift", value: 58 },
      ],
      metrics: [
        { value: <>31<em>%</em></>, label: "Fewer stockouts" },
        { value: <>18<em>%</em></>, label: "Better margin" },
      ],
    },
  ];

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow mb-24">Selected work</div>
            <h2 className="h1">Client work with clear <em>outcomes</em>.</h2>
          </div>
          <CaseCategoryNav />
        </div>

        <div className="cases">
          {cases.map((c, i) => (
            <a key={c.id} className="case" href={`/case-studies/${c.id}`}>
              <div className="case__index">
                <strong>CS / {c.idx}</strong>
                <div className="case__meta-stack">
                  <span className="case__meta-label">Company</span>
                  <span className="case__project" translate="no">{c.company}</span>
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
                      <em>{item.value}%</em>
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
      title: "Find the best task",
      desc: "Map the workflow, the repeated work, and the number that should improve.",
      items: ["Time saved", "Cost reduced", "Risk lowered"],
      score: 74,
    },
    {
      num: "02",
      title: "Build the tool",
      desc: "Ship the script, chatbot, dashboard, or workflow your team can actually use.",
      items: ["Simple UI", "Real data", "Clear handoff"],
      score: 88,
    },
    {
      num: "03",
      title: "Keep it reliable",
      desc: "Add simple checks, alerts, and notes so the tool keeps working after launch.",
      items: ["Alerts", "Cost checks", "Docs"],
      score: 82,
    },
  ];

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="os-panel">
          <div className="os-panel__intro">
            <div className="eyebrow mb-24">Operating system</div>
            <h2 className="h2">AI projects need a <em>business result</em>, not another demo.</h2>
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
    { num: "01", href: "/case-studies/category/chatbot", title: <>AI <em>chatbots</em></>, desc: "Customer support, internal helpdesk, and knowledge assistants.", problem: "Customers or staff keep asking the same questions." },
    { num: "02", href: "/case-studies/category/automation", title: <><em>Automations</em></>, desc: "Tools that move data, create reports, route work, and remove repeat admin.", problem: "Your team is losing hours to the same task every week." },
    { num: "03", href: "/case-studies/category/python-scripts", title: <>Python <em>scripts</em></>, desc: "Small scripts for cleanup, scraping, reports, file processing, and data handoffs.", problem: "A spreadsheet or manual process is starting to break." },
    { num: "04", href: "/case-studies/category/mvp-saas", title: <>MVP <em>SaaS</em></>, desc: "First-version products with the core workflow, simple UI, and buyer-ready story.", problem: "You need a usable product before investing in a full team." },
    { num: "05", href: "/case-studies/category/voice-ai", title: <>Voice <em>AI</em></>, desc: "Voice, call, and audio tools for review, routing, summaries, and follow-up.", problem: "Calls and recordings contain useful work nobody has time to review." },
    { num: "06", href: "/case-studies/category/python-scripts", title: <>Forecast <em>tools</em></>, desc: "Sales, inventory, demand, and planning tools trained on your business data.", problem: "You have data, but decisions still happen from gut feel." },
    { num: "07", href: "/case-studies/category/document-review", title: <>Document <em>review</em></>, desc: "Contract, policy, PDF, and knowledge-base review with source-backed answers.", problem: "Important answers are buried in documents nobody has time to read." },
    { num: "08", href: "/case-studies/category/mvp-saas", title: <>Fractional <em>AI lead</em></>, desc: "Senior build support for roadmap, code, vendors, hiring, and launch decisions.", problem: "You need senior AI judgment, but not a full-time hire yet." },
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
              Clients need practical work done: fewer support tickets, faster reviews, cleaner data, better forecasts, and a first product that can be shown to real buyers.
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
      desc: "You show me the problem, the data, and the workflow. I send back a plain-English brief: what is worth building, what is not, what it costs, and what should improve.",
    },
    {
      num: "02",
      title: <>Prototype — <em>2–3 weeks.</em></>,
      desc: "A working tool on real data. Not a throwaway demo. Something your team can test, challenge, and judge.",
    },
    {
      num: "03",
      title: <>Production — <em>4–10 weeks.</em></>,
      desc: "The checks, alerts, documentation, and handoff needed to keep the tool useful after launch.",
    },
    {
      num: "04",
      title: <>Handover or <em>retainer.</em></>,
      desc: "Either I document everything and your team takes over, or I stay on as a part-time AI builder at a predictable monthly. Your choice.",
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
              Most AI projects fail because the idea jumps straight from a call to a big build. I de-risk the spend before you commit headcount.
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
                I'm a <strong style={{ color: "var(--fg)" }}>senior AI builder</strong> who's spent the last five years shipping useful tools for funded startups, agencies and product teams.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                I work the way a good senior hire would: write a brief, build the prototype, ship the working tool, document it, and either hand it over or stay on. No discovery calls that don't go anywhere. No 80-page proposals. No reselling of someone else's work.
              </p>
              <p className="body" style={{ fontSize: 17, color: "var(--fg-2)" }}>
                If you've got a problem and you're not sure whether AI is the right tool — I'll tell you, on the first call. The best work comes from saying no to the wrong projects.
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
      quote: "Talha made a hard document product feel simple to explain, sell, and use. The new story helped buyers understand the value in minutes.",
      name: "Thalamus",
      role: "Document automation · Levitate Data",
      initials: "TH",
    },
    {
      quote: "The product went from technical feature list to a clear business promise: understand the signals inside important conversations.",
      name: "Aletheia",
      role: "Voice and video review · Levitate Data",
      initials: "AL",
    },
    {
      quote: "Talha turned a complicated contract workflow into a product people could understand right away: upload, review risk, and move forward.",
      name: "First Rule Contract Manager",
      role: "Construction contract automation",
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
