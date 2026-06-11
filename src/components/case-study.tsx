import React from 'react'
import { CTA } from './home'
import { Arrow, Footer, type NavigateToPage } from './shared'
import { CaseCategoryMenu, getCaseCategory, type CaseCategoryId } from './case-categories'
import {
  ProjectIcon,
  ProjectVisual,
  getVisualComponentName,
  type ProjectIconName,
  type ProjectVisualComponentName,
  type ProjectVisualKey,
} from './case-study-visuals'

export type CaseStudy = {
  id: string
  aliases?: string[]
  categories: CaseCategoryId[]
  index: string
  shortName: string
  client: string
  clientMeta: string
  liveUrl?: string
  label?: string
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
  visualType?: 'dashboard-mockup' | 'document-ai-mockup' | 'voice-ai-mockup' | 'computer-vision-mockup' | 'mobile-app-mockup' | 'mlops-mockup' | 'data-automation-mockup' | 'growth-automation-mockup' | 'generative-media-mockup' | 'knowledge-search-mockup'
  cardVisual?: ProjectVisualKey
  previewVisual?: ProjectVisualKey
  coverVisual?: ProjectVisualKey
  cardPreviewImage?: string
  coverImage?: string
  icon?: ProjectIconName
  alt?: string
  visualComponent?: ProjectVisualComponentName
  ogImage?: string
  seoTitle?: string
  seoDescription?: string
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

type EnhancedCaseStudyInput = Omit<
  CaseStudy,
  'engagement' | 'engagementMeta' | 'role' | 'year' | 'yearMeta' | 'resultsLabel' | 'resultsNote'
> & Partial<Pick<CaseStudy, 'engagement' | 'engagementMeta' | 'role' | 'year' | 'yearMeta' | 'resultsLabel' | 'resultsNote'>>

function enhancedCaseStudy(input: EnhancedCaseStudyInput): CaseStudy {
  return {
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · workflow story · product proof',
    role: 'AI builder',
    year: '2026',
    yearMeta: 'Project positioning',
    resultsLabel: 'Buyer case',
    resultsNote: 'workflow outcomes',
    ...input,
  }
}

const BASE_CASE_STUDIES: CaseStudy[] = [
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
      src: '/assets/projects/thalamus-curated-ui-v2.webp',
      alt: 'Stylized Thalamus interface showing document search, cited sources, and answer confidence',
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
    oneLiner: 'Review calls and recordings for cues that transcripts miss—tone, stress, confidence, facial expressions, and evolving meaning. Capture the nuance that text alone can’t convey.',
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
      <strong className="cs-section__lead">Transcripts leave out critical context.</strong>,
      <>In high‑stakes calls, tone, confidence, stress, timing and visual cues matter. Aletheia must convey those signals clearly, not as a dry feature list.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned Aletheia as a review layer for critical conversations.</strong>,
      <>It merges video, voice, and transcript into a single timeline, letting reviewers see what changed, when, and why it matters.</>,
    ],
    bullets: [
      'The combined signals make tone, stress, and confidence easy to assess, supporting compliance, support, and investigations.',
      'The language is clear enough for buyers to grasp quickly.'
    ],
    heroVisual: {
      src: '/assets/projects/aletheia-curated-ui-v2.webp',
      alt: 'Stylized Aletheia interface showing call review, transcript, waveform, and signal tracks',
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
      <><strong>A clearer product story:</strong> Aletheia is now a focused review layer for high‑stakes conversations.</>,
      <><strong>Sharper buyer context:</strong> The page shows why voice, video, and transcript signals matter together.</>,
    ],
    quote: 'Aletheia shifted from a technical feature set to a clear story for reviewing key conversations.',
    quoteBy: 'Product team, Levitate Data',
    hard: [{title:'Signals are easy to overexplain',detail:'We had to explain voice, video, and transcript analysis without drowning non‑technical buyers.'},{title:'Trust depends on context',detail:'Reviewers must see why a moment matters, not just a score or label.'},{title:'Use cases are high stakes',detail:'Compliance, support, and investigation teams need language that is careful, useful, and credible.'},{title:'The product needed a category',detail:'Aletheia had to be positioned as a review layer, not another call‑summary tool.'}],
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
    oneLiner: 'A construction contract review product that connects clause risk, playbook standards, plain-language coaching, and project handoffs in one workflow.',
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
      src: '/assets/projects/frcm-curated-ui-v2.webp',
      alt: 'Stylized First Rule Contract Manager interface showing contract risk review and playbook guidance',
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
    hard: [
      { title: 'Construction risk is buried in clauses', detail: 'Payment, delay, lien, indemnity, notice, and flow-down language can shift project risk before a team reaches kickoff.' },
      { title: 'Legal tools feel too generic', detail: 'The product needed to speak to executives, precon, PMs, risk teams, and field leaders instead of sounding like broad document software.' },
      { title: 'Standards need to be repeatable', detail: 'Preferred language, fallback language, and escalation paths had to feel like an operating system for contract review.' },
      { title: 'The output has to leave legal review', detail: 'A useful review must become clear project guidance that managers can carry into kickoff, training, and jobsite decisions.' },
    ],
    decisions: [
      { key: 'Construction-first framing', value: 'The story centered on project risk, flow-down checks, and jobsite consequences rather than generic AI review.' },
      { key: 'Clause-level risk', value: 'Risk categories, source links, and plain-language rationale made each finding easy to inspect.' },
      { key: 'Playbook engine', value: 'Preferred language, fallback language, and escalation guidance became the standards layer behind the product.' },
      { key: 'Marten coaching', value: 'The contract coach gave teams a conversational way to ask questions while staying anchored to contract text.' },
      { key: 'Kickoff handoff', value: 'Review output was shaped for PMs and field leadership, not only legal or executive readers.' },
      { key: 'Trust signals', value: 'The free upload, guarantee, and private deployment option made adoption feel lower risk.' },
    ],
    build: [
      { week: '1-2', title: 'Market + workflow audit', detail: 'Reviewed construction contract risks, buyer roles, and the review path from upload to project handoff.' },
      { week: '2-3', title: 'Core narrative', detail: 'Defined the construction-first promise around risk visibility before kickoff.' },
      { week: '3-4', title: 'Product flow', detail: 'Mapped upload, clause detection, rationale, playbook guidance, Marten Q&A, and summary output.' },
      { week: '4-5', title: 'Playbook story', detail: 'Turned company standards into buyer-friendly language for preferred and fallback positions.' },
      { week: '5-6', title: 'Page system', detail: 'Shaped the homepage, Contract Manager page, and playbook page around separate buyer questions.' },
      { week: '6-7', title: 'Launch refinement', detail: 'Tightened proof points, guarantee language, deployment positioning, and screenshot-ready page sections.' },
    ],
    stack: [
      { group: 'Sources', items: ['Prime contracts', 'Subcontracts', 'Exhibits', 'Riders'] },
      { group: 'Processing', items: ['Clause detection', 'Risk categories', 'Flow-down checks', 'Source matching'] },
      { group: 'Answer layer', items: ['Plain rationale', 'Preferred language', 'Fallback positions', 'Marten Q&A'] },
      { group: 'Delivery', items: ['Review dashboard', 'Risk summary', 'PM handoff', 'Training notes'] },
      { group: 'Governance', items: ['Company standards', 'Escalation paths', 'Private deployment', 'Audit context'] },
    ],
    related: [
      { id: 'thalamus', tag: 'Document automation', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
      { id: 'aletheia', tag: 'Voice + video AI', title: 'Review signals inside important calls.', metric: '3 signal types' },
    ],
  },
  {
    id: 'retina',
    categories: ['automation', 'python-scripts'],
    index: '04',
    shortName: 'Retina',
    client: 'Retina',
    clientMeta: 'Retail forecasting · Python automation',
    title: <>Inventory forecasts that <em>shifted</em> purchasing decisions.</>,
    lede:
      'Retina moved from spreadsheet planning to weekly buying recommendations the team could trust.',
    oneLiner: 'A forecasting workflow for stock risk, margin pressure, and purchase timing, delivered within the team’s existing environment.',
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
      <strong className="cs-section__lead">The business outgrew intuition‑driven buying.</strong>,
      <>Quarterly planning can’t keep pace with promotions, supplier delays, or shifting demand. Retina needs a repeatable process to choose the next purchase.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We turned forecasting into a weekly planning workflow.</strong>,
      <>The model merges sales, inventory, promotions and lead times, then sends risk flags and purchase recommendations to Slack.</>,
    ],
    bullets: [
      'Sales, inventory, promotions, and supplier lead times in one forecast.',
      'Confidence ranges attached to each recommendation.',
      'Stockout risk surfaced before buying windows closed.',
      'Slack became the planning surface for weekly decisions.',
    ],
    heroVisual: {
      src: '/assets/projects/retina-curated-ui-v2.webp',
      alt: 'Stylized Retina interface showing retail demand forecasting, purchase planning, and chat workflow',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Demand inputs', items: ['Sales', 'Ads spend', 'Inventory', 'Suppliers'] },
      { title: '[ 02 ] Prepare', name: 'Planning table', items: ['Promotions', 'Lead times', 'Seasonality', 'Stockout flags'] },
      { title: '[ 03 ] Predict', name: 'Forecast engine', items: ['Model', 'Checks', 'Ranges', 'Alerts'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Buying surface', items: ['Slack app', 'Risk flags', 'Buy recs', 'Exports'] },
    ],
    architectureNote: <>The model mattered only after it altered the buying cadence. Slack became the product surface since the team already decides there.</>,
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
    quote: "Talha identified what wasn't worth building and delivered the tool that shifted my purchasing decisions.",
    quoteBy: 'Priya Krishnan, Founder, Retina',
    hard: [
      { title: 'Planning was too slow', detail: 'Quarterly buying couldn’t keep up with promo swings, supplier delays or demand shifts.' },
      { title: 'Dashboards were not enough', detail: 'The team needed a repeatable decision workflow, not another report.' },
      { title: 'Trust mattered more than model depth', detail: 'Each recommendation required a confidence range and a clear reason.' },
      { title: 'Simple adoption', detail: 'The workflow had to live in the tools where the team already plans and decides.' },
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
    oneLiner: 'A single AI video workflow lets creators produce polished shorts without hand‑editing each frame.',
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
      <strong className="cs-section__lead">Short‑form video creation involves too many manual steps. </strong>,
      <>Creators must juggle scripts, narration, captions, clips, timing, and export settings. Crayo needed a product story that streamlined the entire workflow.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned Crayo as the quickest route from concept to a publish-ready short.</strong>,
      <>The pitch highlighted a single workflow: create a short, add AI voiceover, add dynamic subtitles, and match it with attention‑grabbing clips.</>,
    ],
    bullets: [
      'Video generation powered by AI for short-form content.',
      'Automatic voiceovers and captions built into one workflow.',
      'Gameplay clips formatted for creator‑friendly output.',
      'A simple story to speed content production.',
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
    architectureNote: <>Crayo builds the editing workflow to deliver quick drafts, clear captions, and clips ready for creators.</>,
    codeTitle: 'Short-form generation flow',
    code: <>
      short = generate_video(script, clips){'\n'}
      voiceover = add_voiceover(short, voice){'\n'}
      captions = sync_subtitles(voiceover){'\n'}
      <span className="k">return</span> ViralShort(video=short, captions=captions, format="shorts")
    </>,
    outcome: [
    <><strong>Clearer product story:</strong> Crayo is now a focused AI video workflow for short-form creators.</>,
    <><strong>Sharper workflow promise:</strong> the page links voiceovers, subtitles, and clips into a fast creation path.</>,
  ],
    quote: 'Crayo is now summed up in one promise: create short videos in seconds.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Creators work fast', detail: 'The page needed to convey speed without sounding shallow or generic.' },
      { title: 'The workflow is complex', detail: 'Voiceovers, subtitles, clips, and exports must appear as a single system.' },
      { title: 'Viral formats require clarity', detail: 'The story must stay focused on short-form output, not broad editing.' },
      { title: 'Automation must earn trust', detail: 'Creators need control over the final video, even with automatic drafts.' },
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
  {
    id: 'musicfy',
    categories: ['automation', 'mvp-saas', 'voice-ai'],
    index: '06',
    shortName: 'Musicfy',
    client: 'Musicfy AI',
    clientMeta: 'Generative audio · Voice cloning',
    title: <>AI covers in <em>any</em> voice.</>,
    lede:
      'Musicfy helps creators generate song covers, voiceovers, and custom voices without a studio workflow.',
    oneLiner: 'A creator audio tool for instant covers, custom voice cloning, and a big voice library, designed for rapid experimentation.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · creator workflow · audio proof',
    role: 'Product strategy',
    roleMeta: 'Generative audio product story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Buyer case',
    resultsNote: 'creator audio outcomes',
    results: [
      { value: <>100,000<em>+</em></>, label: 'Voice library', sub: 'A wide set of voices to try' },
      { value: <em>Minutes</em>, label: 'Cover creation', sub: 'Faster song experiments' },
      { value: <em>Custom</em>, label: 'Voice cloning', sub: 'Creator-owned voice styles' },
      { value: <em>Studio</em>, label: 'Workflow feel', sub: 'Audio tools in one place' },
    ],
    impact: [
      { label: 'Voice choice', value: 92, detail: 'A large voice library makes exploration easy.' },
      { label: 'Creation speed', value: 88, detail: 'Covers move from idea to draft quickly.' },
      { label: 'Creator control', value: 84, detail: 'Custom cloning supports personal voice styles.' },
      { label: 'Product clarity', value: 86, detail: 'The workflow reads as simple creator tooling.' },
    ],
    problem: [
      <strong className="cs-section__lead">AI music tools tend to feel technical before they feel creative.</strong>,
      <>Musicfy had to make voice cloning, cover generation, and audio creation approachable for creators who need fast results, not a complex setup.</>,
    ],
    approach: [
      <strong className="cs-section__lead">Musicfy lets you test a song in a new voice instantly.</strong>,
      <>It ties voice selection, custom cloning, and cover generation into a single workflow: pick a voice, create a cover, and refine.</>,
    ],
    bullets: [
      'AI song covers created via a simple workflow.',
      'Extensive voice library for rapid testing.',
      'Custom cloning for personal or brand voices.',
      'Product language focused on creativity, speed, control.',
    ],
    heroVisual: {
      src: '/assets/projects/musicfy.jpg',
      alt: 'Screenshot-style visual for Musicfy showing an AI voice and song generation product',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Creator inputs', items: ['Songs', 'Vocals', 'Voice samples', 'Prompts'] },
      { title: '[ 02 ] Generate', name: 'Audio workflow', items: ['Voice choice', 'Cloning', 'Cover draft', 'Mixing'] },
      { title: '[ 03 ] Refine', name: 'Creator layer', items: ['Styles', 'Previews', 'Variants', 'Edits'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Audio output', items: ['Covers', 'Voiceovers', 'Downloads', 'Sharing'] },
    ],
    architectureNote: <>Musicfy packages voice generation around the creator outcome: fast covers, flexible voices, and enough control to keep the result usable.</>,
    codeTitle: 'Voice cover flow',
    code: <>
      voice = select_voice(library, style){'\n'}
      clone = clone_voice(sample){'\n'}
      cover = generate_cover(song, voice || clone){'\n'}
      <span className="k">return</span> CreatorAudio(track=cover, variants=preview_set)
    </>,
    outcome: [
      <><strong>Clearer product story:</strong> Musicfy is now positioned as a focused AI cover and voice creation tool for creators.</>,
      <><strong>Sharper workflow promise:</strong> the page consolidates library voices, cloning, and cover generation into a single easy path.</>,
    ],
    quote: 'Musicfy became easier to understand as a creator tool: pick a voice, make a cover, and keep experimenting.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Audio creation feels complex', detail: 'The story had to make covers and cloning feel easy without hiding the power of the tool.' },
      { title: 'Voice choice can overwhelm', detail: 'A large library needed to feel useful, not noisy.' },
      { title: 'Cloning needs trust', detail: 'Custom voices had to be framed around creator control and responsible use.' },
      { title: 'Creators need speed', detail: 'The product had to support quick experiments without a heavy studio workflow.' },
    ],
    decisions: [
      { key: 'Cover-first story', value: 'The main promise became creating AI song covers in minutes.' },
      { key: 'Voice library proof', value: 'The 100,000+ voice library was used as the clearest exploration signal.' },
      { key: 'Custom cloning', value: 'Voice cloning was positioned as a creator-control feature.' },
      { key: 'Simple workflow', value: 'Choose, generate, preview, and refine became the core path.' },
      { key: 'Creator language', value: 'The copy avoided model-heavy terms and focused on output.' },
      { key: 'Audio flexibility', value: 'Covers, voiceovers, and variants were kept inside one product story.' },
    ],
    build: [
      { week: '1–2', title: 'Product audit', detail: 'Reviewed voice library, cloning, and cover-generation flows.' },
      { week: '2–3', title: 'Core narrative', detail: 'Defined the instant-cover positioning.' },
      { week: '3–4', title: 'Workflow map', detail: 'Connected songs, voices, cloning, and previews.' },
      { week: '4–5', title: 'Creator proof', detail: 'Simplified the value around speed and voice choice.' },
      { week: '5–6', title: 'Product copy', detail: 'Reduced technical audio language into clear creator benefits.' },
      { week: '6–7', title: 'Launch fit', detail: 'Aligned Musicfy with consumer AI creator expectations.' },
    ],
    stack: [
      { group: 'Sources', items: ['Song uploads', 'Voice samples', 'Prompts', 'Creator assets'] },
      { group: 'Processing', items: ['Voice matching', 'Cloning', 'Cover generation', 'Audio cleanup'] },
      { group: 'Answer layer', items: ['Voice choices', 'Cover drafts', 'Preview variants', 'Style options'] },
      { group: 'Delivery', items: ['Downloads', 'Sharing', 'Voiceovers', 'Creator library'] },
      { group: 'Governance', items: ['Creator review', 'Rights checks', 'Voice consent', 'Usage history'] },
    ],
    related: [
      { id: 'crayo', tag: 'AI video', title: 'AI video tools for viral short-form content.', metric: 'Shorts workflow' },
      { id: 'aletheia', tag: 'Voice + video AI', title: 'Review signals inside important calls.', metric: '3 signal types' },
    ],
  },
  {
    id: 'justlisten',
    aliases: ['just-listen'],
    categories: ['mvp-saas', 'voice-ai'],
    index: '07',
    shortName: 'Just Listen',
    client: 'Just Listen',
    clientMeta: 'Audiobooks · Subscription audio',
    title: <>Audiobooks made <em>affordable</em> and easy to start.</>,
    lede:
      'Just Listen is a budget-friendly audiobook platform built around simple access and repeat listening.',
    oneLiner: 'A low‑cost audio product that lets anyone listen to books without a bulky subscription.',
    engagement: 'Product narrative',
    engagementMeta: 'Positioning · subscription story · consumer proof',
    role: 'Product strategy',
    roleMeta: 'Audiobook product story',
    year: '2026',
    yearMeta: 'Product positioning',
    resultsLabel: 'Buyer case',
    resultsNote: 'access and listening outcomes',
    results: [
      { value: <em>Low</em>, label: 'Listening cost', sub: 'Budget-friendly access' },
      { value: <em>Simple</em>, label: 'Start flow', sub: 'Easy path into a book' },
      { value: <em>Audio</em>, label: 'Format focus', sub: 'Built around listening' },
      { value: <em>Repeat</em>, label: 'Habit fit', sub: 'Designed for regular use' },
    ],
    impact: [
      { label: 'Access clarity', value: 88, detail: 'The product promise is easy to understand.' },
      { label: 'Cost appeal', value: 90, detail: 'Price becomes the clearest buyer signal.' },
      { label: 'Listening focus', value: 82, detail: 'The story stays centered on audiobooks.' },
      { label: 'Subscription trust', value: 78, detail: 'The experience feels simple and low-friction.' },
    ],
    problem: [
      <strong className="cs-section__lead">Audiobook services often seem pricey before you see their benefit.</strong>,
      <>Just Listen needed a clear story: affordable listening, easy discovery, and a simple way to fit books into daily routines.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned Just Listen as the most affordable way to enjoy audiobooks.</strong>,
      <>The message emphasized easy access, simplicity, and habit formation rather than a large catalog or a complicated subscription.</>,
    ],
    bullets:[
      'Affordable audiobook access.',
      'Straightforward listening-first flow.',
      'Clear subscription value for repeat users.',
      'A direct consumer story about audio habits.',
    ],
    heroVisual: {
      src: '/assets/projects/justlisten.png',
      alt: 'Screenshot-style visual for Just Listen showing an audiobook product experience',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Book inputs', items: ['Catalog', 'Narration', 'Metadata', 'User picks'] },
      { title: '[ 02 ] Prepare', name: 'Listening flow', items: ['Search', 'Preview', 'Queue', 'Progress'] },
      { title: '[ 03 ] Match', name: 'Audio experience', items: ['Playback', 'Bookmarks', 'History', 'Suggestions'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Subscription layer', items: ['Plans', 'Library', 'Downloads', 'Account'] },
    ],
    architectureNote: <>Just Listen packages the audiobook experience around the outcome buyers care about most: affordable access to books they can start quickly and return to easily.</>,
    codeTitle: 'Listening product flow',
    code: <>
      book = select_book(catalog, listener){'\n'}
      session = start_audio(book, plan){'\n'}
      progress = save_progress(session){'\n'}
      <span className="k">return</span> ListeningSession(book=book, progress=progress, next_recommendations=queue)
    </>,
    outcome: [
      <><strong>Clearer product story:</strong> Just Listen is now a focused, affordable audiobook platform.</>,
      <><strong>Sharper consumer promise:</strong> The page links low cost, easy access, and repeat listening into a single story.</>,
    ],
    quote: 'Just Listen became easier to explain as one direct offer: the cheapest way to listen to audiobooks.',
    quoteBy: 'Product team',
    hard: [
      { title: 'The market is crowded', detail: 'The product needed a simple reason to exist beside larger audiobook platforms.' },
      { title: 'Price had to feel valuable', detail: 'Budget positioning had to read as accessible, not cheap or limited.' },
      { title: 'Listening habits matter', detail: 'The story had to support repeat use, not just one-time discovery.' },
      { title: 'Subscription needs trust', detail: 'The page had to make the plan feel simple and easy to understand.' },
    ],
    decisions: [
      { key: 'Price-first story', value: 'Affordability became the clearest product promise.' },
      { key: 'Listening focus', value: 'The story stayed centered on audiobooks and daily use.' },
      { key: 'Simple subscription', value: 'Plan language was kept direct and low-friction.' },
      { key: 'Habit framing', value: 'Progress, library, and recommendations supported repeat listening.' },
      { key: 'Consumer clarity', value: 'The copy avoided platform complexity and led with access.' },
      { key: 'Audio value', value: 'The product was positioned as a practical way to listen more.' },
    ],
    build: [
      { week: '1–2', title: 'Product audit', detail: 'Reviewed the audiobook offer, subscription value, and user flow.' },
      { week: '2–3', title: 'Core narrative', detail: 'Defined the affordable listening position.' },
      { week: '3–4', title: 'User journey', detail: 'Mapped discovery, playback, progress, and subscription moments.' },
      { week: '4–5', title: 'Value proof', detail: 'Simplified the page around cost and access.' },
      { week: '5–6', title: 'Product copy', detail: 'Reduced catalog language into scan-friendly consumer benefits.' },
      { week: '6–7', title: 'Launch fit', detail: 'Aligned the story with simple audio subscription expectations.' },
    ],
    stack: [
      { group: 'Sources', items: ['Book catalog', 'Narration files', 'Metadata', 'User library'] },
      { group: 'Processing', items: ['Search', 'Playback state', 'Progress sync', 'Recommendations'] },
      { group: 'Answer layer', items: ['Book matches', 'Listening queue', 'Progress prompts', 'Plan value'] },
      { group: 'Delivery', items: ['Audio player', 'Library view', 'Downloads', 'Subscription flow'] },
      { group: 'Governance', items: ['Account rules', 'Usage history', 'Rights checks', 'Plan controls'] },
    ],
    related: [
      { id: 'musicfy', tag: 'Generative audio', title: 'AI covers in any voice.', metric: '100,000+ voices' },
      { id: 'crayo', tag: 'AI video', title: 'AI video tools for viral short-form content.', metric: 'Shorts workflow' },
    ],
  },
  enhancedCaseStudy({
    id: 'study-potion',
    aliases: ['studypotion', 'study-potion-ai'],
    categories: ['automation', 'mvp-saas'],
    index: '08',
    shortName: 'Study Potion',
    client: 'Study Potion AI',
    clientMeta: 'Education AI · Study automation',
    title: <>AI study materials that turn notes into <em>practice</em>.</>,
    lede: 'Study Potion AI generates personalized flashcards, notes, and quizzes from learning material.',
    oneLiner: 'A learning assistant that helps students turn source material into notes, flashcards, and quizzes without rebuilding the study plan by hand.',
    roleMeta: 'Education AI product story',
    resultsNote: 'learning material outcomes',
    results: [
      { value: <em>Auto</em>, label: 'Flashcards', sub: 'Generated from notes and topics' },
      { value: <em>Quiz</em>, label: 'Practice mode', sub: 'Questions matched to the material' },
      { value: <em>Notes</em>, label: 'Study summaries', sub: 'Readable learning guides' },
      { value: <em>Personal</em>, label: 'Study path', sub: 'Materials shaped around the learner' },
    ],
    impact: [
      { label: 'Study speed', value: 88, detail: 'Source material turns into practice faster.' },
      { label: 'Practice quality', value: 84, detail: 'Quizzes and flashcards reinforce the same material.' },
      { label: 'Learner control', value: 78, detail: 'Students can review, retry, and refine.' },
      { label: 'Product clarity', value: 86, detail: 'The story reads as a simple study loop.' },
    ],
    problem: [
      <strong className="cs-section__lead">Students lose time turning material into something they can actually practice.</strong>,
      <>Notes, slides, and readings rarely arrive in the format learners need. Study Potion needed a product story that made generation feel useful, not gimmicky.</>,
      <>The buyer promise had to connect speed with retention: get material in, produce usable practice, and keep the learner moving.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We framed Study Potion as a study loop: upload, generate, practice, and improve.</strong>,
      <>The case study focuses on the workflow behind the promise: personalized notes, flashcards, and quizzes created from the same learning context.</>,
      <>That made the product easier to understand for students, parents, and education teams evaluating AI study support.</>,
    ],
    bullets: [
      'Personalized flashcards, notes, and quizzes from learning material.',
      'A repeatable study loop instead of one-off AI answers.',
      'Practice tools designed to reveal gaps and reinforce recall.',
      'Simple education positioning around speed, confidence, and review.',
    ],
    heroVisual: {
      src: '/assets/projects/study-potion.png',
      alt: 'Study Potion AI homepage visual showing instant flashcards, quizzes, and study material',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Learning inputs', items: ['Notes', 'Slides', 'Readings', 'Topics'] },
      { title: '[ 02 ] Generate', name: 'Study material', items: ['Summaries', 'Flashcards', 'Quiz questions', 'Explanations'] },
      { title: '[ 03 ] Personalize', name: 'Practice loop', items: ['Weak areas', 'Retries', 'Review sets', 'Progress'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Student surface', items: ['Study hub', 'Practice mode', 'Saved sets', 'Sharing'] },
    ],
    architectureNote: <>Study Potion works when generated material stays tied to practice. The product is strongest when notes, flashcards, and quizzes reinforce the same source context.</>,
    codeTitle: 'Study generation flow',
    code: <>
      material = ingest_learning_sources(notes, topics){'\n'}
      cards = generate_flashcards(material){'\n'}
      quiz = build_quiz(material, weak_areas){'\n'}
      <span className="k">return</span> StudySet(notes=summary, flashcards=cards, quiz=quiz)
    </>,
    outcome: [
      <><strong>Clearer student promise:</strong> Study Potion now reads as a practical way to convert source material into active practice.</>,
      <><strong>Sharper workflow story:</strong> flashcards, notes, and quizzes are presented as one learning system.</>,
    ],
    quote: 'Study Potion became easier to explain as a simple loop: upload material, generate practice, and keep studying.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Learning material is inconsistent', detail: 'Students bring notes, slides, readings, and topics in very different levels of quality.' },
      { title: 'Generated content must be useful', detail: 'The output has to become reviewable practice, not just a wall of AI text.' },
      { title: 'Personalization needs restraint', detail: 'Study support has to feel tailored without hiding what the student still needs to learn.' },
      { title: 'Education buyers scan carefully', detail: 'The product story had to avoid hype and focus on practical study outcomes.' },
    ],
    decisions: [
      { key: 'Study-loop framing', value: 'The workflow became upload, generate, practice, and improve.' },
      { key: 'Practice-first output', value: 'Flashcards and quizzes were treated as the product proof, not secondary features.' },
      { key: 'Source context', value: 'Materials stayed linked to the notes and topics that produced them.' },
      { key: 'Learner control', value: 'Retry, review, and saved sets made AI generation feel usable.' },
      { key: 'Plain education language', value: 'The story focused on studying faster instead of model mechanics.' },
    ],
    build: [
      { week: '1-2', title: 'Product audit', detail: 'Reviewed the study assistant offer and core learning flows.' },
      { week: '2-3', title: 'Narrative', detail: 'Defined the study-loop positioning around generated practice.' },
      { week: '3-4', title: 'Workflow map', detail: 'Mapped notes, flashcards, quizzes, retries, and progress.' },
      { week: '4-5', title: 'Education proof', detail: 'Simplified the value around speed, recall, and confidence.' },
      { week: '5-6', title: 'Launch copy', detail: 'Reduced feature language into scan-friendly student benefits.' },
    ],
    stack: [
      { group: 'Sources', items: ['Notes', 'Slides', 'Readings', 'Topics'] },
      { group: 'Processing', items: ['Content cleanup', 'Chunking', 'Question generation', 'Difficulty shaping'] },
      { group: 'Answer layer', items: ['Summaries', 'Flashcards', 'Quizzes', 'Weak-area prompts'] },
      { group: 'Delivery', items: ['Study dashboard', 'Practice mode', 'Saved sets', 'Sharing'] },
      { group: 'Governance', items: ['Student review', 'Source context', 'Edit history', 'Accuracy checks'] },
    ],
    related: [
      { id: 'justlisten', tag: 'Audio learning', title: 'Audiobooks made affordable and easy to start.', metric: 'Listening access' },
      { id: 'document-retrieval-ocr', tag: 'Document AI', title: 'Document retrieval and OCR automation.', metric: 'Hybrid search' },
    ],
  }),
  enhancedCaseStudy({
    id: 'gomoon',
    aliases: ['go-moon', 'gomoon-ai'],
    categories: ['automation', 'python-scripts', 'mvp-saas'],
    index: '09',
    shortName: 'GoMoon.ai',
    client: 'GoMoon.ai',
    clientMeta: 'Trading analytics · Economic calendar',
    title: <>Market-moving events made easier to <em>track</em>.</>,
    lede: 'GoMoon.ai is an AI-powered economic calendar for traders tracking event impact across markets.',
    oneLiner: 'A trader-facing calendar that connects economic events, historical context, and AI summaries so market-moving moments are easier to monitor.',
    roleMeta: 'Trading analytics product story',
    resultsNote: 'event tracking outcomes',
    results: [
      { value: <em>Events</em>, label: 'Calendar coverage', sub: 'Market-moving releases in one view' },
      { value: <em>AI</em>, label: 'Event insight', sub: 'Context around expected impact' },
      { value: <em>Alerts</em>, label: 'Trader workflow', sub: 'Timing before and after releases' },
      { value: <em>Markets</em>, label: 'Cross-asset view', sub: 'Signals organized for scanning' },
    ],
    impact: [
      { label: 'Event visibility', value: 88, detail: 'Key releases become easier to monitor.' },
      { label: 'Context speed', value: 82, detail: 'Traders get a faster read on why an event matters.' },
      { label: 'Workflow fit', value: 80, detail: 'Calendar and alerts match an active trading routine.' },
      { label: 'Signal clarity', value: 84, detail: 'Impact analysis stays attached to the event.' },
    ],
    problem: [
      <strong className="cs-section__lead">Economic calendars list events, but they rarely explain what traders should watch.</strong>,
      <>GoMoon.ai needed to move beyond a static schedule and show how AI can help traders prepare for market-moving releases.</>,
      <>The challenge was to make the product feel useful without implying financial advice or replacing trader judgment.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned GoMoon.ai as context around the calendar, not a prediction engine.</strong>,
      <>The workflow connects event timing, historical moves, summaries, and alerting into one scan-friendly product story.</>,
      <>That keeps the value practical: traders know what is coming, what changed, and where to look next.</>,
    ],
    bullets: [
      'Economic calendar organized around market-moving releases.',
      'AI summaries that explain event context and likely areas of attention.',
      'Historical impact and timing cues for faster preparation.',
      'Trader-friendly language that supports decisions without overpromising.',
    ],
    heroVisual: {
      src: '/assets/projects/gomoon.png',
      alt: 'GoMoon.ai abstract product visual from the source projects page',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Market inputs', items: ['Economic events', 'Release times', 'Historical moves', 'Asset context'] },
      { title: '[ 02 ] Prepare', name: 'Calendar pipeline', items: ['Normalization', 'Time zones', 'Event grouping', 'Impact history'] },
      { title: '[ 03 ] Explain', name: 'AI context', items: ['Summaries', 'Watchpoints', 'Comparisons', 'Alerts'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Trader surface', items: ['Calendar', 'Event page', 'Notifications', 'Saved lists'] },
    ],
    architectureNote: <>GoMoon.ai is strongest when event timing and context stay together. The product gives traders a structured way to prepare while keeping final judgment with the user.</>,
    codeTitle: 'Economic event context',
    code: <>
      events = sync_economic_calendar(region, assets){'\n'}
      context = summarize_event_impact(events, history){'\n'}
      alerts = schedule_release_windows(events, watchlist){'\n'}
      <span className="k">return</span> MarketEventBrief(events=events, context=context, alerts=alerts)
    </>,
    outcome: [
      <><strong>Clearer product category:</strong> GoMoon.ai became an AI calendar and event-context layer for traders.</>,
      <><strong>Practical trader promise:</strong> the story centers on preparation, scanning, and alerting instead of prediction claims.</>,
    ],
    quote: 'GoMoon.ai is easier to understand as a market calendar with context, timing, and AI summaries in one place.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Financial products need careful language', detail: 'The case had to communicate usefulness without presenting the tool as financial advice.' },
      { title: 'Events move quickly', detail: 'Traders need concise context before and after a release, not long research notes.' },
      { title: 'Calendars can feel generic', detail: 'The product needed a sharper reason to exist beside familiar market calendars.' },
      { title: 'Signals must stay inspectable', detail: 'Summaries and alerts needed to remain attached to the underlying event and history.' },
    ],
    decisions: [
      { key: 'Calendar-first story', value: 'The product was framed around market-moving events and timing.' },
      { key: 'Context over prediction', value: 'AI summaries explained what to watch without replacing judgment.' },
      { key: 'Watchlist workflow', value: 'Saved assets and alerts connected the calendar to trader routines.' },
      { key: 'Historical grounding', value: 'Past event behavior made summaries more useful and inspectable.' },
      { key: 'Scan-friendly UI promise', value: 'The story emphasized quick reads and clear next steps.' },
    ],
    build: [
      { week: '1-2', title: 'Market workflow audit', detail: 'Reviewed economic calendar habits and event-research needs.' },
      { week: '2-3', title: 'Positioning', detail: 'Defined the calendar-plus-context product story.' },
      { week: '3-4', title: 'Data flow', detail: 'Mapped releases, historical moves, watchlists, and alerts.' },
      { week: '4-5', title: 'Risk language', detail: 'Kept the promise useful without advice-oriented claims.' },
      { week: '5-6', title: 'Launch copy', detail: 'Turned the workflow into concise trader-facing messaging.' },
    ],
    stack: [
      { group: 'Sources', items: ['Economic releases', 'Market history', 'Asset watchlists', 'News context'] },
      { group: 'Processing', items: ['Event normalization', 'Time-zone handling', 'History matching', 'Impact grouping'] },
      { group: 'Answer layer', items: ['Event summaries', 'Watchpoints', 'Comparisons', 'Alert windows'] },
      { group: 'Delivery', items: ['Calendar view', 'Event brief', 'Notifications', 'Saved lists'] },
      { group: 'Governance', items: ['No-advice framing', 'Source links', 'User control', 'Audit history'] },
    ],
    related: [
      { id: 'credit-scoring', tag: 'Risk modeling', title: 'Credit scoring model with explainability.', metric: '95% accuracy' },
      { id: 'retina', tag: 'Forecasting', title: 'Inventory forecasts that shifted purchasing decisions.', metric: '31% fewer stockouts' },
    ],
  }),
  enhancedCaseStudy({
    id: 'revana',
    categories: ['automation', 'chatbot', 'mvp-saas'],
    index: '10',
    shortName: 'Revana',
    client: 'Revana',
    clientMeta: 'AI support staff · Sales automation',
    title: <>AI support staff for revenue and <em>customer questions</em>.</>,
    lede: 'Revana handles support questions and sales touchpoints so teams can respond faster and close more revenue.',
    oneLiner: 'An AI support-staff product that turns customer questions, qualification, and follow-up into a repeatable revenue workflow.',
    roleMeta: 'Support automation product story',
    resultsNote: 'support and sales outcomes',
    results: [
      { value: <em>AI</em>, label: 'Support staff', sub: 'Handles common customer questions' },
      { value: <em>Sales</em>, label: 'Touchpoints', sub: 'Follow-up moments stay covered' },
      { value: <em>24/7</em>, label: 'Response coverage', sub: 'Always-on front line' },
      { value: <em>Human</em>, label: 'Escalation', sub: 'Complex issues route to the team' },
    ],
    impact: [
      { label: 'Response speed', value: 88, detail: 'Common questions get covered faster.' },
      { label: 'Revenue coverage', value: 84, detail: 'Sales touchpoints stay active between human replies.' },
      { label: 'Team focus', value: 78, detail: 'Staff spend less time on repeated questions.' },
      { label: 'Trust', value: 80, detail: 'Escalation keeps sensitive conversations controlled.' },
    ],
    problem: [
      <strong className="cs-section__lead">Support and sales teams miss revenue when repeated questions block the queue.</strong>,
      <>Revana needed a story that made AI support feel like leverage for the team, not a risky replacement for customer care.</>,
      <>The product had to connect fast answers, qualification, follow-up, and escalation into one revenue workflow.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We framed Revana as AI staff for the front line of customer conversations.</strong>,
      <>The message emphasizes reliable coverage for common questions, sales handoffs, and follow-ups while keeping humans in the loop for edge cases.</>,
      <>That gives buyers a practical adoption path: start with repeated questions, then expand into revenue touchpoints.</>,
    ],
    bullets: [
      'AI support staff for common customer and prospect questions.',
      'Sales touchpoints and follow-up prompts built into the workflow.',
      'Escalation rules for sensitive or high-value conversations.',
      'Positioning focused on revenue coverage, not generic chatbot novelty.',
    ],
    heroVisual: {
      src: '/assets/projects/revana.png',
      alt: 'Revana source visual with brand mark',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Customer inputs', items: ['Support inbox', 'Site chat', 'CRM notes', 'Knowledge base'] },
      { title: '[ 02 ] Understand', name: 'Conversation routing', items: ['Intent', 'Account context', 'Lead stage', 'Priority'] },
      { title: '[ 03 ] Act', name: 'AI support staff', items: ['Answers', 'Qualification', 'Follow-up', 'Escalation'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Revenue workflow', items: ['CRM updates', 'Team alerts', 'Handoffs', 'Reports'] },
    ],
    architectureNote: <>Revana turns repeated conversations into a governed workflow: answer what is safe, qualify what matters, and route the rest to the team.</>,
    codeTitle: 'Support staff handoff',
    code: <>
      message = classify_customer_question(inbox_event){'\n'}
      answer = draft_answer(message, knowledge_base){'\n'}
      next_step = route_or_follow_up(message, account_stage){'\n'}
      <span className="k">return</span> SupportAction(answer=answer, next_step=next_step, owner=team)
    </>,
    outcome: [
      <><strong>Clearer revenue framing:</strong> Revana is positioned as support coverage that can also protect sales momentum.</>,
      <><strong>Lower adoption friction:</strong> the story starts with repeated questions and expands to qualification and follow-up.</>,
    ],
    quote: 'Revana became a clearer offer: AI support staff that answers, qualifies, and hands off when a human should step in.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Support is high trust', detail: 'Customers expect accurate answers and clear escalation when the conversation gets complex.' },
      { title: 'Revenue links are easy to overclaim', detail: 'The message needed to connect support speed to sales coverage without exaggeration.' },
      { title: 'Teams fear loss of control', detail: 'The product story had to keep humans visible in the workflow.' },
      { title: 'Knowledge changes often', detail: 'Answers only stay useful when tied to current support and sales material.' },
    ],
    decisions: [
      { key: 'Staff framing', value: 'The product was described as AI support staff instead of a generic bot.' },
      { key: 'Escalation rules', value: 'Human handoff made adoption feel controlled.' },
      { key: 'Revenue touchpoints', value: 'Qualification and follow-up connected support to sales outcomes.' },
      { key: 'Knowledge grounding', value: 'Answers were tied to current product and support material.' },
      { key: 'Start narrow', value: 'Repeated questions became the first adoption wedge.' },
    ],
    build: [
      { week: '1-2', title: 'Conversation audit', detail: 'Mapped repeated support questions and revenue handoff moments.' },
      { week: '2-3', title: 'Core narrative', detail: 'Defined the AI support-staff positioning.' },
      { week: '3-4', title: 'Workflow design', detail: 'Connected answers, qualification, escalation, and CRM updates.' },
      { week: '4-5', title: 'Trust proof', detail: 'Clarified handoff rules and human control.' },
      { week: '5-6', title: 'Launch story', detail: 'Packaged the product around revenue coverage and faster response.' },
    ],
    stack: [
      { group: 'Sources', items: ['Support inbox', 'Website chat', 'Knowledge base', 'CRM records'] },
      { group: 'Processing', items: ['Intent detection', 'Account lookup', 'Priority scoring', 'Policy checks'] },
      { group: 'Answer layer', items: ['Grounded answers', 'Lead qualification', 'Follow-up prompts', 'Escalation paths'] },
      { group: 'Delivery', items: ['Chat response', 'CRM update', 'Team alert', 'Support report'] },
      { group: 'Governance', items: ['Human review', 'Source control', 'Escalation rules', 'Conversation logs'] },
    ],
    related: [
      { id: 'coversaiq', tag: 'Call center AI', title: 'LLM and transcription coaching for agents.', metric: 'SLA tracking' },
      { id: 'ai-voice-system', tag: 'Voice AI', title: 'Realtime AI voice system under two seconds.', metric: '7s to <2s' },
    ],
  }),
  enhancedCaseStudy({
    id: 'trailblazer-marketing',
    aliases: ['trailblazer'],
    categories: ['automation', 'python-scripts', 'mvp-saas'],
    index: '11',
    shortName: 'Trailblazer',
    client: 'Trailblazer Marketing',
    clientMeta: 'SEO · Content growth',
    title: <>SEO content operations built for <em>profitable</em> growth.</>,
    lede: 'Trailblazer Marketing gives growth-stage teams SEO-led content support at a fraction of in-house cost.',
    oneLiner: 'A growth system that turns SEO strategy, content briefs, publishing cadence, and reporting into a repeatable acquisition workflow.',
    roleMeta: 'Growth automation product story',
    resultsNote: 'SEO growth outcomes',
    results: [
      { value: <em>SEO</em>, label: 'Acquisition channel', sub: 'Organic traffic with commercial intent' },
      { value: <em>Briefs</em>, label: 'Content system', sub: 'Repeatable research and writing inputs' },
      { value: <em>Fractional</em>, label: 'Team model', sub: 'In-house impact without full headcount' },
      { value: <em>Reports</em>, label: 'Growth visibility', sub: 'Performance tracked against pipeline' },
    ],
    impact: [
      { label: 'Search clarity', value: 86, detail: 'Keywords and pages map to business outcomes.' },
      { label: 'Content cadence', value: 82, detail: 'Briefs and workflows keep publishing moving.' },
      { label: 'Cost leverage', value: 88, detail: 'The offer compares favorably to hiring in-house.' },
      { label: 'Reporting trust', value: 78, detail: 'Organic activity connects to pipeline signals.' },
    ],
    problem: [
      <strong className="cs-section__lead">Growth-stage teams need SEO output, but hiring a full content team is expensive.</strong>,
      <>Trailblazer needed to make the offer feel operational: strategy, briefs, production, and reporting working together.</>,
      <>The product story had to stay tied to profitable traffic instead of broad content marketing claims.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned Trailblazer as an outsourced SEO operating system for growth teams.</strong>,
      <>The story links keyword research, content briefs, publishing, and reporting into one service workflow buyers can picture.</>,
      <>That creates a clear tradeoff: get the operating leverage of an in-house SEO team without the hiring burden.</>,
    ],
    bullets: [
      'SEO-led content system for growth-stage companies.',
      'Research, briefs, production, and reporting in one repeatable workflow.',
      'Positioning around profitable search traffic instead of vanity volume.',
      'Clear fractional-team alternative to full in-house hiring.',
    ],
    heroVisual: {
      src: '/assets/projects/trailblazer.png',
      alt: 'Trailblazer Marketing source visual showing profitable SEO positioning',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Growth inputs', items: ['Search data', 'ICP', 'Competitors', 'Pipeline goals'] },
      { title: '[ 02 ] Plan', name: 'SEO strategy', items: ['Keyword clusters', 'Page map', 'Briefs', 'Priorities'] },
      { title: '[ 03 ] Produce', name: 'Content workflow', items: ['Drafts', 'Review', 'Publishing', 'Updates'], accent: true },
      { title: '[ 04 ] Measure', name: 'Growth reporting', items: ['Rankings', 'Traffic', 'Leads', 'Revenue signal'] },
    ],
    architectureNote: <>Trailblazer is strongest when SEO work becomes a cadence. The system connects research, content production, and reporting back to profitable search demand.</>,
    codeTitle: 'SEO operating loop',
    code: <>
      opportunities = research_keywords(icp, competitors){'\n'}
      briefs = build_content_briefs(opportunities, funnel_stage){'\n'}
      report = measure_search_pipeline(published_pages){'\n'}
      <span className="k">return</span> GrowthPlan(briefs=briefs, cadence=publishing_calendar, report=report)
    </>,
    outcome: [
      <><strong>Clearer offer:</strong> Trailblazer is framed as SEO team leverage, not loose content help.</>,
      <><strong>Sharper buyer case:</strong> the value is tied to profitable search traffic, cadence, and cost control.</>,
    ],
    quote: 'Trailblazer became easier to sell as an SEO operating system with in-house impact at fractional cost.',
    quoteBy: 'Product team',
    hard: [
      { title: 'SEO work can look vague', detail: 'The offer needed concrete workflow language around research, briefs, publishing, and reporting.' },
      { title: 'Traffic is not enough', detail: 'The story had to focus on profitable search demand rather than vanity growth.' },
      { title: 'Hiring comparison matters', detail: 'Buyers needed to understand why fractional execution beats waiting on a full team.' },
      { title: 'Content operations need cadence', detail: 'The product had to show how the work repeats every month.' },
    ],
    decisions: [
      { key: 'Operating-system frame', value: 'SEO became a repeatable growth system instead of a service menu.' },
      { key: 'Profitable traffic', value: 'The promise focused on commercial search intent.' },
      { key: 'Brief pipeline', value: 'Research and briefs made the production workflow tangible.' },
      { key: 'Fractional team model', value: 'The hiring alternative became a clear buyer comparison.' },
      { key: 'Reporting loop', value: 'Rankings and traffic were connected back to leads and revenue signals.' },
    ],
    build: [
      { week: '1-2', title: 'Offer audit', detail: 'Reviewed the SEO service model, buyer objections, and proof points.' },
      { week: '2-3', title: 'Positioning', detail: 'Defined the fractional SEO operating-system narrative.' },
      { week: '3-4', title: 'Workflow map', detail: 'Connected research, briefs, production, publishing, and reporting.' },
      { week: '4-5', title: 'Value proof', detail: 'Clarified the in-house cost comparison.' },
      { week: '5-6', title: 'Launch copy', detail: 'Reduced growth language into a concise buyer story.' },
    ],
    stack: [
      { group: 'Sources', items: ['Search data', 'Competitors', 'ICP notes', 'Pipeline goals'] },
      { group: 'Processing', items: ['Keyword clustering', 'SERP analysis', 'Brief generation', 'Priority scoring'] },
      { group: 'Answer layer', items: ['Content briefs', 'Page map', 'Publishing plan', 'Refresh queue'] },
      { group: 'Delivery', items: ['Editorial workflow', 'Reports', 'Client dashboard', 'Monthly review'] },
      { group: 'Governance', items: ['Brand review', 'Quality checks', 'Source tracking', 'Performance history'] },
    ],
    related: [
      { id: 'revana', tag: 'Revenue automation', title: 'AI support staff for customer questions.', metric: '24/7 coverage' },
      { id: 'content-safety-recommendations', tag: 'Recommendations', title: 'Content safety and recommendation systems.', metric: '50% engagement lift' },
    ],
  }),
  enhancedCaseStudy({
    id: 'coversaiq',
    aliases: ['conversaiq', 'conversa-iq', 'coversa-iq'],
    categories: ['automation', 'voice-ai', 'chatbot', 'mvp-saas'],
    index: '12',
    shortName: 'CoversaIQ',
    client: 'CoversaIQ',
    clientMeta: 'Call center AI · Agent coaching',
    title: <>Conversation intelligence for sales and support <em>agents</em>.</>,
    lede: 'CoversaIQ combines LLM workflows and automated transcription to coach call center and sales agents.',
    oneLiner: 'A call intelligence platform for summarization, agent assist, SLA tracking, and coaching across sales and support conversations.',
    roleMeta: 'Speech analytics product story',
    resultsNote: 'agent coaching outcomes',
    results: [
      { value: <em>LLM</em>, label: 'Agent assist', sub: 'Guidance during and after calls' },
      { value: <em>Speech</em>, label: 'Transcription layer', sub: 'Calls become searchable records' },
      { value: <em>SLA</em>, label: 'Service tracking', sub: 'Follow-up and resolution visibility' },
      { value: <em>Coach</em>, label: 'Team improvement', sub: 'Patterns surfaced for managers' },
    ],
    impact: [
      { label: 'Handle-time clarity', value: 84, detail: 'Summaries and next steps reduce review drag.' },
      { label: 'Conversion support', value: 80, detail: 'Agents get guidance across sales conversations.' },
      { label: 'SLA visibility', value: 86, detail: 'Service commitments become easier to track.' },
      { label: 'Manager insight', value: 82, detail: 'Coaching patterns surface from call records.' },
    ],
    problem: [
      <strong className="cs-section__lead">Call center managers need more than transcripts after the fact.</strong>,
      <>CoversaIQ had to explain how transcription, LLM summaries, agent assist, and SLA tracking work together without sounding like separate features.</>,
      <>The buyer story needed to connect call quality, conversion, follow-up, and coaching into one operational loop.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We positioned CoversaIQ as the conversation layer between live calls and team improvement.</strong>,
      <>The workflow starts with call capture, extracts summaries and risks, assists agents, and gives managers coaching signals.</>,
      <>That made the product concrete for teams trying to cut handle time while improving conversion and service quality.</>,
    ],
    bullets: [
      'Automated transcription for support and sales calls.',
      'LLM summaries, agent assist, and next-step extraction.',
      'SLA tracking and handoff visibility for managers.',
      'Coaching signals that turn call history into team improvement.',
    ],
    heroVisual: {
      src: '/assets/projects/coversaiq.png',
      alt: 'CoversaIQ source visual showing call analytics on a laptop dashboard',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Call inputs', items: ['Audio', 'Transcript', 'CRM context', 'SLA rules'] },
      { title: '[ 02 ] Parse', name: 'Speech layer', items: ['Transcription', 'Speaker turns', 'Intent', 'Entities'] },
      { title: '[ 03 ] Assist', name: 'LLM coaching', items: ['Summaries', 'Agent assist', 'Risks', 'Next steps'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Manager view', items: ['SLA tracking', 'Coaching', 'Reports', 'CRM sync'] },
    ],
    architectureNote: <>CoversaIQ joins transcription and LLM reasoning to the management workflow. The product is valuable when every call becomes a record, a summary, and a coaching signal.</>,
    codeTitle: 'Call coaching output',
    code: <>
      transcript = transcribe_call(audio, speakers){'\n'}
      summary = summarize_call(transcript, crm_context){'\n'}
      coaching = detect_agent_coaching_signals(transcript, sla_rules){'\n'}
      <span className="k">return</span> CallReview(summary=summary, coaching=coaching, next_steps=actions)
    </>,
    outcome: [
      <><strong>Clearer platform story:</strong> CoversaIQ now reads as a call intelligence layer for sales and support teams.</>,
      <><strong>Sharper operational promise:</strong> transcription, agent assist, SLA tracking, and coaching connect to one workflow.</>,
    ],
    quote: 'CoversaIQ became easier to explain as the system that turns every call into coaching, follow-up, and management visibility.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Call workflows are fragmented', detail: 'Audio, transcripts, CRM notes, and manager reviews often live in separate tools.' },
      { title: 'Agent assist must be trusted', detail: 'Guidance needs to be timely, relevant, and reviewable.' },
      { title: 'Managers need patterns', detail: 'The product had to show team-level coaching value, not only call summaries.' },
      { title: 'SLA tracking has consequences', detail: 'Follow-up and service commitments need reliable handoffs.' },
    ],
    decisions: [
      { key: 'Call intelligence frame', value: 'The product was positioned as an operational layer for calls.' },
      { key: 'Speech foundation', value: 'Transcription made every downstream summary and signal inspectable.' },
      { key: 'Manager visibility', value: 'SLA tracking and coaching became part of the same story.' },
      { key: 'Agent assist', value: 'Real-time and post-call guidance were tied to next actions.' },
      { key: 'CRM context', value: 'Customer history made summaries more useful for follow-up.' },
    ],
    build: [
      { week: '1-2', title: 'Workflow audit', detail: 'Mapped sales and support call review paths.' },
      { week: '2-3', title: 'Narrative', detail: 'Defined the call intelligence positioning.' },
      { week: '3-4', title: 'Signal map', detail: 'Connected transcription, summaries, SLA rules, and coaching outputs.' },
      { week: '4-5', title: 'Manager story', detail: 'Clarified how call records become team improvement signals.' },
      { week: '5-6', title: 'Launch copy', detail: 'Turned the platform into concise buyer language.' },
    ],
    stack: [
      { group: 'Sources', items: ['Call audio', 'Transcripts', 'CRM context', 'SLA rules'] },
      { group: 'Processing', items: ['Speech-to-text', 'Speaker diarization', 'Intent extraction', 'Entity detection'] },
      { group: 'Answer layer', items: ['Summaries', 'Agent assist', 'Coaching signals', 'Next steps'] },
      { group: 'Delivery', items: ['Manager dashboard', 'CRM sync', 'SLA alerts', 'Reports'] },
      { group: 'Governance', items: ['Review history', 'Call consent', 'Access control', 'Quality checks'] },
    ],
    related: [
      { id: 'ai-voice-system', tag: 'Voice AI', title: 'Realtime AI voice system under two seconds.', metric: '7s to <2s' },
      { id: 'aletheia', tag: 'Voice review', title: 'Review signals inside important calls.', metric: '3 signal types' },
    ],
  }),
  enhancedCaseStudy({
    id: 'ai-voice-system',
    aliases: ['voice-system', 'chatify'],
    categories: ['automation', 'voice-ai', 'chatbot'],
    index: '13',
    shortName: 'AI Voice System',
    client: 'AI Voice System',
    clientMeta: 'Realtime voice · Twilio automation',
    title: <>Realtime AI voice calls with latency under <em>two seconds</em>.</>,
    lede: 'A Twilio WebSocket voice stack with custom VAD and NER pipelines reduced conversational latency from 7 seconds to under 2 seconds.',
    oneLiner: 'A low-latency voice system that combines streaming telephony, turn detection, entity extraction, and observability for production conversations.',
    engagementMeta: 'Voice architecture · latency tuning · observability',
    roleMeta: 'Realtime voice engineering',
    resultsNote: 'latency and reliability outcomes',
    results: [
      { value: <>7<em>s</em> to {'<'}2<em>s</em></>, label: 'Latency reduced', sub: 'Conversation delay cut sharply' },
      { value: <em>Twilio</em>, label: 'Voice transport', sub: 'WebSocket streaming stack' },
      { value: <em>VAD</em>, label: 'Turn detection', sub: 'Custom speech boundary logic' },
      { value: <em>NER</em>, label: 'Extraction', sub: 'Entities captured during calls' },
    ],
    impact: [
      { label: 'Latency', value: 90, detail: 'Response time moved from awkward to usable.' },
      { label: 'Call reliability', value: 84, detail: 'Streaming, turn-taking, and retries were hardened.' },
      { label: 'Operational visibility', value: 82, detail: 'Observability made call issues easier to debug.' },
      { label: 'Cost control', value: 78, detail: 'Infrastructure was tuned for lower runtime waste.' },
    ],
    problem: [
      <strong className="cs-section__lead">Voice AI fails quickly when the conversation feels slow.</strong>,
      <>The system started with too much latency for natural back-and-forth. Users had to wait, interruptions were hard to handle, and operations had limited visibility into call quality.</>,
      <>The build needed to improve speed without losing extraction, routing, or production observability.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We treated latency as the product experience, not a backend metric.</strong>,
      <>The stack was shaped around streaming audio, tighter VAD, faster response orchestration, and NER that could run without blocking the conversation.</>,
      <>Instrumentation made every call easier to inspect: where time was spent, what failed, and which moments needed fallback behavior.</>,
    ],
    bullets: [
      'Twilio WebSocket voice stack for realtime conversations.',
      'Custom voice activity detection for cleaner turn-taking.',
      'NER pipeline for capturing useful entities during calls.',
      'Latency reduced from 7 seconds to under 2 seconds with observability in place.',
    ],
    heroVisual: {
      src: '/assets/projects/ai-voice-system.png',
      alt: 'AI Voice System source visual showing a chat and call interface',
    },
    architecture: [
      { title: '[ 01 ] Stream', name: 'Voice transport', items: ['Twilio', 'WebSockets', 'Audio chunks', 'Call state'] },
      { title: '[ 02 ] Detect', name: 'Turn handling', items: ['VAD', 'Interruptions', 'Silence windows', 'Retries'] },
      { title: '[ 03 ] Respond', name: 'AI voice loop', items: ['ASR', 'LLM', 'NER', 'TTS'], accent: true },
      { title: '[ 04 ] Operate', name: 'Production layer', items: ['Metrics', 'Logs', 'Fallbacks', 'Cost controls'] },
    ],
    architectureNote: <>The voice stack only works when streaming, turn detection, model calls, and observability are designed as one loop. Every extra delay is part of the user experience.</>,
    codeTitle: 'Realtime voice loop',
    code: <>
      audio = stream_twilio_websocket(call){'\n'}
      turn = detect_speech_boundary(audio, vad_config){'\n'}
      response = generate_voice_reply(turn.transcript, entities=extract_entities(turn)){'\n'}
      <span className="k">return</span> VoiceFrame(audio=response.tts, latency_ms=response.elapsed)
    </>,
    outcome: [
      <><strong>Usable conversation speed:</strong> latency dropped from 7 seconds to under 2 seconds.</>,
      <><strong>Production control:</strong> custom VAD, NER, metrics, and fallbacks made the system easier to operate under real call conditions.</>,
    ],
    quote: 'The voice system moved from a slow demo to a production-ready conversation loop.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Latency compounds everywhere', detail: 'Transport, speech detection, model calls, and synthesis each add delay unless the loop is designed tightly.' },
      { title: 'Turn-taking is fragile', detail: 'Bad VAD creates interruptions, awkward silences, or repeated responses.' },
      { title: 'Extraction cannot block speech', detail: 'NER had to capture useful information without slowing the reply path.' },
      { title: 'Voice needs observability', detail: 'Debugging calls requires timestamps, traces, and failure modes across the stack.' },
    ],
    decisions: [
      { key: 'Latency-first architecture', value: 'Every step was measured against the live conversation experience.' },
      { key: 'Custom VAD', value: 'Turn boundaries were tuned for the call flow instead of generic defaults.' },
      { key: 'Parallel extraction', value: 'NER ran alongside the voice loop where possible.' },
      { key: 'Streaming transport', value: 'WebSocket audio reduced wait time and improved responsiveness.' },
      { key: 'Observability', value: 'Per-call metrics made failures and cost easier to control.' },
    ],
    build: [
      { week: '1-2', title: 'Latency audit', detail: 'Measured delay across transport, ASR, LLM, TTS, and handoff points.' },
      { week: '2-3', title: 'Streaming loop', detail: 'Reworked Twilio WebSocket handling and call state.' },
      { week: '3-4', title: 'Turn detection', detail: 'Tuned VAD and interruption behavior.' },
      { week: '4-5', title: 'Extraction path', detail: 'Added entity extraction without blocking the response loop.' },
      { week: '5-6', title: 'Observability', detail: 'Instrumented latency, failures, and cost signals.' },
    ],
    stack: [
      { group: 'Sources', items: ['Phone calls', 'Twilio streams', 'Caller context', 'Knowledge rules'] },
      { group: 'Processing', items: ['WebSockets', 'VAD', 'ASR', 'NER'] },
      { group: 'Answer layer', items: ['LLM response', 'Tool calls', 'Fallbacks', 'TTS output'] },
      { group: 'Delivery', items: ['Live call audio', 'Call notes', 'Alerts', 'Logs'] },
      { group: 'Governance', items: ['Latency traces', 'Cost controls', 'Escalation rules', 'Call history'] },
    ],
    related: [
      { id: 'coversaiq', tag: 'Call center AI', title: 'Conversation intelligence for support agents.', metric: 'SLA tracking' },
      { id: 'aletheia', tag: 'Voice review', title: 'Review signals inside important calls.', metric: '3 signal types' },
    ],
  }),
  enhancedCaseStudy({
    id: 'agentic-resume-screener',
    aliases: ['resume-screener'],
    categories: ['automation', 'document-review', 'python-scripts'],
    index: '14',
    shortName: 'Resume Screener',
    client: 'Agentic Resume Screener',
    clientMeta: 'Recruiting agents · OCR workflow',
    title: <>Agentic resume screening for faster recruiting <em>shortlists</em>.</>,
    lede: 'A LangChain and LangGraph workflow with OCR ingestion automates resume analysis, scoring, and recommendations for recruiting teams.',
    oneLiner: 'A recruiting workflow that reads resumes, extracts candidate evidence, scores fit, and recommends next actions while keeping reviewers in control.',
    roleMeta: 'Agentic workflow engineering',
    resultsNote: 'recruiting workflow outcomes',
    results: [
      { value: <em>Agents</em>, label: 'Workflow graph', sub: 'Screening steps coordinated by role' },
      { value: <em>OCR</em>, label: 'Resume intake', sub: 'PDF and scan-friendly ingestion' },
      { value: <em>Score</em>, label: 'Candidate fit', sub: 'Structured review output' },
      { value: <em>Review</em>, label: 'Human control', sub: 'Recommendations stay inspectable' },
    ],
    impact: [
      { label: 'Screening speed', value: 86, detail: 'Recruiters get structured review faster.' },
      { label: 'Evidence quality', value: 82, detail: 'Scores stay tied to extracted resume details.' },
      { label: 'Workflow consistency', value: 84, detail: 'Each candidate runs through the same review path.' },
      { label: 'Reviewer trust', value: 78, detail: 'Recommendations remain auditable and editable.' },
    ],
    problem: [
      <strong className="cs-section__lead">Resume review is repetitive, but hiring decisions cannot be a black box.</strong>,
      <>The screener needed to automate intake, extraction, scoring, and recommendations while preserving evidence for human recruiters.</>,
      <>The risk was building a faster process that felt less trustworthy or harder to audit.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We modeled screening as an agent workflow with explicit review steps.</strong>,
      <>OCR handles messy documents, extraction captures candidate facts, scoring compares the role requirements, and recommendations stay attached to evidence.</>,
      <>The product story makes the workflow useful without pretending it should make final hiring decisions.</>,
    ],
    bullets: [
      'LangChain and LangGraph workflow for repeatable candidate review.',
      'OCR ingestion for PDFs, scans, and resume variants.',
      'Structured scoring tied to extracted evidence.',
      'Human-reviewable recommendations for recruiting teams.',
    ],
    heroVisual: {
      src: '/assets/projects/agentic-resume-screener.png',
      alt: 'Agentic Resume Screener source visual showing a laptop with an application interface',
    },
    architecture: [
      { title: '[ 01 ] Intake', name: 'Resume sources', items: ['PDFs', 'Scans', 'Job criteria', 'Recruiter notes'] },
      { title: '[ 02 ] Extract', name: 'OCR + parsing', items: ['Text', 'Experience', 'Skills', 'Education'] },
      { title: '[ 03 ] Evaluate', name: 'Agent workflow', items: ['Fit scoring', 'Evidence', 'Risks', 'Recommendations'], accent: true },
      { title: '[ 04 ] Review', name: 'Recruiter handoff', items: ['Shortlist', 'Notes', 'Questions', 'Decision log'] },
    ],
    architectureNote: <>The resume screener is useful because every recommendation can be inspected. OCR and agents speed the workflow, while recruiters keep the final decision.</>,
    codeTitle: 'Resume screening graph',
    code: <>
      resume = ocr_resume(file){'\n'}
      evidence = extract_candidate_facts(resume, job_description){'\n'}
      score = evaluate_fit(evidence, rubric){'\n'}
      <span className="k">return</span> CandidateReview(score=score, evidence=evidence, recommendation=next_step)
    </>,
    outcome: [
      <><strong>Faster screening loop:</strong> resumes become structured candidate reviews with evidence and recommendations.</>,
      <><strong>Better recruiter control:</strong> the workflow supports shortlisting without hiding how scores were produced.</>,
    ],
    quote: 'The resume screener became a practical recruiting agent: faster intake, clear evidence, and human review at the end.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Documents are messy', detail: 'Resumes arrive as PDFs, scans, tables, and inconsistent layouts.' },
      { title: 'Hiring needs accountability', detail: 'Scores and recommendations must be backed by evidence.' },
      { title: 'Role criteria vary', detail: 'The workflow has to adapt to different requirements and rubrics.' },
      { title: 'Automation needs boundaries', detail: 'The product should assist recruiters, not remove their judgment.' },
    ],
    decisions: [
      { key: 'Agent workflow', value: 'Screening became a graph of explicit review steps.' },
      { key: 'OCR-first intake', value: 'Messy resumes were normalized before scoring.' },
      { key: 'Evidence-backed scores', value: 'Recommendations stayed attached to candidate facts.' },
      { key: 'Recruiter handoff', value: 'Shortlists and notes were shaped for human review.' },
      { key: 'Decision log', value: 'Review history made the process easier to audit.' },
    ],
    build: [
      { week: '1-2', title: 'Recruiting audit', detail: 'Mapped resume sources, job criteria, and review decisions.' },
      { week: '2-3', title: 'OCR pipeline', detail: 'Normalized PDF and scan ingestion.' },
      { week: '3-4', title: 'Agent graph', detail: 'Designed extraction, scoring, risk, and recommendation steps.' },
      { week: '4-5', title: 'Reviewer output', detail: 'Built the shortlist and evidence handoff story.' },
      { week: '5-6', title: 'QA loop', detail: 'Checked recommendation quality against recruiter expectations.' },
    ],
    stack: [
      { group: 'Sources', items: ['Resume PDFs', 'Scans', 'Job descriptions', 'Recruiter notes'] },
      { group: 'Processing', items: ['OCR', 'Parsing', 'Entity extraction', 'Rubric matching'] },
      { group: 'Answer layer', items: ['Fit score', 'Evidence summary', 'Risk flags', 'Recommendations'] },
      { group: 'Delivery', items: ['Shortlist', 'Review notes', 'Interview prompts', 'Decision log'] },
      { group: 'Governance', items: ['Human approval', 'Bias review', 'Audit trail', 'Data retention'] },
    ],
    related: [
      { id: 'document-retrieval-ocr', tag: 'Document AI', title: 'Document retrieval and OCR automation.', metric: 'Hybrid search' },
      { id: 'thalamus', tag: 'Knowledge search', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
    ],
  }),
  enhancedCaseStudy({
    id: 'document-retrieval-ocr',
    aliases: ['document-retrieval', 'ocr-automation'],
    categories: ['automation', 'chatbot', 'document-review', 'python-scripts'],
    index: '15',
    shortName: 'Document OCR',
    client: 'Document Retrieval & OCR Automation',
    clientMeta: 'Hybrid search · OCR pipelines',
    title: <>Document retrieval and OCR automation for grounded <em>answers</em>.</>,
    lede: 'A hybrid search workflow with Docling, LlamaParser, and OCR accelerates indexing and grounded responses for operations teams.',
    oneLiner: 'A document automation pipeline that turns messy files into searchable chunks, OCR text, hybrid retrieval, and source-backed answers.',
    roleMeta: 'Document AI pipeline engineering',
    resultsNote: 'document indexing outcomes',
    results: [
      { value: <em>Hybrid</em>, label: 'Search layer', sub: 'Keyword and vector retrieval together' },
      { value: <em>OCR</em>, label: 'File coverage', sub: 'Scans and images become readable' },
      { value: <em>Docling</em>, label: 'Parsing', sub: 'Documents cleaned for indexing' },
      { value: <em>Grounded</em>, label: 'Answers', sub: 'Responses tied to source material' },
    ],
    impact: [
      { label: 'Document coverage', value: 88, detail: 'Scans, PDFs, and files become searchable.' },
      { label: 'Retrieval quality', value: 84, detail: 'Hybrid search catches more relevant context.' },
      { label: 'Ops speed', value: 82, detail: 'Teams spend less time finding buried details.' },
      { label: 'Answer trust', value: 86, detail: 'Responses remain attached to sources.' },
    ],
    problem: [
      <strong className="cs-section__lead">Operations teams cannot use AI reliably until documents are readable and retrievable.</strong>,
      <>Many files contain scans, tables, odd layouts, and partial text extraction. A simple vector database was not enough.</>,
      <>The product needed a pipeline that prepared documents properly before retrieval and answer generation.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We treated parsing, OCR, and retrieval as one system.</strong>,
      <>Docling and LlamaParser prepare files, OCR fills the text gaps, hybrid search improves recall, and generated answers stay grounded in source chunks.</>,
      <>That made the workflow suitable for operations teams that need fast answers without losing evidence.</>,
    ],
    bullets: [
      'Docling, LlamaParser, and OCR for messy document ingestion.',
      'Hybrid retrieval that combines keyword and semantic search.',
      'Chunking and metadata designed for grounded responses.',
      'Operational workflow for indexing, querying, and reviewing sources.',
    ],
    heroVisual: {
      src: '/assets/projects/document-retrieval-ocr.png',
      alt: 'Document Retrieval and OCR Automation source visual showing a code editor interface',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Document inputs', items: ['PDFs', 'Scans', 'Images', 'Knowledge folders'] },
      { title: '[ 02 ] Parse', name: 'OCR pipeline', items: ['Docling', 'LlamaParser', 'OCR', 'Metadata'] },
      { title: '[ 03 ] Retrieve', name: 'Hybrid search', items: ['Vector search', 'Keyword search', 'Reranking', 'Citations'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Ops answers', items: ['Question answering', 'Source links', 'Exports', 'Review'] },
    ],
    architectureNote: <>The pipeline makes retrieval possible by improving the document layer first. Better parsing and OCR create better chunks, and better chunks create more trustworthy answers.</>,
    codeTitle: 'Hybrid document search',
    code: <>
      parsed = parse_documents(files, tools=[docling, llama_parser, ocr]){'\n'}
      index = build_hybrid_index(parsed, metadata){'\n'}
      sources = retrieve(query, index, reranker){'\n'}
      <span className="k">return</span> GroundedAnswer(answer=generate(query, sources), citations=sources)
    </>,
    outcome: [
      <><strong>Broader file coverage:</strong> scans, PDFs, and awkward layouts become searchable inputs.</>,
      <><strong>More reliable answers:</strong> hybrid retrieval and citations give operations teams a clearer path from question to source.</>,
    ],
    quote: 'The document pipeline became reliable because OCR, parsing, retrieval, and citations were designed together.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Files are inconsistent', detail: 'Scans, images, tables, and PDFs all require different cleanup paths.' },
      { title: 'Vector search alone misses context', detail: 'Keyword matches, metadata, and reranking improve practical retrieval.' },
      { title: 'Answers need evidence', detail: 'Operations teams need to inspect source chunks before trusting a response.' },
      { title: 'Indexing has to be repeatable', detail: 'New documents must move through the same parse and validation flow.' },
    ],
    decisions: [
      { key: 'Parse before retrieval', value: 'Document cleanup was treated as the foundation of answer quality.' },
      { key: 'OCR coverage', value: 'Scans and image-heavy files were included in the ingestion path.' },
      { key: 'Hybrid search', value: 'Keyword and semantic retrieval worked together for better recall.' },
      { key: 'Source-backed answers', value: 'Citations and metadata stayed visible in the output.' },
      { key: 'Ops workflow', value: 'Indexing, querying, and review were designed as repeatable operations.' },
    ],
    build: [
      { week: '1-2', title: 'Document audit', detail: 'Reviewed file types, layouts, and extraction failures.' },
      { week: '2-3', title: 'Parsing pipeline', detail: 'Connected Docling, LlamaParser, OCR, and metadata cleanup.' },
      { week: '3-4', title: 'Index design', detail: 'Built hybrid retrieval with chunking and source references.' },
      { week: '4-5', title: 'Answer layer', detail: 'Added grounded responses, citations, and review flow.' },
      { week: '5-6', title: 'Ops hardening', detail: 'Prepared re-indexing, failure handling, and validation checks.' },
    ],
    stack: [
      { group: 'Sources', items: ['PDFs', 'Scans', 'Images', 'Knowledge folders'] },
      { group: 'Processing', items: ['Docling', 'LlamaParser', 'OCR', 'Chunking'] },
      { group: 'Answer layer', items: ['Hybrid search', 'Reranking', 'Grounded answers', 'Citations'] },
      { group: 'Delivery', items: ['Search UI', 'Answer view', 'Exports', 'Review queue'] },
      { group: 'Governance', items: ['Source links', 'Re-indexing', 'Access rules', 'Audit logs'] },
    ],
    related: [
      { id: 'thalamus', tag: 'Knowledge search', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
      { id: 'agentic-resume-screener', tag: 'Recruiting agents', title: 'Agentic resume screening workflow.', metric: 'OCR intake' },
    ],
  }),
  enhancedCaseStudy({
    id: 'credit-scoring',
    aliases: ['credit-scoring-model'],
    categories: ['automation', 'python-scripts'],
    index: '16',
    shortName: 'Credit Scoring',
    client: 'Credit Scoring Model',
    clientMeta: 'Risk modeling · Explainable ML',
    title: <>Credit scoring with explainability for lending <em>risk</em>.</>,
    lede: 'A production-grade credit scoring model using XGBoost and CatBoost reached 95% accuracy on delinquency prediction with explainability reporting.',
    oneLiner: 'A risk model workflow that combines feature engineering, boosted-tree modeling, validation, and explainability reports for credit decisions.',
    engagementMeta: 'Modeling · validation · reporting',
    roleMeta: 'Machine learning engineering',
    resultsNote: 'risk modeling outcomes',
    results: [
      { value: <>95<em>%</em></>, label: 'Prediction accuracy', sub: 'Delinquency modeling target' },
      { value: <em>XGBoost</em>, label: 'Model family', sub: 'Gradient boosted tree baseline' },
      { value: <em>CatBoost</em>, label: 'Model comparison', sub: 'Categorical feature handling' },
      { value: <em>Explain</em>, label: 'Risk reports', sub: 'Drivers surfaced for review' },
    ],
    impact: [
      { label: 'Risk signal', value: 90, detail: 'Delinquency prediction reached the target level.' },
      { label: 'Explainability', value: 84, detail: 'Feature drivers were packaged for review.' },
      { label: 'Model discipline', value: 82, detail: 'Baselines and validation guarded against overfit.' },
      { label: 'Decision support', value: 78, detail: 'Outputs supported human credit review.' },
    ],
    problem: [
      <strong className="cs-section__lead">Credit scoring needs accuracy, but accuracy alone is not enough.</strong>,
      <>A usable model has to explain risk drivers, pass validation, and fit into a human review process.</>,
      <>The build needed to balance predictive performance with practical reporting for lending teams.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We framed the model as decision support with explainability built in.</strong>,
      <>The workflow covers feature engineering, XGBoost and CatBoost comparison, validation, and reports that make risk drivers reviewable.</>,
      <>That keeps the system useful for credit operations while preserving human oversight.</>,
    ],
    bullets: [
      'XGBoost and CatBoost modeling for delinquency prediction.',
      'Feature engineering and validation for production-grade scoring.',
      'Explainability reports that surface risk drivers.',
      'Decision-support framing for human credit review.',
    ],
    heroVisual: {
      src: '/assets/projects/credit-scoring-model.jpg',
      alt: 'Credit scoring model source visual showing financial analytics and code',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Credit data', items: ['Applications', 'Payment history', 'Customer profile', 'Outcomes'] },
      { title: '[ 02 ] Prepare', name: 'Model table', items: ['Features', 'Cleaning', 'Splits', 'Validation'] },
      { title: '[ 03 ] Predict', name: 'Risk model', items: ['XGBoost', 'CatBoost', 'Calibration', 'Explainability'], accent: true },
      { title: '[ 04 ] Deliver', name: 'Credit review', items: ['Risk score', 'Drivers', 'Reports', 'Monitoring'] },
    ],
    architectureNote: <>The credit model is useful because prediction and explanation are packaged together. Risk scores support review only when teams can see the drivers and validation context.</>,
    codeTitle: 'Credit risk scoring',
    code: <>
      features = build_credit_features(applications, payment_history){'\n'}
      model = train_boosted_model(features, target=delinquency){'\n'}
      explanation = explain_score(model, applicant_features){'\n'}
      <span className="k">return</span> CreditDecisionSupport(score=model.score, drivers=explanation)
    </>,
    outcome: [
      <><strong>Stronger risk model:</strong> boosted-tree models reached 95% accuracy on delinquency prediction.</>,
      <><strong>Operationally useful output:</strong> explainability reporting made model scores easier to review and monitor.</>,
    ],
    quote: 'The credit model became more than a score: it included validation, drivers, and a reviewable risk report.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Credit decisions are high stakes', detail: 'The model has to support review, not hide behind a single score.' },
      { title: 'Data quality matters', detail: 'Applications, payment history, and outcomes need careful cleaning and splitting.' },
      { title: 'Accuracy can mislead', detail: 'Validation, calibration, and class balance matter as much as headline performance.' },
      { title: 'Teams need explanations', detail: 'Risk drivers make scores easier to audit and act on.' },
    ],
    decisions: [
      { key: 'Boosted-tree baseline', value: 'XGBoost and CatBoost gave strong tabular performance.' },
      { key: 'Validation discipline', value: 'Splits and checks protected the model from overfit.' },
      { key: 'Explainability reports', value: 'Feature drivers were included with the score.' },
      { key: 'Human review', value: 'The output was framed as decision support, not automatic approval.' },
      { key: 'Monitoring path', value: 'Reports made drift and performance easier to inspect later.' },
    ],
    build: [
      { week: '1-2', title: 'Data audit', detail: 'Reviewed application, repayment, and delinquency data.' },
      { week: '2-3', title: 'Feature table', detail: 'Built features, splits, and validation targets.' },
      { week: '3-4', title: 'Model comparison', detail: 'Compared XGBoost, CatBoost, and simpler baselines.' },
      { week: '4-5', title: 'Explainability', detail: 'Added score drivers and reporting output.' },
      { week: '5-6', title: 'Review package', detail: 'Prepared model summary, caveats, and monitoring notes.' },
    ],
    stack: [
      { group: 'Sources', items: ['Applications', 'Payment history', 'Customer profiles', 'Delinquency outcomes'] },
      { group: 'Processing', items: ['Feature engineering', 'Train/test splits', 'Validation', 'Calibration'] },
      { group: 'Answer layer', items: ['Risk score', 'Feature drivers', 'Confidence bands', 'Decision notes'] },
      { group: 'Delivery', items: ['Model report', 'Review table', 'Monitoring dashboard', 'Exports'] },
      { group: 'Governance', items: ['Human review', 'Bias checks', 'Audit history', 'Drift monitoring'] },
    ],
    related: [
      { id: 'gomoon', tag: 'Market analytics', title: 'Market-moving events made easier to track.', metric: 'Event context' },
      { id: 'retina', tag: 'Forecasting', title: 'Inventory forecasts that shifted purchasing decisions.', metric: '31% fewer stockouts' },
    ],
  }),
  enhancedCaseStudy({
    id: 'content-safety-recommendations',
    aliases: ['content-safety', 'recommendations'],
    categories: ['automation', 'python-scripts', 'mvp-saas'],
    index: '17',
    shortName: 'Content Safety',
    client: 'Content Safety & Recommendations',
    clientMeta: 'Vision AI · Recommendations',
    title: <>Content safety and recommendation systems for short-form <em>video</em>.</>,
    lede: 'Transformer vision and YOLO workflows powered moderation plus a recommendation engine that boosted engagement by 50%.',
    oneLiner: 'A content intelligence workflow for short-form video: detect unsafe material, classify visual signals, and rank recommendations for better engagement.',
    engagementMeta: 'Vision modeling · recommendation systems · moderation',
    roleMeta: 'Computer vision and ML engineering',
    resultsNote: 'safety and engagement outcomes',
    results: [
      { value: <>50<em>%</em></>, label: 'Engagement lift', sub: 'Recommendation engine impact' },
      { value: <em>YOLO</em>, label: 'Object detection', sub: 'Fast visual signal extraction' },
      { value: <em>Vision</em>, label: 'Transformer workflow', sub: 'Content understanding layer' },
      { value: <em>Safety</em>, label: 'Moderation', sub: 'Risk detection before distribution' },
    ],
    impact: [
      { label: 'Engagement', value: 90, detail: 'Recommendation changes lifted interaction.' },
      { label: 'Safety coverage', value: 84, detail: 'Vision workflows flagged risky content.' },
      { label: 'Ranking quality', value: 82, detail: 'Video signals improved recommendation relevance.' },
      { label: 'Operational control', value: 78, detail: 'Moderation and ranking stayed reviewable.' },
    ],
    problem: [
      <strong className="cs-section__lead">Short-form platforms need growth and safety to work together.</strong>,
      <>Recommendations can increase engagement, but unsafe or low-quality content can damage the product quickly.</>,
      <>The system needed to combine moderation signals, visual understanding, and ranking logic without treating them as separate tracks.</>,
    ],
    approach: [
      <strong className="cs-section__lead">We connected vision safety signals to the recommendation workflow.</strong>,
      <>Transformer vision and YOLO models identify content attributes and risk signals, then ranking logic uses those signals to improve feed quality.</>,
      <>The result is a system that can both protect distribution and improve engagement.</>,
    ],
    bullets: [
      'Transformer vision workflows for short-form video understanding.',
      'YOLO object detection for fast visual signal extraction.',
      'Moderation pipeline for content safety and review.',
      'Recommendation engine improvements that lifted engagement by 50%.',
    ],
    heroVisual: {
      src: '/assets/projects/content-safety-recommendations.png',
      alt: 'Content Safety and Recommendations source visual showing computer vision emotion detection',
    },
    architecture: [
      { title: '[ 01 ] Sources', name: 'Video inputs', items: ['Shorts', 'Frames', 'Captions', 'User signals'] },
      { title: '[ 02 ] Detect', name: 'Vision models', items: ['YOLO', 'Transformers', 'Labels', 'Safety flags'] },
      { title: '[ 03 ] Rank', name: 'Recommendation layer', items: ['Signals', 'Scoring', 'Feed ranking', 'Feedback'], accent: true },
      { title: '[ 04 ] Operate', name: 'Moderation workflow', items: ['Review queue', 'Rules', 'Reports', 'Monitoring'] },
    ],
    architectureNote: <>The system improves the feed by using content understanding in two places: safety review and recommendation ranking. Better labels create better controls and better ranking signals.</>,
    codeTitle: 'Safety-aware ranking',
    code: <>
      labels = detect_video_signals(frames, models=[yolo, vision_transformer]){'\n'}
      safety = score_content_risk(labels, policy_rules){'\n'}
      ranking = rank_feed(video, user_context, safety, engagement_signals){'\n'}
      <span className="k">return</span> FeedDecision(rank=ranking, safety=safety, reasons=labels)
    </>,
    outcome: [
      <><strong>Higher engagement:</strong> recommendation improvements boosted engagement by 50%.</>,
      <><strong>Better safety controls:</strong> visual signals and moderation workflows gave the platform more control over short-form distribution.</>,
    ],
    quote: 'The recommendation system improved because safety, visual understanding, and ranking were treated as one content intelligence workflow.',
    quoteBy: 'Product team',
    hard: [
      { title: 'Growth and safety can conflict', detail: 'A ranking system must optimize engagement without ignoring content risk.' },
      { title: 'Video signals are noisy', detail: 'Short-form content changes quickly and requires frame-level understanding.' },
      { title: 'Moderation needs reviewability', detail: 'Safety flags must be explainable enough for human review.' },
      { title: 'Engagement needs feedback loops', detail: 'Ranking quality depends on user behavior, labels, and ongoing monitoring.' },
    ],
    decisions: [
      { key: 'Vision-first signals', value: 'YOLO and transformer outputs became the shared signal layer.' },
      { key: 'Safety-aware ranking', value: 'Moderation signals were incorporated into feed decisions.' },
      { key: 'Human review path', value: 'Risk flags moved into a reviewable moderation queue.' },
      { key: 'Engagement feedback', value: 'Ranking was tuned against user interaction data.' },
      { key: 'Operational monitoring', value: 'Reports made safety and recommendation drift easier to inspect.' },
    ],
    build: [
      { week: '1-2', title: 'Content audit', detail: 'Reviewed video types, labels, safety risks, and engagement signals.' },
      { week: '2-3', title: 'Vision pipeline', detail: 'Prepared YOLO and transformer workflows for video signals.' },
      { week: '3-4', title: 'Safety scoring', detail: 'Mapped labels to moderation rules and review paths.' },
      { week: '4-5', title: 'Ranking logic', detail: 'Integrated safety and engagement signals into recommendations.' },
      { week: '5-6', title: 'Measurement', detail: 'Tracked engagement lift, moderation quality, and monitoring needs.' },
    ],
    stack: [
      { group: 'Sources', items: ['Video frames', 'Captions', 'User events', 'Policy rules'] },
      { group: 'Processing', items: ['YOLO detection', 'Vision transformers', 'Label cleanup', 'Risk scoring'] },
      { group: 'Answer layer', items: ['Safety flags', 'Ranking scores', 'Reason codes', 'Feedback signals'] },
      { group: 'Delivery', items: ['Recommendation feed', 'Moderation queue', 'Reports', 'Monitoring'] },
      { group: 'Governance', items: ['Human review', 'Policy updates', 'Audit logs', 'Drift checks'] },
    ],
    related: [
      { id: 'crayo', tag: 'AI video', title: 'AI video tools for viral short-form content.', metric: 'Shorts workflow' },
      { id: 'trailblazer-marketing', tag: 'Growth systems', title: 'SEO content operations for profitable growth.', metric: 'SEO cadence' },
    ],
  }),
]

