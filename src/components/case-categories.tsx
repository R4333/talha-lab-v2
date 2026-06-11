import { ArrowUpRight } from './shared'
import { ProjectIcon, type ProjectIconName } from './case-study-visuals'

export type CaseCategoryId =
  | 'automation'
  | 'chatbot'
  | 'python-scripts'
  | 'mvp-saas'
  | 'voice-ai'
  | 'document-review'
  | 'ai-agents-workflow-automation'
  | 'ai-assistants-knowledge-chat'
  | 'document-ai-knowledge-search'
  | 'voice-ai-conversation-intelligence'
  | 'computer-vision'
  | 'core-ml-on-device-ai'
  | 'mlops-ai-infrastructure'
  | 'forecasting-decision-intelligence'
  | 'growth-revenue-automation'
  | 'generative-media-creator-tools'
  | 'risk-compliance-ai-evaluation'
  | 'data-automation-labeling'
  | 'edge-ai'
  | 'health-fitness-ai'
  | 'manufacturing-ai'

export type CaseCategory = {
  id: CaseCategoryId
  name: string
  shortName: string
  summary: string
  proof: string
  icon: ProjectIconName
}

export const CASE_CATEGORIES: CaseCategory[] = [
  {
    id: 'automation',
    name: 'Automations',
    shortName: 'Automation',
    summary: 'Repeatable work turned into a reliable workflow, dashboard, or internal tool.',
    proof: 'Best when a team is losing hours to copy-paste, review, routing, or reporting.',
    icon: 'Workflow',
  },
  {
    id: 'chatbot',
    name: 'Chatbot',
    shortName: 'Chatbot',
    summary: 'Support and internal assistants that answer from the right company material.',
    proof: 'Best when customers or staff keep asking the same document-heavy questions.',
    icon: 'MessageCircle',
  },
  {
    id: 'python-scripts',
    name: 'Python Scripts',
    shortName: 'Python',
    summary: 'Small scripts that clean data, connect tools, run reports, or power a workflow.',
    proof: 'Best when the work is too important for spreadsheets and too small for a full app.',
    icon: 'TableProperties',
  },
  {
    id: 'mvp-saas',
    name: 'MVP SaaS',
    shortName: 'MVP SaaS',
    summary: 'Lean SaaS builds that prove the product, workflow, and buyer story quickly.',
    proof: 'Best when a founder needs a usable first version, not a six-month build.',
    icon: 'Rocket',
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    shortName: 'Voice AI',
    summary: 'Voice, audio, and conversation tools for review, routing, and decision support.',
    proof: 'Best when calls, recordings, or spoken interactions contain the business signal.',
    icon: 'Mic',
  },
  {
    id: 'document-review',
    name: 'Document Review',
    shortName: 'Documents',
    summary: 'Contract, PDF, and knowledge-base tools that make buried details easy to act on.',
    proof: 'Best when important answers live in long documents nobody has time to read.',
    icon: 'FileSearch',
  },
  {
    id: 'ai-agents-workflow-automation',
    name: 'AI Agents & Workflow Automation',
    shortName: 'AI Agents',
    summary: 'Agentic systems that classify work, draft actions, route tasks, and keep humans in control.',
    proof: 'Best when a repeatable business process needs judgment, handoffs, and auditability.',
    icon: 'Workflow',
  },
  {
    id: 'ai-assistants-knowledge-chat',
    name: 'AI Assistants & Knowledge Chat',
    shortName: 'Assistants',
    summary: 'Assistants that answer questions from internal context, documents, and tool data.',
    proof: 'Best when teams need fast answers with source context and clear escalation paths.',
    icon: 'BotMessageSquare',
  },
  {
    id: 'document-ai-knowledge-search',
    name: 'Document AI & Knowledge Search',
    shortName: 'Document AI',
    summary: 'Parsing, extraction, OCR, comparison, and retrieval systems for document-heavy work.',
    proof: 'Best when important decisions depend on fields, clauses, citations, or policy changes.',
    icon: 'FileSearch',
  },
  {
    id: 'voice-ai-conversation-intelligence',
    name: 'Voice AI & Conversation Intelligence',
    shortName: 'Voice Intel',
    summary: 'Voice, call, and meeting systems that extract next steps, signals, and follow-up actions.',
    proof: 'Best when calls contain revenue, support, or scheduling data the team cannot review manually.',
    icon: 'PhoneCall',
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    shortName: 'Vision',
    summary: 'AI systems that analyze images, video, screenshots, camera feeds, and inspection data.',
    proof: 'Best when quality, inventory, safety, or evidence is visible but hard to review at scale.',
    icon: 'ScanEye',
  },
  {
    id: 'core-ml-on-device-ai',
    name: 'Core ML & On-Device AI',
    shortName: 'On-device',
    summary: 'Mobile AI workflows that run locally for privacy, speed, or offline use.',
    proof: 'Best when sensitive data or live camera input should stay on the device.',
    icon: 'Smartphone',
  },
  {
    id: 'mlops-ai-infrastructure',
    name: 'MLOps & AI Infrastructure',
    shortName: 'MLOps',
    summary: 'Monitoring, evaluation, versioning, and operations for AI systems in production.',
    proof: 'Best when model quality, drift, latency, cost, and release risk need constant visibility.',
    icon: 'ServerCog',
  },
  {
    id: 'forecasting-decision-intelligence',
    name: 'Forecasting & Decision Intelligence',
    shortName: 'Forecasting',
    summary: 'Predictive systems that turn business data into risk, demand, revenue, or planning signals.',
    proof: 'Best when teams have data but still make important calls from instinct.',
    icon: 'TrendingUp',
  },
  {
    id: 'growth-revenue-automation',
    name: 'Growth & Revenue Automation',
    shortName: 'Revenue',
    summary: 'Automation for lead routing, churn prevention, outreach, CRM updates, and sales follow-up.',
    proof: 'Best when revenue signals are stuck inside inboxes, calls, spreadsheets, or manual handoffs.',
    icon: 'Target',
  },
  {
    id: 'generative-media-creator-tools',
    name: 'Generative Media & Creator Tools',
    shortName: 'Creator Tools',
    summary: 'Creative workflows for hooks, scripts, captions, variants, audio, and video production.',
    proof: 'Best when creators or marketers need more tested output without losing editorial control.',
    icon: 'Clapperboard',
  },
  {
    id: 'risk-compliance-ai-evaluation',
    name: 'Risk, Compliance & AI Evaluation',
    shortName: 'Risk & Eval',
    summary: 'Guardrails, review queues, policy checks, regression tests, and risk-scored AI workflows.',
    proof: 'Best when AI output needs evidence, approvals, and measurable quality controls.',
    icon: 'ShieldCheck',
  },
  {
    id: 'data-automation-labeling',
    name: 'Data Automation & Labeling',
    shortName: 'Data Ops',
    summary: 'Data cleanup, labeling, validation, KPI reporting, and human review workflows.',
    proof: 'Best when messy operational data needs to become a useful table, label set, or dashboard.',
    icon: 'DatabaseZap',
  },
  {
    id: 'edge-ai',
    name: 'Edge AI',
    shortName: 'Edge AI',
    summary: 'AI workflows designed for local hardware, constrained devices, and near-source processing.',
    proof: 'Best when latency, connectivity, privacy, or deployment cost makes cloud-only AI impractical.',
    icon: 'Cpu',
  },
  {
    id: 'health-fitness-ai',
    name: 'Health/Fitness AI',
    shortName: 'Health AI',
    summary: 'Health, revenue cycle, fitness, and coaching workflows with careful review boundaries.',
    proof: 'Best when sensitive workflows need clear status, evidence, and user-friendly feedback.',
    icon: 'Activity',
  },
  {
    id: 'manufacturing-ai',
    name: 'Manufacturing AI',
    shortName: 'Manufacturing',
    summary: 'Inspection, anomaly detection, QA review, and production-floor AI workflows.',
    proof: 'Best when defects, delays, or review volume create cost in physical operations.',
    icon: 'Factory',
  },
]

