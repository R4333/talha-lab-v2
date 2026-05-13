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
    name: 'Document Review',
    shortName: 'Documents',
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
          <CategoryIcon id={category.id} />
          <span>{category.shortName}</span>
          <strong>{category.name}</strong>
          <small>{category.summary}</small>
          <i aria-hidden="true"><ArrowUpRight size={13} /></i>
        </a>
      ))}
    </div>
  )
}

function CategoryIcon({ id }: { id: CaseCategoryId }) {
  const common = {
    width: 58,
    height: 58,
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className: 'case-category__icon',
  }

  if (id === 'automation') {
    return (
      <svg {...common}>
        <circle cx="32" cy="18" r="8" />
        <path d="M32 4v5M32 27v5M18 18h-5M51 18h-5M22 8l3.5 3.5M42 28l3.5 3.5M22 28l3.5-3.5M42 8l3.5-3.5" />
        <path d="M32 32v10M16 42h32M16 42v10M32 42v10M48 42v10" />
        <path d="M9 52h14v8H9zM25 52h14v8H25zM41 52h14v8H41z" />
      </svg>
    )
  }

  if (id === 'chatbot') {
    return (
      <svg {...common}>
        <path d="M12 24c0-8 7-14 20-14s20 6 20 14-7 14-20 14H22L12 48v-13c-3-2.5-4-6.5-4-11Z" />
        <circle cx="24" cy="24" r="2.2" />
        <circle cx="32" cy="24" r="2.2" />
        <circle cx="40" cy="24" r="2.2" />
      </svg>
    )
  }

  if (id === 'python-scripts') {
    return (
      <svg {...common}>
        <path d="M18 6h21l9 9v43H18z" />
        <path d="M39 6v11h9" />
        <path d="M28 27c-4 2-6 5-6 9s2 7 6 9M36 27c4 2 6 5 6 9s-2 7-6 9" />
      </svg>
    )
  }

  if (id === 'mvp-saas') {
    return (
      <svg {...common}>
        <path d="M10 14h44v36H10z" />
        <path d="M10 22h44" />
        <path d="M18 18h.1M24 18h.1M30 18h.1" />
        <path d="M32 30 44 37 32 44 20 37z" />
        <path d="M20 37v9l12 7 12-7v-9" />
      </svg>
    )
  }

  if (id === 'voice-ai') {
    return (
      <svg {...common}>
        <path d="M32 8c-6 0-10 4-10 10v15c0 6 4 10 10 10s10-4 10-10V18c0-6-4-10-10-10Z" />
        <path d="M16 28v5c0 9 7 16 16 16s16-7 16-16v-5M32 49v9M24 58h16" />
        <path d="M8 28v8M56 28v8M13 24v16M51 24v16" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M16 6h25l9 9v43H16z" />
      <path d="M41 6v12h9M24 23h17M24 31h13M24 39h9" />
      <circle cx="43" cy="43" r="9" />
      <path d="m37 43 4 4 8-9M50 50l7 7" />
    </svg>
  )
}