type VisualCaseInput = {
  id: string
  aliases?: string[]
  shortName: string
  label: string
  clientMeta: string
  title: React.ReactNode
  lede: string
  oneLiner: string
  categories: CaseCategoryId[]
  visual: ProjectVisualKey
  icon: ProjectIconName
  alt: string
  results: Array<{ value: React.ReactNode; label: string; sub: string }>
  impact: Array<{ label: string; value: number; detail: string }>
  problemLead: string
  problemDetail: string
  approachLead: string
  approachDetail: string
  bullets: string[]
  architecture: Array<{ name: string; items: string[] }>
  architectureNote: string
  hard: Array<{ title: string; detail: string }>
  decisions: Array<{ key: string; value: string }>
  related?: Array<{ id: string; tag: string; title: string; metric: string }>
}

const visualTypeByComponent: Record<ProjectVisualComponentName, NonNullable<CaseStudy['visualType']>> = {
  DashboardMockup: 'dashboard-mockup',
  DocumentAIMockup: 'document-ai-mockup',
  VoiceAIMockup: 'voice-ai-mockup',
  ComputerVisionMockup: 'computer-vision-mockup',
  MobileAppMockup: 'mobile-app-mockup',
  MLOpsMockup: 'mlops-mockup',
  DataAutomationMockup: 'data-automation-mockup',
  GrowthAutomationMockup: 'growth-automation-mockup',
  GenerativeMediaMockup: 'generative-media-mockup',
  KnowledgeSearchMockup: 'knowledge-search-mockup',
}

