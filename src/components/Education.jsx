import { useEffect, useRef } from 'react'

const EXPERIENCE = [
  {
    role: 'AI & Data Science Intern',
    org: 'TVK Technologies',
    period: '16 Jun 2026 – 30 Jun 2026',
    points: [
      'Developed an AI-driven Smart Examination Monitoring System in Python, building core modules for real-time candidate activity monitoring during online examinations.',
      'Authored technical documentation for system modules and collaborated with the development team on feature design and code integration.',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Government College of Engineering, Erode',
    period: '2024 – 2027',
    cgpa: '8.66 CGPA (as of current semester)',
  },
]

const ACHIEVEMENTS = [
  'Earned 18 additional credits toward the B.Tech (Honours) qualification.',
  'Ranked among national top performers scoring 95% in NPTEL Human-Computer Interaction.',
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
          <span className="section-label">Experience &amp; Education</span>
          <h2 className="section-title">My Journey</h2>
          <div className="section-divider" />
        </div>

        <div className="edu-timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="edu-card exp-card">
              <div className="edu-marker" />
              <div className="edu-body">
                <span className="edu-period">{exp.period}</span>
                <h3 className="edu-degree">{exp.role}</h3>
                <p className="edu-school">{exp.org}</p>
                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j} className="exp-point">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

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

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((achievement, i) => (
            <div key={i} className="achievement-card">
              <div className="achievement-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <p className="achievement-text">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-timeline {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
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

        .exp-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .exp-point {
          position: relative;
          padding-left: 18px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .exp-point::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: var(--gradient-primary);
        }

        .achievements-grid {
          max-width: 900px;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .achievement-card:hover {
          border-color: var(--accent-secondary-border);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .achievement-icon {
          width: 36px;
          height: 36px;
          min-width: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-secondary-dim);
          border: 1px solid var(--accent-secondary-border);
          border-radius: 8px;
          color: var(--accent-secondary);
        }

        .achievement-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .edu-card { padding: 20px 24px; }
          .achievements-grid { grid-template-columns: 1fr; margin-top: 32px; }
        }
      `}</style>
    </section>
  )
}
