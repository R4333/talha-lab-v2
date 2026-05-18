import { createFileRoute } from '@tanstack/react-router'

import { SITE_URL } from '../utils/seo'

const paths = [
  '/',
  '/services',
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
  '/case-studies/category/automation',
  '/case-studies/category/chatbot',
  '/case-studies/category/python-scripts',
  '/case-studies/category/mvp-saas',
  '/case-studies/category/voice-ai',
  '/case-studies/category/document-review',
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
