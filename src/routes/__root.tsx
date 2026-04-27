/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'

import stylesUrl from '../styles/styles.css?url'
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, jsonLd } from '../utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0a0a0a' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@380;400;500;600&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,360..480,30..100,0..1;1,9..144,360..480,30..100,0..1&family=JetBrains+Mono:wght@400;500&display=swap',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' },
      { rel: 'apple-touch-icon', href: '/assets/logo.svg' },
      { rel: 'stylesheet', href: stylesUrl },
    ],
    scripts: [
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      }),
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Talha Turab',
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        jobTitle: 'AI/ML Engineer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'Retrieval-Augmented Generation',
          'AI Agents',
          'MLOps',
          'LLM Applications',
        ],
      }),
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" data-density="spacious">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
