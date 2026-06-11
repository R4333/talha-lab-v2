import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { CASE_STUDIES, CaseStudyCardVisual, CaseStudyCategoryTags, CaseStudyLabel } from '../components/case-study'
import { CaseCategoryMenu } from '../components/case-categories'
import { CTA } from '../components/home'
import { Arrow, ArrowUpRight, Footer, Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

export const Route = createFileRoute('/projects')({
  head: () => {
    const pageSeo = seo({
      title: 'Projects - AI Automation Showcase by Talha Turab',
      description:
        'Browse AI automation, document AI, voice AI, computer vision, MLOps, and data workflow projects by Talha Turab.',
      path: '/projects',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projects',
          description: 'AI automation and applied AI project showcase by Talha Turab.',
          url: `${SITE_URL}/projects`,
        }),
      ],
    }
  },
  component: ProjectsRoute,
})

function ProjectsRoute() {
  const siteNavigate = useSiteNavigate()

  return (
    <>
      <Nav page="projects" navigate={siteNavigate} />
      <main id="main">
        <section className="section projects-hero">
          <div className="container">
            <div className="cs-hero__breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Projects</span>
            </div>
            <div className="projects-hero__layout">
              <div>
                <div className="eyebrow mb-24">Project showcase</div>
                <h1 className="h-display">
                  Applied AI projects, sorted by <em>workflow</em>.
                </h1>
                <p className="lede mt-32">
                  Explore the portfolio by the business problem you want to solve: faster reviews, cleaner handoffs, sharper decisions, and tools your team can actually use.
                </p>
                <div className="projects-hero__actions">
                  <a href="#all-projects" className="btn btn--accent btn--lg">
                    View all projects <Arrow />
                  </a>
                  <a href="#categories" className="btn btn--ghost btn--lg">
                    Browse categories <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-category-section" id="categories">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="eyebrow mb-24">Browse by category</div>
                <h2 className="h1">Find the closest <em>workflow</em>.</h2>
              </div>
              <p className="lede">
                Start with the workflow that feels closest to your team. Each path leads to relevant project proof, outcomes, and examples of how the work ships.
              </p>
            </div>
            <div className="projects-category-menu-wrap">
              <CaseCategoryMenu label="Browse categories" />
            </div>
          </div>
        </section>

        <section className="section" id="all-projects">
          <div className="container">
            <div className="divider-mono">
              <span>All projects</span>
              <span>{CASE_STUDIES.length} examples</span>
            </div>
            <div className="cases projects-showcase__list">
              {CASE_STUDIES.map((caseStudy) => (
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
                      <div className="case__cta mt-24">Open case <Arrow /></div>
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
