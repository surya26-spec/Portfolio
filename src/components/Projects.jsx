import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    title: 'Driver Drowsiness Detection System',
    desc: 'Built a computer vision system to detect driver fatigue using eye-state recognition. Used image processing and real-time monitoring to trigger alert mechanisms, improving road safety by preventing accident-prone conditions.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    gradient: 'linear-gradient(135deg, #00d4ff, #7b61ff)',
  },
  {
    title: 'AI-Based Intrusion Detection System (SecuVerse)',
    desc: 'Developed an intrusion detection system using machine learning to classify normal and malicious network traffic. Preprocessed network datasets and trained classification models for attack detection, identifying suspicious patterns and generating real-time alerts.',
    tags: ['Python', 'Machine Learning', 'Network Security'],
    gradient: 'linear-gradient(135deg, #ff3cac, #784ba0)',
  },
]

export default function Projects() {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article key={i} className="project-card">
              <div className="project-glow" style={{ background: project.gradient }} />
              <div className="project-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-shine" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .project-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0;
          transition: var(--transition);
          pointer-events: none;
        }

        .project-card:hover .project-glow {
          opacity: 0.12;
          transform: scale(1.5);
        }

        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .project-shine {
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
          transform: skewX(-20deg);
          transition: var(--transition);
          pointer-events: none;
        }

        .project-card:hover .project-shine {
          left: 125%;
          transition: 0.8s ease;
        }

        .project-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-primary-dim);
          border-radius: 14px;
          color: var(--accent-primary);
          margin-bottom: 20px;
          border: 1px solid var(--accent-primary-border);
        }

        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .project-tag:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary-border);
        }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { padding: 24px; }
        }
      `}</style>
    </section>
  )
}