const generatedCoverImages: Partial<Record<ProjectVisualKey, string>> = {
  'ai-inbox-triage': '/assets/projects/generated/ai-inbox-triage-cover.png',
  'invoice-po-automation': '/assets/projects/generated/invoice-po-automation-cover.png',
  'meeting-crm-agent': '/assets/projects/generated/meeting-crm-agent-cover.png',
  'internal-knowledge-assistant': '/assets/projects/generated/internal-knowledge-assistant-cover.png',
  'healthcare-rcm-assistant': '/assets/projects/generated/healthcare-rcm-assistant-cover.png',
  'voice-appointment-setter': '/assets/projects/generated/voice-appointment-setter-cover.png',
  'ai-quality-guardrails': '/assets/projects/generated/ai-quality-guardrails-cover.png',
  'spreadsheet-dashboard-automation': '/assets/projects/generated/spreadsheet-dashboard-automation-cover.png',
  'contract-change-monitor': '/assets/projects/generated/contract-change-monitor-cover.png',
  'ad-creative-generator': '/assets/projects/generated/ad-creative-generator-cover.png',
  'churn-risk-predictor': '/assets/projects/generated/churn-risk-predictor-cover.png',
  'recruiting-outreach-agent': '/assets/projects/generated/recruiting-outreach-agent-cover.png',
  'retail-shelf-intelligence': '/assets/projects/generated/retail-shelf-intelligence-cover.png',
  'corefit-pose-coach': '/assets/projects/generated/corefit-pose-coach-cover.png',
  'defectlens-quality-inspection': '/assets/projects/generated/defectlens-quality-inspection-cover.png',
  'modelops-command-center': '/assets/projects/generated/modelops-command-center-cover.png',
  'privacyscan-redaction': '/assets/projects/generated/privacyscan-redaction-cover.png',
  'autolabel-data-studio': '/assets/projects/generated/autolabel-data-studio-cover.png',
  'fleetcam-safety-intelligence': '/assets/projects/generated/fleetcam-safety-intelligence-cover.png',
  'fieldvision-knowledge-search': '/assets/projects/generated/fieldvision-knowledge-search-cover.png',
  'receipt-scanner': '/assets/projects/generated/receipt-scanner-cover.png',
  'evalforge-quality-bench': '/assets/projects/generated/evalforge-quality-bench-cover.png',
}

