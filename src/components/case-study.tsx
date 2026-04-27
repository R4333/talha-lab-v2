import { CTA } from './home'
import { Arrow, Footer, type NavigateToPage } from './shared'

type CaseStudy = {
  id: string
  index: string
  shortName: string
  client: string
  clientMeta: string
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
  problem: React.ReactNode[]
  approach: React.ReactNode[]
  bullets: string[]
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
    client: 'Thalamus Health',
    clientMeta: 'Series A · Healthtech · 80k members',
    title: <>From a 14-person <em>support queue</em> to a 24/7 medical knowledge agent.</>,
    lede:
      'Thalamus is a Series A digital-health platform serving 80,000 members. Their support load was doubling every quarter. We replaced a brittle FAQ chatbot with a production RAG system grounded in their internal protocols, EHR notes and policy docs, and shipped it through HIPAA review in 12 weeks.',
    engagement: 'Sprint + 6mo retainer',
    engagementMeta: '12 weeks build · ongoing MLOps',
    role: 'Lead AI engineer',
    roleMeta: 'Solo build · embedded with Eng',
    year: '2025',
    yearMeta: 'Q1 - Q2, ongoing',
    resultsLabel: 'Results · 6 months post-launch',
    resultsNote: 'verified by client finance',
    results: [
      { value: <em>92%</em>, label: 'Auto-resolution', sub: 'Up from 14% on legacy bot' },
      { value: <em>$840k</em>, label: 'Annual savings', sub: 'Net of LLM costs' },
      { value: <>10<em>x</em></>, label: 'Query spike absorbed', sub: 'Open-enrollment week' },
      { value: <em>0</em>, label: 'PHI violations', sub: 'Audit-clean since launch' },
    ],
    problem: [
      <>Thalamus's support team had grown from 4 to 14 in 18 months and was still missing SLAs. <strong>The legacy FAQ bot was deflecting only 14% of queries</strong> and was actively making things worse by quoting out-of-date procedures.</>,
      <>Members were frustrated. Engineering had tried two rounds of vendor RAG products; neither passed HIPAA review, neither beat the FAQ bot on accuracy.</>,
      <>The CTO's brief was specific: <strong>build something they could put their name on, that does not lie, survives an audit, and pays for itself in 12 months.</strong></>,
    ],
    approach: [
      <>I started with a one-week paid discovery: shadowed the queue, talked to support agents, classified 1,400 historical tickets, and mapped the existing bot's failure modes.</>,
      <>The conclusion: <strong>this was not an LLM problem, it was a retrieval problem.</strong> Truth lived in Notion, Confluence, SharePoint and a custom CMS with no reconciliation layer.</>,
      <>Plan: build unified ingestion, ground retrieval with citations, add a multi-stage eval harness, and keep humans in the loop for anything PHI-adjacent.</>,
    ],
    bullets: [
      'Unified ingest from Notion, Confluence, SharePoint and the internal CMS, with diff-tracking for deprecated content.',
      'Hybrid retrieval with citation-mandatory output, so answers cannot ship without source grounding.',
      'HIPAA-safe redaction layer in front of every LLM call. PHI never leaves the VPC.',
      'Nightly eval harness over 800 golden queries with Slack regression alerts.',
      'Human-in-the-loop escalation for clinical-decision intent classifiers.',
    ],
    architecture: [
      { title: '[ 01 ] Sources', name: 'Knowledge ingest', items: ['Notion API', 'Confluence', 'SharePoint', 'Internal CMS'] },
      { title: '[ 02 ] Index', name: 'Hybrid retrieval', items: ['BM25', 'Dense vectors', 'Reranker', 'Diff tracker'] },
      { title: '[ 03 ] Reasoning', name: 'LLM + guardrails', items: ['GPT-4o-mini', 'PHI redactor', 'Citation enforcer', 'Intent classifier'], accent: true },
      { title: '[ 04 ] Surface', name: 'Member chat + ops', items: ['Member web app', 'Agent assist', 'Eval dashboard', 'Slack escalation'] },
    ],
    architectureNote: <>The whole stack runs inside Thalamus's VPC. <strong>No member data, PHI, or transcript content ever touches my infrastructure.</strong> Eval runs nightly against a frozen golden set; any retrieval regression fires a Slack alert.</>,
    codeTitle: 'Citation-enforced response contract',
    code: <>
      <span className="k">class</span> GroundedResponse(BaseModel):{'\n'}
      {'  '}answer: str{'\n'}
      {'  '}citations: list[Citation]{'\n'}
      {'  '}confidence: Literal[<span className="k">"high"</span>, <span className="k">"med"</span>, <span className="k">"low"</span>]{'\n'}
      {'  '}intent: ClinicalIntent
    </>,
    outcome: [
      <>The system shipped in 12 weeks. We launched to 10% of members, ramped to 100% over 4 weeks, and hit <strong>92% auto-resolution by week 6</strong>.</>,
      <>During open enrollment it absorbed a 10x spike in query volume with no degradation in latency or accuracy.</>,
      <>Six months on, the system has zero PHI violations, zero rolled-back deploys, and the eval harness has caught 4 silent regressions before members saw them.</>,
    ],
    quote: 'Talha shipped a production RAG system in 12 weeks that survived our HIPAA audit on the first try. Best money we have spent.',
    quoteBy: 'Sarah Mendez, VP Engineering, Thalamus Health',
  },
  {
    id: 'alethia',
    index: '02',
    shortName: 'Alethia',
    client: 'Alethia',
    clientMeta: 'Seed · Legal AI · Contract automation',
    title: <>An <em>agent</em> that drafts contracts in 90 seconds and will not hallucinate a clause.</>,
    lede:
      'Alethia needed a contract-drafting agent that could work from precedent libraries, client playbooks and clause policies without inventing legal language. We shipped a multi-step workflow with strict retrieval, citation checks and human approval gates in 6 weeks.',
    engagement: 'Fixed sprint',
    engagementMeta: '6 weeks build · founder handover',
    role: 'AI product engineer',
    roleMeta: 'Architecture · workflow · evals',
    year: '2025',
    yearMeta: 'Q3 sprint',
    resultsLabel: 'Results · first 90 days',
    resultsNote: 'measured in production workflow',
    results: [
      { value: <>14<em>x</em></>, label: 'Faster drafts', sub: 'Down from 22 min to 90 sec' },
      { value: <em>0</em>, label: 'Hallucinated clauses', sub: 'Across 90-day audit sample' },
      { value: <em>68%</em>, label: 'Manual review saved', sub: 'Paralegal time per draft' },
      { value: <em>6wk</em>, label: 'Time to ship', sub: 'MVP to production' },
    ],
    problem: [
      <>The prototype could draft a contract, but it invented clause language whenever source coverage was thin. <strong>That made it unusable for a legal workflow.</strong></>,
      <>The founders had a tight timeline and no tolerance for a black-box model. Every draft needed traceable precedent, policy checks and a clean handoff to human reviewers.</>,
      <>The core product question became: can an agent draft fast while making uncertainty visible enough for lawyers to trust it?</>,
    ],
    approach: [
      <>I broke the drafting flow into explicit steps: classify deal type, retrieve precedent, select clause templates, draft section-by-section, run policy checks, then route exceptions to review.</>,
      <>The agent could not write unsupported clauses. If retrieval confidence fell below threshold, it had to ask for human input rather than improvise.</>,
      <>We built a small eval set from historical contracts and measured clause accuracy, citation coverage, policy violations and review time before release.</>,
    ],
    bullets: [
      'Multi-agent drafting flow with explicit tool contracts and deterministic checkpoints.',
      'Citation-grounded retrieval over precedent documents, client playbooks and clause policies.',
      'Policy checker that blocks disallowed fallback language before the draft reaches users.',
      'Human approval queue for low-confidence clauses and non-standard deal terms.',
      'Eval harness covering clause selection, citation coverage and redline review time.',
    ],
    architecture: [
      { title: '[ 01 ] Inputs', name: 'Matter context', items: ['Deal intake', 'Client playbook', 'Precedents', 'Clause bank'] },
      { title: '[ 02 ] Retrieve', name: 'Grounding layer', items: ['pgvector', 'Metadata filters', 'Reranking', 'Citation spans'] },
      { title: '[ 03 ] Draft', name: 'Agent workflow', items: ['LangGraph', 'Tool contracts', 'Policy checks', 'Human gates'], accent: true },
      { title: '[ 04 ] Review', name: 'Legal surface', items: ['Draft editor', 'Redlines', 'Audit trail', 'Export'] },
    ],
    architectureNote: <>The system treats unsupported generation as a product failure, not an acceptable model behavior. <strong>Every clause has either a citation, a policy reason, or a review flag.</strong></>,
    codeTitle: 'Drafting guardrail',
    code: <>
      <span className="k">if</span> clause.confidence &lt; MIN_CONFIDENCE:{'\n'}
      {'  '}return HumanReview(reason=<span className="k">"weak_grounding"</span>){'\n'}
      <span className="k">if</span> not clause.citations:{'\n'}
      {'  '}raise UnsupportedClauseError()
    </>,
    outcome: [
      <>The first production version shipped in 6 weeks and reduced average first-draft time from 22 minutes to <strong>90 seconds</strong>.</>,
      <>The founder replaced two contractor workflows while keeping a human checkpoint for non-standard deal terms.</>,
      <>The 90-day audit found zero hallucinated clauses in accepted drafts because unsupported sections were blocked or routed to review.</>,
    ],
    quote: 'Most engineers hand you a pile of code and a doc. Talha handed us a system, an eval harness and a workflow lawyers could trust.',
    quoteBy: 'Daniel Okafor, Founder & CEO, Alethia',
  },
  {
    id: 'retina',
    index: '03',
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
  return CASE_STUDIES.find((caseStudy) => caseStudy.id === caseId) ?? CASE_STUDIES[0]
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
          <h1 className="h-display" style={{ maxWidth: 1100 }}>
            {selectedCase.title}
          </h1>
          <p className="lede cs-hero__lede mt-32">{selectedCase.lede}</p>

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

      <section>
        <div className="container">
          <div className="cs-section">
            <div className="cs-section__label">[ 03 ] Architecture</div>
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
            <div className="cs-section__label">[ 04 ] Outcome</div>
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
