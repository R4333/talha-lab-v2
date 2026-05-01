import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { HomePage } from '../components/home'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/')({
  head: () => {
    const pageSeo = seo({
      title: 'Talha Turab - AI Automation Builder for Founders',
      description:
        'Independent AI builder helping founders ship automations, chatbots, Python scripts, MVP SaaS products, and voice AI tools.',
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
            'Independent AI automation for founders, agencies and teams shipping useful tools.',
          areaServed: 'Worldwide',
          founder: {
            '@type': 'Person',
            name: 'Talha Turab',
          },
          serviceType: [
            'AI automations',
            'Chatbots',
            'Python scripts',
            'MVP SaaS products',
            'Voice AI',
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
      <main id="main">
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
