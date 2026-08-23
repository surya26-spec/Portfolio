import { useEffect, useRef } from 'react'

const SOCIALS = [
  {
    label: 'Email',
    value: 'sur24imt61l@gmail.com',
    href: 'mailto:sur24imt61l@gmail.com',
    color: 'var(--accent-primary)',
    borderColor: 'rgba(var(--accent-primary-rgb), 0.25)',
    background: 'rgba(var(--accent-primary-rgb), 0.08)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/surya-ponnusaamy',
    href: 'https://www.linkedin.com/in/surya-ponnusaamy-60b464374',
    color: 'var(--accent-primary)',
    borderColor: 'rgba(var(--accent-primary-rgb), 0.25)',
    background: 'rgba(var(--accent-primary-rgb), 0.08)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/surya26-spec',
    href: 'https://github.com/surya26-spec',
    color: 'var(--accent-secondary)',
    borderColor: 'rgba(var(--accent-secondary-rgb), 0.25)',
    background: 'rgba(var(--accent-secondary-rgb), 0.08)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 6383150516',
    href: 'tel:+916383150516',
    color: 'var(--accent-tertiary)',
    borderColor: 'rgba(var(--accent-tertiary-rgb), 0.25)',
    background: 'rgba(var(--accent-tertiary-rgb), 0.08)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
        </div>

        <p className="contact-subtitle">
          I'm currently seeking software engineering roles where I can apply my
          passion for computer networking. Feel free to reach out!
        </p>

        <div className="contact-grid">
          {SOCIALS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card"
            >
              <div className="contact-card-icon" style={{ color: link.color, borderColor: link.borderColor, background: link.background }}>
                {link.icon}
              </div>
              <div>
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-value">{link.value}</span>
              </div>
            </a>
          ))}
          <a href="/Resume.pdf" download className="contact-card resume-card">
            <div className="contact-card-icon" style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary-border)', background: 'var(--accent-primary-dim)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div>
              <span className="contact-card-label">Download</span>
              <span className="contact-card-value">Resume (PDF)</span>
            </div>
          </a>
        </div>
      </div>

      <div className="footer">
        <p>Designed & Built by Surya P &copy; {new Date().getFullYear()}</p>
      </div>

      <style>{`
        .contact-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 480px;
          margin: -32px auto 48px;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .contact-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .resume-card {
          background: linear-gradient(135deg, var(--bg-card), var(--accent-primary-dim));
          border-color: var(--accent-primary-border);
        }

        .resume-card:hover {
          border-color: var(--accent-primary) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), var(--glow-primary) !important;
        }

        .contact-card-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .contact-card-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2px;
        }

        .contact-card-value {
          display: block;
          font-size: 0.85rem;
          color: var(--text-primary);
          word-break: break-all;
        }

        .footer {
          text-align: center;
          padding: 60px 24px 32px;
          border-top: 1px solid var(--border);
          margin-top: 80px;
        }

        .footer p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
