import { createFileRoute, useNavigate } from '@tanstack/react-router'

import { CaseStudyPage, getCaseStudy } from '../components/case-study'
import { Nav, type SitePage } from '../components/shared'
import { SITE_URL, jsonLd, seo } from '../utils/seo'

const CASE_SEO = {
  thalamus: {
    title: 'Thalamus Case Study - Document Automation Platform',
    description:
      'Document automation for teams that need source-backed answers, clear buyer proof, and a stronger buy-vs-build case.',
  },
  aletheia: {
    title: 'Aletheia Case Study - Voice and Video Review AI',
    description:
      'Voice and video review tools that help teams understand tone, confidence, stress, and high-stakes communication context.',
  },
  frcm: {
    title: 'First Rule Contract Manager Case Study - Contract Review Automation',
    description:
      'Construction contract review automation with clause-linked risk, plain-language guidance, and kickoff-ready project summaries.',
  },
  retina: {
    title: 'Retina Case Study - Sales Forecast Automation',
    description:
      'How Talha Turab shipped a sales forecast workflow that reduced stockouts by 31% and improved product margin by 18%.',
  },
  crayo: {
    title: 'Crayo Case Study - AI Short-Form Video Automation',
    description:
      'AI video product positioning for creators generating short-form videos with automatic voiceovers, dynamic subtitles, and optimized clips.',
  },
  musicfy: {
    title: 'Musicfy Case Study - AI Voice Song Generator',
    description:
      'Generative audio product positioning for AI song covers, custom voice cloning, and creator voice experimentation.',
  },
  justlisten: {
    title: 'Just Listen Case Study - Budget Audiobook Platform',
    description:
      'Audiobook product positioning for affordable listening, simple subscription access, and repeat audio habits.',
  },
  'study-potion': {
    title: 'Study Potion AI Case Study - AI Study Assistant',
    description:
      'AI study assistant positioning for personalized flashcards, notes, quizzes, and faster student practice workflows.',
  },
  gomoon: {
    title: 'GoMoon.ai Case Study - AI Economic Calendar',
    description:
      'AI-powered economic calendar positioning for traders tracking market-moving events, historical context, and alerts.',
  },
  revana: {
    title: 'Revana Case Study - AI Support Staff',
    description:
      'AI support and sales automation product story for customer questions, qualification, follow-up, and human escalation.',
  },
  'trailblazer-marketing': {
    title: 'Trailblazer Marketing Case Study - SEO Growth System',
    description:
      'SEO-led content marketing system for profitable search traffic, content briefs, publishing cadence, and growth reporting.',
  },
  coversaiq: {
    title: 'CoversaIQ Case Study - Call Center AI Platform',
    description:
      'LLM and transcription platform for call summaries, agent assist, SLA tracking, and sales or support coaching.',
  },
  'ai-voice-system': {
    title: 'AI Voice System Case Study - Realtime Voice AI',
    description:
      'Twilio WebSocket voice stack with custom VAD and NER pipelines that reduced conversational latency from 7 seconds to under 2 seconds.',
  },
  'agentic-resume-screener': {
    title: 'Agentic Resume Screener Case Study - Recruiting AI Workflow',
    description:
      'LangChain and LangGraph resume screening workflow with OCR ingestion, candidate scoring, evidence, and recruiter recommendations.',
  },
  'document-retrieval-ocr': {
    title: 'Document Retrieval OCR Case Study - Hybrid Search Automation',
    description:
      'Docling, LlamaParser, OCR, and hybrid search pipeline for document indexing and grounded operational answers.',
  },
  'credit-scoring': {
    title: 'Credit Scoring Model Case Study - Explainable Risk ML',
    description:
      'XGBoost and CatBoost credit scoring workflow with explainability reporting and 95% delinquency prediction accuracy.',
  },
  'content-safety-recommendations': {
    title: 'Content Safety Recommendations Case Study - Vision AI and Ranking',
    description:
      'Transformer vision, YOLO moderation, and recommendation engine workflow that improved short-form video engagement by 50%.',
  },
} as const

export const Route = createFileRoute('/case-studies/$caseId')({
  head: ({ params }) => {
    const selectedCase = getCaseStudy(params.caseId)
    const caseSeo = CASE_SEO[selectedCase.id as keyof typeof CASE_SEO]
    const seoTitle = selectedCase.seoTitle ?? caseSeo?.title ?? `${selectedCase.shortName} Case Study - Talha Turab`
    const seoDescription = selectedCase.seoDescription ?? caseSeo?.description ?? selectedCase.lede
    const seoImage = selectedCase.ogImage ?? (selectedCase.heroVisual?.src ? new URL(selectedCase.heroVisual.src, SITE_URL).toString() : undefined)
    const seoImageAlt = selectedCase.alt ?? selectedCase.heroVisual?.alt ?? `${selectedCase.shortName} case study visual`
    const path = `/case-studies/${selectedCase.id}`
    const pageSeo = seo({
      title: seoTitle,
      description: seoDescription,
      path,
      image: seoImage,
      imageAlt: seoImageAlt,
      type: 'article',
    })

    return {
      ...pageSeo,
      scripts: [
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: seoTitle,
          description: seoDescription,
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
              name: 'Projects',
              item: `${SITE_URL}/projects`,
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
