import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { CaseStudyPage, getCaseStudy } from '../components/case-study'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

const CASE_SEO = {
  thalamus: {
    title: 'Thalamus Case Study - Enterprise Agentic RAG Platform',
    description:
      'Enterprise-grade agentic RAG for teams that need multimodal ingestion, citation-backed retrieval, auditability, and a stronger build-vs-buy case.',
  },
  aletheia: {
    title: 'Aletheia Case Study - Multimodal Behavioral Intelligence',
    description:
      'Multimodal behavioral intelligence across visual, vocal, and linguistic analysis for emotion, tone, confidence, stress, and explainable high-stakes review.',
  },
  frcm: {
    title: 'First Rule Contract Manager Case Study - Construction Contract AI',
    description:
      'Construction-trained AI contract review with clause-linked risk, source-backed playbooks, Marten coaching, and kickoff-ready project summaries.',
  },
  retina: {
    title: 'Retina Case Study - ML Forecasting Pipeline',
    description:
      'How Talha Turab shipped a demand forecasting system that reduced stockouts by 31% and improved margin per SKU by 18%.',
  },
} as const

export const Route = createFileRoute('/case-studies/$caseId')({
  head: ({ params }) => {
    const selectedCase = getCaseStudy(params.caseId)
    const caseSeo = CASE_SEO[selectedCase.id as keyof typeof CASE_SEO] ?? CASE_SEO.thalamus
    const path = `/case-studies/${selectedCase.id}`
    const pageSeo = seo({
      title: caseSeo.title,
      description: caseSeo.description,
      path,
      type: 'article',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: caseSeo.title,
          description: caseSeo.description,
          url: `${SITE_URL}${path}`,
          author: {
            '@type': 'Person',
            name: 'Talha Turab',
            url: SITE_URL,
          },
          publisher: {
            '@type': 'Person',
            name: 'Talha Turab',
          },
        }),
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Case studies',
              item: `${SITE_URL}/#work`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: selectedCase.shortName,
              item: `${SITE_URL}${path}`,
            },
          ],
        }),
      ],
    }
  },
  component: CaseStudyRoute,
})

function CaseStudyRoute() {
  const siteNavigate = useSiteNavigate()
  const { caseId } = Route.useParams()
  const selectedCase = getCaseStudy(caseId)

  return (
    <>
      <Nav page="case" navigate={siteNavigate} />
      <main id="main">
        <CaseStudyPage
          navigate={siteNavigate}
          selectedId={selectedCase.id}
        />
      </main>
    </>
  )
}

function useSiteNavigate() {
  const navigate = useNavigate()

  return (page: SitePage) => {
    if (page === 'services') {
      navigate({ to: '/services' })
      return
    }

    if (page === 'case') {
      navigate({ to: '/case-studies/$caseId', params: { caseId: 'thalamus' } })
      return
    }

    navigate({ to: '/' })
  }
}