function visualCaseStudy(input: VisualCaseInput, index: number): CaseStudy {
  const componentName = getVisualComponentName(input.visual)
  const generatedCoverImage = generatedCoverImages[input.visual]

  return enhancedCaseStudy({
    id: input.id,
    aliases: input.aliases,
    categories: input.categories,
    index: index.toString().padStart(2, '0'),
    shortName: input.shortName,
    client: input.shortName,
    clientMeta: input.clientMeta,
    label: input.label,
    title: input.title,
    lede: input.lede,
    oneLiner: input.oneLiner,
    roleMeta: `${input.label} workflow`,
    resultsNote: `${input.label.toLowerCase()} outcomes`,
    visualType: visualTypeByComponent[componentName],
    cardVisual: input.visual,
    previewVisual: input.visual,
    coverVisual: input.visual,
    cardPreviewImage: generatedCoverImage,
    coverImage: generatedCoverImage,
    heroVisual: generatedCoverImage ? { src: generatedCoverImage, alt: input.alt } : undefined,
    icon: input.icon,
    alt: input.alt,
    visualComponent: componentName,
    seoTitle: `${input.shortName} Case Study - ${input.label}`,
    seoDescription: input.lede,
    results: input.results,
    impact: input.impact,
    problem: [
      <strong className="cs-section__lead">{input.problemLead}</strong>,
      <>{input.problemDetail}</>,
      <>The workflow needed a visual and operational story that buyers can scan quickly: what comes in, what the AI does, what a human reviews, and where the result lands.</>,
    ],
    approach: [
      <strong className="cs-section__lead">{input.approachLead}</strong>,
      <>{input.approachDetail}</>,
      <>The project is framed around the business workflow itself: the source inputs, AI review, approval points, and final handoff are all visible in one story.</>,
    ],
    bullets: input.bullets,
    architecture: [
      { title: '[ 01 ] Sources', name: input.architecture[0].name, items: input.architecture[0].items },
      { title: '[ 02 ] Prepare', name: input.architecture[1].name, items: input.architecture[1].items },
      { title: '[ 03 ] Decide', name: input.architecture[2].name, items: input.architecture[2].items, accent: true },
      { title: '[ 04 ] Deliver', name: input.architecture[3].name, items: input.architecture[3].items },
    ],
    architectureNote: <>{input.architectureNote}</>,
    codeTitle: `${input.label} output`,
    code: <>
      input = collect_workflow_context(source_events){'\n'}
      review = run_ai_checks(input, policy=human_review){'\n'}
      handoff = route_next_action(review, owner=team){'\n'}
      <span className="k">return</span> WorkflowResult(status=handoff.status, evidence=review.sources)
    </>,
    outcome: [
      <><strong>Clearer product surface:</strong> {input.shortName} now communicates the workflow through the actual review states, handoffs, and outcomes buyers care about.</>,
      <><strong>Faster buyer clarity:</strong> the problem, workflow, proof points, and next action are easy to understand without a technical walkthrough.</>,
    ],
    quote: `${input.shortName} made the workflow easier to explain: the inputs, AI review, human handoff, and business action are all visible in one place.`,
    quoteBy: 'Product team',
    hard: input.hard,
    decisions: input.decisions,
    build: [
      { week: '1', title: 'Workflow audit', detail: 'Mapped source inputs, users, review points, and the final business action.' },
      { week: '2', title: 'AI task design', detail: 'Defined classification, extraction, drafting, prediction, or detection responsibilities.' },
      { week: '3', title: 'Human review path', detail: 'Added approval, exception, and escalation points where judgment matters.' },
      { week: '4', title: 'Product narrative', detail: 'Turned the workflow into a clear buyer story for sales conversations, reviews, and handoff.' },
    ],
    stack: [
      { group: 'Sources', items: input.architecture[0].items },
      { group: 'Processing', items: input.architecture[1].items },
      { group: 'Answer layer', items: input.architecture[2].items },
      { group: 'Delivery', items: input.architecture[3].items },
      { group: 'Governance', items: ['Human review', 'Audit trail', 'Quality checks', 'Fallback rules'] },
    ],
    related: input.related ?? [
      { id: 'thalamus', tag: 'Knowledge search', title: 'AI search that understands company documents.', metric: 'Source-backed answers' },
      { id: 'retina', tag: 'Forecasting', title: 'Inventory forecasts that shifted purchasing decisions.', metric: '31% fewer stockouts' },
    ],
  })
}

