import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'

import { contactHref } from '../utils/seo'

export type SitePage = 'home' | 'projects' | 'services' | 'case'

export type NavigateToPage = (page: SitePage) => void

// Arrow icon
export const Arrow = ({ size = 14, className = 'arrow' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BrandMark = ({ className = 'nav__mark' }: { className?: string }) => (
  <span className={className} aria-hidden="true">
    <img src="/assets/logo.svg" alt="" />
  </span>
);

// Nav
export function Nav({ page, navigate }: { page: SitePage; navigate: NavigateToPage }) {
  const mobileDetailsRef = useRef<HTMLDetailsElement>(null)
  const toggleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const details = mobileDetailsRef.current
    if (!details) return

    const handleToggle = () => {
      if (details.open) {
        const firstLink = details.querySelector<HTMLElement>('.nav__mobile-panel .nav__link, .nav__mobile-panel .nav__cta')
        firstLink?.focus()
      } else {
        toggleRef.current?.focus()
      }
    }

    details.addEventListener('toggle', handleToggle)
    return () => details.removeEventListener('toggle', handleToggle)
  }, [])

  return (
    <nav className="nav">
      <Link className="nav__brand" to="/">
        <BrandMark />
        <span>Talha Turab<span translate="no" style={{ color: "var(--fg-3)", marginLeft: 6, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em" }}>/ AI AUTOMATION</span></span>
      </Link>
      <div className="nav__links">
        <Link className="nav__link" data-active={page === "home"} to="/">Work</Link>
        <Link className="nav__link" data-active={page === "projects" || page === "case"} to="/projects">Projects</Link>
        <Link className="nav__link" data-active={page === "services"} to="/services">Services</Link>
        <a className="nav__link" href="/#about">About</a>
        <a className="btn btn--accent nav__cta" href={contactHref()}>
          Book a call <Arrow />
        </a>
      </div>
      <details className="nav__mobile" ref={mobileDetailsRef}>
        <summary className="nav__menu" aria-label="Toggle navigation menu" ref={toggleRef as React.RefObject<HTMLElement>}>
          <span />
          <span />
        </summary>
        <div className="nav__mobile-panel">
          <Link className="nav__link" data-active={page === "home"} to="/">Work</Link>
          <Link className="nav__link" data-active={page === "projects" || page === "case"} to="/projects">Projects</Link>
          <Link className="nav__link" data-active={page === "services"} to="/services">Services</Link>
          <a className="nav__link" href="/#about">About</a>
          <a className="btn btn--accent nav__cta" href={contactHref()}>
            Book a call <Arrow />
          </a>
        </div>
      </details>
    </nav>
  );
}

// Logos row
export function ClientLogos() {
  const logos = [
    { name: "Levitate Data", src: "/assets/logos/levitate-data.png", slug: "levitate" },
    { name: "Thalamus", src: "/assets/logos/thalamus-mark.png", slug: "thalamus" },
    { name: "Aletheia", src: "/assets/logos/aletheia-mark.png", slug: "aletheia" },
    { name: "First Rule", src: "/assets/logos/first-rule-mark.png", slug: "first-rule" },
    { name: "Retina", src: "/assets/logos/retina-mark.png", slug: "retina" },
    { name: "Helix Labs", src: "/assets/logos/helix-labs-mark.png", slug: "helix" },
  ];
  const tickerLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logos">
      <div className="container">
        <div className="logos__label tiny-mono">Trusted by founders and teams shipping useful AI tools</div>
        <div className="logos__viewport" aria-label="Client logos">
          <div className="logos__track">
            {tickerLogos.map((l, i) => (
              <div key={`${l.name}-${i}`} className={`logo-mark logo-mark--${l.slug}`} aria-hidden={i >= logos.length}>
                <span className="logo-mark__image" aria-hidden="true">
                  <img src={l.src} alt="" loading="lazy" width="96" height="96" />
                </span>
                <span className="logo-mark__name" translate="no">{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer
export function Footer({ navigate }: { navigate: NavigateToPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <BrandMark />
              <span style={{ fontWeight: 500, fontSize: 15 }}>Talha Turab</span>
            </div>
            <p className="small" style={{ maxWidth: 300 }}>
              Independent AI automation for founders, agencies, and teams shipping useful tools.
            </p>
            <div className="mt-24" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="hero__status"><span className="hero__pulse" />Booking Q2 — 1{'\u00A0'}slot left</span>
            </div>
          </div>
          <div className="footer__col">
            <h5>Pages</h5>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <a href="/#about">About</a>
          </div>
          <div className="footer__col">
            <h5>Services</h5>
            <a href="/services#cap-01">AI chatbots</a>
            <a href="/services#cap-02">Automations</a>
            <a href="/services#cap-03">Python scripts</a>
            <a href="/services#cap-04">MVP SaaS</a>
            <a href="/services#cap-05">Voice AI</a>
          </div>
          <div className="footer__col">
            <h5>Contact</h5>
            <a href={contactHref()}>Upwork profile</a>
            <a href={contactHref('Booking a 30-minute AI automation call')}>Book a call ↗</a>
            <a href="/#work">Selected work</a>
            <a href="/services">Services</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Talha Turab</span>
          <span>Built quietly · Karachi → worldwide</span>
        </div>
      </div>
    </footer>
  );
}
