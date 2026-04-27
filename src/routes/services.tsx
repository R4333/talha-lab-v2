import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { ServicesPage } from '../components/services'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/services')({
  head: () => {
    const pageSeo = seo({
      title: 'AI Engineering Services - RAG, Agents, LLM Apps & MLOps',
      description:
        'AI engineering services by Talha Turab: RAG systems, AI agents, LLM apps, ML models, MLOps, AI consulting and fractional AI lead engagements.',
      path: '/services',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Engineering Services',
          provider: {
            '@type': 'Person',
            name: 'Talha Turab',
            url: SITE_URL,
          },
          areaServed: 'Worldwide',
          serviceType: [
            'AI chatbots',
            'RAG systems',
            'AI agents',
            'LLM apps',
            'ML model development',
            'MLOps',
            'AI consulting',
            'Fractional AI lead',
          ],
        }),
      ],
    }
  },
  component: ServicesRoute,
})

function ServicesRoute() {
  const navigate = useSiteNavigate()

  return (
    <>
      <Nav page="services" navigate={navigate} />
      <main>
        <ServicesPage navigate={navigate} />
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