const NEW_PROJECT_CASE_STUDIES: CaseStudy[] = [
  visualCaseStudy({
    id: 'ai-inbox-triage',
    shortName: 'AI Inbox Triage',
    label: 'AI Workflow Agent',
    clientMeta: 'Inbox automation · CRM routing',
    title: <>AI inbox triage and reply assistant for <em>priority work</em>.</>,
    lede: 'An inbox agent that prioritizes customer emails, drafts replies, creates tasks, and syncs routing status back to the CRM.',
    oneLiner: 'A workflow assistant for teams whose revenue, support, and operational work still starts in a crowded shared inbox.',
    categories: ['automation', 'ai-agents-workflow-automation', 'growth-revenue-automation'],
    visual: 'ai-inbox-triage',
    icon: 'Workflow',
    alt: 'AI inbox dashboard showing prioritized emails, drafted replies, and task routing.',
    results: [
      { value: <em>P1</em>, label: 'Priority routing', sub: 'Urgent emails move first' },
      { value: <em>Draft</em>, label: 'Reply assist', sub: 'Human-reviewable responses' },
      { value: <em>Task</em>, label: 'Action creation', sub: 'Follow-up work is assigned' },
      { value: <em>CRM</em>, label: 'Status sync', sub: 'Customer context stays current' },
    ],
    impact: [
      { label: 'Response speed', value: 88, detail: 'Priority messages surface before the queue buries them.' },
      { label: 'Routing quality', value: 82, detail: 'Tasks and owners are selected from message context.' },
      { label: 'Draft usefulness', value: 80, detail: 'Replies are ready for human review.' },
      { label: 'CRM hygiene', value: 84, detail: 'Follow-up state syncs into customer records.' },
    ],
    problemLead: 'Shared inboxes mix urgent revenue work with routine operational noise.',
    problemDetail: 'Teams need to identify priority messages, prepare a useful reply, and make sure the next action is tracked without manually copying context between tools.',
    approachLead: 'We modeled the inbox as a routing system, not a pile of messages.',
    approachDetail: 'The assistant classifies each email, drafts the next response, creates the task when needed, and shows CRM sync status so a human can approve the action.',
    bullets: ['Email list with priority labels.', 'Draft reply panel with editable output.', 'Create-task action and owner assignment.', 'CRM sync indicator for closed-loop handoff.'],
    architecture: [
      { name: 'Message sources', items: ['Shared inbox', 'CRM records', 'Support history', 'SLA rules'] },
      { name: 'Triage layer', items: ['Intent', 'Priority', 'Customer context', 'Owner lookup'] },
      { name: 'Action agent', items: ['Reply draft', 'Task creation', 'Routing status', 'Escalation'] },
      { name: 'Team handoff', items: ['CRM sync', 'Inbox label', 'Owner alert', 'Review queue'] },
    ],
    architectureNote: 'AI Inbox Triage works when every recommendation stays attached to the original email, customer record, and next action.',
    hard: [
      { title: 'Priority is contextual', detail: 'A message can be urgent because of the customer, revenue stage, or SLA, not only its wording.' },
      { title: 'Replies need review', detail: 'Drafts must be fast to approve and easy to edit before sending.' },
      { title: 'Routing needs closure', detail: 'The team needs proof that a task and CRM status were actually created.' },
      { title: 'Inbox work is messy', detail: 'Threads, attachments, and partial context require careful fallback behavior.' },
    ],
    decisions: [
      { key: 'Priority badges', value: 'The card visual makes urgency visible before the user reads the full message.' },
      { key: 'Draft panel', value: 'Generated replies are shown as editable work, not automatic sends.' },
      { key: 'Task handoff', value: 'Create-task state is part of the visual proof.' },
      { key: 'CRM status', value: 'Sync indicators reduce ambiguity after routing.' },
    ],
    related: [
      { id: 'revana', tag: 'Revenue automation', title: 'AI support staff for customer questions.', metric: '24/7 coverage' },
      { id: 'ai-voice-system', tag: 'Voice AI', title: 'Realtime AI voice system under two seconds.', metric: '7s to <2s' },
    ],
  }, 18),
  visualCaseStudy({
    id: 'invoice-po-automation',
    aliases: ['invoice-purchase-order-automation'],
    shortName: 'Invoice PO Automation',
    label: 'Document AI System',
    clientMeta: 'Finance extraction · Human review',
    title: <>Invoice and purchase order automation for <em>finance review</em>.</>,
    lede: 'A document AI workflow that extracts invoice and purchase order fields, validates totals, and routes exceptions for finance approval.',
    oneLiner: 'A finance intake system that turns vendor documents into structured fields with validation checks and review queues.',
    categories: ['automation', 'document-review', 'document-ai-knowledge-search', 'data-automation-labeling'],
    visual: 'invoice-po-automation',
    icon: 'FileSearch',
    alt: 'Document AI interface extracting invoice and purchase order fields for finance review.',
    results: [
      { value: <em>Fields</em>, label: 'Extraction', sub: 'Vendor, dates, tax, and totals' },
      { value: <em>Match</em>, label: 'PO validation', sub: 'Three-way checks before export' },
      { value: <em>Queue</em>, label: 'Review path', sub: 'Exceptions go to finance' },
      { value: <em>ERP</em>, label: 'Export', sub: 'Clean records leave the workflow' },
    ],
    impact: [
      { label: 'Field accuracy', value: 86, detail: 'Key fields become structured and reviewable.' },
      { label: 'Exception control', value: 84, detail: 'Mismatches go to a human queue.' },
      { label: 'Processing speed', value: 82, detail: 'Routine invoices move faster.' },
      { label: 'Audit clarity', value: 88, detail: 'Validation checks stay visible.' },
    ],
    problemLead: 'Finance teams lose time checking invoice fields and purchase order matches by hand.',
    problemDetail: 'The system needs to extract structured data, verify math, detect mismatches, and keep finance in control when confidence drops.',
    approachLead: 'We split document extraction from finance approval.',
    approachDetail: 'The finance workspace shows the invoice preview beside extracted fields, validation states, and a human review queue for exceptions.',
    bullets: ['Invoice preview beside structured fields.', 'Vendor, date, subtotal, tax, and total extraction.', 'Validation checks for PO match and totals.', 'Human review queue for exceptions.'],
    architecture: [
      { name: 'Document intake', items: ['Invoices', 'POs', 'Vendor master', 'ERP records'] },
      { name: 'Extraction', items: ['OCR', 'Field parsing', 'Line items', 'Totals'] },
      { name: 'Validation', items: ['PO match', 'Tax check', 'Duplicate check', 'Confidence'] },
      { name: 'Finance review', items: ['Exception queue', 'Approval', 'ERP export', 'Audit log'] },
    ],
    architectureNote: 'Invoice automation is useful when extraction, validation, and approval are visible in one review surface.',
    hard: [
      { title: 'Documents vary by vendor', detail: 'Layouts, fields, and line-item formats change constantly.' },
      { title: 'Totals must reconcile', detail: 'Subtotal, tax, and total mismatches need explicit validation states.' },
      { title: 'PO matching needs context', detail: 'A valid invoice still needs vendor, purchase order, and receiving context.' },
      { title: 'Exceptions need ownership', detail: 'Human review must be clear when confidence or matching fails.' },
    ],
    decisions: [
      { key: 'Side-by-side review', value: 'Preview and extracted fields stay together for faster checking.' },
      { key: 'Validation badges', value: 'Pass, warning, and review states are visible at field level.' },
      { key: 'Human queue', value: 'Exceptions become a managed workflow instead of a hidden failure.' },
      { key: 'Audit trail', value: 'Every extracted field can be traced to the source document.' },
    ],
  }, 19),
  visualCaseStudy({
    id: 'meeting-crm-agent',
    aliases: ['meeting-to-crm-revenue-agent'],
    shortName: 'Meeting CRM Agent',
    label: 'Revenue Agent',
    clientMeta: 'Sales calls · CRM updates',
    title: <>Meeting-to-CRM revenue agent for <em>sales follow-up</em>.</>,
    lede: 'A meeting intelligence agent that turns sales calls into summaries, objections, next steps, follow-up drafts, and CRM stage updates.',
    oneLiner: 'A revenue workflow for teams whose deal context disappears after calls because notes, objections, and follow-ups are not captured consistently.',
    categories: ['automation', 'voice-ai', 'voice-ai-conversation-intelligence', 'growth-revenue-automation'],
    visual: 'meeting-crm-agent',
    icon: 'PhoneCall',
    alt: 'AI meeting intelligence dashboard turning sales calls into CRM updates and follow-up actions.',
    results: [
      { value: <em>Notes</em>, label: 'Meeting summary', sub: 'Structured after each call' },
      { value: <em>Stage</em>, label: 'CRM update', sub: 'Deal state stays current' },
      { value: <em>Email</em>, label: 'Follow-up draft', sub: 'Rep reviews before sending' },
      { value: <em>Risk</em>, label: 'Objections', sub: 'Blockers are captured' },
    ],
    impact: [
      { label: 'Follow-up speed', value: 86, detail: 'Drafts are ready while the call is fresh.' },
      { label: 'CRM completeness', value: 84, detail: 'Deal stage and next steps are recorded.' },
      { label: 'Objection visibility', value: 82, detail: 'Risks surface for manager review.' },
      { label: 'Rep focus', value: 78, detail: 'Less manual note cleanup after calls.' },
    ],
    problemLead: 'Sales teams lose deal context when call notes and CRM updates are delayed.',
    problemDetail: 'Revenue leaders need summaries, objections, next steps, and follow-up drafts that connect directly to deal records.',
    approachLead: 'We designed the call transcript as the source for CRM action.',
    approachDetail: 'The dashboard shows the transcript, detected sales signals, next steps, and a follow-up draft before anything is committed to the CRM.',
    bullets: ['Meeting summary with source context.', 'Objections detected from the call.', 'Next steps and follow-up email draft.', 'CRM deal stage update for sales review.'],
    architecture: [
      { name: 'Call sources', items: ['Transcript', 'Recording', 'CRM deal', 'Rep notes'] },
      { name: 'Signal extraction', items: ['Summary', 'Objections', 'Next steps', 'Stakeholders'] },
      { name: 'Revenue agent', items: ['Email draft', 'Deal stage', 'Task update', 'Risk flags'] },
      { name: 'Sales handoff', items: ['CRM sync', 'Manager view', 'Rep approval', 'Follow-up log'] },
    ],
    architectureNote: 'The meeting agent only earns trust when every CRM update can be traced back to the call context that produced it.',
    hard: [
      { title: 'Sales language is nuanced', detail: 'Objections, buying intent, and next steps are often implied rather than stated cleanly.' },
      { title: 'CRM writes need caution', detail: 'Automatic updates should be reviewed before they change pipeline state.' },
      { title: 'Follow-up quality matters', detail: 'Email drafts must reflect the actual conversation, not generic templates.' },
      { title: 'Managers need patterns', detail: 'Signals should roll up into coaching and pipeline visibility.' },
    ],
    decisions: [
      { key: 'Transcript anchoring', value: 'Signals stay connected to the call evidence.' },
      { key: 'Review before sync', value: 'CRM updates are proposed for approval instead of written silently.' },
      { key: 'Objection panel', value: 'Risks are surfaced separately from the summary.' },
      { key: 'Follow-up draft', value: 'The output is immediately useful to the account owner.' },
    ],
  }, 20),
  visualCaseStudy({
    id: 'internal-knowledge-assistant',
    shortName: 'Knowledge Assistant',
    label: 'Knowledge Chat',
    clientMeta: 'Internal documents · Cited answers',
    title: <>Internal knowledge assistant with <em>source citations</em>.</>,
    lede: 'A chat interface that answers internal questions from company documents, snippets, filters, and cited source cards.',
    oneLiner: 'A source-backed assistant for teams that need answers from policies, runbooks, product notes, and internal documentation.',
    categories: ['chatbot', 'document-review', 'ai-assistants-knowledge-chat', 'document-ai-knowledge-search'],
    visual: 'internal-knowledge-assistant',
    icon: 'MessageCircle',
    alt: 'Internal knowledge assistant answering a question with cited company documents.',
    results: [
      { value: <em>Chat</em>, label: 'Answer surface', sub: 'Questions answered in context' },
      { value: <em>Cite</em>, label: 'Source cards', sub: 'Evidence remains visible' },
      { value: <em>Filter</em>, label: 'Search scope', sub: 'Teams narrow by source' },
      { value: <em>Trust</em>, label: 'Reviewability', sub: 'Snippets support the answer' },
    ],
    impact: [
      { label: 'Answer speed', value: 86, detail: 'Teams find internal guidance faster.' },
      { label: 'Source trust', value: 90, detail: 'Citations make answers inspectable.' },
      { label: 'Search control', value: 80, detail: 'Filters keep answers in the right knowledge area.' },
      { label: 'Support load', value: 76, detail: 'Repeated internal questions require fewer handoffs.' },
    ],
    problemLead: 'Company answers are scattered across docs, runbooks, and policy pages.',
    problemDetail: 'Employees need quick answers, but they also need to know which document supported the response.',
    approachLead: 'We made citations the center of the assistant experience.',
    approachDetail: 'The assistant interface pairs the chat answer with source cards, document snippets, and filters so users can verify before acting.',
    bullets: ['Chat answer written from internal documents.', 'Source cards and document snippets.', 'Search filters for teams, date, and collection.', 'Fallback when the assistant cannot find evidence.'],
    architecture: [
      { name: 'Knowledge sources', items: ['Docs', 'Runbooks', 'Policies', 'Tickets'] },
      { name: 'Retrieval prep', items: ['Chunking', 'Permissions', 'Metadata', 'Filters'] },
      { name: 'Assistant answer', items: ['Grounded response', 'Source cards', 'Snippets', 'Gaps'] },
      { name: 'Team delivery', items: ['Chat UI', 'Saved answers', 'Escalation', 'Feedback'] },
    ],
    architectureNote: 'Knowledge assistants should answer only when they can show the user where the answer came from.',
    hard: [
      { title: 'Knowledge gets stale', detail: 'Answers need source dates, versions, and confidence around outdated material.' },
      { title: 'Permissions matter', detail: 'The assistant must respect document access rules.' },
      { title: 'Answers need evidence', detail: 'Employees should see snippets before relying on a response.' },
      { title: 'Gaps are useful', detail: 'The system should say when no reliable source exists.' },
    ],
    decisions: [
      { key: 'Citation-first UI', value: 'Source cards are placed beside the answer.' },
      { key: 'Filter controls', value: 'Users can scope searches to relevant collections.' },
      { key: 'Snippet preview', value: 'Evidence is visible without opening every document.' },
      { key: 'Feedback loop', value: 'Users can flag weak answers for content updates.' },
    ],
  }, 21),
  visualCaseStudy({
    id: 'healthcare-rcm-assistant',
    shortName: 'Healthcare RCM Assistant',
    label: 'Healthcare AI',
    clientMeta: 'Claim review · Appeal support',
    title: <>Healthcare RCM assistant for <em>claim denial review</em>.</>,
    lede: 'A revenue cycle AI assistant that reviews claim denial details, payer rules, documentation gaps, and appeal support notes.',
    oneLiner: 'A claim review workspace for teams that need faster denial triage while keeping appeal decisions under human review.',
    categories: ['automation', 'document-review', 'risk-compliance-ai-evaluation', 'health-fitness-ai'],
    visual: 'healthcare-rcm-assistant',
    icon: 'ShieldCheck',
    alt: 'Healthcare revenue cycle AI assistant reviewing claim denial details and appeal opportunities.',
    results: [
      { value: <em>Denial</em>, label: 'Category', sub: 'Reason codes organized' },
      { value: <em>Rule</em>, label: 'Payer policy', sub: 'Relevant guidance summarized' },
      { value: <em>Gap</em>, label: 'Documentation', sub: 'Missing evidence surfaced' },
      { value: <em>Appeal</em>, label: 'Draft support', sub: 'Reviewer edits before use' },
    ],
    impact: [
      { label: 'Triage speed', value: 82, detail: 'Denials are grouped into action paths.' },
      { label: 'Policy clarity', value: 84, detail: 'Payer rule summaries stay visible.' },
      { label: 'Appeal support', value: 78, detail: 'Draft notes shorten reviewer prep.' },
      { label: 'Review control', value: 88, detail: 'Human approval remains central.' },
    ],
    problemLead: 'Claim denials require policy context, documentation review, and careful appeal judgment.',
    problemDetail: 'RCM teams need a way to see denial reasons, payer rules, missing evidence, and possible appeal notes without losing review control.',
    approachLead: 'We designed the assistant around denial evidence and human review.',
    approachDetail: 'The visual shows a claim timeline, denial category, payer rule summary, documentation gaps, and appeal support notes in one workspace.',
    bullets: ['Claim timeline with denial category.', 'Payer rule summary and documentation gaps.', 'Appeal support notes for reviewer editing.', 'Human review queue for sensitive actions.'],
    architecture: [
      { name: 'Claim sources', items: ['Denial letter', 'Claim history', 'Payer rules', 'Clinical docs'] },
      { name: 'Review prep', items: ['Reason codes', 'Timeline', 'Eligibility', 'Evidence gaps'] },
      { name: 'RCM assistant', items: ['Rule summary', 'Appeal notes', 'Risk flags', 'Next action'] },
      { name: 'Appeal workflow', items: ['Reviewer queue', 'Draft packet', 'Owner assignment', 'Audit log'] },
    ],
    architectureNote: 'Healthcare RCM workflows need AI to organize evidence, not make unsupported appeal decisions.',
    hard: [
      { title: 'Healthcare context is sensitive', detail: 'Claims involve regulated data and high-stakes financial outcomes.' },
      { title: 'Payer rules vary', detail: 'The assistant must summarize the right rule for the denial context.' },
      { title: 'Documentation gaps are specific', detail: 'A useful review identifies what evidence is missing and why it matters.' },
      { title: 'Human approval is required', detail: 'Appeal drafts must remain editable support notes.' },
    ],
    decisions: [
      { key: 'Timeline view', value: 'Claim history and denial events are shown before recommendations.' },
      { key: 'Rule summary', value: 'Payer guidance is visible beside the appeal opportunity.' },
      { key: 'Gap list', value: 'Documentation issues are separated from general notes.' },
      { key: 'Review queue', value: 'Sensitive actions are routed to a human owner.' },
    ],
  }, 22),
  visualCaseStudy({
    id: 'voice-appointment-setter',
    aliases: ['ai-voice-appointment-setter'],
    shortName: 'Voice Appointment Setter',
    label: 'Voice AI Agent',
    clientMeta: 'Lead qualification · Calendar booking',
    title: <>AI voice appointment setter for <em>qualified calls</em>.</>,
    lede: 'A voice AI dashboard that captures live transcripts, qualifies callers, selects calendar slots, and confirms booked appointments.',
    oneLiner: 'A call automation workflow for teams that need to qualify inbound leads and book appointments without missing context.',
    categories: ['voice-ai', 'automation', 'voice-ai-conversation-intelligence', 'growth-revenue-automation'],
    visual: 'voice-appointment-setter',
    icon: 'Mic',
    alt: 'Voice AI appointment setter qualifying a caller and booking a meeting.',
    results: [
      { value: <em>Live</em>, label: 'Transcript', sub: 'Caller context captured' },
      { value: <em>Fit</em>, label: 'Qualification', sub: 'Checklist completed' },
      { value: <em>Slot</em>, label: 'Calendar', sub: 'Availability selected' },
      { value: <em>Book</em>, label: 'Confirmation', sub: 'Appointment logged' },
    ],
    impact: [
      { label: 'Booking speed', value: 84, detail: 'Qualified callers get to an open slot faster.' },
      { label: 'Lead quality', value: 80, detail: 'Qualification answers are structured.' },
      { label: 'Call visibility', value: 82, detail: 'Transcript and checklist are reviewable.' },
      { label: 'Scheduling control', value: 86, detail: 'Calendar rules stay explicit.' },
    ],
    problemLead: 'Inbound calls often require the same qualification and scheduling steps.',
    problemDetail: 'The team needs a live voice workflow that can ask questions, capture answers, check availability, and confirm the booking without hiding what happened.',
    approachLead: 'We connected live call state to lead qualification and scheduling.',
    approachDetail: 'The dashboard shows waveform, transcript, checklist, slot selector, and appointment confirmation in one reviewable surface.',
    bullets: ['Live call waveform and transcript.', 'Qualification checklist with lead-fit state.', 'Calendar slot selector.', 'Appointment confirmation and CRM handoff.'],
    architecture: [
      { name: 'Call sources', items: ['Inbound call', 'Lead source', 'Calendar rules', 'CRM context'] },
      { name: 'Conversation prep', items: ['ASR', 'Intent', 'Qualification', 'Availability'] },
      { name: 'Voice agent', items: ['Question flow', 'Slot selection', 'Confirmation', 'Fallback'] },
      { name: 'Booking handoff', items: ['Calendar event', 'CRM note', 'SMS confirm', 'Team alert'] },
    ],
    architectureNote: 'Appointment setting works when the voice agent can qualify, book, and show the evidence behind the booking.',
    hard: [
      { title: 'Calls are live', detail: 'The system needs low-latency turn handling and clear fallback.' },
      { title: 'Qualification varies', detail: 'Different lead sources require different question paths.' },
      { title: 'Calendar rules matter', detail: 'Availability, buffers, and owner routing must be respected.' },
      { title: 'Confirmation needs certainty', detail: 'Booked slots must sync reliably to the calendar and CRM.' },
    ],
    decisions: [
      { key: 'Live status', value: 'Waveform and transcript show the call is in progress.' },
      { key: 'Checklist', value: 'Qualification criteria are visible and auditable.' },
      { key: 'Calendar panel', value: 'Slot choice appears as a real scheduling decision.' },
      { key: 'Confirmation state', value: 'The workflow ends with a visible booking result.' },
    ],
  }, 23),
  visualCaseStudy({
    id: 'ai-quality-guardrails',
    shortName: 'AI Quality Guardrails',
    label: 'AI Evaluation Dashboard',
    clientMeta: 'Prompt QA · Safety checks',
    title: <>AI quality and guardrails dashboard for <em>reliable releases</em>.</>,
    lede: 'An AI evaluation dashboard with test cases, pass or fail scores, regression alerts, prompt comparison, and safety checks.',
    oneLiner: 'A quality system for teams shipping prompts, agents, or model workflows that need measurable release confidence.',
    categories: ['mlops-ai-infrastructure', 'risk-compliance-ai-evaluation'],
    visual: 'ai-quality-guardrails',
    icon: 'ShieldCheck',
    alt: 'AI quality dashboard showing model evaluation scores, regression checks, and guardrail results.',
    results: [
      { value: <em>Eval</em>, label: 'Test cases', sub: 'Expected behavior captured' },
      { value: <em>Pass</em>, label: 'Guardrails', sub: 'Safety checks tracked' },
      { value: <em>Diff</em>, label: 'Prompt compare', sub: 'Version changes visible' },
      { value: <em>Alert</em>, label: 'Regression', sub: 'Failures block release' },
    ],
    impact: [
      { label: 'Release confidence', value: 86, detail: 'Teams can see pass rates before deploy.' },
      { label: 'Safety visibility', value: 88, detail: 'Risk checks are explicit.' },
      { label: 'Regression control', value: 84, detail: 'Failed cases stop quiet degradation.' },
      { label: 'Prompt governance', value: 80, detail: 'Version comparisons are reviewable.' },
    ],
    problemLead: 'AI systems change quickly, and teams need to know when quality moves backward.',
    problemDetail: 'Prompt updates, model changes, and agent tool behavior need test suites, safety checks, and regression alerts before release.',
    approachLead: 'We made evaluation a dashboard with release decisions.',
    approachDetail: 'The visual shows scorecards, prompt version comparison, failed test cases, and risk flags so teams can decide what is ready to ship.',
    bullets: ['Evaluation scorecards for quality and safety.', 'Prompt version comparison.', 'Failed test cases and regression alerts.', 'Risk flags for guardrail review.'],
    architecture: [
      { name: 'Test sources', items: ['Golden cases', 'Prompt versions', 'Model outputs', 'Policy rules'] },
      { name: 'Evaluation run', items: ['Assertions', 'Rubrics', 'Safety checks', 'Regression diff'] },
      { name: 'Quality decision', items: ['Pass rate', 'Failed cases', 'Risk flags', 'Release gate'] },
      { name: 'Ops handoff', items: ['Deploy note', 'Owner review', 'Incident log', 'Version history'] },
    ],
    architectureNote: 'AI guardrails become useful when quality checks influence release decisions instead of living in a separate report.',
    hard: [
      { title: 'Quality is multi-dimensional', detail: 'Accuracy, tone, safety, tool use, and latency can all regress separately.' },
      { title: 'Prompts are code-like', detail: 'Prompt changes need comparison, review, and version history.' },
      { title: 'Safety checks need examples', detail: 'Guardrails should be tied to concrete failures and expected outputs.' },
      { title: 'Release gates need clarity', detail: 'Teams need to know whether a version is ready, risky, or blocked.' },
    ],
    decisions: [
      { key: 'Scorecards', value: 'Quality and risk are summarized without hiding test detail.' },
      { key: 'Failed-case table', value: 'Regressions stay visible and actionable.' },
      { key: 'Prompt diff', value: 'Version changes can be reviewed like software changes.' },
      { key: 'Release state', value: 'The dashboard recommends ship, hold, or investigate.' },
    ],
  }, 24),
  visualCaseStudy({
    id: 'spreadsheet-dashboard-automation',
    shortName: 'Spreadsheet Dashboard',
    label: 'Data Automation',
    clientMeta: 'Spreadsheet cleanup · KPI dashboard',
    title: <>Spreadsheet-to-dashboard automation for <em>business KPIs</em>.</>,
    lede: 'An automation workflow that turns messy spreadsheet imports into cleaned tables, KPI cards, and business charts.',
    oneLiner: 'A data automation system for teams that rely on spreadsheets but need cleaner dashboards for operating decisions.',
    categories: ['python-scripts', 'automation', 'data-automation-labeling', 'forecasting-decision-intelligence'],
    visual: 'spreadsheet-dashboard-automation',
    icon: 'TableProperties',
    alt: 'Automation workflow turning spreadsheet data into clean business dashboards.',
    results: [
      { value: <em>Import</em>, label: 'Spreadsheet intake', sub: 'Messy files normalized' },
      { value: <em>Clean</em>, label: 'Data table', sub: 'Rules fix common errors' },
      { value: <em>KPI</em>, label: 'Cards', sub: 'Core metrics are visible' },
      { value: <em>Chart</em>, label: 'Dashboard', sub: 'Trends update automatically' },
    ],
    impact: [
      { label: 'Reporting speed', value: 86, detail: 'Manual spreadsheet cleanup drops.' },
      { label: 'Data quality', value: 82, detail: 'Missing and invalid values are flagged.' },
      { label: 'Decision clarity', value: 84, detail: 'KPIs replace raw file scanning.' },
      { label: 'Repeatability', value: 88, detail: 'The import flow can run every cycle.' },
    ],
    problemLead: 'Spreadsheets carry important business data, but they are rarely dashboard-ready.',
    problemDetail: 'Teams need to import messy files, clean common issues, calculate KPIs, and publish charts without rebuilding the report every week.',
    approachLead: 'We made the transformation from raw sheet to KPI dashboard visible.',
    approachDetail: 'The automation workspace shows import state, cleaned table rows, metric cards, and charts so the workflow feels concrete.',
    bullets: ['Spreadsheet import with validation state.', 'Cleaned data table and missing-value checks.', 'KPI cards for business metrics.', 'Revenue or operations chart output.'],
    architecture: [
      { name: 'Data sources', items: ['CSV files', 'Google Sheets', 'Exports', 'Manual notes'] },
      { name: 'Cleanup rules', items: ['Column mapping', 'Deduping', 'Validation', 'Normalization'] },
      { name: 'Metric layer', items: ['KPI formulas', 'Trend checks', 'Anomaly flags', 'Segments'] },
      { name: 'Dashboard delivery', items: ['Charts', 'Scheduled refresh', 'Exports', 'Alerts'] },
    ],
    architectureNote: 'Spreadsheet automation works when the team can trust the cleanup rules before they trust the dashboard.',
    hard: [
      { title: 'Files change shape', detail: 'Column names, formats, and missing values vary between exports.' },
      { title: 'Business logic matters', detail: 'KPIs depend on definitions that need to stay explicit.' },
      { title: 'Errors must surface', detail: 'Bad rows should be reviewed instead of silently removed.' },
      { title: 'Reports need cadence', detail: 'The workflow has to repeat without manual rebuilding.' },
    ],
    decisions: [
      { key: 'Import preview', value: 'Raw rows are visible before transformation.' },
      { key: 'Validation state', value: 'Missing or suspect data gets flagged clearly.' },
      { key: 'KPI cards', value: 'Decision metrics are separated from raw tables.' },
      { key: 'Refresh path', value: 'The dashboard is designed as a repeatable workflow.' },
    ],
  }, 25),
  visualCaseStudy({
    id: 'contract-change-monitor',
    aliases: ['policy-contract-change-monitor'],
    shortName: 'Contract Change Monitor',
    label: 'Risk Review Tool',
    clientMeta: 'Document comparison · Policy risk',
    title: <>Policy and contract change monitor for <em>review risk</em>.</>,
    lede: 'A document comparison interface that highlights changed clauses, summarizes risk, and assigns reviewers.',
    oneLiner: 'A risk workflow for teams that need to know what changed across contracts, policies, and vendor terms before approval.',
    categories: ['document-review', 'document-ai-knowledge-search', 'risk-compliance-ai-evaluation'],
    visual: 'contract-change-monitor',
    icon: 'FileSearch',
    alt: 'AI contract comparison tool highlighting policy changes and review risks.',
    results: [
      { value: <em>Diff</em>, label: 'Comparison', sub: 'Old and new clauses aligned' },
      { value: <em>Risk</em>, label: 'Summary', sub: 'Material changes surfaced' },
      { value: <em>Owner</em>, label: 'Assignment', sub: 'Reviewer selected' },
      { value: <em>Log</em>, label: 'Audit', sub: 'Decisions stay tracked' },
    ],
    impact: [
      { label: 'Change visibility', value: 88, detail: 'Clause edits are easy to inspect.' },
      { label: 'Risk triage', value: 84, detail: 'Material changes rise above noise.' },
      { label: 'Reviewer speed', value: 80, detail: 'Assignments are made from risk type.' },
      { label: 'Governance', value: 86, detail: 'Decisions remain traceable.' },
    ],
    problemLead: 'Policy and contract updates can hide material risk inside small wording changes.',
    problemDetail: 'Reviewers need old and new language, highlighted clauses, risk notes, and owner assignment in one place.',
    approachLead: 'We treated document comparison as a risk routing workflow.',
    approachDetail: 'The interface pairs old and new columns with highlighted clauses, a risk summary, and reviewer assignment state.',
    bullets: ['Old vs new document columns.', 'Highlighted clauses with change type.', 'Risk summary and materiality notes.', 'Reviewer assignment and status tracking.'],
    architecture: [
      { name: 'Document versions', items: ['Old contract', 'New contract', 'Policy library', 'Reviewer rules'] },
      { name: 'Comparison prep', items: ['Clause matching', 'Change detection', 'Risk taxonomy', 'Metadata'] },
      { name: 'Risk monitor', items: ['Change summary', 'Risk notes', 'Materiality', 'Owner recommendation'] },
      { name: 'Review workflow', items: ['Assignment', 'Approval notes', 'Export', 'Audit trail'] },
    ],
    architectureNote: 'Contract change monitoring is useful when differences, risk notes, and reviewer ownership appear in one workflow.',
    hard: [
      { title: 'Text diffs can be noisy', detail: 'Formatting changes should not distract from material language edits.' },
      { title: 'Risk depends on policy', detail: 'A clause change matters only in relation to company standards.' },
      { title: 'Ownership must be clear', detail: 'Legal, finance, or operations may need different review paths.' },
      { title: 'Approvals need history', detail: 'Review notes must remain attached to the exact changed language.' },
    ],
    decisions: [
      { key: 'Two-column diff', value: 'Old and new text can be compared without context switching.' },
      { key: 'Risk summary', value: 'Material changes get plain-language notes.' },
      { key: 'Reviewer assignment', value: 'Risk type drives who should inspect the change.' },
      { key: 'Audit notes', value: 'Approvals stay connected to the clause version.' },
    ],
  }, 26),
  visualCaseStudy({
    id: 'ad-creative-generator',
    aliases: ['ad-creative-variant-generator'],
    shortName: 'Ad Creative Generator',
    label: 'Generative Media Tool',
    clientMeta: 'Creative testing · Ad variants',
    title: <>Ad creative variant generator for <em>testing hooks</em>.</>,
    lede: 'A creative workflow that turns product briefs into hooks, scripts, captions, and campaign angle variants.',
    oneLiner: 'A generative media workspace for marketers who need more tested creative options without losing editorial review.',
    categories: ['automation', 'generative-media-creator-tools', 'growth-revenue-automation'],
    visual: 'ad-creative-generator',
    icon: 'Clapperboard',
    alt: 'AI creative workflow generating ad hooks, captions, scripts, and campaign variants.',
    results: [
      { value: <em>Hook</em>, label: 'Variations', sub: 'Angles for testing' },
      { value: <em>Script</em>, label: 'Short-form drafts', sub: 'Creator-ready outlines' },
      { value: <em>Caption</em>, label: 'Copy variants', sub: 'Channel-specific language' },
      { value: <em>Review</em>, label: 'Editorial control', sub: 'Human approval stays central' },
    ],
    impact: [
      { label: 'Creative throughput', value: 88, detail: 'More variants are ready for review.' },
      { label: 'Angle clarity', value: 82, detail: 'Campaign concepts are labeled.' },
      { label: 'Review speed', value: 80, detail: 'Editors compare options faster.' },
      { label: 'Testing discipline', value: 78, detail: 'Hooks and scripts map to campaign goals.' },
    ],
    problemLead: 'Creative testing requires many variants, but teams still need quality control.',
    problemDetail: 'Marketers need hooks, scripts, captions, and campaign angles that start from the product brief and remain easy to review.',
    approachLead: 'We made creative generation look like an editorial workflow.',
    approachDetail: 'The visual shows the product brief, hook variations, script cards, caption drafts, and campaign angle labels.',
    bullets: ['Product brief as the source of truth.', 'Hook variations and script cards.', 'Caption drafts for channel use.', 'Campaign angle labels for testing.'],
    architecture: [
      { name: 'Creative inputs', items: ['Product brief', 'Audience', 'Offer', 'Brand notes'] },
      { name: 'Idea generation', items: ['Hooks', 'Angles', 'Scripts', 'Captions'] },
      { name: 'Variant scoring', items: ['Fit checks', 'Tone review', 'Testing tags', 'Risk flags'] },
      { name: 'Campaign handoff', items: ['Approved variants', 'Exports', 'Brief links', 'Performance notes'] },
    ],
    architectureNote: 'Ad generation needs a reviewable path from product brief to campaign-ready variants.',
    hard: [
      { title: 'Creative output can get generic', detail: 'Variants need to stay tied to a concrete offer and audience.' },
      { title: 'Brand voice matters', detail: 'Generated copy needs tone checks before it reaches production.' },
      { title: 'Testing needs structure', detail: 'Hooks should map to campaign angles and hypotheses.' },
      { title: 'Review should be fast', detail: 'Editors need enough variation without comparing noise.' },
    ],
    decisions: [
      { key: 'Brief panel', value: 'The product brief stays visible as the source.' },
      { key: 'Variant cards', value: 'Hooks and scripts are comparable at a glance.' },
      { key: 'Angle labels', value: 'Each creative concept has a testable role.' },
      { key: 'Approval state', value: 'Human review is part of the workflow.' },
    ],
  }, 27),
  visualCaseStudy({
    id: 'churn-risk-predictor',
    shortName: 'Churn Risk Predictor',
    label: 'Decision Intelligence',
    clientMeta: 'Customer health · Retention signals',
    title: <>Churn risk predictor for <em>customer retention</em>.</>,
    lede: 'A customer health dashboard that predicts churn risk from usage trends, support signals, and account-level drivers.',
    oneLiner: 'A retention workflow for teams that need to spot at-risk accounts early and assign the right intervention.',
    categories: ['python-scripts', 'forecasting-decision-intelligence', 'growth-revenue-automation'],
    visual: 'churn-risk-predictor',
    icon: 'TrendingUp',
    alt: 'Customer churn prediction dashboard showing account risk scores and retention signals.',
    results: [
      { value: <em>Risk</em>, label: 'Account score', sub: 'Churn probability by customer' },
      { value: <em>Usage</em>, label: 'Trend', sub: 'Product activity change' },
      { value: <em>Driver</em>, label: 'Explanation', sub: 'Why the score moved' },
      { value: <em>Action</em>, label: 'Intervention', sub: 'CS follow-up suggested' },
    ],
    impact: [
      { label: 'Risk visibility', value: 88, detail: 'At-risk accounts rise before renewal.' },
      { label: 'Driver clarity', value: 84, detail: 'Teams see why the score changed.' },
      { label: 'CS focus', value: 82, detail: 'Interventions are prioritized.' },
      { label: 'Forecast trust', value: 78, detail: 'Scores stay explainable.' },
    ],
    problemLead: 'Customer success teams often learn about churn after usage has already dropped.',
    problemDetail: 'They need risk scores, usage trends, churn drivers, and recommended interventions before renewal risk becomes irreversible.',
    approachLead: 'We framed churn prediction as a customer health workflow.',
    approachDetail: 'The dashboard shows account lists, risk scores, usage trends, churn drivers, and a suggested intervention.',
    bullets: ['Account list with risk scores.', 'Usage trend and health indicators.', 'Churn drivers tied to the score.', 'Suggested intervention for customer success.'],
    architecture: [
      { name: 'Customer signals', items: ['Usage events', 'Support tickets', 'Billing history', 'CRM notes'] },
      { name: 'Feature prep', items: ['Trend windows', 'Engagement drops', 'Ticket volume', 'Renewal stage'] },
      { name: 'Risk model', items: ['Churn score', 'Drivers', 'Confidence', 'Segments'] },
      { name: 'CS workflow', items: ['Intervention', 'Owner task', 'Health dashboard', 'Renewal report'] },
    ],
    architectureNote: 'Churn prediction matters when a score is paired with a clear driver and a next action.',
    hard: [
      { title: 'Risk is not one signal', detail: 'Usage, support, billing, and relationship context all matter.' },
      { title: 'Scores need explanation', detail: 'Customer success teams need to know what changed.' },
      { title: 'Interventions must be practical', detail: 'A warning is only useful if it maps to an action.' },
      { title: 'Renewal timing matters', detail: 'Risk windows need to align with account cycles.' },
    ],
    decisions: [
      { key: 'Account list', value: 'Risk is shown where CS teams already prioritize work.' },
      { key: 'Driver panel', value: 'The score includes explainable reasons.' },
      { key: 'Trend chart', value: 'Usage change is visible over time.' },
      { key: 'Suggested action', value: 'Each risk state points to a next intervention.' },
    ],
  }, 28),
  visualCaseStudy({
    id: 'recruiting-outreach-agent',
    shortName: 'Recruiting Outreach Agent',
    label: 'Recruiting AI Agent',
    clientMeta: 'Candidate matching · Outreach drafts',
    title: <>Recruiting outreach agent for <em>candidate pipelines</em>.</>,
    lede: 'A hiring pipeline dashboard with candidate cards, resume match scores, outreach drafts, and interview scheduling.',
    oneLiner: 'A recruiting workflow for teams that need faster shortlists and more personalized candidate outreach.',
    categories: ['automation', 'document-review', 'growth-revenue-automation', 'ai-agents-workflow-automation'],
    visual: 'recruiting-outreach-agent',
    icon: 'UserSearch',
    alt: 'AI recruiting workflow screening candidates and drafting personalized outreach.',
    results: [
      { value: <em>Match</em>, label: 'Candidate score', sub: 'Resume fit is structured' },
      { value: <em>Email</em>, label: 'Outreach draft', sub: 'Personalized message ready' },
      { value: <em>Slot</em>, label: 'Scheduling', sub: 'Interview times suggested' },
      { value: <em>Review</em>, label: 'Recruiter control', sub: 'Human approves next step' },
    ],
    impact: [
      { label: 'Shortlist speed', value: 86, detail: 'Relevant candidates rise faster.' },
      { label: 'Message quality', value: 80, detail: 'Outreach references candidate evidence.' },
      { label: 'Scheduling flow', value: 78, detail: 'Interview holds are easier to propose.' },
      { label: 'Review trust', value: 84, detail: 'Scores stay attached to resume signals.' },
    ],
    problemLead: 'Recruiters need fast screening, but outreach still has to feel personal.',
    problemDetail: 'The workflow must rank candidates, explain fit, draft outreach, and help schedule without making hiring decisions opaque.',
    approachLead: 'We designed recruiting automation as reviewer-controlled pipeline support.',
    approachDetail: 'The recruiting workspace shows candidate shortlist cards, match scores, an outreach draft, and a scheduling panel.',
    bullets: ['Candidate shortlist with match scores.', 'Resume evidence tied to each score.', 'Personalized email draft.', 'Calendar scheduling panel.'],
    architecture: [
      { name: 'Hiring inputs', items: ['Resumes', 'Job criteria', 'Recruiter notes', 'Calendar'] },
      { name: 'Screening prep', items: ['Parsing', 'Skill matching', 'Experience mapping', 'Availability'] },
      { name: 'Outreach agent', items: ['Match score', 'Evidence', 'Email draft', 'Interview suggestion'] },
      { name: 'Recruiter handoff', items: ['Shortlist', 'Approve email', 'Schedule hold', 'ATS note'] },
    ],
    architectureNote: 'Recruiting agents should accelerate screening and outreach while preserving recruiter judgment.',
    hard: [
      { title: 'Hiring is high stakes', detail: 'Scores need evidence and human review.' },
      { title: 'Personalization matters', detail: 'Outreach should reference real candidate context.' },
      { title: 'Criteria vary by role', detail: 'Rubrics and fit signals need role-specific configuration.' },
      { title: 'Scheduling is operational', detail: 'Calendar steps need to work with recruiter availability.' },
    ],
    decisions: [
      { key: 'Candidate cards', value: 'Fit signals and evidence are scan-friendly.' },
      { key: 'Outreach draft', value: 'Recruiters start from a personalized message.' },
      { key: 'Calendar panel', value: 'Scheduling is included in the workflow.' },
      { key: 'Human approval', value: 'The agent recommends actions instead of deciding alone.' },
    ],
    related: [
      { id: 'agentic-resume-screener', tag: 'Recruiting agents', title: 'Agentic resume screening workflow.', metric: 'OCR intake' },
      { id: 'ai-inbox-triage', tag: 'Workflow agents', title: 'AI inbox triage and reply assistant.', metric: 'CRM synced' },
    ],
  }, 29),
  visualCaseStudy({
    id: 'retail-shelf-intelligence',
    shortName: 'Retail Shelf Intelligence',
    label: 'Computer Vision',
    clientMeta: 'Shelf monitoring · Restock alerts',
    title: <>Retail shelf intelligence for <em>restock visibility</em>.</>,
    lede: 'A computer vision dashboard that detects empty shelf spaces, misplaced products, and store-level restock alerts.',
    oneLiner: 'A shelf monitoring workflow for retail teams that need visual inventory signals before customers find empty facings.',
    categories: ['computer-vision', 'edge-ai', 'data-automation-labeling'],
    visual: 'retail-shelf-intelligence',
    icon: 'ScanEye',
    alt: 'Computer vision dashboard detecting empty retail shelves and misplaced products.',
    results: [
      { value: <em>Detect</em>, label: 'Empty spaces', sub: 'Out-of-stock facings flagged' },
      { value: <em>SKU</em>, label: 'Misplacement', sub: 'Wrong product detected' },
      { value: <em>Alert</em>, label: 'Store action', sub: 'Restock task created' },
      { value: <em>Review</em>, label: 'Human check', sub: 'Low-confidence frames routed' },
    ],
    impact: [
      { label: 'Shelf visibility', value: 88, detail: 'Empty facings become visible quickly.' },
      { label: 'Restock action', value: 84, detail: 'Alerts point to aisle and bay.' },
      { label: 'Review efficiency', value: 78, detail: 'Only uncertain detections need a human.' },
      { label: 'Store consistency', value: 80, detail: 'Product placement issues are tracked.' },
    ],
    problemLead: 'Retail teams cannot manually inspect every shelf often enough.',
    problemDetail: 'Stores need a camera-based workflow that detects empty spaces, misplaced products, and restock opportunities with reviewable evidence.',
    approachLead: 'We made visual detection actionable at the shelf level.',
    approachDetail: 'The dashboard shows a shelf camera frame, bounding boxes, out-of-stock labels, and a store alert panel.',
    bullets: ['Shelf camera frame with bounding boxes.', 'Out-of-stock and misplaced-product labels.', 'Store alert panel with aisle context.', 'Review queue for uncertain frames.'],
    architecture: [
      { name: 'Visual inputs', items: ['Shelf cameras', 'Planograms', 'SKU data', 'Store map'] },
      { name: 'Detection prep', items: ['Frame sampling', 'Object detection', 'Shelf zones', 'Confidence'] },
      { name: 'Shelf intelligence', items: ['Empty facings', 'Misplaced SKU', 'Restock priority', 'Review flags'] },
      { name: 'Store action', items: ['Task alert', 'Aisle note', 'Manager view', 'History'] },
    ],
    architectureNote: 'Retail vision systems work when detections convert into clear store tasks.',
    hard: [
      { title: 'Shelves are visually noisy', detail: 'Lighting, packaging, and partial occlusion make detection harder.' },
      { title: 'Store layouts vary', detail: 'Aisle and bay context must be configurable.' },
      { title: 'False alerts create fatigue', detail: 'Confidence and review thresholds matter.' },
      { title: 'Tasks need location', detail: 'A restock alert is useful only when staff know where to go.' },
    ],
    decisions: [
      { key: 'Camera frame', value: 'The visual centers on the actual inspection evidence.' },
      { key: 'Bounding boxes', value: 'Detected issues are localized on the shelf.' },
      { key: 'Alert panel', value: 'Vision output becomes a store action.' },
      { key: 'Review path', value: 'Low-confidence detections are routed for checking.' },
    ],
  }, 30),
  visualCaseStudy({
    id: 'corefit-pose-coach',
    shortName: 'CoreFit Pose Coach',
    label: 'On-Device Fitness AI',
    clientMeta: 'Core ML · Pose tracking',
    title: <>CoreFit on-device pose coach for <em>form feedback</em>.</>,
    lede: 'A mobile fitness app experience showing on-device pose landmarks, rep count, form score, and feedback cues.',
    oneLiner: 'A Core ML fitness workflow for users who want live exercise guidance without sending camera frames to the cloud.',
    categories: ['core-ml-on-device-ai', 'health-fitness-ai', 'edge-ai'],
    visual: 'corefit-pose-coach',
    icon: 'Smartphone',
    alt: 'Core ML fitness app showing on-device pose tracking and exercise form feedback.',
    results: [
      { value: <em>Pose</em>, label: 'Landmarks', sub: 'Skeleton overlay on-device' },
      { value: <em>Rep</em>, label: 'Counter', sub: 'Exercise progress tracked' },
      { value: <em>Form</em>, label: 'Score', sub: 'Feedback shown live' },
      { value: <em>Local</em>, label: 'Privacy', sub: 'Camera processing stays on device' },
    ],
    impact: [
      { label: 'Feedback speed', value: 86, detail: 'Form cues appear during movement.' },
      { label: 'Privacy', value: 90, detail: 'Frames stay on the device.' },
      { label: 'Exercise clarity', value: 82, detail: 'Rep count and form score are visible.' },
      { label: 'User trust', value: 80, detail: 'Feedback is simple and explainable.' },
    ],
    problemLead: 'Fitness feedback needs to be immediate, private, and easy to understand.',
    problemDetail: 'A mobile pose coach must show tracking, rep count, and form cues without overwhelming users during exercise.',
    approachLead: 'We designed the mobile surface around live form feedback.',
    approachDetail: 'The mobile interface shows pose skeleton overlay, rep count, form score, and local-processing status.',
    bullets: ['iPhone frame with pose skeleton overlay.', 'Rep counter and form score.', 'Specific feedback cues for posture.', 'On-device processing badge.'],
    architecture: [
      { name: 'Device inputs', items: ['Camera frame', 'Exercise mode', 'User settings', 'Local model'] },
      { name: 'Pose prep', items: ['Landmarks', 'Joint angles', 'Rep phase', 'Confidence'] },
      { name: 'Fitness coach', items: ['Form score', 'Rep count', 'Cue selection', 'Safety state'] },
      { name: 'Mobile feedback', items: ['Overlay', 'Voice cue', 'Progress', 'Workout log'] },
    ],
    architectureNote: 'On-device pose coaching needs tight visual feedback with privacy and latency built into the product surface.',
    hard: [
      { title: 'Movement is continuous', detail: 'Feedback must update without distracting the user.' },
      { title: 'Pose confidence varies', detail: 'Lighting, angle, and occlusion affect landmark quality.' },
      { title: 'Privacy matters', detail: 'Camera data should stay local for trust.' },
      { title: 'Cues must be simple', detail: 'Users cannot read complex explanations mid-rep.' },
    ],
    decisions: [
      { key: 'Phone frame', value: 'The visual makes the on-device experience explicit.' },
      { key: 'Skeleton overlay', value: 'Pose tracking is visible without using real user imagery.' },
      { key: 'Score and reps', value: 'Progress and quality are shown together.' },
      { key: 'Local badge', value: 'Privacy is part of the interface, not only the copy.' },
    ],
  }, 31),
  visualCaseStudy({
    id: 'defectlens-quality-inspection',
    shortName: 'DefectLens QA',
    label: 'Manufacturing Vision AI',
    clientMeta: 'Defect detection · Human review',
    title: <>DefectLens quality inspection for <em>assembly-line review</em>.</>,
    lede: 'A manufacturing QA interface that detects scratches, dents, missing parts, and anomaly confidence from product images.',
    oneLiner: 'A computer vision workflow for factories that need faster inspection while routing uncertain defects to human review.',
    categories: ['computer-vision', 'manufacturing-ai', 'risk-compliance-ai-evaluation'],
    visual: 'defectlens-quality-inspection',
    icon: 'ScanSearch',
    alt: 'Computer vision quality inspection tool detecting product defects from assembly-line images.',
    results: [
      { value: <em>Detect</em>, label: 'Defects', sub: 'Scratches and dents localized' },
      { value: <em>Conf</em>, label: 'Confidence', sub: 'Model certainty shown' },
      { value: <em>Queue</em>, label: 'Human review', sub: 'Uncertain cases escalated' },
      { value: <em>QA</em>, label: 'Audit', sub: 'Inspection history retained' },
    ],
    impact: [
      { label: 'Inspection speed', value: 86, detail: 'Obvious defects are flagged quickly.' },
      { label: 'Defect visibility', value: 88, detail: 'Issues are located on the product image.' },
      { label: 'Review efficiency', value: 82, detail: 'Human reviewers focus on uncertain cases.' },
      { label: 'QA traceability', value: 84, detail: 'Decisions can be audited later.' },
    ],
    problemLead: 'Manufacturing QA needs fast visual inspection without losing human accountability.',
    problemDetail: 'The system must detect surface defects, missing parts, and anomaly confidence while keeping review paths clear.',
    approachLead: 'We made the product image the center of the QA workflow.',
    approachDetail: 'The interface shows inspection area, bounding boxes, confidence scores, and a human review button.',
    bullets: ['Product image inspection area.', 'Defect bounding boxes and labels.', 'Confidence score for each anomaly.', 'Human review button for uncertain cases.'],
    architecture: [
      { name: 'Line inputs', items: ['Camera frames', 'Product SKU', 'QA rules', 'Shift context'] },
      { name: 'Vision prep', items: ['Detection', 'Segmentation', 'Anomaly score', 'Thresholds'] },
      { name: 'QA decision', items: ['Defect type', 'Confidence', 'Severity', 'Review route'] },
      { name: 'Manufacturing handoff', items: ['Reject bin', 'Reviewer queue', 'Audit log', 'Trend report'] },
    ],
    architectureNote: 'Manufacturing vision is useful when each defect is localized, scored, and routed to the right inspection path.',
    hard: [
      { title: 'Defects are subtle', detail: 'Scratches, dents, and missing parts can be small or partially hidden.' },
      { title: 'False rejects cost money', detail: 'Thresholds need to balance quality and yield.' },
      { title: 'Line context matters', detail: 'SKU, shift, and camera angle affect inspection logic.' },
      { title: 'Review needs evidence', detail: 'Humans need visual proof before accepting a defect decision.' },
    ],
    decisions: [
      { key: 'Inspection frame', value: 'The product image remains the evidence surface.' },
      { key: 'Confidence labels', value: 'Model certainty is visible beside detections.' },
      { key: 'Review button', value: 'Human escalation is a first-class action.' },
      { key: 'QA history', value: 'Inspection decisions can be traced by SKU and shift.' },
    ],
  }, 32),
  visualCaseStudy({
    id: 'modelops-command-center',
    shortName: 'ModelOps Command',
    label: 'MLOps System',
    clientMeta: 'Model monitoring · Retraining alerts',
    title: <>ModelOps command center for <em>production AI</em>.</>,
    lede: 'A production monitoring dashboard for tracking model drift, latency, prediction quality, and retraining signals across deployed ML workflows.',
    oneLiner: 'An MLOps dashboard for teams that need to know when deployed models are drifting, slowing down, or ready for retraining.',
    categories: ['mlops-ai-infrastructure', 'risk-compliance-ai-evaluation', 'forecasting-decision-intelligence'],
    visual: 'modelops-command-center',
    icon: 'ServerCog',
    alt: 'MLOps dashboard tracking model drift, latency, prediction quality, and retraining signals.',
    results: [
      { value: <em>Drift</em>, label: 'Monitoring', sub: 'Data shift visible' },
      { value: <em>P95</em>, label: 'Latency', sub: 'Performance tracked' },
      { value: <em>Quality</em>, label: 'Prediction health', sub: 'Confidence changes surfaced' },
      { value: <em>Retrain</em>, label: 'Recommendation', sub: 'Next action suggested' },
    ],
    impact: [
      { label: 'Drift visibility', value: 88, detail: 'Distribution changes are easier to catch.' },
      { label: 'Latency control', value: 82, detail: 'Slowdowns surface before users complain.' },
      { label: 'Quality tracking', value: 84, detail: 'Confidence and prediction health are monitored.' },
      { label: 'Ops response', value: 86, detail: 'Retraining recommendations become actionable.' },
    ],
    problemLead: 'Models degrade in production when teams cannot see drift, latency, and quality together.',
    problemDetail: 'Operators need version context, live metrics, alerts, and retraining guidance in one command center.',
    approachLead: 'We designed ModelOps around operational decisions.',
    approachDetail: 'The dashboard combines drift and latency charts, model version selector, confidence health, and retraining recommendations.',
    bullets: ['Drift and latency charts.', 'Model version selector.', 'Confidence and prediction-quality tracking.', 'Retraining recommendation with owner.'],
    architecture: [
      { name: 'Production signals', items: ['Predictions', 'Features', 'Latency logs', 'Ground truth'] },
      { name: 'Monitoring prep', items: ['Drift checks', 'Quality metrics', 'Version context', 'Thresholds'] },
      { name: 'Ops decision', items: ['Alerts', 'Retrain trigger', 'Rollback risk', 'Owner'] },
      { name: 'MLOps handoff', items: ['Dashboard', 'Incident note', 'Retrain job', 'Release log'] },
    ],
    architectureNote: 'Model monitoring is useful when metrics lead to a clear production action.',
    hard: [
      { title: 'Drift has many forms', detail: 'Input distribution, label quality, and output confidence can move independently.' },
      { title: 'Latency affects product trust', detail: 'Model quality is not enough when response times degrade.' },
      { title: 'Retraining needs evidence', detail: 'Teams need to know why a retrain is recommended.' },
      { title: 'Versions matter', detail: 'Alerts must connect to deployed model and prompt versions.' },
    ],
    decisions: [
      { key: 'Metric grouping', value: 'Drift, latency, and quality are visible together.' },
      { key: 'Version selector', value: 'Operators can compare deployed models.' },
      { key: 'Retrain state', value: 'The dashboard recommends the next action.' },
      { key: 'Alert history', value: 'Operational decisions remain traceable.' },
    ],
  }, 33),
  visualCaseStudy({
    id: 'privacyscan-redaction',
    shortName: 'PrivacyScan',
    label: 'On-Device Privacy AI',
    clientMeta: 'Core ML · Local redaction',
    title: <>PrivacyScan on-device redaction for <em>sensitive fields</em>.</>,
    lede: 'An iOS privacy scanner that detects sensitive fields, applies redaction toggles, and processes documents locally.',
    oneLiner: 'A Core ML privacy workflow for users who need to find and redact PII without uploading documents to cloud services.',
    categories: ['core-ml-on-device-ai', 'risk-compliance-ai-evaluation', 'edge-ai'],
    visual: 'privacyscan-redaction',
    icon: 'ShieldCheck',
    alt: 'Core ML privacy app detecting and redacting sensitive information on-device.',
    results: [
      { value: <em>PII</em>, label: 'Detection', sub: 'Sensitive fields highlighted' },
      { value: <em>Local</em>, label: 'Processing', sub: 'No cloud upload required' },
      { value: <em>Toggle</em>, label: 'Redaction', sub: 'User controls each field' },
      { value: <em>Export</em>, label: 'Safe copy', sub: 'Redacted document created' },
    ],
    impact: [
      { label: 'Privacy trust', value: 90, detail: 'Sensitive documents stay local.' },
      { label: 'Review clarity', value: 84, detail: 'PII fields are highlighted before redaction.' },
      { label: 'User control', value: 82, detail: 'Each redaction can be toggled.' },
      { label: 'Export confidence', value: 80, detail: 'The final copy is visibly sanitized.' },
    ],
    problemLead: 'Sensitive documents need AI help, but uploading them can create privacy risk.',
    problemDetail: 'Users need local detection, clear field highlights, and redaction controls before exporting a safe version.',
    approachLead: 'We made local processing visible in the mobile UI.',
    approachDetail: 'The privacy scanner shows document preview, highlighted PII, redaction toggles, and an on-device processing badge.',
    bullets: ['Document preview with highlighted PII.', 'Redaction toggles for each field.', 'Local processing badge.', 'Export button for safe copies.'],
    architecture: [
      { name: 'Device inputs', items: ['Document scan', 'Text regions', 'User settings', 'Local model'] },
      { name: 'Privacy prep', items: ['OCR', 'PII detection', 'Field grouping', 'Confidence'] },
      { name: 'Redaction decision', items: ['Sensitive fields', 'Toggle state', 'Preview', 'Warnings'] },
      { name: 'Safe output', items: ['Redacted PDF', 'Local save', 'Share sheet', 'Audit note'] },
    ],
    architectureNote: 'On-device privacy tools need to show users what is detected and what leaves the device.',
    hard: [
      { title: 'PII detection must be careful', detail: 'False negatives can expose sensitive data.' },
      { title: 'Users need control', detail: 'Automatic redaction should still be editable.' },
      { title: 'Local models are constrained', detail: 'Performance and accuracy must fit mobile hardware.' },
      { title: 'Export must be clear', detail: 'Users need confidence that the shared copy is redacted.' },
    ],
    decisions: [
      { key: 'Phone preview', value: 'The redaction experience is shown as a real mobile workflow.' },
      { key: 'PII highlights', value: 'Detected sensitive fields are visible before export.' },
      { key: 'Toggle controls', value: 'Users can decide what to redact.' },
      { key: 'Local badge', value: 'On-device processing is surfaced as a trust signal.' },
    ],
  }, 34),
  visualCaseStudy({
    id: 'autolabel-data-studio',
    shortName: 'AutoLabel Studio',
    label: 'Data Labeling Workflow',
    clientMeta: 'AI pre-labels · Human review',
    title: <>AutoLabel data studio for <em>reviewable datasets</em>.</>,
    lede: 'A dataset labeling interface with AI pre-labels, confidence scores, approve or edit actions, and a human review queue.',
    oneLiner: 'A data operations workflow for teams building labeled datasets faster while keeping uncertain samples under human review.',
    categories: ['data-automation-labeling', 'computer-vision', 'ai-agents-workflow-automation'],
    visual: 'autolabel-data-studio',
    icon: 'Tags',
    alt: 'AI data labeling studio pre-labeling images and routing uncertain samples for review.',
    results: [
      { value: <em>Pre</em>, label: 'AI labels', sub: 'Suggested classes attached' },
      { value: <em>Conf</em>, label: 'Confidence', sub: 'Uncertain samples surfaced' },
      { value: <em>Edit</em>, label: 'Human review', sub: 'Labels remain correctable' },
      { value: <em>Set</em>, label: 'Dataset', sub: 'Approved samples exported' },
    ],
    impact: [
      { label: 'Labeling speed', value: 86, detail: 'Obvious samples move faster.' },
      { label: 'Quality control', value: 84, detail: 'Low-confidence samples enter review.' },
      { label: 'Reviewer focus', value: 82, detail: 'Humans spend time on uncertain cases.' },
      { label: 'Dataset readiness', value: 80, detail: 'Approved labels are exportable.' },
    ],
    problemLead: 'Dataset labeling is slow when every sample starts from a blank state.',
    problemDetail: 'Teams need AI pre-labels, confidence scores, and human review actions so speed does not reduce label quality.',
    approachLead: 'We made AI labeling a review queue, not an automatic final answer.',
    approachDetail: 'The labeling studio shows image grid, suggested labels, confidence scores, and approve or edit actions.',
    bullets: ['Image grid with suggested labels.', 'Confidence score for every pre-label.', 'Approve and edit actions.', 'Human review queue for uncertain samples.'],
    architecture: [
      { name: 'Dataset sources', items: ['Images', 'Existing labels', 'Class taxonomy', 'Review rules'] },
      { name: 'Pre-labeling', items: ['Model inference', 'Confidence', 'Class mapping', 'Uncertainty'] },
      { name: 'Review decision', items: ['Approve', 'Edit', 'Escalate', 'Sample priority'] },
      { name: 'Dataset delivery', items: ['Export labels', 'Audit log', 'Training split', 'Quality report'] },
    ],
    architectureNote: 'Auto-labeling works when the model handles obvious samples and humans focus on uncertainty.',
    hard: [
      { title: 'Label quality matters', detail: 'Fast labels can hurt training if confidence is not reviewed.' },
      { title: 'Taxonomies evolve', detail: 'Class definitions need to stay configurable.' },
      { title: 'Uncertainty is valuable', detail: 'Low-confidence samples should be routed, not hidden.' },
      { title: 'Audits need history', detail: 'Edits and approvals should remain traceable.' },
    ],
    decisions: [
      { key: 'Image grid', value: 'Reviewers see many samples without losing context.' },
      { key: 'Confidence scores', value: 'Uncertainty drives queue priority.' },
      { key: 'Approve/edit actions', value: 'Human correction is built into the surface.' },
      { key: 'Export state', value: 'Approved samples become usable dataset output.' },
    ],
  }, 35),
  visualCaseStudy({
    id: 'fleetcam-safety-intelligence',
    shortName: 'FleetCam Safety',
    label: 'Fleet Vision AI',
    clientMeta: 'Dashcam analysis · Driver coaching',
    title: <>FleetCam safety intelligence for <em>driver risk</em>.</>,
    lede: 'A fleet safety dashboard with dashcam frames, lane alerts, distraction flags, trip risk scores, and driver coaching insights.',
    oneLiner: 'A computer vision workflow for fleet teams that need to detect risky driving events and coach drivers with evidence.',
    categories: ['computer-vision', 'edge-ai', 'risk-compliance-ai-evaluation'],
    visual: 'fleetcam-safety-intelligence',
    icon: 'Camera',
    alt: 'Computer vision fleet safety dashboard detecting driver risk events from dashcam footage.',
    results: [
      { value: <em>Lane</em>, label: 'Alert', sub: 'Drift events detected' },
      { value: <em>Flag</em>, label: 'Distraction', sub: 'Risk behavior surfaced' },
      { value: <em>Score</em>, label: 'Trip risk', sub: 'Events summarized' },
      { value: <em>Coach</em>, label: 'Insight', sub: 'Manager notes generated' },
    ],
    impact: [
      { label: 'Risk visibility', value: 86, detail: 'Unsafe events are detected from video.' },
      { label: 'Coaching quality', value: 82, detail: 'Notes are tied to dashcam evidence.' },
      { label: 'Trip review speed', value: 80, detail: 'Managers see prioritized events.' },
      { label: 'Safety tracking', value: 84, detail: 'Scores and flags are auditable.' },
    ],
    problemLead: 'Fleet safety teams cannot manually review every minute of dashcam footage.',
    problemDetail: 'They need event detection, risk labels, trip summaries, and coaching notes tied to clear visual evidence.',
    approachLead: 'We designed the dashboard around reviewed driving events.',
    approachDetail: 'The visual shows a road video frame, lane alert, distraction flag, trip risk score, and coaching insight panel.',
    bullets: ['Road video frame with event labels.', 'Lane alert and distraction flag.', 'Trip risk score.', 'Driver coaching insights for manager review.'],
    architecture: [
      { name: 'Road inputs', items: ['Dashcam video', 'Telematics', 'Trip route', 'Driver profile'] },
      { name: 'Vision prep', items: ['Frame sampling', 'Lane detection', 'Distraction cues', 'Event confidence'] },
      { name: 'Safety decision', items: ['Risk event', 'Trip score', 'Severity', 'Coaching note'] },
      { name: 'Fleet handoff', items: ['Manager review', 'Driver coaching', 'Incident log', 'Trend report'] },
    ],
    architectureNote: 'Fleet vision systems need to convert long video streams into reviewable, coachable safety events.',
    hard: [
      { title: 'Video volume is high', detail: 'The system has to prioritize events instead of creating another review burden.' },
      { title: 'Safety labels need evidence', detail: 'Drivers and managers need to see the frame behind the flag.' },
      { title: 'Context affects risk', detail: 'Road conditions and trip context can change interpretation.' },
      { title: 'Coaching must be fair', detail: 'Insights should support improvement, not unexplained penalties.' },
    ],
    decisions: [
      { key: 'Dashcam frame', value: 'The event evidence stays visible.' },
      { key: 'Risk labels', value: 'Detected events are named and prioritized.' },
      { key: 'Trip score', value: 'Managers can scan the overall risk level.' },
      { key: 'Coaching panel', value: 'The output leads to a practical follow-up.' },
    ],
  }, 36),
  visualCaseStudy({
    id: 'fieldvision-knowledge-search',
    shortName: 'FieldVision Search',
    label: 'Multimodal Search',
    clientMeta: 'Field photos · OCR snippets',
    title: <>FieldVision knowledge search for <em>inspection evidence</em>.</>,
    lede: 'A multimodal search interface that finds field photos, inspection notes, OCR snippets, and source-backed results.',
    oneLiner: 'A field knowledge workflow for teams that need to search across photos, documents, notes, and inspection evidence.',
    categories: ['document-ai-knowledge-search', 'computer-vision', 'ai-assistants-knowledge-chat'],
    visual: 'fieldvision-knowledge-search',
    icon: 'SearchCheck',
    alt: 'Multimodal field search system finding inspection photos, notes, and document evidence.',
    results: [
      { value: <em>Photo</em>, label: 'Visual results', sub: 'Field images are searchable' },
      { value: <em>OCR</em>, label: 'Text snippets', sub: 'Labels and forms indexed' },
      { value: <em>Source</em>, label: 'Evidence cards', sub: 'Answers stay grounded' },
      { value: <em>Filter</em>, label: 'Search control', sub: 'Site and date narrowing' },
    ],
    impact: [
      { label: 'Evidence retrieval', value: 88, detail: 'Photos and notes become searchable.' },
      { label: 'Answer trust', value: 86, detail: 'Source cards support each result.' },
      { label: 'Field speed', value: 80, detail: 'Inspectors find prior evidence faster.' },
      { label: 'Context quality', value: 84, detail: 'OCR and photo signals combine.' },
    ],
    problemLead: 'Field evidence is split across photos, notes, forms, and reports.',
    problemDetail: 'Teams need to search inspection evidence by text and image context, then verify results through source cards.',
    approachLead: 'We designed search as a multimodal evidence workspace.',
    approachDetail: 'The interface shows search bar, photo results, OCR snippets, and cited source cards.',
    bullets: ['Search bar with field-specific filters.', 'Photo results and inspection notes.', 'OCR text snippets from field documents.', 'Source cards for answer verification.'],
    architecture: [
      { name: 'Field sources', items: ['Photos', 'Inspection notes', 'Forms', 'Reports'] },
      { name: 'Index prep', items: ['OCR', 'Embeddings', 'Metadata', 'Geo context'] },
      { name: 'Search answer', items: ['Photo match', 'Snippet', 'Source card', 'Confidence'] },
      { name: 'Field handoff', items: ['Evidence packet', 'Saved search', 'Reviewer note', 'Export'] },
    ],
    architectureNote: 'Multimodal field search works when photos, OCR text, and source cards are returned together.',
    hard: [
      { title: 'Evidence is mixed media', detail: 'Photos, notes, and documents require different indexing paths.' },
      { title: 'Field metadata matters', detail: 'Site, date, asset, and inspector context improve search quality.' },
      { title: 'OCR can be noisy', detail: 'Forms, signs, and handwritten notes need confidence handling.' },
      { title: 'Results need proof', detail: 'Users need to inspect the source before acting.' },
    ],
    decisions: [
      { key: 'Photo results', value: 'Visual evidence is treated as first-class search output.' },
      { key: 'OCR snippets', value: 'Extracted text appears beside the image result.' },
      { key: 'Source cards', value: 'Each answer can be verified.' },
      { key: 'Field filters', value: 'Users can scope results by operational context.' },
    ],
  }, 37),
  visualCaseStudy({
    id: 'receipt-scanner',
    aliases: ['on-device-receipt-scanner'],
    shortName: 'Receipt Scanner',
    label: 'On-Device Document AI',
    clientMeta: 'Expense capture · Local extraction',
    title: <>On-device receipt scanner for <em>expense data</em>.</>,
    lede: 'A mobile receipt scanner that extracts merchant, date, total, tax, and line items directly on-device.',
    oneLiner: 'A Core ML receipt workflow for users who need quick expense capture without sending every receipt to a remote service.',
    categories: ['core-ml-on-device-ai', 'document-ai-knowledge-search', 'data-automation-labeling'],
    visual: 'receipt-scanner',
    icon: 'ReceiptText',
    alt: 'Core ML receipt scanner extracting structured expense data directly on-device.',
    results: [
      { value: <em>Scan</em>, label: 'Receipt capture', sub: 'Phone camera input' },
      { value: <em>Fields</em>, label: 'Extraction', sub: 'Merchant, date, tax, total' },
      { value: <em>Lines</em>, label: 'Items', sub: 'Expense details parsed' },
      { value: <em>Export</em>, label: 'Handoff', sub: 'Structured data leaves app' },
    ],
    impact: [
      { label: 'Capture speed', value: 86, detail: 'Receipts become structured quickly.' },
      { label: 'Privacy', value: 84, detail: 'Extraction can run locally.' },
      { label: 'Expense quality', value: 80, detail: 'Fields are reviewed before export.' },
      { label: 'Workflow fit', value: 82, detail: 'Data can move to finance tools.' },
    ],
    problemLead: 'Expense capture is tedious when receipt data has to be entered manually.',
    problemDetail: 'Users need a phone workflow that scans receipts, extracts fields, supports quick review, and exports structured records.',
    approachLead: 'We made receipt extraction a mobile review flow.',
    approachDetail: 'The receipt scanner shows phone capture, extracted field cards, line items, and an export button.',
    bullets: ['Phone frame with receipt scan.', 'Extracted merchant, date, total, tax, and line items.', 'Reviewable field cards.', 'Export button for expense handoff.'],
    architecture: [
      { name: 'Device inputs', items: ['Receipt image', 'Camera frame', 'Expense rules', 'Local model'] },
      { name: 'Extraction prep', items: ['OCR', 'Field detection', 'Line items', 'Confidence'] },
      { name: 'Review decision', items: ['Merchant', 'Date', 'Tax', 'Total'] },
      { name: 'Expense handoff', items: ['CSV export', 'Accounting sync', 'User approval', 'Receipt archive'] },
    ],
    architectureNote: 'Receipt scanning needs clean extraction and quick user review before expense export.',
    hard: [
      { title: 'Receipts vary wildly', detail: 'Thermal prints, photos, tax formats, and line items all differ.' },
      { title: 'Totals must be correct', detail: 'Expense reports depend on accurate tax and total fields.' },
      { title: 'Mobile capture is imperfect', detail: 'Blur, shadows, and angle affect OCR.' },
      { title: 'Export needs structure', detail: 'Finance tools need normalized records, not screenshots.' },
    ],
    decisions: [
      { key: 'Mobile frame', value: 'The experience is shown where capture happens.' },
      { key: 'Field cards', value: 'Users can review each extracted value.' },
      { key: 'Line-item support', value: 'The workflow goes beyond simple totals.' },
      { key: 'Export state', value: 'The end of the workflow is a usable expense record.' },
    ],
  }, 38),
  visualCaseStudy({
    id: 'evalforge-quality-bench',
    shortName: 'EvalForge Bench',
    label: 'AI Quality Bench',
    clientMeta: 'Model comparison · Regression testing',
    title: <>EvalForge AI quality bench for <em>model releases</em>.</>,
    lede: 'A model comparison and regression testing dashboard with Model A vs Model B results, quality scores, and deployment readiness.',
    oneLiner: 'An evaluation bench for teams comparing model versions before deploying changes to production AI workflows.',
    categories: ['mlops-ai-infrastructure', 'risk-compliance-ai-evaluation'],
    visual: 'evalforge-quality-bench',
    icon: 'ClipboardCheck',
    alt: 'AI evaluation bench comparing model versions, test results, and deployment readiness.',
    results: [
      { value: <em>A/B</em>, label: 'Model compare', sub: 'Versions evaluated side by side' },
      { value: <em>Tests</em>, label: 'Result table', sub: 'Case outcomes visible' },
      { value: <em>Score</em>, label: 'Quality', sub: 'Readiness summarized' },
      { value: <em>Ship</em>, label: 'Recommendation', sub: 'Deployment decision supported' },
    ],
    impact: [
      { label: 'Comparison clarity', value: 88, detail: 'Model versions are easier to judge.' },
      { label: 'Regression control', value: 86, detail: 'Failed tests are visible before release.' },
      { label: 'Deployment confidence', value: 84, detail: 'Quality scores support go or no-go decisions.' },
      { label: 'Auditability', value: 80, detail: 'Test history stays attached to the version.' },
    ],
    problemLead: 'Teams need to compare model versions before a change reaches users.',
    problemDetail: 'A model that wins on one score can regress on safety, latency, cost, or domain-specific test cases.',
    approachLead: 'We designed EvalForge as a deployment readiness bench.',
    approachDetail: 'The dashboard shows Model A vs Model B comparison, test result table, quality score, and deployment recommendation.',
    bullets: ['Model A vs Model B comparison.', 'Test result table with failed cases.', 'Quality score for release readiness.', 'Deployment recommendation and review state.'],
    architecture: [
      { name: 'Eval sources', items: ['Model versions', 'Test cases', 'Expected outputs', 'Risk rules'] },
      { name: 'Benchmark run', items: ['Scoring', 'Latency', 'Cost', 'Regression checks'] },
      { name: 'Release decision', items: ['Quality score', 'Failed cases', 'Risk flags', 'Recommendation'] },
      { name: 'Deployment handoff', items: ['Approval', 'Release note', 'Version log', 'Rollback plan'] },
    ],
    architectureNote: 'Evaluation benches are valuable when comparison results produce a clear release decision.',
    hard: [
      { title: 'One score is not enough', detail: 'Quality, safety, latency, and cost can pull in different directions.' },
      { title: 'Tests need ownership', detail: 'Domain cases must be curated and updated over time.' },
      { title: 'Regressions hide in details', detail: 'Averages can mask failed cases that matter.' },
      { title: 'Deployment needs accountability', detail: 'Approvals should connect to the exact evaluation run.' },
    ],
    decisions: [
      { key: 'Side-by-side models', value: 'Version comparison is the primary visual structure.' },
      { key: 'Failed cases', value: 'Regressions are visible and actionable.' },
      { key: 'Readiness score', value: 'The bench summarizes deployment risk.' },
      { key: 'Release recommendation', value: 'The dashboard gives teams a clear next step.' },
    ],
  }, 39),
]

