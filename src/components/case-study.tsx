import { CTA } from './home'
import { Arrow, Footer, type NavigateToPage } from './shared'

type CaseStudy = {
  id: string
  aliases?: string[]
  index: string
  shortName: string
  client: string
  clientMeta: string
  liveUrl?: string
  title: React.ReactNode
  lede: string
  engagement: string
  engagementMeta: string
  role: string
  roleMeta: string
  year: string
  yearMeta: string
  resultsLabel: string
  resultsNote: string
  results: Array<{ value: React.ReactNode; label: string; sub: string }>
  impact: Array<{ label: string; value: number; detail: string }>
  problem: React.ReactNode[]
  approach: React.ReactNode[]
  bullets: string[]
  heroVisual?: { src: string; alt: string }
  screenshots?: Array<{ title: string; src: string; alt: string; caption: string; width: number; height: number }>
  architecture: Array<{ title: string; name: string; items: string[]; accent?: boolean }>
  architectureNote: React.ReactNode
  codeTitle: string
  code: React.ReactNode
  outcome: React.ReactNode[]
  quote: string
  quoteBy: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'thalamus',
    index: '01',
    shortName: 'Thalamus',
    client: 'Thalamus by Levitate Data',
    clientMeta: 'Enterprise RAG · Retrieval infrastructure',
    liveUrl: 'https://thalamus.levitatedata.com/',
    title: <>Enterprise-grade <em>agentic RAG</em> for document-heavy AI products.</>,
    lede:
      'Thalamus gives product and engineering teams a trusted retrieval layer for AI systems that cannot afford vague answers. It transforms complex documents, scans, images, video and enterprise knowledge stores into grounded, citation-backed intelligence without forcing teams to build fragile RAG infrastructure from scratch.',
    engagement: 'Product launch narrative',
    engagementMeta: 'Positioning · product story · proof',
    role: 'Product strategy',
    roleMeta: 'RAG narrative · technical proof',
    year: '2026',
    yearMeta: 'Launch positioning',
    resultsLabel: 'Business case',
    resultsNote: 'build-vs-buy value drivers',
    results: [
      { value: <>66<em>%</em></>, label: 'Lower TCO', sub: 'Vs. building RAG in-house' },
      { value: <>$485<em>k</em></>, label: 'Average savings', sub: 'Compared with offshore build' },
      { value: <>6<em>mo</em></>, label: 'Faster to production', sub: 'Documented build-vs-buy gap' },
      { value: <em>Day 1</em>, label: 'Production readiness', sub: 'Hardened retrieval layer' },
    ],
    impact: [
      { label: 'Cost advantage', value: 66, detail: 'Lower TCO versus an in-house retrieval build.' },
      { label: 'Deployment speed', value: 84, detail: 'Avoids months of ingestion and eval plumbing.' },
      { label: 'Answer trust', value: 92, detail: 'Citation-first retrieval for auditable outputs.' },
      { label: 'Data coverage', value: 88, detail: 'Documents, scans, tables, images, and video.' },
    ],
    problem: [
      <>Enterprise AI breaks when retrieval is treated as a prototype detail. Real customer data includes scanned PDFs, dense tables, handwritten notes, long policy documents, multimedia files and source systems that change faster than static indexes can keep up.</>,
      <>Thalamus is built for the teams where <strong>retrieval failure is product failure</strong>: SaaS companies, regulated operators and AI builders whose answers must be accurate, auditable and defensible.</>,
      <>The buying question is simple: build and maintain a custom retrieval stack for months, or plug into infrastructure purpose-built for grounded AI from day one.</>,
    ],
    approach: [
      <>The product story centers on Thalamus as <strong>retrieval infrastructure for production AI</strong>, the intelligence layer between messy proprietary knowledge and answers users can trust.</>,
      <>Its value is framed around the capabilities buyers can evaluate immediately: multimodal ingestion, knowledge processing, agentic retrieval orchestration, model-agnostic integration and compliance-ready controls.</>,
      <>The commercial narrative makes the build-vs-buy decision concrete with TCO, timeline and maintenance comparisons that map directly to executive approval criteria.</>,
    ],
    bullets: [
      'A retrieval backbone for AI products, not a thin wrapper around vector search.',
      'Native multimodal ingestion across documents, scans, images, video, tables and complex layouts.',
      'Agentic retrieval, gap detection, reranking and citation-level attribution for answers users can verify.',
      'Enterprise controls built around tenant isolation, encryption, audit trails, compliance readiness and no customer-data training.',
      'A board-level build-vs-buy case around cost, speed, reliability and future model flexibility.',
    ],
    heroVisual: {
      src: '/assets/projects/thalamus-curated.webp',
      alt: 'Abstract curated visual for Thalamus showing layered documents, citation threads, and retrieval nodes',
    },
    screenshots: [
      {
        title: 'Homepage positioning',
        src: '/assets/case-studies/thalamus-home.png',
        alt: 'Screenshot of the Thalamus homepage showing enterprise-grade agentic RAG positioning',
        caption: 'The homepage positions Thalamus as the enterprise-grade answer to unreliable retrieval, with multimodal ingestion, auditability and a clear cost/time advantage.',
        width: 1440,
        height: 6036,
      },
      {
        title: 'Product walkthrough',
        src: '/assets/case-studies/thalamus-product.png',
        alt: 'Screenshot of the Thalamus product page showing multimodal ingestion and agentic retrieval sections',
        caption: 'The product page turns the platform into a clear buyer journey: ingest, process, retrieve, integrate and govern.',
        width: 1440,
        height: 3799,
      },
      {
        title: 'Build-vs-buy analysis',
        src: '/assets/case-studies/thalamus-why.png',
        alt: 'Screenshot of the Thalamus build versus buy page showing TCO analysis',
        caption: 'The Why Thalamus page gives executives the commercial proof: lower TCO, faster production readiness and less long-term platform burden.',
        width: 1440,
        height: 4981,
      },
    ],
    architecture: [
      { title: '[ 01 ] Sources', name: 'Document sources', items: ['Enterprise systems', 'File uploads', 'APIs', 'Rich media'] },
      { title: '[ 02 ] Ingest', name: 'Multimodal parsing', items: ['PDFs', 'Scans', 'Tables', 'Images + video'] },
      { title: '[ 03 ] Retrieve', name: 'Agentic retrieval', items: ['Query decomposition', 'Gap detection', 'Reranking', 'Citations'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Application layer', items: ['LLMs', 'Agents', 'Workflows', 'Audit trails'] },
    ],
    architectureNote: <>Thalamus owns the hard retrieval layer underneath the customer application. <strong>Teams keep their proprietary agents, workflows and vertical IP while Thalamus handles ingestion, grounding, citations and infrastructure reliability.</strong></>,
    codeTitle: 'Auditable retrieval response',
    code: <>
      <span className="k">type</span> RetrievalAnswer = {'{'}{'\n'}
      {'  '}answer: str{'\n'}
      {'  '}citations: SourceCitation[]{'\n'}
      {'  '}confidence: <span className="k">"high"</span> | <span className="k">"medium"</span> | <span className="k">"low"</span>{'\n'}
      {'  '}auditTrailId: string{'\n'}
      {'  '}knowledgeGaps: string[]{'\n'}
      {'}'}
    </>,
    outcome: [
      <>Thalamus presents a premium infrastructure product for teams building AI on proprietary knowledge, where citations, auditability and retrieval quality are business-critical.</>,
      <>The narrative connects deep technical capability to the buyer's real decision: reduce hallucination risk, move faster, avoid infrastructure drag and keep control of sensitive data.</>,
      <>The live product experience backs the promise with a homepage, product walkthrough and build-vs-buy analysis that make the platform easy to understand and easier to justify.</>,
    ],
    quote: 'When the data matters, retrieval failure is product failure.',
    quoteBy: 'Thalamus product documentation',
  },
  {
    id: 'aletheia',
    aliases: ['alethia'],
    index: '02',
    shortName: 'Aletheia',
    client: 'Aletheia by Levitate Data',
    clientMeta: 'Behavioral intelligence · Multimodal AI',
    liveUrl: 'https://levitatedata.com/product#Aletheia',
    title: <>Multimodal <em>behavioral intelligence</em> for high-stakes communication.</>,
    lede:
      'Aletheia brings the emotional and behavioral layer of communication into focus. By combining facial, vocal and linguistic analysis, it helps teams understand confidence, stress, sentiment and tone across video, audio and conversation, turning subtle human signals into explainable intelligence.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · product story · use cases',
    role: 'Product strategy',
    roleMeta: 'Multimodal AI narrative',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Platform promise',
    resultsNote: 'behavioral intelligence layer',
    results: [
      { value: <em>3</em>, label: 'Signal types', sub: 'Visual, vocal and linguistic cues' },
      { value: <em>Realtime</em>, label: 'Perception modeling', sub: 'Live or recorded media' },
      { value: <em>API</em>, label: 'Integration mode', sub: 'Service-layer module' },
      { value: <em>Explainable</em>, label: 'Output standard', sub: 'Interpretable high-stakes insights' },
    ],
    impact: [
      { label: 'Visual signal', value: 88, detail: 'Facial expression and visible behavioral change.' },
      { label: 'Vocal signal', value: 84, detail: 'Stress, emphasis, pacing, and confidence shifts.' },
      { label: 'Language signal', value: 80, detail: 'Sentiment, nuance, and conversational context.' },
      { label: 'Fused insight', value: 92, detail: 'A single explainable timeline for review.' },
    ],
    problem: [
      <>Most conversation AI stops at transcripts and summaries. That leaves out the signals that often matter most: hesitation, confidence, stress, sentiment, tone and behavioral change over time.</>,
      <>Aletheia is built for the moments where <strong>how something was said changes what it means</strong>, especially when the stakes are legal, operational, financial or reputational.</>,
      <>Its product story gives buyers a clear category: multimodal behavioral intelligence for teams that need deeper context than words alone can provide.</>,
    ],
    approach: [
      <>The message leads with a simple, memorable premise: understanding how something was said is as important as knowing what was said.</>,
      <>From there, the platform value unfolds across three signal streams, visual, vocal and linguistic, fused into explainable timelines of emotion, confidence and stress.</>,
      <>The use-case framing speaks to precision-critical workflows such as depositions, compliance analytics, customer interactions and investigations where context, trust and interpretability matter.</>,
    ],
    bullets: [
      'A foundational intelligence layer for interpreting human behavior across media.',
      'Facial micro-expression, vocal stress and linguistic nuance treated as complementary evidence streams.',
      'Behavioral signal fusion that converts raw communication into structured insight.',
      'Explainable outputs, emotional timelines and confidence markers for high-stakes review workflows.',
      'Enterprise-ready delivery through API access, compliance readiness and scalable integration.',
    ],
    heroVisual: {
      src: '/assets/projects/aletheia-curated.webp',
      alt: 'Abstract curated visual for Aletheia showing vocal, facial, and language signals converging',
    },
    screenshots: [
      {
        title: 'Aletheia product section',
        src: '/assets/case-studies/aletheia-section.png',
        alt: 'Screenshot of the Aletheia product section on Levitate Data',
        caption: 'The product section introduces Aletheia as the intelligence layer that reveals emotion, confidence, tone and stress across communication.',
        width: 1440,
        height: 1200,
      },
      {
        title: 'Levitate Data product catalog',
        src: '/assets/case-studies/aletheia-product-page.png',
        alt: 'Screenshot of the Levitate Data product catalog containing Thalamus, Aletheia and Theia',
        caption: 'The product catalog places Aletheia inside Levitate Data\'s broader suite of AI infrastructure and intelligence products.',
        width: 1440,
        height: 4246,
      },
    ],
    architecture: [
      { title: '[ 01 ] Inputs', name: 'Human signals', items: ['Video', 'Audio', 'Transcript', 'Conversation'] },
      { title: '[ 02 ] Detect', name: 'Signal analysis', items: ['Facial cues', 'Vocal stress', 'Sentiment', 'Tone'] },
      { title: '[ 03 ] Fuse', name: 'Behavioral model', items: ['Confidence shifts', 'Stress markers', 'Emotion timelines', 'Intent context'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Decision layer', items: ['API', 'Dashboards', 'Case review', 'Audit trail'] },
    ],
    architectureNote: <>Aletheia turns unstructured human communication into structured behavioral signals. <strong>The output is designed to be interpretable enough for high-stakes review, not a black-box score detached from evidence.</strong></>,
    codeTitle: 'Behavioral signal output',
    code: <>
      signals = analyze(video, audio, transcript){'\n'}
      timeline = fuse_behavioral_signals(signals){'\n'}
      <span className="k">return</span> BehavioralInsight(confidence=timeline.confidence, stress=timeline.stress, evidence=signals.sources)
    </>,
    outcome: [
      <>Aletheia stands as a distinct product story with a clear market promise: make human communication more interpretable, explainable and actionable.</>,
      <>The positioning turns multimodal emotion analysis, behavioral signal fusion and real-time perception modeling into a cohesive enterprise platform narrative.</>,
      <>The live product section reinforces the message with a focused description of Aletheia's role in high-stakes analysis, compliance and investigative workflows.</>,
    ],
    quote: 'Understanding how something was said is as important as knowing what was said.',
    quoteBy: 'Aletheia product documentation',
  },
  {
    id: 'frcm',
    index: '03',
    shortName: 'FRCM',
    client: 'First Rule Contract Manager',
    clientMeta: 'Construction contracts · Playbook AI',
    liveUrl: 'https://www.firstrulecm.ai/',
    title: <>Construction contract <em>review</em> with clause-linked AI playbooks.</>,
    lede:
      'First Rule Contract Manager gives construction teams the contract discipline to spot risk before it becomes project cost. Teams upload a prime contract or subcontract, review clause-level risks tied to source language, apply playbook guidance and turn the review into a kickoff-ready handoff.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · product story · proof',
    role: 'Product strategy',
    roleMeta: 'Contract AI narrative',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Product promise',
    resultsNote: 'construction contract discipline',
    results: [
      { value: <em>1</em>, label: 'Free upload', sub: 'Start with one contract' },
      { value: <>Prime <em>+</em> Sub</>, label: 'Contract coverage', sub: 'Including flow-down checks' },
      { value: <em>30d</em>, label: 'Money-back guarantee', sub: 'After purchase' },
      { value: <em>Azure</em>, label: 'Deployment option', sub: 'Can run in customer environment' },
    ],
    impact: [
      { label: 'Clause visibility', value: 86, detail: 'Risk surfaced at the clause level before kickoff.' },
      { label: 'Playbook consistency', value: 90, detail: 'Preferred and fallback language made repeatable.' },
      { label: 'Handoff clarity', value: 82, detail: 'Summaries built for PMs and field leadership.' },
      { label: 'Review speed', value: 76, detail: 'A faster path from upload to decision-ready review.' },
    ],
    problem: [
      <>Construction contracts move fast, but the consequences last for the life of the job. Indemnity, delay, notice, payment and lien language can quietly shift risk before a project even starts.</>,
      <>FRCM is designed for construction teams that need <strong>practical contract clarity, not generic legal AI</strong>: visible risk, source-linked rationale and guidance that fits how project teams actually work.</>,
      <>The product promise is operational as much as legal: help executives, precon, PMs, risk teams and field leaders understand the contract before it becomes a jobsite problem.</>,
    ],
    approach: [
      <>The story centers on <strong>playbook-driven contract discipline</strong>: repeatable standards that show up beside the clause while the review is happening.</>,
      <>FRCM is positioned around the workflow buyers can immediately picture: upload, detect clause risk, review plain-language rationale, apply preferred or fallback language and generate a project handoff.</>,
      <>Marten, the AI contract coach, adds an approachable product layer by letting teams ask plain-language questions while staying anchored to contract text and playbook guidance.</>,
    ],
    bullets: [
      'Construction-trained contract review built for project risk, not generic document management.',
      'Prime contract, subcontract and flow-down checks for construction operators.',
      'Clause categories, risk levels and source-linked rationale packaged into a clear review workflow.',
      'Playbooks as the standards engine behind preferred language, fallback language and escalation paths.',
      'AI review connected to the jobsite through kickoff-ready summaries, Marten coaching and training in the flow of work.',
    ],
    heroVisual: {
      src: '/assets/projects/frcm-curated.webp',
      alt: 'Abstract curated visual for First Rule Contract Manager showing contracts, playbooks, and construction planning objects',
    },
    screenshots: [
      {
        title: 'Homepage positioning',
        src: '/assets/case-studies/frcm-home.png',
        alt: 'Screenshot of the First Rule Contract Manager homepage',
        caption: 'The homepage sells a focused promise: confident contract decisions backed by construction-trained AI, playbooks and human-readable next steps.',
        width: 1440,
        height: 6362,
      },
      {
        title: 'Contract Manager overview',
        src: '/assets/case-studies/frcm-contract-manager.png',
        alt: 'Screenshot of the First Rule Contract Manager product overview page',
        caption: 'The product page turns contract review into an operational workflow, from upload to risk review to kickoff handoff.',
        width: 1440,
        height: 5461,
      },
      {
        title: 'Construction playbooks',
        src: '/assets/case-studies/frcm-playbooks.png',
        alt: 'Screenshot of the First Rule construction contract playbooks page',
        caption: 'The playbooks page makes the standards layer tangible, showing how negotiation posture becomes repeatable guidance across projects.',
        width: 1440,
        height: 4404,
      },
    ],
    architecture: [
      { title: '[ 01 ] Upload', name: 'Contract intake', items: ['Prime contracts', 'Subcontracts', 'Exhibits', 'Riders'] },
      { title: '[ 02 ] Detect', name: 'Clause review', items: ['Clause categories', 'Risk levels', 'Flow-down checks', 'Source links'] },
      { title: '[ 03 ] Guide', name: 'Playbook layer', items: ['Preferred language', 'Fallback language', 'Company standards', 'Escalation'], accent: true },
      { title: '[ 04 ] Handoff', name: 'Project action', items: ['Risk summary', 'PM handoff', 'Marten Q&A', 'Training'] },
    ],
    architectureNote: <>First Rule keeps the AI answer attached to the contract and the playbook. <strong>The product teaches while work happens: clause-linked rationale, coaching and standards appear in the review flow instead of living in a separate training binder.</strong></>,
    codeTitle: 'Clause review contract',
    code: <>
      review = detect_clause_risk(contract, playbook){'\n'}
      rationale = explain_in_plain_language(review, source_clause){'\n'}
      handoff = build_kickoff_summary(review, standards){'\n'}
      <span className="k">return</span> ClauseReview(risk=review.level, source=source_clause, next_steps=handoff)
    </>,
    outcome: [
      <>FRCM presents a category-specific AI product for construction teams that need contract clarity before work begins.</>,
      <>The positioning turns clause detection, playbook guidance, Marten coaching and kickoff summaries into a single value proposition: better contract decisions, better project outcomes.</>,
      <>The live site supports that promise with a focused homepage, product walkthrough and playbook documentation built around the way construction teams actually review risk.</>,
    ],
    quote: 'Better contracts. Better outcomes.',
    quoteBy: 'First Rule Contract Manager product documentation',
  },
  {
    id: 'retina',
    index: '04',
    shortName: 'Retina',
    client: 'Retina',
    clientMeta: 'Bootstrapped · DTC analytics · Forecasting',
    title: <>A <em>forecast model</em> that finally beat the founder's gut.</>,
    lede:
      'Retina was making inventory decisions from spreadsheets, intuition and stale dashboards. We built an end-to-end forecasting pipeline with confidence intervals and a Slack-native planning interface in 10 weeks.',
    engagement: 'Sprint + advisory',
    engagementMeta: '10 weeks build · async support',
    role: 'ML engineer',
    roleMeta: 'Forecasting · MLOps · product surface',
    year: '2024',
    yearMeta: 'Q4 launch',
    resultsLabel: 'Results · two buying cycles',
    resultsNote: 'measured against SKU planning baseline',
    results: [
      { value: <>-31<em>%</em></>, label: 'Stockouts', sub: 'Across top SKUs' },
      { value: <>+18<em>%</em></>, label: 'Margin per SKU', sub: 'After buying cadence shift' },
      { value: <em>7d</em>, label: 'Planning cadence', sub: 'Down from quarterly buys' },
      { value: <em>86%</em>, label: 'Forecast accuracy', sub: 'Weighted MAPE target hit' },
    ],
    impact: [
      { label: 'Stockout reduction', value: 69, detail: 'Inventory risk moved down across top SKUs.' },
      { label: 'Margin lift', value: 58, detail: 'Better buying cadence improved SKU economics.' },
      { label: 'Planning speed', value: 86, detail: 'Quarterly decisions became weekly planning.' },
      { label: 'Forecast trust', value: 86, detail: 'Weighted accuracy reached the operating target.' },
    ],
    problem: [
      <>The founder knew demand patterns better than the dashboards, but the business had outgrown intuition. <strong>Quarterly buying decisions were too slow</strong> for promotion swings and supplier delays.</>,
      <>Past forecasting attempts failed because they stopped at notebooks. There was no repeatable pipeline, no confidence intervals, and no planning workflow the team would actually use.</>,
      <>The goal was not model novelty. It was a system that made weekly inventory decisions better and easier to defend.</>,
    ],
    approach: [
      <>I started by reconstructing historical demand, promotions, stockout periods and supplier lead times into a clean training set.</>,
      <>We compared simple baselines against gradient-boosted models, then focused on explainability and confidence intervals so buying decisions did not feel like magic.</>,
      <>The model shipped behind a Slack workflow: category managers could ask for weekly forecasts, risk flags and recommended purchase quantities without opening a dashboard.</>,
    ],
    bullets: [
      'Feature pipeline for sales, promotions, stockouts, holidays and supplier lead times.',
      'Baseline and XGBoost model comparison with weighted SKU-level evaluation.',
      'Confidence intervals and risk flags attached to every recommendation.',
      'Slack-native planning interface for weekly buying decisions.',
      'Scheduled retraining, drift checks and alerting for demand regime changes.',
    ],
    heroVisual: {
      src: '/assets/projects/retina-curated.webp',
      alt: 'Abstract curated visual for Retina showing inventory forecasting blocks, demand curves, and confidence bands',
    },
    architecture: [
      { title: '[ 01 ] Data', name: 'Demand history', items: ['Shopify', 'Ads spend', 'Inventory', 'Suppliers'] },
      { title: '[ 02 ] Features', name: 'Forecast table', items: ['Promotions', 'Lead times', 'Seasonality', 'Stockout flags'] },
      { title: '[ 03 ] Model', name: 'Forecast engine', items: ['XGBoost', 'Backtests', 'Intervals', 'Drift checks'], accent: true },
      { title: '[ 04 ] Action', name: 'Planning surface', items: ['Slack app', 'Risk flags', 'Buy recs', 'Exports'] },
    ],
    architectureNote: <>The model only mattered once it changed the buying cadence. <strong>Slack became the product surface because that is where the team already made decisions.</strong></>,
    codeTitle: 'Forecast response',
    code: <>
      forecast = model.predict(next_8_weeks){'\n'}
      risk = stockout_risk(forecast, inventory, lead_time){'\n'}
      return PurchasePlan(units=rec_qty, confidence=interval)
    </>,
    outcome: [
      <>The team moved from quarterly buy decisions to weekly planning with confidence intervals attached to every recommendation.</>,
      <>After two buying cycles, top-SKU stockouts dropped by <strong>31%</strong> and margin per SKU improved by 18%.</>,
      <>The founder still had final say, but the model became the default planning baseline instead of a side report.</>,
    ],
    quote: 'I came in skeptical of AI. Talha told us what was not worth building, then shipped the one model that changed our buying decisions.',
    quoteBy: 'Priya Krishnan, Founder, Retina',
  },
]

export function getCaseStudy(caseId: string | undefined) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.id === caseId || caseStudy.aliases?.includes(caseId ?? '')) ?? CASE_STUDIES[0]
}

export function CaseStudyPage({
  navigate,
  selectedId,
}: {
  navigate: NavigateToPage
  selectedId: string
}) {
  const selectedCase = getCaseStudy(selectedId)
  const nextCase = CASE_STUDIES[(CASE_STUDIES.findIndex((caseStudy) => caseStudy.id === selectedCase.id) + 1) % CASE_STUDIES.length]

  return (
    <>
      <section className="cs-hero">
        <div className="container">
          <div className="cs-hero__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/#work">Case studies</a>
            <span>/</span>
            <span>{selectedCase.shortName}</span>
          </div>

          <div className="case-picker">
            <div className="case-picker__label">Select case study</div>
            <details className="case-picker__menu">
              <summary className="case-picker__summary">
                <span>CS / {selectedCase.index}</span>
                <strong>{selectedCase.shortName}</strong>
                <small>{selectedCase.clientMeta}</small>
              </summary>
              <div className="case-picker__options">
                {CASE_STUDIES.map((caseStudy) => (
                  <a
                    key={caseStudy.id}
                    className="case-picker__option"
                    data-active={caseStudy.id === selectedCase.id}
                    href={`/case-studies/${caseStudy.id}`}
                  >
                    <span>CS / {caseStudy.index}</span>
                    <strong>{caseStudy.shortName}</strong>
                    <small>{caseStudy.clientMeta}</small>
                  </a>
                ))}
              </div>
            </details>
          </div>

          <div className="eyebrow mb-24">Case study · {selectedCase.index} / {CASE_STUDIES.length.toString().padStart(2, '0')}</div>
          <div className="cs-hero__main">
            <div>
              <h1 className="h-display">
                {selectedCase.title}
              </h1>
              <p className="lede cs-hero__lede mt-32">{selectedCase.lede}</p>
              {selectedCase.liveUrl && (
                <div className="cs-hero__actions">
                  <a className="btn btn--accent" href={selectedCase.liveUrl} target="_blank" rel="noreferrer">
                    Visit live site <Arrow />
                  </a>
                </div>
              )}
            </div>
            {selectedCase.heroVisual && (
              <figure className="cs-hero__visual" aria-label={`${selectedCase.shortName} curated visual`}>
                <img src={selectedCase.heroVisual.src} alt={selectedCase.heroVisual.alt} width="1600" height="1000" />
              </figure>
            )}
          </div>

          <div className="cs-hero__meta">
            <MetaBlock label="[ Client ]" title={selectedCase.client} detail={selectedCase.clientMeta} />
            <MetaBlock label="[ Engagement ]" title={selectedCase.engagement} detail={selectedCase.engagementMeta} />
            <MetaBlock label="[ Role ]" title={selectedCase.role} detail={selectedCase.roleMeta} />
            <MetaBlock label="[ Year ]" title={selectedCase.year} detail={selectedCase.yearMeta} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="divider-mono mb-32">
            <span>{selectedCase.resultsLabel}</span>
            <span>{selectedCase.resultsNote}</span>
          </div>
          <div className="results">
            {selectedCase.results.map((result) => (
              <div className="result" key={result.label}>
                <div className="result__value">{result.value}</div>
                <div className="result__label">{result.label}</div>
                <div className="result__sub">{result.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseSection label="[ 01 ] The Problem" paragraphs={selectedCase.problem} borderTop />
      <CaseSection label="[ 02 ] Approach" paragraphs={selectedCase.approach} bullets={selectedCase.bullets} />

      {selectedCase.screenshots && (
        <section>
          <div className="container">
            <div className="cs-section">
              <div className="cs-section__label">[ 03 ] Screenshots</div>
              <div className="cs-section__body">
                <div className="case-shots">
                  {selectedCase.screenshots.map((shot) => (
                    <figure className="case-shot" key={shot.src}>
                      <div className="case-shot__frame">
                        <img src={shot.src} alt={shot.alt} loading="lazy" width={shot.width} height={shot.height} />
                      </div>
                      <figcaption>
                        <strong>{shot.title}</strong>
                        <span>{shot.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="container">
          <div className="cs-section">
            <div className="cs-section__label">{selectedCase.screenshots ? '[ 04 ] Value Profile' : '[ 03 ] Value Profile'}</div>
            <div className="cs-section__body">
              <div className="impact-chart" aria-label={`${selectedCase.shortName} value profile`}>
                {selectedCase.impact.map((item) => (
                  <div className="impact-chart__row" key={item.label} style={{ '--value': item.value } as React.CSSProperties}>
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <div className="impact-chart__track" aria-hidden="true">
                      <span />
                    </div>
                    <em>{item.value}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cs-section">
            <div className="cs-section__label">{selectedCase.screenshots ? '[ 05 ] Architecture' : '[ 04 ] Architecture'}</div>
            <div className="cs-section__body">
              <div className="arch">
                <div className="arch__inner">
                  {selectedCase.architecture.map((node) => (
                    <div key={node.title} className={`arch__node${node.accent ? ' arch__node--accent' : ''}`}>
                      <div className="arch__node-title">{node.title}</div>
                      <div className="arch__node-name">{node.name}</div>
                      <ul className="arch__node-list">
                        {node.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ marginTop: 32 }}>{selectedCase.architectureNote}</p>
              <div className="codeblock mt-24">
                <span className="c"># {selectedCase.codeTitle}</span>{'\n'}
                {selectedCase.code}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cs-section">
            <div className="cs-section__label">{selectedCase.screenshots ? '[ 06 ] Outcome' : '[ 05 ] Outcome'}</div>
            <div className="cs-section__body">
              {selectedCase.outcome.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              <p className="case-quote">"{selectedCase.quote}"</p>
              <p className="tiny-mono mt-16" style={{ paddingLeft: 24 }}>- {selectedCase.quoteBy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="divider-mono">
            <span>More work</span>
            <span>{nextCase.index} / {CASE_STUDIES.length.toString().padStart(2, '0')} next</span>
          </div>
          <a href={`/case-studies/${nextCase.id}`} className="case case--button">
            <div className="case__index"><strong>CS / {nextCase.index}</strong><div style={{ marginTop: 12 }}>{nextCase.clientMeta}</div></div>
            <h3 className="case__title">{nextCase.title}</h3>
            <div className="case__cta">Next case <Arrow /></div>
          </a>
        </div>
      </section>

      <CTA />
      <Footer navigate={navigate} />
    </>
  )
}

function MetaBlock({ label, title, detail }: { label: string; title: string; detail: string }) {
  return (
    <div>
      <div className="tiny-mono mb-8">{label}</div>
      <p style={{ fontSize: 16, color: 'var(--fg)' }}>{title}</p>
      <p className="small">{detail}</p>
    </div>
  )
}

function CaseSection({
  label,
  paragraphs,
  bullets,
  borderTop,
}: {
  label: string
  paragraphs: React.ReactNode[]
  bullets?: string[]
  borderTop?: boolean
}) {
  return (
    <section style={borderTop ? { borderTop: '1px solid var(--line)' } : undefined}>
      <div className="container">
        <div className="cs-section">
          <div className="cs-section__label">{label}</div>
          <div className="cs-section__body">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {bullets && (
              <ul className="cs-list">
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