export function getCaseCategory(categoryId: string | undefined) {
  return CASE_CATEGORIES.find((category) => category.id === categoryId) ?? CASE_CATEGORIES[0]
}

export function CaseCategoryNav({ activeId, variant = 'grid' }: { activeId?: string; variant?: 'grid' | 'compact' }) {
  return (
    <div className={`case-categories case-categories--${variant}`} aria-label="Case study categories">
      {CASE_CATEGORIES.map((category) => (
        <a
          key={category.id}
          className="case-category"
          data-active={category.id === activeId}
          href={`/case-studies/category/${category.id}`}
        >
          <ProjectIcon name={category.icon} size={58} className="case-category__icon" />
          <span>{category.shortName}</span>
          <strong>{category.name}</strong>
          <small>{category.summary}</small>
          <i aria-hidden="true"><ArrowUpRight size={13} /></i>
        </a>
      ))}
    </div>
  )
}

export function CaseCategoryMenu({
  activeId,
  label = 'Category directory',
}: {
  activeId?: string
  label?: string
}) {
  const activeCategory = CASE_CATEGORIES.find((category) => category.id === activeId)

  return (
    <details className="category-menu">
      <summary className="category-menu__summary">
        <span>{label}</span>
        <strong>{activeCategory ? activeCategory.name : 'Choose a business problem'}</strong>
        <small>{activeCategory ? activeCategory.summary : 'Start with the kind of workflow you want to improve, then see the closest work.'}</small>
      </summary>
      <div className="category-menu__options" aria-label="Case study categories">
        {CASE_CATEGORIES.map((category) => (
          <a
            key={category.id}
            className="category-menu__option"
            data-active={category.id === activeId}
            href={`/case-studies/category/${category.id}`}
          >
            <ProjectIcon name={category.icon} size={22} className="category-menu__icon" />
            <span>{category.shortName}</span>
            <strong>{category.name}</strong>
            <small>{category.summary}</small>
            <i aria-hidden="true"><ArrowUpRight size={13} /></i>
          </a>
        ))}
      </div>
    </details>
  )
}
