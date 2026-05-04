import React from 'react'
import { CTA } from './home'
import { Arrow, Footer, type NavigateToPage } from './shared'
import { CaseCategoryNav, type CaseCategoryId } from './case-categories'

type CaseStudy = {
  id: string
  aliases?: string[]
  categories: CaseCategoryId[]
  index: string
  shortName: string
  client: string
  clientMeta: string
  liveUrl?: string
  title: React.ReactNode
  lede: string
  oneLiner?: string
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
  // Enhanced Remix-style sections (optional)
  hard?: Array<{ title: string; detail: string }>
  decisions?: Array<{ key: string; value: string }>
  build?: Array<{ week: string; title: string; detail: string }>
  stack?: Array<{ group: string; items: string[] }>
  related?: Array<{ id: string; tag: string; title: string; metric: string }>
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'thalamus',
    categories: ['automation', 'chatbot', 'mvp-saas', 'document-review'],
    index: '01',
    shortName: 'Thalamus',
    client: 'Thalamus by Levitate Data',
    clientMeta: 'Document automation · Knowledge search',
    liveUrl: 'https://thalamus.levitatedata.com/',
    title: <>AI search that <em>understands</em> your company documents.</>,
    lede:
      'Thalamus turns messy company knowledge into source-backed answers teams can trust.',
    oneLiner: 'Upload any rough or unstructured data, from PDFs and tables to books, images, videos, and more, and get your queries answered without the risk of inaccurate responses.',
    engagement: 'Product launch narrative',
    engagementMeta: 'Positioning · product story · buyer proof',
    role: 'Product strategy',
    roleMeta: 'Document product story',
    year: '2026',
    yearMeta: 'Launch positioning',
    resultsLabel: 'Buyer case',
    resultsNote: 'cost and launch-speed proof',
    results: [
      { value: <>66<em>%</em></>, label: 'Less build cost', sub: 'Versus a custom build' },
      { value: <>$485<em>K</em></>, label: 'Average savings', sub: 'Estimated build savings' },
      { value: <>6<em>{'\u00A0'}mo</em></>, label: 'Faster launch', sub: 'Build-vs-buy gap' },
      { value: <em>Day{'\u00A0'}1</em>, label: 'Ready to use', sub: 'Built for customer work' },
    ],
    impact: [
      { label: 'Build cost saved', value: 66, detail: 'A stronger case to buy.' },
      { label: 'Launch speed', value: 84, detail: 'Less setup before use.' },
      { label: 'Answer trust', value: 92, detail: 'Answers stay source-linked.' },
      { label: 'Content coverage', value: 88, detail: 'Docs, scans, tables, images, video.' },
    ],
    problem: [
      <strong className="cs-section__lead">Most knowledge tools can answer questions — but they fail when users need proof.</strong>,
      <>Company knowledge lives across messy PDFs, scans, tables, notes, and media.</>,
      <>Thalamus reduces the build-or-buy decision to what matters: speed, trust, and control.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned Thalamus as the document answer layer.</strong>,
      <>The story became simple: upload knowledge, ask questions, verify sources, and control access.</>,
      <>The buyer case focused on speed, trust, and lower maintenance.</>,
    ],
    bullets: [
      'Reliable answers, not basic search.',
      'Support for messy formats and layouts.',
      'Source links for quick verification.',
      'Privacy, access, and audit controls.',
      'Clear buy-vs-build proof.',
    ],
    heroVisual: {
      src: '/assets/projects/thalamus-curated.webp',
      alt: 'Abstract curated visual for Thalamus showing layered documents and source-linked answers',
    },
    screenshots: [
      {
        title: 'Homepage',
        src: '/assets/case-studies/thalamus-home.png',
        alt: 'Screenshot of the Thalamus homepage showing document search positioning',
        caption: 'A concise homepage story for source-backed document answers.',
        width: 1440,
        height: 6036,
      },
      {
        title: 'Product page',
        src: '/assets/case-studies/thalamus-product.png',
        alt: 'Screenshot of the Thalamus product page showing document and media support',
        caption: 'A product journey from upload to verified answer.',
        width: 1440,
        height: 3799,
      },
      {
        title: 'Why Thalamus',
        src: '/assets/case-studies/thalamus-why.png',
        alt: 'Screenshot of the Thalamus build versus buy page showing cost analysis',
        caption: 'A shorter buy-vs-build case for faster approval.',
        width: 1440,
        height: 4981,
      },
    ],
    architecture: [
      { title: '[ 01 ] Sources', name: 'Document sources', items: ['Company systems', 'File uploads', 'Tool links', 'Rich media'] },
      { title: '[ 02 ] Read', name: 'Content cleanup', items: ['PDFs', 'Scans', 'Tables', 'Images + video'] },
      { title: '[ 03 ] Answer', name: 'Source-backed search', items: ['Questions', 'Gaps', 'Best sources', 'Citations'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Customer tool', items: ['Chat', 'Workflows', 'Reports', 'History'] },
    ],
    architectureNote: <>Thalamus handles the document-answering layer: cleanup, source links, and reliability.</>,
    codeTitle: 'Source-backed answer',
    code: <>
      <span className="k">type</span> DocumentAnswer = {'{'}{'\n'}
      {'  '}answer: str{'\n'}
      {'  '}citations: SourceCitation[]{'\n'}
      {'  '}confidence: <span className="k">"high"</span> | <span className="k">"medium"</span> | <span className="k">"low"</span>{'\n'}
      {'  '}auditTrailId: string{'\n'}
      {'  '}knowledgeGaps: string[]{'\n'}
      {'}'}
    </>,
    outcome: [
      <><strong>Clearer product story:</strong> Thalamus now reads as a focused document-answer product for teams that need proof.</>,
      <><strong>Sharper buyer case:</strong> move faster, reduce risk, and avoid maintenance drag.</>,
    ],
    quote: 'Talha made a hard document product simple to explain, sell, and use.',
    quoteBy: 'Product team, Levitate Data',
    hard: [
      { title: 'Documents are messy', detail: 'Real knowledge lives in scans, tables, media, and changing files. Thalamus needed to handle the full mix.' },
      { title: 'Answers need proof', detail: 'Users need citations, confidence, and an audit trail before they trust high-stakes answers.' },
      { title: 'Knowledge changes fast', detail: 'Policies, contracts, and product details change often. Answers have to stay current.' },
      { title: 'Build vs. buy is hard', detail: 'The story had to make cost, timeline, and maintenance easy to compare.' },
    ],
    decisions: [
      { key: 'Document pipeline', value: 'Multi-format ingestion for scans, tables, layouts, and media.' },
      { key: 'Source-backed answers', value: 'Answers carry citations, confidence, and an audit trail.' },
      { key: 'Privacy first', value: 'Access controls and sensitive-data handling became part of the pitch.' },
      { key: 'Buy-vs-build framing', value: 'Cost, timeline, and maintenance were packaged for faster approval.' },
      { key: 'Product story', value: 'Thalamus became an answer layer, not a search box.' },
      { key: 'Launch narrative', value: 'Homepage, product page, and why page each served a clear buyer need.' },
    ],
    build: [
      { week: '1–2', title: 'Discovery + audit', detail: 'Reviewed materials, competitors, and buyer concerns.' },
      { week: '2–3', title: 'Core narrative', detail: 'Defined the answer-layer positioning.' },
      { week: '3–5', title: 'Product pages', detail: 'Shaped the homepage, walkthrough, and why page.' },
      { week: '5–6', title: 'Buyer proof', detail: 'Simplified the cost and savings case.' },
      { week: '6–7', title: 'Launch assets', detail: 'Prepared sales copy and demo messaging.' },
      { week: '7–8', title: 'Go live', detail: 'Launched and refined the messaging.' },
    ],
    stack: [
      { group: 'Sources', items: ['Company systems', 'File uploads', 'Tool links', 'Rich media'] },
      { group: 'Processing', items: ['PDF parsing', 'OCR + scans', 'Table extraction', 'Images + video'] },
      { group: 'Answer layer', items: ['Source search', 'Citation links', 'Confidence scores', 'Knowledge gaps'] },
      { group: 'Delivery', items: ['Chat interface', 'Workflows', 'Reports', 'History'] },
      { group: 'Governance', items: ['Access controls', 'Audit trails', 'Privacy rules', 'Compliance'] },
    ],
    related: [
      { id: 'frcm', tag: 'Document automation', title: 'Contract review automation for construction teams.', metric: 'Clause-level risk' },
      { id: 'aletheia', tag: 'Voice + video AI', title: 'Review tools for high-stakes calls and recordings.', metric: '3 signal types' },
    ],
  },
  {
    id: 'aletheia',
    aliases: ['alethia'],
    categories: ['voice-ai', 'automation', 'mvp-saas'],
    index: '02',
    shortName: 'Aletheia',
    client: 'Aletheia by Levitate Data',
    clientMeta: 'Voice AI · Video review',
    liveUrl: 'https://levitatedata.com/product#Aletheia',
    title: <>Voice and video <em>review tools</em> for high-stakes calls.</>,
    lede:
      'Aletheia helps teams understand what happened inside important calls and recordings. It combines voice, video, and transcript signals into a clearer review for compliance, support, and investigation work.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · product story · use cases',
    role: 'Product strategy',
    roleMeta: 'Voice and video product story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Product promise',
    resultsNote: 'voice and video review',
    results: [
      { value: <em>3</em>, label: 'Signal types', sub: 'Voice, video, and transcript cues' },
      { value: <em>Live</em>, label: 'Review mode', sub: 'Works for live or recorded media' },
      { value: <em>Plug-in</em>, label: 'Easy to connect', sub: 'Built to plug into other products' },
      { value: <em>Clear</em>, label: 'Output standard', sub: 'Reviewable high-stakes insights' },
    ],
    impact: [
      { label: 'Video context', value: 88, detail: 'Visible changes and facial cues made reviewable.' },
      { label: 'Voice context', value: 84, detail: 'Stress, emphasis, pacing, and confidence shifts.' },
      { label: 'Transcript context', value: 80, detail: 'Sentiment, nuance, and conversation meaning.' },
      { label: 'Review clarity', value: 92, detail: 'A single timeline a reviewer can understand.' },
    ],
    problem: [
      <>Most conversation tools stop at transcripts and summaries. That leaves out signals that often matter most: hesitation, confidence, stress, tone, and change over time.</>,
      <>Aletheia is built for the moments where <strong>how something was said changes what it means</strong>, especially when the stakes are legal, operational, financial or reputational.</>,
      <>Its product story gives buyers a clear category: voice and video review for teams that need deeper context than words alone can provide.</>,
    ],
    approach: [
      <>The message leads with a simple, memorable premise: understanding how something was said is as important as knowing what was said.</>,
      <>From there, the platform value unfolds across three signal streams: video, voice, and words, combined into a timeline of tone, confidence, and stress.</>,
      <>The use-case framing speaks to high-stakes workflows such as depositions, compliance review, customer interactions, and investigations where context and trust matter.</>,
    ],
    bullets: [
      'A review layer for interpreting voice, video, and conversation.',
      'Visible cues, vocal stress, and language nuance treated as complementary evidence.',
      'Raw communication converted into a structured review timeline.',
      'Clear outputs, emotional timelines, and confidence markers for high-stakes review.',
      'Built to connect into other products and compliance workflows.',
    ],
    heroVisual: {
      src: '/assets/projects/aletheia-curated.webp',
      alt: 'Abstract curated visual for Aletheia showing voice, face, and language signals converging',
    },
    screenshots: [
      {
        title: 'Aletheia product section',
        src: '/assets/case-studies/aletheia-section.png',
        alt: 'Screenshot of the Aletheia product section on Levitate Data',
        caption: 'The product section introduces Aletheia as the review layer that reveals emotion, confidence, tone, and stress across communication.',
        width: 1440,
        height: 1200,
      },
      {
        title: 'Levitate Data product catalog',
        src: '/assets/case-studies/aletheia-product-page.png',
        alt: 'Screenshot of the Levitate Data product catalog containing Thalamus, Aletheia and Theia',
        caption: 'The product catalog places Aletheia inside Levitate Data\'s broader suite of AI products.',
        width: 1440,
        height: 4246,
      },
    ],
    architecture: [
      { title: '[ 01 ] Inputs', name: 'Human signals', items: ['Video', 'Audio', 'Transcript', 'Conversation'] },
      { title: '[ 02 ] Read', name: 'Signal review', items: ['Facial cues', 'Voice stress', 'Sentiment', 'Tone'] },
      { title: '[ 03 ] Combine', name: 'Conversation timeline', items: ['Confidence shifts', 'Stress markers', 'Emotion changes', 'Context'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Review layer', items: ['Product link', 'Dashboards', 'Case review', 'History'] },
    ],
    architectureNote: <>Aletheia turns unstructured calls and recordings into structured review signals. <strong>The output is designed to be clear enough for high-stakes review, not a black-box score detached from evidence.</strong></>,
    codeTitle: 'Conversation review output',
    code: <>
      signals = review(video, audio, transcript){'\n'}
      timeline = combine_context(signals){'\n'}
      <span className="k">return</span> ConversationReview(confidence=timeline.confidence, stress=timeline.stress, evidence=signals.sources)
    </>,
    outcome: [
      <>Aletheia stands as a distinct product story with a clear market promise: make important communication easier to review and understand.</>,
      <>The positioning turns voice, video, and transcript analysis into one cohesive product narrative.</>,
      <>The live product section reinforces the message with a focused description of Aletheia's role in compliance, customer review, and investigative workflows.</>,
    ],
    quote: 'The product went from technical feature list to a clear business promise: understand the signals inside important conversations.',
    quoteBy: 'Product team, Levitate Data',
  },
  {
    id: 'frcm',
    categories: ['automation', 'chatbot', 'mvp-saas', 'document-review'],
    index: '03',
    shortName: 'FRCM',
    client: 'First Rule Contract Manager',
    clientMeta: 'Construction contracts · Review automation',
    liveUrl: 'https://www.firstrulecm.ai/',
    title: <>Contract <em>review automation</em> for construction teams.</>,
    lede:
      'First Rule Contract Manager helps construction teams spot contract risk before it becomes project cost. Teams upload a contract, review plain-language risks tied to the source text, and turn the review into a kickoff-ready handoff.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · product story · proof',
    role: 'Product strategy',
    roleMeta: 'Contract automation story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Product promise',
    resultsNote: 'construction contract review',
    results: [
      { value: <em>1</em>, label: 'Free upload', sub: 'Start with one contract' },
      { value: <>Prime <em>+</em> Sub</>, label: 'Contract coverage', sub: 'Including flow-down checks' },
      { value: <em>30d</em>, label: 'Money-back guarantee', sub: 'After purchase' },
      { value: <em>Private</em>, label: 'Deployment option', sub: 'Can run in a customer environment' },
    ],
    impact: [
      { label: 'Risk visibility', value: 86, detail: 'Risk surfaced at the clause level before kickoff.' },
      { label: 'Playbook consistency', value: 90, detail: 'Preferred and fallback language made repeatable.' },
      { label: 'Handoff clarity', value: 82, detail: 'Summaries built for PMs and field leadership.' },
      { label: 'Review speed', value: 76, detail: 'A faster path from upload to decision-ready review.' },
    ],
    problem: [
      <>Construction contracts move fast, but the consequences last for the life of the job. Indemnity, delay, notice, payment and lien language can quietly shift risk before a project even starts.</>,
      <>FRCM is designed for construction teams that need <strong>practical contract clarity, not generic legal software</strong>: visible risk, source-linked rationale and guidance that fits how project teams actually work.</>,
      <>The product promise is operational as much as legal: help executives, precon, PMs, risk teams and field leaders understand the contract before it becomes a jobsite problem.</>,
    ],
    approach: [
      <>The story centers on <strong>playbook-driven contract discipline</strong>: repeatable standards that show up beside the clause while the review is happening.</>,
      <>FRCM is positioned around the workflow buyers can immediately picture: upload, detect clause risk, review plain-language rationale, apply preferred or fallback language and generate a project handoff.</>,
      <>Marten, the contract coach, adds an approachable product layer by letting teams ask plain-language questions while staying anchored to contract text and playbook guidance.</>,
    ],
    bullets: [
      'Construction-trained contract review built for project risk, not generic document management.',
      'Prime contract, subcontract and flow-down checks for construction operators.',
      'Clause categories, risk levels and source-linked rationale packaged into a clear review workflow.',
      'Playbooks as the standards engine behind preferred language, fallback language and escalation paths.',
      'Review connected to the jobsite through kickoff-ready summaries, Marten coaching and training in the flow of work.',
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
        caption: 'The homepage sells a focused promise: confident contract decisions backed by construction-trained review, playbooks and human-readable next steps.',
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
    architectureNote: <>First Rule keeps each answer attached to the contract and the playbook. <strong>The product teaches while work happens: clause-linked rationale, coaching and standards appear in the review flow instead of living in a separate training binder.</strong></>,
    codeTitle: 'Clause review contract',
    code: <>
      review = detect_clause_risk(contract, playbook){'\n'}
      rationale = explain_in_plain_language(review, source_clause){'\n'}
      handoff = build_kickoff_summary(review, standards){'\n'}
      <span className="k">return</span> ClauseReview(risk=review.level, source=source_clause, next_steps=handoff)
    </>,
    outcome: [
      <>FRCM presents a category-specific product for construction teams that need contract clarity before work begins.</>,
      <>The positioning turns clause detection, playbook guidance, Marten coaching and kickoff summaries into a single value proposition: better contract decisions, better project outcomes.</>,
      <>The live site supports that promise with a focused homepage, product walkthrough and playbook documentation built around the way construction teams actually review risk.</>,
    ],
    quote: 'Talha turned a complicated contract workflow into a product people could understand right away: upload, review risk, and move forward.',
    quoteBy: 'First Rule team',
  },
  {
    id: 'retina',
    categories: ['automation', 'python-scripts'],
    index: '04',
    shortName: 'Retina',
    client: 'Retina',
    clientMeta: 'Retail forecasting · Python automation',
    title: <>Sales forecast <em>automation</em> that improved buying decisions.</>,
    lede:
      'Retina was making inventory decisions from spreadsheets, intuition, and stale dashboards. I built a forecasting workflow with weekly recommendations and a Slack planning interface in 10 weeks.',
    engagement: 'Sprint + advisory',
    engagementMeta: '10\u00A0weeks build · async support',
    role: 'AI builder',
    roleMeta: 'Forecasting · Python scripts · product surface',
    year: '2024',
    yearMeta: 'Q4 launch',
    resultsLabel: 'Results after two buying cycles',
    resultsNote: 'measured against the old planning baseline',
    results: [
      { value: <>-31<em>%</em></>, label: 'Stockouts', sub: 'Across top products' },
      { value: <>+18<em>%</em></>, label: 'Margin per product', sub: 'After buying cadence shift' },
      { value: <em>7d</em>, label: 'Planning cadence', sub: 'Down from quarterly buys' },
      { value: <em>86%</em>, label: 'Forecast accuracy', sub: 'Planning target hit' },
    ],
    impact: [
      { label: 'Stockout reduction', value: 69, detail: 'Inventory risk moved down across top products.' },
      { label: 'Margin lift', value: 58, detail: 'Better buying cadence improved product margins.' },
      { label: 'Planning speed', value: 86, detail: 'Quarterly decisions became weekly planning.' },
      { label: 'Forecast trust', value: 86, detail: 'Accuracy reached the operating target.' },
    ],
    problem: [
      <>The founder knew demand patterns better than the dashboards, but the business had outgrown intuition. <strong>Quarterly buying decisions were too slow</strong> for promotion swings and supplier delays.</>,
      <>Past forecasting attempts failed because they stopped at spreadsheets and notebooks. There was no repeatable workflow and no planning surface the team would actually use.</>,
      <>The goal was not a fancy model. It was a tool that made weekly inventory decisions better and easier to defend.</>,
    ],
    approach: [
      <>I started by reconstructing historical demand, promotions, stockout periods and supplier lead times into a clean training set.</>,
      <>I compared simple baselines against stronger forecast models, then focused on clear explanations so buying decisions did not feel like magic.</>,
      <>The model shipped behind a Slack workflow: category managers could ask for weekly forecasts, risk flags and recommended purchase quantities without opening a dashboard.</>,
    ],
    bullets: [
      'Feature pipeline for sales, promotions, stockouts, holidays and supplier lead times.',
      'Simple forecast comparison with product-level checks.',
      'Confidence ranges and risk flags attached to every recommendation.',
      'Slack-native planning interface for weekly buying decisions.',
      'Scheduled refreshes and alerts for major demand changes.',
    ],
    heroVisual: {
      src: '/assets/projects/retina-curated.webp',
      alt: 'Abstract curated visual for Retina showing inventory forecasts, demand curves, and planning blocks',
    },
    architecture: [
      { title: '[ 01 ] Data', name: 'Demand history', items: ['Shopify', 'Ads spend', 'Inventory', 'Suppliers'] },
      { title: '[ 02 ] Prepare', name: 'Forecast table', items: ['Promotions', 'Lead times', 'Seasonality', 'Stockout flags'] },
      { title: '[ 03 ] Predict', name: 'Forecast engine', items: ['Model', 'Checks', 'Ranges', 'Alerts'], accent: true },
      { title: '[ 04 ] Act', name: 'Planning surface', items: ['Slack app', 'Risk flags', 'Buy recs', 'Exports'] },
    ],
    architectureNote: <>The model only mattered once it changed the buying cadence. <strong>Slack became the product surface because that is where the team already made decisions.</strong></>,
    codeTitle: 'Forecast response',
    code: <>
      forecast = predict(next_8_weeks){'\n'}
      risk = stockout_risk(forecast, inventory, lead_time){'\n'}
      return PurchasePlan(units=rec_qty, confidence=interval)
    </>,
    outcome: [
      <>The team moved from quarterly buy decisions to weekly planning with confidence intervals attached to every recommendation.</>,
      <>After two buying cycles, top-product stockouts dropped by <strong>31%</strong> and margin per product improved by 18%.</>,
      <>The founder still had final say, but the model became the default planning baseline instead of a side report.</>,
    ],
    quote: 'I came in skeptical of AI. Talha told me what was not worth building, then shipped the one tool that changed my buying decisions.',
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

  const isEnhanced = !!selectedCase.hard

  return (
    <>
      <section className={`cs-hero${selectedCase.id === 'thalamus' ? ' cs-hero--thalamus' : ''}`}>
        <div className="container">
          <div className="cs-hero__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/#work">Case Studies</a>
            <span>/</span>
            <span translate="no">{selectedCase.shortName}</span>
          </div>

          <div className="case-picker">
            <div className="case-picker__label">Select case study</div>
            <details className="case-picker__menu">
              <summary className="case-picker__summary">
                <span>CS / {selectedCase.index}</span>
                <strong translate="no">{selectedCase.shortName}</strong>
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
                    <strong translate="no">{caseStudy.shortName}</strong>
                    <small>{caseStudy.clientMeta}</small>
                  </a>
                ))}
              </div>
            </details>
            <div className="case-picker__label case-picker__label--categories">Browse by category</div>
            <CaseCategoryNav />
          </div>

          <div className="eyebrow mb-24">Case study · {selectedCase.index} / {CASE_STUDIES.length.toString().padStart(2, '0')}</div>
          <div className="cs-hero__main" style={{ alignItems: selectedCase.id === 'thalamus' ? 'start' : 'center' }}>
            <div>
              <h1 className="h-display">
                {selectedCase.title}
              </h1>
              {selectedCase.oneLiner && (
                <p className="cs-hero__one-liner">{selectedCase.oneLiner}</p>
              )}
              {!selectedCase.oneLiner && (
                <p className="lede cs-hero__lede mt-32">{selectedCase.lede}</p>
              )}
              {selectedCase.liveUrl && (
                <div className="cs-hero__actions">
                  <a className="btn btn--accent" href={selectedCase.liveUrl} target="_blank" rel="noreferrer">
                    Visit live site <Arrow />
                  </a>
                </div>
              )}
              <div className="cs-review-card">
                <div className="tiny-mono">[ Client review ]</div>
                <p>{selectedCase.quote}</p>
                <span>&mdash; {selectedCase.quoteBy}</span>
              </div>
            </div>
            {selectedCase.heroVisual && (
              <figure className="cs-hero__visual" aria-label={`${selectedCase.shortName} curated visual`}>
                <img src={selectedCase.heroVisual.src} alt={selectedCase.heroVisual.alt} width="1600" height="1000" />
              </figure>
            )}
          </div>

          <div className="cs-hero__meta">
            {selectedCase.id === 'thalamus' ? (
              <>
                <MetaBlock label="Client" title={selectedCase.client} detail={selectedCase.clientMeta} icon={<ClientIcon />} />
                <MetaBlock label="Engagement" title={selectedCase.engagement} detail={selectedCase.engagementMeta} icon={<EngagementIcon />} />
                <MetaBlock label="Role" title={selectedCase.role} detail={selectedCase.roleMeta} icon={<RoleIcon />} />
                <MetaBlock label="Year" title={selectedCase.year} detail={selectedCase.yearMeta} icon={<YearIcon />} />
              </>
            ) : (
              <>
                <MetaBlock label="[ Client ]" title={selectedCase.client} detail={selectedCase.clientMeta} />
                <MetaBlock label="[ Engagement ]" title={selectedCase.engagement} detail={selectedCase.engagementMeta} />
                <MetaBlock label="[ Role ]" title={selectedCase.role} detail={selectedCase.roleMeta} />
                <MetaBlock label="[ Year ]" title={selectedCase.year} detail={selectedCase.yearMeta} />
              </>
            )}
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

      {isEnhanced && selectedCase.hard && (
        <WhyHardSection label="[ 02 ] Why this was hard" items={selectedCase.hard} />
      )}

      <CaseSection label={isEnhanced ? '[ 03 ] Approach' : '[ 02 ] Approach'} paragraphs={selectedCase.approach} bullets={selectedCase.bullets} bulletsLabel={selectedCase.id === 'thalamus' ? 'Key points' : undefined} />

      {isEnhanced && selectedCase.decisions && (
        <DecisionsSection label="[ 04 ] Key decisions" items={selectedCase.decisions} />
      )}

      {isEnhanced && selectedCase.build && (
        <BuildSection label="[ 05 ] How we shipped" items={selectedCase.build} />
      )}

      {selectedCase.screenshots && (
        <section>
          <div className="container">
            <div className="cs-section">
              <div className="cs-section__label">{isEnhanced ? '[ 06 ] Screenshots' : (selectedCase.hard ? '[ 06 ] Screenshots' : '[ 03 ] Screenshots')}</div>
              <div className="cs-section__body">
                <div className={`case-shots${selectedCase.id === 'thalamus' ? ' case-shots--scroll' : ''}`}>
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
            <div className="cs-section__label">{isEnhanced ? '[ 07 ] Value Profile' : (selectedCase.screenshots ? '[ 04 ] Value Profile' : '[ 03 ] Value Profile')}</div>
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
            <div className="cs-section__label">{isEnhanced ? '[ 08 ] How it works' : (selectedCase.screenshots ? '[ 05 ] How it works' : '[ 04 ] How it works')}</div>
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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cs-section">
            <div className="cs-section__label">{isEnhanced ? '[ 09 ] Outcome' : (selectedCase.screenshots ? '[ 06 ] Outcome' : '[ 05 ] Outcome')}</div>
            <div className="cs-section__body">
              {selectedCase.outcome.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      {isEnhanced && (
        <QuoteBlockSection quote={selectedCase.quote} by={selectedCase.quoteBy} />
      )}

      {isEnhanced && selectedCase.stack && (
        <StackSection label="[ 10 ] Stack" items={selectedCase.stack} />
      )}

      {isEnhanced && selectedCase.related && (
        <RelatedSection items={selectedCase.related} />
      )}

      {!isEnhanced && (
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
      )}

      <CTA />
      <Footer navigate={navigate} />
    </>
  )
}

const ClientIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const EngagementIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RoleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const YearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

function MetaBlock({ label, title, detail, icon }: { label: string; title: string; detail: string; icon?: React.ReactNode }) {
  return (
    <div>
      <div className="tiny-mono mb-8" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {icon && <span style={{ color: 'var(--accent)', display: 'inline-flex' }}>{icon}</span>}
        {label}
      </div>
      <p style={{ fontSize: 16, color: 'var(--fg)' }} translate="no">{title}</p>
      <p className="small">{detail}</p>
    </div>
  )
}

function CaseSection({
  label,
  paragraphs,
  bullets,
  bulletsLabel,
  borderTop,
}: {
  label: string
  paragraphs: React.ReactNode[]
  bullets?: string[]
  bulletsLabel?: string
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
              <>
                {bulletsLabel && <div className="cs-bullets-label">{bulletsLabel}</div>}
                <ul className="cs-list">
                  {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyHardSection({ label, items }: { label: string; items: Array<{ title: string; detail: string }> }) {
  const [open, setOpen] = React.useState(0)
  return (
    <section className="cs-why-hard">
      <div className="container">
        <div className="cs-section">
          <div className="cs-section__label">{label}</div>
          <div className="cs-section__body">
            <div className="cs-accordion">
              {items.map((item, i) => {
                const isOpen = open === i
                return (
                  <div key={item.title} className="cs-accordion__item">
                    <button
                      className="cs-accordion__trigger"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="cs-accordion__num">0{i + 1}</span>
                      <span className="cs-accordion__title">{item.title}</span>
                      <span className={`cs-accordion__icon${isOpen ? ' is-open' : ''}`}>{isOpen ? '–' : '+'}</span>
                    </button>
                    <div className={`cs-accordion__panel${isOpen ? ' is-open' : ''}`}>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DecisionsSection({ label, items }: { label: string; items: Array<{ key: string; value: string }> }) {
  return (
    <section className="cs-decisions">
      <div className="container">
        <div className="cs-section">
          <div className="cs-section__label">{label}</div>
          <div className="cs-section__body">
            <div className="cs-decisions__grid">
              {items.map((d) => (
                <div key={d.key} className="cs-decision">
                  <span className="cs-decision__key">{d.key}</span>
                  <p>{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildSection({ label, items }: { label: string; items: Array<{ week: string; title: string; detail: string }> }) {
  return (
    <section className="cs-build">
      <div className="container">
        <div className="cs-section">
          <div className="cs-section__label">{label}</div>
          <div className="cs-section__body">
            <div className="cs-build__grid">
              {items.map((b) => (
                <div key={b.title} className="cs-build__card">
                  <span className="cs-build__week">Week {b.week}</span>
                  <h4 className="cs-build__title">{b.title}</h4>
                  <p>{b.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteBlockSection({ quote, by }: { quote: string; by: string }) {
  return (
    <section className="cs-quote-block">
      <div className="container">
        <div className="cs-quote-block__inner">
          <span className="cs-quote-block__mark">"</span>
          <p className="cs-quote-block__text">{quote}</p>
          <div className="cs-quote-block__by">
            <span className="cs-quote-block__avatar">{by.charAt(0)}</span>
            <div>
              <span className="cs-quote-block__name">{by}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StackSection({ label, items }: { label: string; items: Array<{ group: string; items: string[] }> }) {
  return (
    <section className="cs-stack">
      <div className="container">
        <div className="cs-section">
          <div className="cs-section__label">{label}</div>
          <div className="cs-section__body">
            <div className="cs-stack__grid">
              {items.map((g) => (
                <div key={g.group} className="cs-stack__group">
                  <div className="cs-stack__group-label">{g.group}</div>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>
                        <span />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RelatedSection({ items }: { items: Array<{ id: string; tag: string; title: string; metric: string }> }) {
  return (
    <section className="cs-related">
      <div className="container">
        <div className="cs-related__header">
          <h2>Related case studies</h2>
        </div>
        <div className="cs-related__grid">
          {items.map((r) => {
            const cs = getCaseStudy(r.id)
            return (
              <a href={`/case-studies/${r.id}`} className="cs-related__card" key={r.id}>
                <span className="cs-related__tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <div className="cs-related__footer">
                  <span>{r.metric}</span>
                  <Arrow size={12} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
