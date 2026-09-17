import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onPreviewResume }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onScrollSpy = () => {
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScrollSpy, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScrollSpy)
    }
  }, [])

  const handleClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleClick('#hero') }}>
          Surya P
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-resume-li">
            <a href="/Resume.pdf" className="nav-resume-btn" onClick={(e) => { e.preventDefault(); setMenuOpen(false); onPreviewResume() }}>
              Resume
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: var(--transition);
        }

        .navbar.scrolled {
          border-bottom-color: var(--border);
          padding: 14px 24px;
        }

        .navbar-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--text-primary);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-links a {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
          position: relative;
          padding: 4px 0;
          letter-spacing: 0.3px;
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--text-primary);
          transition: var(--transition);
        }

        .navbar-links a:hover {
          color: var(--text-primary);
        }

        .navbar-links a:hover::after,
        .navbar-links a.active::after {
          width: 100%;
        }

        .navbar-links a.active {
          color: var(--text-primary);
        }

        .nav-resume-li {
          margin-left: 4px;
        }

        .nav-resume-btn {
          padding: 8px 20px !important;
          border-radius: 6px !important;
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
          font-weight: 600 !important;
          font-size: 0.78rem !important;
          border: 1px solid var(--text-primary) !important;
          transition: var(--transition) !important;
        }

        .nav-resume-btn::after {
          display: none !important;
        }

        .nav-resume-btn:hover {
          background: transparent !important;
          color: var(--text-primary) !important;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
          z-index: 1001;
        }

        .menu-toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--text-primary);
          transition: var(--transition);
          transform-origin: center;
        }

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        @media (max-width: 768px) {
          .menu-toggle { display: flex; }

          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: var(--bg-primary);
            border-left: 1px solid var(--border);
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 32px 32px;
            gap: 0;
            transition: var(--transition);
          }

          .navbar-links.open { right: 0; }

          .navbar-links a {
            display: block;
            padding: 12px 0;
            font-size: 0.9rem;
            border-bottom: 1px solid var(--border);
            width: 100%;
          }

          .navbar-links a::after { display: none; }

          .nav-resume-li {
            margin-left: 0;
            margin-top: 16px;
          }

          .nav-resume-btn {
            width: 100%;
            text-align: center;
            display: block;
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </nav>
  )
}
