import { useEffect, useRef } from 'react'

const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Government College of Engineering, Erode',
    period: '2024 – 2027',
    cgpa: '8.58 CGPA',
  },
]

export default function Education() {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">My Academic Journey</h2>
          <div className="section-divider" />
        </div>

        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-marker" />
              <div className="edu-body">
                <span className="edu-period">{edu.period}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <span className="edu-cgpa">{edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-timeline {
          max-width: 600px;
          margin: 0 auto;
        }

        .edu-card {
          display: flex;
          gap: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 32px;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .edu-card:hover {
          border-color: var(--accent-primary-border);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), var(--glow-primary);
        }

        .edu-marker {
          width: 14px;
          height: 14px;
          min-width: 14px;
          border-radius: 50%;
          margin-top: 5px;
          background: var(--gradient-primary);
          box-shadow: 0 0 12px var(--accent-primary);
        }

        .edu-period {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .edu-school {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .edu-cgpa {
          display: inline-block;
          padding: 5px 14px;
          background: var(--accent-primary-dim);
          color: var(--accent-primary);
          border: 1px solid var(--accent-primary-border);
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        @media (max-width: 768px) {
          .edu-card { padding: 20px 24px; }
        }
      `}</style>
    </section>
  )
}
