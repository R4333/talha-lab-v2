import { CASE_CATEGORIES, type CaseCategoryId } from './case-categories'
import type { ProjectIconName } from './case-study-visuals'

type CapabilityCopy = {
  title?: string
  desc?: string
  problem?: string
}

export type ServiceCapability = {
  id: CaseCategoryId
  href: string
  num: string
  title: string
  desc: string
  problem: string
  icon: ProjectIconName
}

const capabilityCopy: Partial<Record<CaseCategoryId, CapabilityCopy>> = {
  chatbot: {
    title: 'AI chatbots',
    desc: 'Customer support, internal helpdesk, and knowledge assistants that answer from trusted material.',
    problem: 'Customers or staff keep asking the same questions.',
  },
  automation: {
    title: 'Automations',
    desc: 'Tools that move data, create reports, route work, and remove repeat admin.',
    problem: 'Your team repeats the same manual task every week.',
  },
  'python-scripts': {
    title: 'Python scripts',
    desc: 'Cleanup, scraping, reports, file processing, and data handoffs for messy operations.',
    problem: 'A spreadsheet or manual process is starting to break.',
  },
  'mvp-saas': {
    title: 'MVP SaaS',
    desc: 'First-version products with the core workflow, simple UI, and buyer-ready story.',
    problem: 'You need a usable product before investing in a full team.',
  },
  'voice-ai': {
    title: 'Voice AI',
    desc: 'Voice, call, and audio tools for review, routing, summaries, and follow-up.',
    problem: 'Calls and recordings contain useful work nobody has time to review.',
  },
  'document-review': {
    title: 'Knowledge intelligence',
    desc: 'Contract, policy, PDF, and knowledge-base review with source-backed answers.',
    problem: 'Important answers are buried in documents nobody has time to read.',
  },
}

export const SERVICE_CAPABILITIES: ServiceCapability[] = CASE_CATEGORIES
  .filter((category) => category.id !== 'manufacturing-ai')
  .map((category, index) => {
    const copy = capabilityCopy[category.id]

    return {
      id: category.id,
      href: `/case-studies/category/${category.id}`,
      num: String(index + 1).padStart(2, '0'),
      title: copy?.title ?? category.name,
      desc: copy?.desc ?? category.summary,
      problem: copy?.problem ?? category.proof.replace(/^Best when\s+/i, ''),
      icon: category.icon,
    }
  })
