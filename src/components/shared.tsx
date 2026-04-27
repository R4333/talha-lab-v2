import { Link } from '@tanstack/react-router'

import { SITE_EMAIL, contactHref } from '../utils/seo'

export type SitePage = 'home' | 'services' | 'case'

export type NavigateToPage = (page: SitePage) => void

// Arrow icon
export const Arrow = ({ size = 14, className = 'arrow' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
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
  return (
    <nav className="nav">
      <Link className="nav__brand" to="/">
        <BrandMark />
        <span>Talha Turab<span style={{ color: "var(--fg-3)", marginLeft: 6, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em" }}>/ AI ENGINEERING</span></span>
      </Link>
      <div className="nav__links">
        <Link className="nav__link" data-active={page === "home"} to="/">Work</Link>
        <Link className="nav__link" data-active={page === "services"} to="/services">Services</Link>
        <Link className="nav__link" data-active={page === "case"} to="/case-studies/$caseId" params={{ caseId: 'thalamus' }}>Case studies</Link>
        <a className="nav__link" href="/#about">About</a>
        <a className="btn btn--accent nav__cta" href="/#book">
          Book a call <Arrow />
        </a>
      </div>
      <details className="nav__mobile">
        <summary className="nav__menu" aria-label="Toggle navigation menu">
          <span />
          <span />
        </summary>
        <div className="nav__mobile-panel">
          <Link className="nav__link" data-active={page === "home"} to="/">Work</Link>
          <Link className="nav__link" data-active={page === "services"} to="/services">Services</Link>
          <Link className="nav__link" data-active={page === "case"} to="/case-studies/$caseId" params={{ caseId: 'thalamus' }}>Case studies</Link>
          <a className="nav__link" href="/#about">About</a>
          <a className="btn btn--accent nav__cta" href="/#book">
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
    { name: "Thalamus", style: "serif" },
    { name: "Alethia", style: "serif", italic: true },
    { name: "Retina", style: "sans" },
    { name: "Northwind", style: "mono" },
    { name: "Helix Labs", style: "serif" },
  ];
  const tickerLogos = [...logos, ...logos, ...logos];

  const getLogoStyle = (logo: (typeof logos)[number]) => ({
    fontFamily: logo.style === "mono" ? "var(--font-mono)" : logo.style === "sans" ? "var(--font-sans)" : "var(--font-serif)",
    fontStyle: logo.italic ? "italic" : "normal",
    fontSize: logo.style === "mono" ? 16 : logo.style === "sans" ? 18 : 22,
    fontWeight: logo.style === "sans" ? 500 : 400,
    letterSpacing: logo.style === "mono" ? "0.04em" : "-0.02em",
    textTransform: logo.style === "mono" ? "uppercase" : "none",
    fontVariationSettings: logo.italic ? '"SOFT" 100, "WONK" 1' : "normal",
  });

  return (
    <div className="logos">
      <div className="container">
        <div className="logos__label tiny-mono">Trusted by founders & teams shipping AI to production</div>
        <div className="logos__viewport" aria-label="Client logos">
          <div className="logos__track">
            {tickerLogos.map((l, i) => (
              <div key={`${l.name}-${i}`} className="logo-mark" style={getLogoStyle(l)} aria-hidden={i >= logos.length}>
                <span className="logo-mark__dot" style={{ background: l.style === "serif" && l.italic ? "var(--accent)" : "var(--fg-3)" }} />
                {l.name}
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
              Independent AI engineering for founders, agencies, and teams shipping production AI.
            </p>
            <div className="mt-24" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="hero__status"><span className="hero__pulse" />Booking Q2 — 1 slot left</span>
            </div>
          </div>
          <div className="footer__col">
            <h5>Pages</h5>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies/$caseId" params={{ caseId: 'thalamus' }}>Case studies</Link>
            <a href="/#about">About</a>
          </div>
          <div className="footer__col">
            <h5>Services</h5>
            <a href="/services#cap-02">RAG systems</a>
            <a href="/services#cap-03">AI agents</a>
            <a href="/services#cap-04">LLM apps</a>
            <a href="/services#cap-06">MLOps</a>
            <a href="/services#cap-08">Fractional AI</a>
          </div>
          <div className="footer__col">
            <h5>Contact</h5>
            <a href={contactHref()}>{SITE_EMAIL}</a>
            <a href={contactHref('Booking a 30-minute AI engineering call')}>Book a call ↗</a>
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
