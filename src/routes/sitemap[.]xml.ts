import { createFileRoute } from '@tanstack/react-router'

import { SITE_URL } from '../utils/seo'

const paths = [
  '/',
  '/services',
  '/projects',
  '/case-studies/thalamus',
  '/case-studies/aletheia',
  '/case-studies/frcm',
  '/case-studies/retina',
  '/case-studies/crayo',
  '/case-studies/musicfy',
  '/case-studies/justlisten',
  '/case-studies/study-potion',
  '/case-studies/gomoon',
  '/case-studies/revana',
  '/case-studies/trailblazer-marketing',
  '/case-studies/coversaiq',
  '/case-studies/ai-voice-system',
  '/case-studies/agentic-resume-screener',
  '/case-studies/document-retrieval-ocr',
  '/case-studies/credit-scoring',
  '/case-studies/content-safety-recommendations',
  '/case-studies/ai-inbox-triage',
  '/case-studies/invoice-po-automation',
  '/case-studies/meeting-crm-agent',
  '/case-studies/internal-knowledge-assistant',
  '/case-studies/healthcare-rcm-assistant',
  '/case-studies/voice-appointment-setter',
  '/case-studies/ai-quality-guardrails',
  '/case-studies/spreadsheet-dashboard-automation',
  '/case-studies/contract-change-monitor',
  '/case-studies/ad-creative-generator',
  '/case-studies/churn-risk-predictor',
  '/case-studies/recruiting-outreach-agent',
  '/case-studies/retail-shelf-intelligence',
  '/case-studies/corefit-pose-coach',
  '/case-studies/defectlens-quality-inspection',
  '/case-studies/modelops-command-center',
  '/case-studies/privacyscan-redaction',
  '/case-studies/autolabel-data-studio',
  '/case-studies/fleetcam-safety-intelligence',
  '/case-studies/fieldvision-knowledge-search',
  '/case-studies/receipt-scanner',
  '/case-studies/evalforge-quality-bench',
  '/case-studies/category/automation',
  '/case-studies/category/chatbot',
  '/case-studies/category/python-scripts',
  '/case-studies/category/mvp-saas',
  '/case-studies/category/voice-ai',
  '/case-studies/category/document-review',
  '/case-studies/category/ai-agents-workflow-automation',
  '/case-studies/category/ai-assistants-knowledge-chat',
  '/case-studies/category/document-ai-knowledge-search',
  '/case-studies/category/voice-ai-conversation-intelligence',
  '/case-studies/category/computer-vision',
  '/case-studies/category/core-ml-on-device-ai',
  '/case-studies/category/mlops-ai-infrastructure',
  '/case-studies/category/forecasting-decision-intelligence',
  '/case-studies/category/growth-revenue-automation',
  '/case-studies/category/generative-media-creator-tools',
  '/case-studies/category/risk-compliance-ai-evaluation',
  '/case-studies/category/data-automation-labeling',
  '/case-studies/category/edge-ai',
  '/case-studies/category/health-fitness-ai',
  '/case-studies/category/manufacturing-ai',
]

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths
          .map((path) => {
            const loc = new URL(path, SITE_URL).toString()

            return [
              '  <url>',
              `    <loc>${loc}</loc>`,
              '    <changefreq>monthly</changefreq>',
              '    <priority>0.8</priority>',
              '  </url>',
            ].join('\n')
          })
          .join('\n')

        return new Response(
          [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            urls,
            '</urlset>',
            '',
          ].join('\n'),
          {
            headers: {
              'Content-Type': 'application/xml; charset=utf-8',
            },
          },
        )
      },
    },
  },
})
