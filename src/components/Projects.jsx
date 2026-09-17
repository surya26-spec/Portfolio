import { useEffect, useRef } from 'react'
import secuVerseImg from '../assets/SecuVerse.png'
import drowsinessImg from '../assets/Drowsiness.png'

const PROJECTS = [
  {
    number: '01',
    title: 'AI-Based Intrusion Detection System (SecuVerse)',
    category: 'Machine Learning',
    image: secuVerseImg,
    desc: 'Designed an ML-based system that classifies network traffic as normal or malicious across multiple attack categories using SVM and Decision Tree models, generating real-time alerts for anomalous traffic.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    number: '02',
    title: 'Driver Drowsiness Detection System',
    category: 'Computer Vision',
    image: drowsinessImg,
    desc: 'Engineered a real-time computer vision system that detects driver fatigue through eye-state analysis at 30 FPS, triggering audible alerts within 2 seconds of prolonged eye closure to reduce accident risk.',
    tags: ['Python', 'OpenCV', 'MediaPipe Face Mesh'],
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
          {PROJECTS.map((project) => (
            <article key={project.number} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <div className="project-meta">
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .project-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .project-image {
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 24px;
          border: 1px solid var(--border);
        }

        .project-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 16 / 9;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.04);
        }

        .project-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-3px);
        }

        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .project-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 2px;
        }

        .project-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.35;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }

        .project-category {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .project-tag {
          padding: 5px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .project-tag:hover {
          color: var(--bg-primary);
          background: var(--text-primary);
          border-color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .project-card { padding: 20px; }
        }
      `}</style>
    </section>
  )
}