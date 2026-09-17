import { useEffect, useRef, useState } from 'react'

const TYPING_TITLES = [
  'Computer Networking Enthusiast',
  'Information Technology Student',
  'Linux Enthusiast',
]

export default function Hero({ onPreviewResume }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const containerRef = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    const currentTitle = TYPING_TITLES[titleIndex]
    let timeout

    if (!deleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80)
    } else if (!deleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTitleIndex((titleIndex + 1) % TYPING_TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timeout = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <div ref={ref} className="hero-content reveal">
        <span className="hero-label">Final-Year B.Tech IT Student</span>
        <h1 className="hero-name">Surya P</h1>
        <div className="hero-subtitle">
          <span className="hero-type-text">
            {TYPING_TITLES[titleIndex].substring(0, charIndex)}
            <span className="hero-cursor">|</span>
          </span>
        </div>
        <p className="hero-desc">
          Passionate about computer networks and the Linux operating system —
          learning how devices talk to each other and how to keep them secure.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <button onClick={onPreviewResume} className="btn-secondary" style={{ cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Preview Resume
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/surya26-spec" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/surya-p-60b464374" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:sur24imt61l@gmail.com" className="social-icon" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
          background: var(--bg-primary);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
          text-align: center;
        }

        .hero-label {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-name {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 1.0;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: var(--text-secondary);
          margin-bottom: 32px;
          min-height: 2em;
          font-weight: 400;
        }

        .hero-type-text {
          font-weight: 500;
          color: var(--text-primary);
        }

        .hero-cursor {
          display: inline-block;
          color: var(--text-muted);
          font-weight: 300;
          animation: blink 0.8s step-end infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 540px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          transition: var(--transition);
          border: none;
        }

        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          background: var(--dark);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: var(--bg-primary);
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .social-icon:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-mouse {
          width: 22px;
          height: 36px;
          border: 1.5px solid var(--border);
          border-radius: 11px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-dot {
          width: 2px;
          height: 6px;
          border-radius: 2px;
          background: var(--text-muted);
          animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 20px 60px; }
          .hero-name { letter-spacing: -2px; }
          .hero-desc { font-size: 0.95rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 300px; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
