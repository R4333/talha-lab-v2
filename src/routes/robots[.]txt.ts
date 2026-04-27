import { createFileRoute } from '@tanstack/react-router'

import { SITE_URL } from '../utils/seo'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: async () => {
        return new Response(
          [
            'User-agent: *',
            'Allow: /',
            `Sitemap: ${SITE_URL}/sitemap.xml`,
            '',
          ].join('\n'),
          {
            headers: {
              'Content-Type': 'text/plain; charset=utf-8',
            },
          },
        )
      },
    },
  },
})
