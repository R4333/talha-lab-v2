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
      <strong className="cs-section__lead">Most question-and-answer systems fail when producing accurate answers.</strong>,
      <>Company data is stored in various messy format such as PDF's, scans, images, tables and media.</>,
      <>Thalamus provides one clear path for uploading this data and getting your questions answered with proper citations.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We showed Thalamus as the place where teams can ask questions from company knowledge.</strong>,
      <>The message became simple: add your files, ask a question, see the source, and control who can access what.</>,
      <>The buyer case focused on faster answers, easier trust, and less work to maintain.</>,
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
      { title: 'Information is scattered', detail: 'Important company knowledge is spread across PDFs, scans, tables, videos, and files that keep changing.' },
      { title: 'Answers must be trusted', detail: 'People need to see where an answer came from before they rely on it for important decisions.' },
      { title: 'Company knowledge changes often', detail: 'Policies, contracts, and product details get updated regularly, so answers need to stay up to date.' },
      { title: 'Starting from scratch is difficult', detail: 'The page had to clearly show the cost, time, and effort saved by using Thalamus instead of building everything from zero.' },
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
    title: <>Review <em>signals</em> inside important calls.</>,
    lede:
      'Aletheia turns voice, video, and transcript signals into a clearer review for high-stakes conversations.',
    oneLiner: 'Review calls and recordings with the context that transcripts miss: tone, stress, confidence, facial cues, and meaning over time.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · product story · use cases',
    role: 'Product strategy',
    roleMeta: 'Voice and video product story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Product promise',
    resultsNote: 'review evidence and product clarity',
    results: [
      { value: <em>3</em>, label: 'Signal types', sub: 'Video, voice, and transcript' },
      { value: <em>Live</em>, label: 'Review modes', sub: 'Live or recorded media' },
      { value: <em>Plug-in</em>, label: 'Product fit', sub: 'Built for existing workflows' },
      { value: <em>Clear</em>, label: 'Evidence layer', sub: 'Reviewable conversation context' },
    ],
    impact: [
      { label: 'Video context', value: 88, detail: 'Visible changes and facial cues made reviewable.' },
      { label: 'Voice context', value: 84, detail: 'Stress, emphasis, pacing, and confidence shifts.' },
      { label: 'Transcript context', value: 80, detail: 'Sentiment, nuance, and conversation meaning.' },
      { label: 'Review clarity', value: 92, detail: 'A single timeline a reviewer can understand.' },
    ],
    problem: [
      <strong className="cs-section__lead">Transcripts alone miss too much context.</strong>,
      <>High-stakes calls often depend on tone, confidence, stress, timing, and visible cues. Aletheia needed to make those signals understandable without sounding like a technical feature list.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We framed Aletheia as a review layer for important conversations.</strong>,
      <>The story became simple: combine video, voice, and words into one timeline so reviewers can see what changed, when it changed, and why it matters.</>,
    ],
    bullets: [
      'Voice, video, and transcript signals in one review.',
      'Tone, stress, and confidence made easier to inspect.',
      'A clearer story for compliance, support, and investigations.',
      'Product language that buyers can understand quickly.',
    ],
    heroVisual: {
      src: '/assets/projects/aletheia-curated.webp',
      alt: 'Abstract curated visual for Aletheia showing voice, face, and language signals converging',
    },
    screenshots: [
      {
        title: 'Product section',
        src: '/assets/case-studies/aletheia-section.png',
        alt: 'Screenshot of the Aletheia product section on Levitate Data',
        caption: 'A concise product story for reading voice, video, and transcript signals together.',
        width: 1440,
        height: 1200,
      },
      {
        title: 'Product catalog',
        src: '/assets/case-studies/aletheia-product-page.png',
        alt: 'Screenshot of the Levitate Data product catalog containing Thalamus, Aletheia and Theia',
        caption: 'Aletheia sits inside the broader Levitate Data product suite with a clear role.',
        width: 1440,
        height: 4246,
      },
    ],
    architecture: [
      { title: '[ 01 ] Sources', name: 'Conversation inputs', items: ['Video', 'Audio', 'Transcript', 'Call context'] },
      { title: '[ 02 ] Read', name: 'Signal review', items: ['Facial cues', 'Voice stress', 'Sentiment', 'Tone'] },
      { title: '[ 03 ] Combine', name: 'Review timeline', items: ['Confidence shifts', 'Stress markers', 'Emotion changes', 'Evidence'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Product layer', items: ['Product link', 'Dashboards', 'Case review', 'History'] },
    ],
    architectureNote: <>Aletheia turns calls and recordings into structured review signals that stay close to the evidence.</>,
    codeTitle: 'Conversation review output',
    code: <>
      signals = review(video, audio, transcript){'\n'}
      timeline = combine_context(signals){'\n'}
      <span className="k">return</span> ConversationReview(confidence=timeline.confidence, stress=timeline.stress, evidence=signals.sources)
    </>,
    outcome: [
      <><strong>Clearer product story:</strong> Aletheia now reads as a focused review layer for high-stakes conversations.</>,
      <><strong>Sharper buyer context:</strong> the page explains why voice, video, and transcript signals matter together.</>,
    ],
    quote: 'Aletheia went from a technical feature set to a clear story for reviewing important conversations.',
    quoteBy: 'Product team, Levitate Data',
    hard: [
      { title: 'Signals are easy to overexplain', detail: 'The page had to explain voice, video, and transcript analysis without overwhelming non-technical buyers.' },
      { title: 'Trust depends on context', detail: 'Reviewers need to understand why a moment matters, not just see a score or label.' },
      { title: 'Use cases are high stakes', detail: 'Compliance, support, and investigation teams need language that feels careful, useful, and credible.' },
      { title: 'The product needed a category', detail: 'Aletheia had to read as a review layer, not another call summary tool.' },
    ],
    decisions: [
      { key: 'Signal mix', value: 'Voice, video, and transcript cues were shown as one review system.' },
      { key: 'Evidence first', value: 'The story stayed close to what reviewers can inspect and understand.' },
      { key: 'Timeline framing', value: 'Signals were organized around change over time, not isolated scores.' },
      { key: 'Use-case clarity', value: 'Compliance, support, and investigations gave buyers familiar entry points.' },
      { key: 'Product fit', value: 'Aletheia was positioned as a layer that can fit into existing workflows.' },
      { key: 'Plain language', value: 'Technical cues became simple benefits a buyer could scan quickly.' },
    ],
    build: [
      { week: '1–2', title: 'Product audit', detail: 'Reviewed the signal types, product context, and buyer use cases.' },
      { week: '2–3', title: 'Core narrative', detail: 'Defined the review-layer positioning.' },
      { week: '3–4', title: 'Signal story', detail: 'Simplified voice, video, and transcript language.' },
      { week: '4–5', title: 'Use cases', detail: 'Mapped the message to compliance and review workflows.' },
      { week: '5–6', title: 'Product copy', detail: 'Reduced feature language into concise page sections.' },
      { week: '6–7', title: 'Launch fit', detail: 'Aligned Aletheia with the Levitate Data product suite.' },
    ],
    stack: [
      { group: 'Sources', items: ['Video calls', 'Audio files', 'Transcripts', 'Call context'] },
      { group: 'Processing', items: ['Facial cues', 'Voice stress', 'Sentiment', 'Tone shifts'] },
      { group: 'Answer layer', items: ['Confidence shifts', 'Stress markers', 'Emotion changes', 'Evidence links'] },
      { group: 'Delivery', items: ['Product section', 'Review timeline', 'Case dashboard', 'Workflow handoff'] },
      { group: 'Governance', items: ['Access rules', 'Review notes', 'Audit context', 'Compliance fit'] },
    ],
    related: [
      { id: 'thalamus', tag: 'Document automation', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
      { id: 'frcm', tag: 'Contract review', title: 'Contract review automation for construction teams.', metric: 'Clause-level risk' },
    ],
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
    title: <>Inventory forecasts that <em>changed</em> buying decisions.</>,
    lede:
      'Retina moved from spreadsheet planning to weekly buying recommendations the team could trust.',
    oneLiner: 'A forecasting workflow for stock risk, margin pressure, and purchase timing, delivered where the team already worked.',
    engagement: 'Sprint + advisory',
    engagementMeta: '10\u00A0weeks build · async support',
    role: 'AI builder',
    roleMeta: 'Forecasting · Python scripts · product surface',
    year: '2024',
    yearMeta: 'Q4 launch',
    resultsLabel: 'Buyer case',
    resultsNote: 'inventory and planning outcomes',
    results: [
      { value: <>31<em>%</em></>, label: 'Fewer stockouts', sub: 'Across top products' },
      { value: <>18<em>%</em></>, label: 'Margin lift', sub: 'Per-product improvement' },
      { value: <em>7d</em>, label: 'Planning cadence', sub: 'Weekly buying rhythm' },
      { value: <>86<em>%</em></>, label: 'Forecast trust', sub: 'Planning target hit' },
    ],
    impact: [
      { label: 'Stockout reduction', value: 69, detail: 'Inventory risk moved down across top products.' },
      { label: 'Margin lift', value: 58, detail: 'Better buying cadence improved product margins.' },
      { label: 'Planning speed', value: 86, detail: 'Quarterly decisions became weekly planning.' },
      { label: 'Forecast trust', value: 86, detail: 'Accuracy reached the operating target.' },
    ],
    problem: [
      <strong className="cs-section__lead">The business had outgrown intuition-led buying.</strong>,
      <>Quarterly planning was too slow for promotions, supplier delays, and changing demand. Retina needed a repeatable way to decide what to buy next.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We turned forecasting into a weekly planning workflow.</strong>,
      <>The model combined sales, inventory, promotions, and lead times, then delivered clear risk flags and purchase recommendations inside Slack.</>,
    ],
    bullets: [
      'Sales, inventory, promotions, and supplier lead times in one forecast.',
      'Confidence ranges attached to each recommendation.',
      'Stockout risk surfaced before buying windows closed.',
      'Slack became the planning surface for weekly decisions.',
    ],
    heroVisual: {
      src: '/assets/projects/retina-curated.webp',
      alt: 'Abstract curated visual for Retina showing inventory forecasts, demand curves, and planning blocks',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Demand inputs', items: ['Sales', 'Ads spend', 'Inventory', 'Suppliers'] },
      { title: '[ 02 ] Prepare', name: 'Planning table', items: ['Promotions', 'Lead times', 'Seasonality', 'Stockout flags'] },
      { title: '[ 03 ] Predict', name: 'Forecast engine', items: ['Model', 'Checks', 'Ranges', 'Alerts'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Buying surface', items: ['Slack app', 'Risk flags', 'Buy recs', 'Exports'] },
    ],
    architectureNote: <>The model only mattered once it changed the buying cadence. Slack became the product surface because that is where the team already made decisions.</>,
    codeTitle: 'Forecast response',
    code: <>
      forecast = predict(next_8_weeks){'\n'}
      risk = stockout_risk(forecast, inventory, lead_time){'\n'}
      return PurchasePlan(units=rec_qty, confidence=interval)
    </>,
    outcome: [
      <><strong>Better buying rhythm:</strong> quarterly decisions became weekly planning with confidence ranges attached.</>,
      <><strong>Measured inventory impact:</strong> top-product stockouts dropped 31% and margin per product improved 18% after two buying cycles.</>,
    ],
    quote: 'Talha told me what was not worth building, then shipped the one tool that changed my buying decisions.',
    quoteBy: 'Priya Krishnan, Founder, Retina',
    hard: [
      { title: 'Planning was too slow', detail: 'Quarterly buying could not react quickly enough to promotion swings, supplier delays, and changing demand.' },
      { title: 'Dashboards were not enough', detail: 'The team needed a repeatable decision workflow, not another report to interpret.' },
      { title: 'Trust mattered more than model depth', detail: 'Every recommendation needed a confidence range and a reason the buyer could understand.' },
      { title: 'Adoption had to be simple', detail: 'The workflow had to live where the team already planned, reviewed, and made decisions.' },
    ],
    decisions: [
      { key: 'Weekly cadence', value: 'Forecasting was tied to the rhythm of real buying decisions.' },
      { key: 'Slack surface', value: 'Recommendations appeared where the team already worked.' },
      { key: 'Risk flags', value: 'Stockout risk became visible before orders were placed.' },
      { key: 'Confidence ranges', value: 'Each recommendation showed enough context to support judgment.' },
      { key: 'Simple model proof', value: 'Baselines and checks kept the forecast explainable.' },
      { key: 'Decision support', value: 'The founder kept final control while the model became the planning baseline.' },
    ],
    build: [
      { week: '1–2', title: 'Data audit', detail: 'Reviewed sales, inventory, promotions, and supplier lead times.' },
      { week: '2–4', title: 'Clean pipeline', detail: 'Built the planning table and stockout flags.' },
      { week: '4–6', title: 'Forecast tests', detail: 'Compared simple baselines against stronger models.' },
      { week: '6–8', title: 'Buying logic', detail: 'Added confidence ranges, risk flags, and purchase guidance.' },
      { week: '8–9', title: 'Slack workflow', detail: 'Moved recommendations into the planning channel.' },
      { week: '10', title: 'Launch + tune', detail: 'Shipped the workflow and adjusted it through the first cycle.' },
    ],
    stack: [
      { group: 'Sources', items: ['Sales history', 'Inventory levels', 'Promotions', 'Supplier lead times'] },
      { group: 'Processing', items: ['Demand cleanup', 'Stockout flags', 'Seasonality', 'Product checks'] },
      { group: 'Answer layer', items: ['Forecast ranges', 'Risk scores', 'Buy quantities', 'Planning notes'] },
      { group: 'Delivery', items: ['Slack workflow', 'Weekly alerts', 'Exports', 'Review history'] },
      { group: 'Governance', items: ['Human approval', 'Model checks', 'Data refreshes', 'Decision logs'] },
    ],
    related: [
      { id: 'thalamus', tag: 'Document automation', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
      { id: 'aletheia', tag: 'Voice + video AI', title: 'Review signals inside important calls.', metric: '3 signal types' },
    ],
  },
  {
    id: 'crayo',
    categories: ['automation', 'mvp-saas', 'voice-ai'],
    index: '05',
    shortName: 'Crayo',
    client: 'Crayo',
    clientMeta: 'AI video · Short-form automation',
    title: <>AI video tools for <em>viral</em> short-form content.</>,
    lede:
      'Crayo turns scripts, voiceovers, subtitles, and gameplay clips into short-form videos fast.',
    oneLiner: 'An all-in-one AI video workflow for creators who need polished shorts without editing every frame by hand.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · workflow story · creator proof',
    role: 'Product strategy',
    roleMeta: 'AI video product story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Buyer case',
    resultsNote: 'creator workflow outcomes',
    results: [
      { value: <em>Seconds</em>, label: 'Video generation', sub: 'Short-form output fast' },
      { value: <em>Auto</em>, label: 'Voiceovers', sub: 'Narration without manual setup' },
      { value: <em>Dynamic</em>, label: 'Subtitles', sub: 'Captions built for retention' },
      { value: <em>Shorts</em>, label: 'Format focus', sub: 'Optimized for viral clips' },
    ],
    impact: [
      { label: 'Creation speed', value: 90, detail: 'Shorts move from idea to draft faster.' },
      { label: 'Editing effort', value: 84, detail: 'Voiceover and subtitles become automatic.' },
      { label: 'Format clarity', value: 88, detail: 'The product story stays focused on viral shorts.' },
      { label: 'Creator confidence', value: 82, detail: 'The workflow is easy to understand and repeat.' },
    ],
    problem: [
      <strong className="cs-section__lead">Short-form video creation has too many manual steps.</strong>,
      <>Creators need scripts, narration, captions, clips, timing, and export settings to work together. Crayo needed a product story that made the whole workflow feel simple.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We framed Crayo as the fast path from idea to publish-ready short.</strong>,
      <>The message focused on one clear workflow: generate a short, add AI voiceover, apply dynamic subtitles, and pair it with clips built for attention.</>,
    ],
    bullets: [
      'AI video generation for short-form formats.',
      'Automatic voiceovers and captions in the same workflow.',
      'Gameplay clips shaped for creator-friendly output.',
      'A simple story for fast content production.',
    ],
    heroVisual: {
      src: '/assets/projects/crayo.png',
      alt: 'Screenshot-style visual for Crayo showing an AI short-form video editing product',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Creator inputs', items: ['Scripts', 'Prompts', 'Clips', 'Gameplay'] },
      { title: '[ 02 ] Generate', name: 'Video workflow', items: ['Scenes', 'Voiceover', 'Subtitles', 'Timing'] },
      { title: '[ 03 ] Optimize', name: 'Shorts engine', items: ['Pacing', 'Hooks', 'Captions', 'Formats'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Creator output', items: ['Drafts', 'Exports', 'Variants', 'Publishing'] },
    ],
    architectureNote: <>Crayo packages the editing workflow around the short-form outcome: faster drafts, clearer captions, and clips ready for creator review.</>,
    codeTitle: 'Short-form generation flow',
    code: <>
      short = generate_video(script, clips){'\n'}
      voiceover = add_voiceover(short, voice){'\n'}
      captions = sync_subtitles(voiceover){'\n'}
      <span className="k">return</span> ViralShort(video=short, captions=captions, format="shorts")
    </>,
    outcome: [
      <><strong>Clearer product story:</strong> Crayo now reads as a focused AI video workflow for creators making short-form content.</>,
      <><strong>Sharper workflow promise:</strong> the page connects voiceovers, subtitles, and clips into one fast creation path.</>,
    ],
    quote: 'Crayo became easier to explain as one simple promise: generate short-form videos in seconds.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Creators move quickly', detail: 'The page had to explain speed without making the product feel shallow or generic.' },
      { title: 'The workflow has many parts', detail: 'Voiceovers, subtitles, clips, and exports needed to read as one system.' },
      { title: 'Viral formats need clarity', detail: 'The story had to stay focused on short-form output instead of broad video editing.' },
      { title: 'Automation needed trust', detail: 'Creators still need control over the final video, even when the draft is generated automatically.' },
    ],
    decisions: [
      { key: 'Shorts first', value: 'The product story centered on short-form output, not general video editing.' },
      { key: 'Workflow framing', value: 'Script, voiceover, captions, and clips became one creation path.' },
      { key: 'Creator control', value: 'The message kept automation tied to editable drafts.' },
      { key: 'Speed proof', value: 'Generation time became the core buyer signal.' },
      { key: 'Caption value', value: 'Dynamic subtitles were framed as a retention tool.' },
      { key: 'Clip pairing', value: 'Gameplay and visual clips were positioned as part of the creative engine.' },
    ],
    build: [
      { week: '1–2', title: 'Product audit', detail: 'Reviewed the creator workflow and core video features.' },
      { week: '2–3', title: 'Narrative', detail: 'Defined the fast short-form creation story.' },
      { week: '3–4', title: 'Workflow map', detail: 'Connected prompts, voiceovers, subtitles, and clips.' },
      { week: '4–5', title: 'Creator proof', detail: 'Simplified the value around speed and control.' },
      { week: '5–6', title: 'Page copy', detail: 'Reduced feature language into scan-friendly sections.' },
      { week: '6–7', title: 'Launch fit', detail: 'Aligned the product story with creator use cases.' },
    ],
    stack: [
      { group: 'Sources', items: ['Scripts', 'Prompts', 'Gameplay clips', 'Creator assets'] },
      { group: 'Processing', items: ['Scene generation', 'Voiceover sync', 'Caption timing', 'Clip selection'] },
      { group: 'Answer layer', items: ['Hook ideas', 'Video drafts', 'Subtitle variants', 'Format choices'] },
      { group: 'Delivery', items: ['Shorts export', 'Draft review', 'Variant output', 'Publishing handoff'] },
      { group: 'Governance', items: ['Creator review', 'Brand checks', 'Asset control', 'Edit history'] },
    ],
    related: [
      { id: 'aletheia', tag: 'Voice + video AI', title: 'Review signals inside important calls.', metric: '3 signal types' },
      { id: 'retina', tag: 'Automation', title: 'Inventory forecasts that changed buying decisions.', metric: '31% fewer stockouts' },
    ],
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
  const hasScreenshots = !!selectedCase.screenshots?.length
  const valueProfileLabel = isEnhanced ? (hasScreenshots ? '[ 07 ] Value Profile' : '[ 06 ] Value Profile') : (selectedCase.screenshots ? '[ 04 ] Value Profile' : '[ 03 ] Value Profile')
  const howItWorksLabel = isEnhanced ? (hasScreenshots ? '[ 08 ] How it works' : '[ 07 ] How it works') : (selectedCase.screenshots ? '[ 05 ] How it works' : '[ 04 ] How it works')
  const outcomeLabel = isEnhanced ? (hasScreenshots ? '[ 09 ] Outcome' : '[ 08 ] Outcome') : (selectedCase.screenshots ? '[ 06 ] Outcome' : '[ 05 ] Outcome')
  const stackLabel = hasScreenshots ? '[ 10 ] Stack' : '[ 09 ] Stack'

  return (
    <>
      <section className={`cs-hero${isEnhanced ? ' cs-hero--thalamus' : ''}`}>
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
          <div className="cs-hero__main" style={{ alignItems: isEnhanced ? 'start' : 'center' }}>
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

          {selectedCase.id === 'thalamus' && <ThalamusImpactStrip />}

          <div className="cs-hero__meta">
            {isEnhanced ? (
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

      {selectedCase.id === 'thalamus' ? (
        <ThalamusBuyerCaseSection />
      ) : isEnhanced ? (
        <EnhancedBuyerCaseSection caseStudy={selectedCase} />
      ) : (
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
      )}

      <CaseSection label="[ 01 ] The Problem" paragraphs={selectedCase.problem} borderTop />

      {isEnhanced && selectedCase.hard && (
        <WhyHardSection label="[ 02 ] Why this was hard" items={selectedCase.hard} />
      )}

      <CaseSection label={isEnhanced ? '[ 03 ] Approach' : '[ 02 ] Approach'} paragraphs={selectedCase.approach} bullets={selectedCase.bullets} bulletsLabel={selectedCase.id === 'thalamus' ? 'Key points' : undefined} />

      {isEnhanced && selectedCase.decisions && (
        selectedCase.id === 'thalamus' ? (
          <ThalamusDecisionsSection />
        ) : (
          <DecisionsSection label="[ 04 ] Key decisions" items={selectedCase.decisions} />
        )
      )}

      {isEnhanced && selectedCase.build && (
        <BuildSection label="[ 05 ] How we shipped" items={selectedCase.build} />
      )}

      {selectedCase.screenshots && (
        <section>
          <div className="container">
            <div className="cs-section">
              <SectionHeading label={isEnhanced ? '[ 06 ] Screenshots' : (selectedCase.hard ? '[ 06 ] Screenshots' : '[ 03 ] Screenshots')} />
              <div className="cs-section__body">
                <div className={`case-shots${isEnhanced ? ' case-shots--scroll' : ''}`}>
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
            <SectionHeading label={valueProfileLabel} />
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
            <SectionHeading label={howItWorksLabel} />
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
            <SectionHeading label={outcomeLabel} />
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
        <StackSection label={stackLabel} items={selectedCase.stack} />
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

const ImpactDocsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 12h6M9 16h6" />
  </svg>
)

const ImpactAccuracyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
)

const ImpactUsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
    <circle cx="10" cy="8" r="3.5" />
    <path d="M20 19v-1.2a3 3 0 0 0-2.2-2.9" />
    <path d="M16.5 5.4a3.2 3.2 0 0 1 0 5.2" />
  </svg>
)

const ImpactGrowthIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 17 9 12l4 4 7-8" />
    <path d="M14 8h6v6" />
  </svg>
)

const BuyerClockIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l4 2" />
  </svg>
)

const BuyerChartIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19V9M10 19v-5M16 19v-8" />
    <path d="m4 14 5-5 4 4 7-8" />
    <path d="M15 5h5v5" />
  </svg>
)

function ThalamusImpactStrip() {
  const items = [
    { icon: <ImpactDocsIcon />, value: '1M+', label: 'docs indexed' },
    { icon: <ImpactAccuracyIcon />, value: '95%', label: 'answer accuracy' },
    { icon: <ImpactUsersIcon />, value: '10,000+', label: 'users' },
    { icon: <ImpactGrowthIcon />, value: 'Series B', label: 'momentum' },
  ]

  return (
    <div className="thalamus-impact">
      <div className="thalamus-impact__label">[ Impact ]</div>
      <div className="thalamus-impact__grid">
        {items.map((item) => (
          <div className="thalamus-impact__item" key={item.value}>
            <span className="thalamus-impact__icon">{item.icon}</span>
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ThalamusBuyerCaseSection() {
  const items = [
    {
      icon: <ImpactAccuracyIcon />,
      value: <>99<em>%</em></>,
      label: 'Accuracy',
      text: 'Performance you can trust',
    },
    {
      icon: <ImpactUsersIcon />,
      value: <>10,000<em>+</em></>,
      label: 'Active customers',
      text: 'Trusted at scale',
    },
    {
      icon: <BuyerClockIcon />,
      value: <>6 <em>mo</em></>,
      label: 'Time to market',
      text: 'Delivered in 6 months',
    },
    {
      icon: <BuyerChartIcon />,
      value: <>Market <em>Ready</em></>,
      label: 'Built for impact',
      text: 'Driving results from day one',
    },
  ]

  return (
    <section className="thalamus-buyer">
      <div className="container">
        <div className="thalamus-buyer__divider">
          <span>Buyer case</span>
          <span>Cost and time outcomes</span>
        </div>
        <div className="thalamus-buyer__grid">
          {items.map((item) => (
            <div className="thalamus-buyer__card" key={item.label}>
              <span className="thalamus-buyer__icon">{item.icon}</span>
              <div className="thalamus-buyer__value">{item.value}</div>
              <div className="thalamus-buyer__label">{item.label}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EnhancedBuyerCaseSection({ caseStudy }: { caseStudy: CaseStudy }) {
  const icons = [<ImpactAccuracyIcon />, <ImpactUsersIcon />, <BuyerClockIcon />, <BuyerChartIcon />]

  return (
    <section className="thalamus-buyer">
      <div className="container">
        <div className="thalamus-buyer__divider">
          <span>{caseStudy.resultsLabel}</span>
          <span>{caseStudy.resultsNote}</span>
        </div>
        <div className="thalamus-buyer__grid">
          {caseStudy.results.map((item, index) => (
            <div className="thalamus-buyer__card" key={item.label}>
              <span className="thalamus-buyer__icon">{icons[index % icons.length]}</span>
              <div className="thalamus-buyer__value">{item.value}</div>
              <div className="thalamus-buyer__label">{item.label}</div>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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

function SectionHeading({ label }: { label: string }) {
  const match = label.match(/^\[\s*(\d+)\s*\]\s*(.+)$/)

  if (!match) {
    return <div className="cs-section__label">{label}</div>
  }

  const [, number, title] = match
  const formattedTitle = title
    .split(' ')
    .map((word) => word ? `${word.charAt(0).toUpperCase()}${word.slice(1)}` : word)
    .join(' ')

  return (
    <div className="cs-section__label cs-section-heading">
      <span className="cs-section-heading__number">[ {number.padStart(2, '0')} ]</span>
      <span className="cs-section-heading__rule" aria-hidden="true" />
      <span className="cs-section-heading__title">{formattedTitle}</span>
      <span className="cs-section-heading__accent" aria-hidden="true" />
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
          <SectionHeading label={label} />
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
          <SectionHeading label={label} />
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
    <section className="thalamus-decisions">
      <div className="container">
        <div className="cs-section">
          <SectionHeading label={label} />
          <div className="cs-section__body">
            <div className="thalamus-decisions__grid">
              {items.map((d, index) => (
                <div key={d.key} className="thalamus-decisions__card">
                  <span className="thalamus-decisions__icon">{decisionIconForIndex(index)}</span>
                  <h3>{d.key}</h3>
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

function decisionIconForIndex(index: number) {
  const icons = [
    <DecisionDocumentIcon />,
    <DecisionShieldIcon />,
    <BuyerClockIcon />,
    <DecisionLayersIcon />,
    <DecisionLockIcon />,
    <DecisionRocketIcon />,
  ]

  return icons[index % icons.length]
}

const DecisionDocumentIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 12h6M9 16h6" />
  </svg>
)

const DecisionShieldIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
    <path d="m8.5 12 2.2 2.2L15.8 9" />
  </svg>
)

const DecisionLockIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="10" width="14" height="10" rx="1.8" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

const DecisionLayersIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 4 8 4-8 4-8-4z" />
    <path d="m4 12 8 4 8-4" />
    <path d="m4 16 8 4 8-4" />
  </svg>
)

const DecisionRocketIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4c3.5-.7 5.7.2 6 0-.2 3.2-1.2 6.2-4 8.8l-5.5 5.5-4.8.9.9-4.8 5.5-5.5C12.7 8 13.3 6 14 4Z" />
    <path d="M9 15 7 13M15 9l2 2" />
    <circle cx="15.5" cy="8.5" r="1.5" />
  </svg>
)

function ThalamusDecisionsSection() {
  const items = [
    { icon: <DecisionDocumentIcon />, title: 'Document pipeline', text: 'Unified ingestion for scans, tables, layouts, and media.' },
    { icon: <DecisionShieldIcon />, title: 'Source-backed answers', text: 'Answers with citations, confidence, and a full audit trail.' },
    { icon: <DecisionLockIcon />, title: 'Privacy first', text: 'Access controls and sensitive-data handling built in.' },
    { icon: <BuyerClockIcon />, title: 'Buy-vs-build framing', text: 'Cost, timeline, and maintenance packaged for faster decisions.' },
    { icon: <DecisionLayersIcon />, title: 'Product story', text: 'Thalamus became an answer layer, not a search box.' },
    { icon: <DecisionRocketIcon />, title: 'Launch narrative', text: 'Clear pages that communicate value and drive buyer confidence.' },
  ]

  return (
    <section className="thalamus-decisions">
      <div className="container">
        <div className="cs-section">
          <SectionHeading label="[ 04 ] Key decisions" />
          <div className="cs-section__body">
            <div className="thalamus-decisions__grid">
              {items.map((item) => (
                <div className="thalamus-decisions__card" key={item.title}>
                  <span className="thalamus-decisions__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
          <SectionHeading label={label} />
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
          <SectionHeading label={label} />
          <div className="cs-section__body">
            <div className="cs-stack__grid">
              {items.map((g) => (
                <div key={g.group} className="cs-stack__group">
                  <div className="cs-stack__head">
                    <StackIcon group={g.group} />
                    <div className="cs-stack__group-label">{g.group}</div>
                  </div>
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

function StackIcon({ group }: { group: string }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (group === 'Sources') {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    )
  }

  if (group === 'Processing') {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="8" height="8" rx="1.5" />
        <path d="M4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2" />
        <path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
      </svg>
    )
  }

  if (group === 'Answer layer') {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </svg>
    )
  }

  if (group === 'Delivery') {
    return (
      <svg {...common}>
        <path d="M5 5h14v11H9l-4 4z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="m8.5 12 2.2 2.2L15.8 9" />
    </svg>
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