export const CASE_STUDIES: CaseStudy[] = [...BASE_CASE_STUDIES, ...NEW_PROJECT_CASE_STUDIES]

export function getCaseStudy(caseId: string | undefined) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.id === caseId || caseStudy.aliases?.includes(caseId ?? '')) ?? CASE_STUDIES[0]
}

export function CaseStudyCardVisual({ caseStudy, mode = 'card' }: { caseStudy: CaseStudy; mode?: 'card' | 'hero' }) {
  const visual = caseStudy.cardVisual ?? caseStudy.previewVisual ?? caseStudy.coverVisual

  if (caseStudy.heroVisual) {
    return (
      <img
        src={caseStudy.heroVisual.src}
        alt={caseStudy.heroVisual.alt}
        width="1600"
        height="1000"
        loading={mode === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }

  if (visual) {
    return (
      <ProjectVisual
        visual={visual}
        title={caseStudy.shortName}
        alt={caseStudy.alt}
        mode={mode}
      />
    )
  }

  return (
    <ProjectVisual
      visual="ai-quality-guardrails"
      title={caseStudy.shortName}
      alt={`${caseStudy.shortName} AI workflow preview`}
      mode={mode}
    />
  )
}

export function CaseStudyLabel({ caseStudy }: { caseStudy: CaseStudy }) {
  const icon = iconForCaseStudy(caseStudy)

  return (
    <span className="case__project case__project--with-icon" translate="no">
      <ProjectIcon name={icon} size={15} />
      {caseStudy.label ?? caseStudy.shortName}
    </span>
  )
}

export function CaseStudyCategoryTags({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case__tags">
      {caseStudy.categories.map((categoryId) => {
        const category = getCaseCategory(categoryId)
        return <span key={category.id} className="case__tag">{category.shortName}</span>
      })}
    </div>
  )
}

function iconForCaseStudy(caseStudy: CaseStudy): ProjectIconName {
  if (caseStudy.icon) return caseStudy.icon
  if (caseStudy.categories.includes('voice-ai') || caseStudy.categories.includes('voice-ai-conversation-intelligence')) return 'PhoneCall'
  if (caseStudy.categories.includes('document-review') || caseStudy.categories.includes('document-ai-knowledge-search')) return 'FileSearch'
  if (caseStudy.categories.includes('chatbot') || caseStudy.categories.includes('ai-assistants-knowledge-chat')) return 'MessageCircle'
  if (caseStudy.categories.includes('python-scripts') || caseStudy.categories.includes('data-automation-labeling')) return 'TableProperties'
  if (caseStudy.categories.includes('mvp-saas') || caseStudy.categories.includes('growth-revenue-automation')) return 'Rocket'
  if (caseStudy.categories.includes('mlops-ai-infrastructure')) return 'ServerCog'
  if (caseStudy.categories.includes('computer-vision')) return 'ScanEye'

  return 'Workflow'
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
  const selectedIcon = iconForCaseStudy(selectedCase)

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
            <a href="/projects">Projects</a>
            <span>/</span>
            <span translate="no">{selectedCase.shortName}</span>
          </div>

          <div className="cs-hero__kicker">
            <div className="eyebrow">Case study · {selectedCase.index} / {CASE_STUDIES.length.toString().padStart(2, '0')}</div>
            <div className="cs-hero__project-label">
              <ProjectIcon name={selectedIcon} size={18} />
              <span>{selectedCase.label ?? selectedCase.clientMeta}</span>
            </div>
          </div>
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
            {(selectedCase.coverVisual || selectedCase.heroVisual) && (
              <figure className="cs-hero__visual" aria-label={selectedCase.alt ?? `${selectedCase.shortName} curated visual`}>
                <CaseStudyCardVisual caseStudy={selectedCase} mode="hero" />
              </figure>
            )}
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
            <div className="case-picker__label case-picker__label--categories">Find related work</div>
            <CaseCategoryMenu label="Choose a workflow" />
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
