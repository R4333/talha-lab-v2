import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { ServicesPage } from '../components/services'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/services')({
  head: () => {
    const pageSeo = seo({
      title: 'AI Automation Services - Chatbots, Scripts, MVP SaaS and Voice AI',
      description:
        'AI automation services by Talha Turab: automations, chatbots, Python scripts, MVP SaaS products, voice AI, and fractional AI build support.',
      path: '/services',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Automation Services',
          provider: {
            '@type': 'Person',
            name: 'Talha Turab',
            url: SITE_URL,
          },
          areaServed: 'Worldwide',
          serviceType: [
            'AI automations',
            'Chatbots',
            'Python scripts',
            'MVP SaaS products',
            'Voice AI',
            'Fractional AI builder',
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
      <main id="main">
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

    if (page === 'projects') {
      navigate({ to: '/projects' })
      return
    }

    if (page === 'case') {
      navigate({ to: '/case-studies/$caseId', params: { caseId: 'thalamus' } })
      return
    }

    navigate({ to: '/' })
  }
}
