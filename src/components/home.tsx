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
    outcomes: <>I build practical <em>AI tools</em> that save time and make money.</>,
    partner: <>A senior <em>AI builder</em> founders hire when the idea needs to ship.</>,
    leverage: <>Turn messy company work into <em>clear, useful automation.</em></>,
    chatbots: <>Build chatbots people <em>trust</em> because the answers are grounded.</>,
  };
  const stats = [
    { value: '22', label: 'Projects shipped' },
    { value: '$2.4M', label: 'Client savings tracked' },
    { value: '$9M+', label: 'Total revenue' },
    { value: '5/5', label: 'Client rating' },
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
            <div className="tiny-mono">[ Client note ] Levitate Data</div>
            <p>He turned a technical product into a clear buyer story our team could use immediately.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ Client note ] First Rule</div>
            <p>The contract workflow finally felt simple, credible, and ready to show customers.</p>
          </div>
          <div className="hero__meta-item">
            <div className="tiny-mono">[ Client note ] Retina</div>
            <p>He told me what was not worth building, then shipped the one tool that mattered.</p>
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
      review: "Talha made a hard document product feel simple to explain, sell, and use. The new story helped buyers understand the value in minutes.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      status: "site linked",
      visual: "/assets/projects/thalamus-curated-ui-v2.webp",
      visualAlt: "Stylized Thalamus UI mockup showing document search, cited sources, and answer confidence",
      profile: [
        { label: "Sales clarity", value: 92 },
        { label: "Buyer confidence", value: 88 },
        { label: "Setup time saved", value: 66 },
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
      review: "The product went from technical feature list to a clear business promise: understand the signals inside important conversations.",
      reviewBy: "Product team · Levitate Data",
      tags: ["Voice AI", "MVP SaaS", "Automation"],
      status: "product linked",
      visual: "/assets/projects/aletheia-curated-ui-v2.webp",
      visualAlt: "Stylized Aletheia UI mockup showing call review, transcript, waveform, and signal tracks",
      profile: [
        { label: "Message clarity", value: 92 },
        { label: "Demo readiness", value: 88 },
        { label: "Buyer trust", value: 84 },
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
      logo: "/assets/logos/first-rule-mark.png",
      title: <>Contract <em>review automation</em> for construction teams.</>,
      review: "Talha turned a complicated contract workflow into a product people could understand right away: upload, review risk, and move forward.",
      reviewBy: "First Rule team",
      tags: ["Automation", "Chatbot", "MVP SaaS"],
      status: "site linked",
      visual: "/assets/projects/frcm-curated-ui-v2.webp",
      visualAlt: "Stylized First Rule Contract Manager UI mockup showing contract risk review and playbook guidance",
      profile: [
        { label: "Review time cut", value: 86 },
        { label: "Risk visibility", value: 90 },
        { label: "Sales handoff", value: 82 },
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
      logo: "/assets/logos/retina-mark.png",
      title: <>Sales forecast <em>automation</em> that improved buying decisions.</>,
      review: "I came in skeptical of AI. Talha told me what was not worth building, then shipped the one tool that changed my buying decisions.",
      reviewBy: "Priya Krishnan · Founder, Retina",
      tags: ["Automation", "Python Scripts"],
      status: "10 wk",
      visual: "/assets/projects/retina-curated-ui-v2.webp",
      visualAlt: "Stylized Retina UI mockup showing retail demand forecasting, purchase planning, and chat workflow",
      profile: [
        { label: "Planning speed", value: 86 },
        { label: "Stockout risk cut", value: 86 },
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
  const checks = [
    {
      num: "01",
      title: "Repeat work",
      desc: "A task happens often enough that removing it changes the week.",
    },
    {
      num: "02",
      title: "Known source",
      desc: "The answer, rule, or decision path already exists in your data or documents.",
    },
    {
      num: "03",
      title: "Clear owner",
      desc: "Someone can approve the workflow and judge whether the tool is useful.",
    },
  ];

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="os-panel">
          <div className="os-panel__intro">
            <div className="eyebrow mb-24">What to automate</div>
            <h2 className="h2">Not every workflow needs <em>automation</em>. The useful ones share three signs.</h2>
          </div>
          <div className="fit-check">
            <div className="fit-check__card">
              <div className="tiny-mono">[ Before building ]</div>
              <div className="fit-check__question">Can this save time, reduce risk, or help a buyer decide?</div>
              <div className="fit-check__route">
                <span>Manual workflow</span>
                <i />
                <span>AI-assisted tool</span>
              </div>
            </div>
            <div className="fit-check__list">
              {checks.map((check) => (
                <div className="fit-check__item" key={check.num}>
                  <span>{check.num}</span>
                  <div>
                    <strong>{check.title}</strong>
                    <p>{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
    { num: "07", href: "/case-studies/category/document-review", title: <>Knowledge <em>intelligence</em></>, desc: "Contract, policy, PDF, and knowledge-base review with source-backed answers.", problem: "Important answers are buried in documents nobody has time to read." },
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
            <h2 className="h1">A <em>senior</em> hire — without the headcount.</h2>
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
