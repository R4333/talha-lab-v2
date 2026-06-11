import { Arrow, ArrowUpRight, ClientLogos, Footer, type NavigateToPage } from './shared'
import { ProjectIcon, type ProjectIconName } from './case-study-visuals'
import { SERVICE_CAPABILITIES } from './service-capabilities'
import { contactHref } from '../utils/seo'

type HeadlineVariant = 'outcomes' | 'partner' | 'leverage' | 'chatbots'

function setPointerGlow(event: React.PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`)
}

function caseIconForTags(tags: string[]): ProjectIconName {
  const label = tags.join(' ').toLowerCase()

  if (label.includes('voice') || label.includes('audio') || label.includes('call')) return 'PhoneCall'
  if (label.includes('video') || label.includes('shorts')) return 'Clapperboard'
  if (label.includes('document') || label.includes('ocr') || label.includes('contract')) return 'FileSearch'
  if (label.includes('forecast') || label.includes('scoring') || label.includes('recommend')) return 'TrendingUp'
  if (label.includes('chatbot') || label.includes('support')) return 'MessageCircle'
  if (label.includes('python') || label.includes('data')) return 'TableProperties'

  return 'Workflow'
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
      visualAlt: "Stylized Thalamus interface showing document search, cited sources, and answer confidence",
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
      visualAlt: "Stylized Aletheia interface showing call review, transcript, waveform, and signal tracks",
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
      visualAlt: "Stylized First Rule Contract Manager interface showing contract risk review and playbook guidance",
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
      visualAlt: "Stylized Retina interface showing retail demand forecasting, purchase planning, and chat workflow",
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
    {
      id: "crayo",
      idx: "05",
      project: "Crayo",
      company: "Crayo",
      product: "AI short-form video editor",
      title: <>AI video tools for <em>viral</em> short-form content.</>,
      review: "Crayo is now summed up in one promise: create short videos in seconds.",
      reviewBy: "Product team",
      tags: ["AI Video", "Shorts", "Voice AI"],
      status: "creator tool",
      visual: "/assets/projects/crayo.png",
      visualAlt: "Screenshot-style visual for Crayo showing an AI short-form video editing product",
      highlights: [
        "Automatic voiceovers and captions",
        "Shorts workflow from script to export",
        "Creator-friendly editing controls",
      ],
      metrics: [
        { value: <>Auto</>, label: "Voiceovers" },
        { value: <>Shorts</>, label: "Format focus" },
      ],
    },
    {
      id: "musicfy",
      idx: "06",
      project: "Musicfy AI",
      company: "Musicfy AI",
      product: "AI voice song generator",
      title: <>AI covers in <em>any</em> voice.</>,
      review: "Musicfy became easier to understand as a creator tool: pick a voice, make a cover, and keep experimenting.",
      reviewBy: "Product team",
      tags: ["Generative Audio", "Voice Cloning", "Creator Tools"],
      status: "audio AI",
      visual: "/assets/projects/musicfy.jpg",
      visualAlt: "Screenshot-style visual for Musicfy showing an AI voice and song generation product",
      highlights: [
        "100,000+ voices positioned as exploration proof",
        "Custom voice cloning framed around creator control",
        "Instant-cover workflow made easy to scan",
      ],
      metrics: [
        { value: <>100K<em>+</em></>, label: "Voice library" },
        { value: <>Custom</>, label: "Voice cloning" },
      ],
    },
    {
      id: "justlisten",
      idx: "07",
      project: "Just Listen",
      company: "Just Listen",
      product: "Budget audiobook platform",
      title: <>Audiobooks made <em>affordable</em> and easy to start.</>,
      review: "Just Listen became easier to explain as one direct offer: the cheapest way to listen to audiobooks.",
      reviewBy: "Product team",
      tags: ["Audiobooks", "Audio", "MVP SaaS"],
      status: "audio platform",
      visual: "/assets/projects/justlisten.png",
      visualAlt: "Screenshot-style visual for Just Listen showing an audiobook product experience",
      highlights: [
        "Low-cost listening became the core promise",
        "Subscription story simplified for repeat users",
        "Audio-first workflow kept focused on habit",
      ],
      metrics: [
        { value: <>Low</>, label: "Listening cost" },
        { value: <>Audio</>, label: "Format focus" },
      ],
    },
    {
      id: "study-potion",
      idx: "08",
      project: "Study Potion AI",
      company: "Study Potion AI",
      product: "AI study assistant",
      title: <>AI study materials that turn notes into <em>practice</em>.</>,
      review: "Study Potion became easier to explain as a simple loop: upload material, generate practice, and keep studying.",
      reviewBy: "Product team",
      tags: ["Education", "Flashcards", "Quizzes"],
      status: "study AI",
      visual: "/assets/projects/study-potion.png",
      visualAlt: "Study Potion AI homepage visual showing instant flashcards, quizzes, and study material",
      highlights: [
        "Notes, flashcards, and quizzes unified",
        "Study-loop positioning for students",
        "Generated material tied to practice",
      ],
      metrics: [
        { value: <>Auto</>, label: "Flashcards" },
        { value: <>Quiz</>, label: "Practice mode" },
      ],
    },
    {
      id: "gomoon",
      idx: "09",
      project: "GoMoon.ai",
      company: "GoMoon.ai",
      product: "AI economic calendar",
      title: <>Market-moving events made easier to <em>track</em>.</>,
      review: "GoMoon.ai is easier to understand as a market calendar with context, timing, and AI summaries in one place.",
      reviewBy: "Product team",
      tags: ["Trading", "Economic Calendar", "Analytics"],
      status: "market AI",
      visual: "/assets/projects/gomoon.png",
      visualAlt: "GoMoon.ai abstract product visual from the source projects page",
      highlights: [
        "Economic calendar plus event context",
        "Trader alerts and watchpoints",
        "Careful no-advice product framing",
      ],
      metrics: [
        { value: <>Events</>, label: "Calendar" },
        { value: <>AI</>, label: "Event insight" },
      ],
    },
    {
      id: "revana",
      idx: "10",
      project: "Revana",
      company: "Revana",
      product: "AI support staff",
      title: <>AI support staff for revenue and <em>customer questions</em>.</>,
      review: "Revana became a clearer offer: AI support staff that answers, qualifies, and hands off when a human should step in.",
      reviewBy: "Product team",
      tags: ["Sales", "Support", "Automation"],
      status: "support AI",
      visual: "/assets/projects/revana.png",
      visualAlt: "Revana source visual with brand mark",
      highlights: [
        "Common support questions automated",
        "Sales touchpoints and follow-up covered",
        "Human escalation kept visible",
      ],
      metrics: [
        { value: <>24/7</>, label: "Coverage" },
        { value: <>AI</>, label: "Support staff" },
      ],
    },
    {
      id: "trailblazer-marketing",
      idx: "11",
      project: "Trailblazer Marketing",
      company: "Trailblazer Marketing",
      product: "SEO growth system",
      title: <>SEO content operations built for <em>profitable</em> growth.</>,
      review: "Trailblazer became easier to sell as an SEO operating system with in-house impact at fractional cost.",
      reviewBy: "Product team",
      tags: ["SEO", "Content", "Growth"],
      status: "growth system",
      visual: "/assets/projects/trailblazer.png",
      visualAlt: "Trailblazer Marketing source visual showing profitable SEO positioning",
      highlights: [
        "Research, briefs, production, and reporting connected",
        "Profitable search traffic framed as the goal",
        "Fractional-team model made concrete",
      ],
      metrics: [
        { value: <>SEO</>, label: "Channel" },
        { value: <>Briefs</>, label: "Content ops" },
      ],
    },
    {
      id: "coversaiq",
      idx: "12",
      project: "CoversaIQ",
      company: "CoversaIQ",
      product: "Call center AI platform",
      title: <>Conversation intelligence for sales and support <em>agents</em>.</>,
      review: "CoversaIQ became easier to explain as the system that turns every call into coaching, follow-up, and management visibility.",
      reviewBy: "Product team",
      tags: ["LLM Platform", "Speech", "Analytics"],
      status: "call AI",
      visual: "/assets/projects/coversaiq.png",
      visualAlt: "CoversaIQ source visual showing call analytics on a laptop dashboard",
      highlights: [
        "LLM summaries and agent assist",
        "SLA tracking and manager visibility",
        "Call records turned into coaching signals",
      ],
      metrics: [
        { value: <>LLM</>, label: "Agent assist" },
        { value: <>SLA</>, label: "Tracking" },
      ],
    },
    {
      id: "ai-voice-system",
      idx: "13",
      project: "AI Voice System",
      company: "AI Voice System",
      product: "Realtime voice stack",
      title: <>Realtime AI voice calls with latency under <em>two seconds</em>.</>,
      review: "The voice system moved from a slow demo to a production-ready conversation loop.",
      reviewBy: "Product team",
      tags: ["Voice", "Realtime", "Observability"],
      status: "voice AI",
      visual: "/assets/projects/ai-voice-system.png",
      visualAlt: "AI Voice System source visual showing a chat and call interface",
      highlights: [
        "Latency reduced from 7s to under 2s",
        "Twilio WebSocket streaming stack",
        "Custom VAD and NER pipelines",
      ],
      metrics: [
        { value: <>7<em>s</em>→{'<'}2<em>s</em></>, label: "Latency" },
        { value: <>VAD</>, label: "Turn detection" },
      ],
    },
    {
      id: "agentic-resume-screener",
      idx: "14",
      project: "Agentic Resume Screener",
      company: "Agentic Resume Screener",
      product: "Recruiting AI workflow",
      title: <>Agentic resume screening for faster recruiting <em>shortlists</em>.</>,
      review: "The resume screener became a practical recruiting agent: faster intake, clear evidence, and human review at the end.",
      reviewBy: "Product team",
      tags: ["Agents", "OCR", "Recruiting"],
      status: "recruiting AI",
      visual: "/assets/projects/agentic-resume-screener.png",
      visualAlt: "Agentic Resume Screener source visual showing a laptop with an application interface",
      highlights: [
        "LangChain and LangGraph screening flow",
        "OCR intake for PDFs and scans",
        "Evidence-backed candidate scoring",
      ],
      metrics: [
        { value: <>OCR</>, label: "Resume intake" },
        { value: <>Score</>, label: "Candidate fit" },
      ],
    },
    {
      id: "document-retrieval-ocr",
      idx: "15",
      project: "Document Retrieval & OCR Automation",
      company: "Document OCR",
      product: "Hybrid document search",
      title: <>Document retrieval and OCR automation for grounded <em>answers</em>.</>,
      review: "The document pipeline became reliable because OCR, parsing, retrieval, and citations were designed together.",
      reviewBy: "Product team",
      tags: ["RAG", "OCR", "Pipelines"],
      status: "document AI",
      visual: "/assets/projects/document-retrieval-ocr.png",
      visualAlt: "Document Retrieval and OCR Automation source visual showing a code editor interface",
      highlights: [
        "Docling, LlamaParser, and OCR ingestion",
        "Hybrid keyword and vector retrieval",
        "Source-backed answers for operations teams",
      ],
      metrics: [
        { value: <>Hybrid</>, label: "Search" },
        { value: <>OCR</>, label: "Coverage" },
      ],
    },
    {
      id: "credit-scoring",
      idx: "16",
      project: "Credit Scoring Model",
      company: "Credit Scoring Model",
      product: "Explainable risk ML",
      title: <>Credit scoring with explainability for lending <em>risk</em>.</>,
      review: "The credit model became more than a score: it included validation, drivers, and a reviewable risk report.",
      reviewBy: "Product team",
      tags: ["ML", "Modeling", "Risk"],
      status: "risk model",
      visual: "/assets/projects/credit-scoring-model.jpg",
      visualAlt: "Credit scoring model source visual showing financial analytics and code",
      highlights: [
        "XGBoost and CatBoost model comparison",
        "95% delinquency prediction accuracy",
        "Explainability reports for credit review",
      ],
      metrics: [
        { value: <>95<em>%</em></>, label: "Accuracy" },
        { value: <>ML</>, label: "Risk model" },
      ],
    },
    {
      id: "content-safety-recommendations",
      idx: "17",
      project: "Content Safety & Recommendations",
      company: "Content Safety",
      product: "Vision AI and ranking",
      title: <>Content safety and recommendation systems for short-form <em>video</em>.</>,
      review: "The recommendation system improved because safety, visual understanding, and ranking were treated as one content intelligence workflow.",
      reviewBy: "Product team",
      tags: ["Vision", "Safety", "Recommendations"],
      status: "vision AI",
      visual: "/assets/projects/content-safety-recommendations.png",
      visualAlt: "Content Safety and Recommendations source visual showing computer vision emotion detection",
      highlights: [
        "Transformer vision and YOLO workflows",
        "Moderation signals tied to ranking",
        "Recommendation changes lifted engagement by 50%",
      ],
      metrics: [
        { value: <>50<em>%</em></>, label: "Engagement lift" },
        { value: <>YOLO</>, label: "Detection" },
      ],
    },
  ];

  const highlightedCases = cases.slice(0, 4)

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header section-header--work">
          <div>
            <div className="eyebrow mb-24">Project work</div>
            <h2 className="h1">Highlighted projects with clear <em>outcomes</em>.</h2>
          </div>
          <div className="work-directory-card">
            <span className="tiny-mono">Project showcase</span>
            <strong>Full project library by workflow</strong>
            <p>Browse the full project library with category icons, generated previews, and detail pages.</p>
            <a href="/projects" className="btn btn--ghost">
              Open Projects <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="cases">
          {highlightedCases.map((c) => (
            <a key={c.id} className="case" href={`/case-studies/${c.id}`}>
              <div className="case__copy">
                <div className="case__index">
                  <strong>Case Study / {c.idx}</strong>
                  <div className="case__brand-row">
                    {c.logo && <img src={c.logo} alt="" loading="lazy" width="96" height="96" />}
                    <span className="case__project case__project--with-icon" translate="no">
                      <ProjectIcon name={caseIconForTags(c.tags)} size={15} />
                      {c.company}
                    </span>
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
              <div className="case__visual case__visual--with-results">
                <img className="case__visual-image" src={c.visual} alt={c.visualAlt} width="1586" height="992" loading="eager" decoding="async" />
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
        <div className="work-showcase-actions">
          <a href="/projects" className="btn btn--accent btn--lg">
            View all projects <Arrow />
          </a>
          <a href="/projects#categories" className="btn btn--ghost btn--lg">
            Browse categories <ArrowUpRight />
          </a>
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

        <div className="services-grid services-grid--capabilities">
          {SERVICE_CAPABILITIES.map((s) => (
            <a key={s.id} className="service" href={s.href}>
              <div className="service__topline">
                <div className="service__num">CAP / {s.num}</div>
                <ProjectIcon name={s.icon} size={24} className="service__icon" />
              </div>
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
