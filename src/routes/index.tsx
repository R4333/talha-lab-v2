import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { HomePage } from '../components/home'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/')({
  head: () => {
    const pageSeo = seo({
      title: 'Talha Turab - Production AI Engineer for Founders',
      description:
        'Independent AI/ML engineer helping founders ship production AI systems, RAG, agents, LLM apps and MLOps that move revenue, cost and speed.',
      path: '/',
      type: 'profile',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Talha Turab AI Engineering',
          url: SITE_URL,
          description:
            'Independent AI engineering for founders, agencies and teams shipping production AI.',
          areaServed: 'Worldwide',
          founder: {
            '@type': 'Person',
            name: 'Talha Turab',
          },
          serviceType: [
            'RAG systems',
            'AI agents',
            'LLM application development',
            'MLOps',
            'Machine learning model development',
          ],
        }),
      ],
    }
  },
  component: HomeRoute,
})

function HomeRoute() {
  const navigate = useSiteNavigate()

  return (
    <>
      <Nav page="home" navigate={navigate} />
      <main>
        <HomePage navigate={navigate} />
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
