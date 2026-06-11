function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

function normalizeSiteUrl(value: string | undefined) {
  return trimTrailingSlash(value || 'https://talhaturab.ai')
}

export const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL)
export const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'Talha Turab'
export const SITE_EMAIL = import.meta.env.VITE_SITE_EMAIL || 'hi@talhaturab.ai'
export const CONTACT_URL = 'https://www.upwork.com/freelancers/~013b9c6ef838feea61'
export const DEFAULT_IMAGE = new URL(
  import.meta.env.VITE_DEFAULT_OG_IMAGE || '/assets/talha.jpg',
  SITE_URL,
).toString()

export function contactHref(subject?: string) {
  return CONTACT_URL
}

type SeoInput = {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
}

export function seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = 'Talha Turab, independent AI automation builder',
  type = 'website',
}: SeoInput) {
  const canonical = new URL(path, SITE_URL).toString()

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: canonical }],
  }
}

export function jsonLd(data: unknown) {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(data),
  }
}
