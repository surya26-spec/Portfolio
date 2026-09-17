import { useEffect, useRef } from 'react'

const CERTIFICATIONS = [
  'NPTEL — Human-Computer Interaction (95%)',
  'NPTEL — Introduction to Industry 4.0 and Industrial Internet of Things (88%)',
  'Cisco Networking Academy — Introduction to Cybersecurity',
  'Infosys Springboard — C Programming',
  'Infosys Springboard — IoT Platforms Overview',
]

export default function Certifications() {
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
    <section id="certifications" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials</h2>
          <div className="section-divider" />
        </div>

        <div className="certs-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="cert-item">
              <div className="cert-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="cert-name">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
          text-align: left;
        }

        .cert-item:hover {
          border-color: var(--text-muted);
          transform: translateX(4px);
        }

        .cert-icon {
          width: 32px;
          height: 32px;
          min-width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
        }

        .cert-name {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .cert-item { padding: 14px 18px; }
        }
      `}</style>
    </section>
  )
}
