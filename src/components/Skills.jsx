import { useEffect, useRef } from 'react'

const SKILLS = [
  {
    category: 'Programming',
    items: ['C', 'Python', 'SQL'],
    gradient: 'var(--gradient-primary)',
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'Routing & Switching', 'Subnetting', 'VLAN', 'DNS & DHCP', 'Network Security', 'Linux Networking', 'Network Monitoring'],
    gradient: 'var(--gradient-secondary)',
  },
  {
    category: 'AI / ML',
    items: ['Classification Models (SVM, Decision Trees)', 'Random Forest', 'Data Preprocessing', 'Intrusion Detection Systems', 'Vulnerability Analysis'],
    gradient: 'var(--gradient-accent)',
  },
  {
    category: 'Databases',
    items: ['SQL'],
    gradient: 'var(--gradient-primary)',
  },
  {
    category: 'Tools',
    items: ['Git', 'OpenCV', 'Wireshark', 'Cisco Packet Tracer', 'Opencode', 'Antigravity'],
    gradient: 'var(--gradient-secondary)',
  },
  {
    category: 'Platforms',
    items: ['Linux'],
    gradient: 'var(--gradient-accent)',
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
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">My Arsenal</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {SKILLS.map(group => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-bar" style={{ background: group.gradient }} />
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
          gap: 20px;
        }

        .skill-group {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: var(--transition);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .skill-group-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0;
          transition: var(--transition);
        }

        .skill-group:hover .skill-group-bar {
          opacity: 1;
        }

        .skill-group:hover {
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .skill-category {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          color: var(--text-secondary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.8rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .skill-tag:hover {
          background: var(--accent-primary-dim);
          border-color: var(--accent-primary-border);
          color: var(--accent-primary);
          transform: translateY(-2px);
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
