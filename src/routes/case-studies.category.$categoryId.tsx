import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { CASE_STUDIES, CaseStudyCardVisual, CaseStudyCategoryTags, CaseStudyLabel } from '../components/case-study'
import { CaseCategoryMenu, getCaseCategory } from '../components/case-categories'
import { CTA } from '../components/home'
import { Arrow, Footer, Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/case-studies/category/$categoryId')({
  head: ({ params }) => {
    const category = getCaseCategory(params.categoryId)
    const path = `/case-studies/category/${category.id}`
    const pageSeo = seo({
      title: `${category.name} Projects - Talha Turab`,
      description: `${category.name} work by Talha Turab: ${category.summary}`,
      path,
      type: 'article',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `${category.name} projects`,
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
      <Nav page="projects" navigate={siteNavigate} />
      <main id="main">
        <section className="section" style={{ paddingTop: 160 }}>
          <div className="container">
            <div className="cs-hero__breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/projects">Projects</a>
              <span>/</span>
              <span>{category.name}</span>
            </div>
            <div className="eyebrow mb-24">Case study category</div>
            <h1 className="h-display" style={{ maxWidth: 1000 }}>
              {category.name} <em>projects</em>.
            </h1>
            <p className="lede mt-32">{category.summary}</p>
            <p className="body mt-16" style={{ maxWidth: 680 }}>{category.proof}</p>
            <div className="mt-48">
              <CaseCategoryMenu activeId={category.id} label="Find related work" />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="divider-mono">
              <span>{category.name}</span>
              <span>{cases.length} projects</span>
            </div>
            <div className="cases">
              {cases.map((caseStudy) => (
                <a key={caseStudy.id} className="case case--preview" href={`/case-studies/${caseStudy.id}`}>
                  <div className="case__copy">
                    <div className="case__index">
                      <strong>CS / {caseStudy.index}</strong>
                      <div className="case__brand-row">
                        <CaseStudyLabel caseStudy={caseStudy} />
                        <span className="case__divider" aria-hidden="true" />
                        <span className="case__product-pill">{caseStudy.clientMeta}</span>
                      </div>
                    </div>
                    <div className="case__body">
                      <div className="case__heading">
                        <h3 className="case__title">{caseStudy.title}</h3>
                      </div>
                      <p className="case__review">"{caseStudy.quote}"</p>
                      <div className="tiny-mono case__review-by">{caseStudy.quoteBy}</div>
                      <div className="case__category-tags">
                        <CaseStudyCategoryTags caseStudy={caseStudy} />
                      </div>
                      <div className="case__cta">Open case <Arrow /></div>
                    </div>
                  </div>
                  <div className="case__visual case__visual--cover">
                    <CaseStudyCardVisual caseStudy={caseStudy} />
                  </div>
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
