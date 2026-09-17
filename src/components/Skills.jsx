import { useEffect, useRef } from 'react'

const SKILLS = [
  {
    category: 'Programming',
    items: ['Python', 'C (Basics)'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'Subnetting', 'DNS & DHCP'],
  },
  {
    category: 'AI / ML',
    items: ['Classification Models (SVM, Decision Trees)', 'Data Preprocessing'],
  },
  {
    category: 'Tools',
    items: ['Git', 'OpenCV', 'Opencode', 'Antigravity'],
  },
  {
    category: 'Operating Systems',
    items: ['Linux'],
  },
]

export default function Skills() {
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
    <section id="skills" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">Skills &amp; Expertise</span>
          <h2 className="section-title">My Tech Stack</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {SKILLS.map(group => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .skill-group {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: var(--transition);
          text-align: left;
        }

        .skill-group:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .skill-category {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          margin-bottom: 20px;
          color: var(--text-primary);
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skill-tag {
          padding: 5px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 5px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .skill-tag:hover {
          background: var(--text-primary);
          border-color: var(--text-primary);
          color: var(--bg-primary);
        }

        @media (max-width: 968px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}