import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { CASE_STUDIES } from '../components/case-study'
import { CaseCategoryNav, getCaseCategory } from '../components/case-categories'
import { CTA } from '../components/home'
import { Arrow, Footer, Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/case-studies/category/$categoryId')({
  head: ({ params }) => {
    const category = getCaseCategory(params.categoryId)
    const path = `/case-studies/category/${category.id}`
    const pageSeo = seo({
      title: `${category.name} Case Studies - Talha Turab`,
      description: `${category.name} examples from Talha Turab: ${category.summary}`,
      path,
      type: 'article',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${category.name} case studies`,
          description: category.summary,
          url: `${SITE_URL}${path}`,
        }),
      ],
    }
  },
  component: CaseCategoryRoute,
})

function CaseCategoryRoute() {
  const siteNavigate = useSiteNavigate()
  const { categoryId } = Route.useParams()
  const category = getCaseCategory(categoryId)
  const cases = CASE_STUDIES.filter((caseStudy) => caseStudy.categories.includes(category.id))

  return (
    <>
      <Nav page="case" navigate={siteNavigate} />
      <main id="main">
        <section className="section" style={{ paddingTop: 160 }}>
          <div className="container">
            <div className="cs-hero__breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/case-studies/thalamus">Case Studies</a>
              <span>/</span>
              <span>{category.name}</span>
            </div>
            <div className="eyebrow mb-24">Case study category</div>
            <h1 className="h-display" style={{ maxWidth: 1000 }}>
              {category.name} <em>case studies</em>.
            </h1>
            <p className="lede mt-32">{category.summary}</p>
            <p className="body mt-16" style={{ maxWidth: 680 }}>{category.proof}</p>
            <div className="mt-48">
              <CaseCategoryNav activeId={category.id} />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="divider-mono">
              <span>{category.name}</span>
              <span>{cases.length} examples</span>
            </div>
            <div className="cases">
              {cases.map((caseStudy) => (
                <a key={caseStudy.id} className="case case--button" href={`/case-studies/${caseStudy.id}`}>
                  <div className="case__index">
                    <strong>CS / {caseStudy.index}</strong>
                    <div style={{ marginTop: 12 }}>{caseStudy.clientMeta}</div>
                  </div>
                  <div>
                    <div className="case__heading">
                      <span className="case__project" translate="no">{caseStudy.shortName}</span>
                      <h3 className="case__title">{caseStudy.title}</h3>
                    </div>
                    <p className="case__review">"{caseStudy.quote}"</p>
                    <div className="tiny-mono case__review-by">{caseStudy.quoteBy}</div>
                  </div>
                  <div className="case__cta">Open case <Arrow /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer navigate={siteNavigate} />
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
