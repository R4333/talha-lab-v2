import { ArrowUpRight } from './shared'

export type CaseCategoryId = 'automation' | 'chatbot' | 'python-scripts' | 'mvp-saas' | 'voice-ai' | 'document-review'

export type CaseCategory = {
  id: CaseCategoryId
  name: string
  shortName: string
  summary: string
  proof: string
}

export const CASE_CATEGORIES: CaseCategory[] = [
  {
    id: 'automation',
    name: 'Automations',
    shortName: 'Automation',
    summary: 'Repeatable work turned into a reliable workflow, dashboard, or internal tool.',
    proof: 'Best when a team is losing hours to copy-paste, review, routing, or reporting.',
  },
  {
    id: 'chatbot',
    name: 'Chatbot',
    shortName: 'Chatbot',
    summary: 'Support and internal assistants that answer from the right company material.',
    proof: 'Best when customers or staff keep asking the same document-heavy questions.',
  },
  {
    id: 'python-scripts',
    name: 'Python Scripts',
    shortName: 'Python',
    summary: 'Small scripts that clean data, connect tools, run reports, or power a workflow.',
    proof: 'Best when the work is too important for spreadsheets and too small for a full app.',
  },
  {
    id: 'mvp-saas',
    name: 'MVP SaaS',
    shortName: 'MVP SaaS',
    summary: 'Lean SaaS builds that prove the product, workflow, and buyer story quickly.',
    proof: 'Best when a founder needs a usable first version, not a six-month build.',
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    shortName: 'Voice AI',
    summary: 'Voice, audio, and conversation tools for review, routing, and decision support.',
    proof: 'Best when calls, recordings, or spoken interactions contain the business signal.',
  },
  {
    id: 'document-review',
    name: 'Knowledge Intelligence',
    shortName: 'Knowledge',
    summary: 'Contract, PDF, and knowledge-base tools that make buried details easy to act on.',
    proof: 'Best when important answers live in long documents nobody has time to read.',
  },
]

export function getCaseCategory(categoryId: string | undefined) {
  return CASE_CATEGORIES.find((category) => category.id === categoryId) ?? CASE_CATEGORIES[0]
}

export function CaseCategoryNav({ activeId }: { activeId?: string }) {
  return (
    <div className="case-categories" aria-label="Case study categories">
      {CASE_CATEGORIES.map((category) => (
        <a
          key={category.id}
          className="case-category"
          data-active={category.id === activeId}
          href={`/case-studies/category/${category.id}`}
        >
          <span>{category.shortName}</span>
          <strong>{category.name}</strong>
          <i aria-hidden="true"><ArrowUpRight size={13} /></i>
        </a>
      ))}
    </div>
  )
}
