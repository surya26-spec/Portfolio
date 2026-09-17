import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1500
          const steps = 30
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
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
    <section id="about" className="section">
      <div ref={ref} className="reveal">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an Information Technology student at Government College of
              Engineering, Erode, with a strong passion for computer
              networking and network security, along with a growing interest
              in machine learning.
            </p>
            <p>
              My academic journey has introduced me to C, Python,
              and SQL, while hands-on project work has taken me into TCP/IP
              fundamentals, subnetting, DNS, and DHCP — along with machine
              learning and real-time computer vision.
            </p>
            <p>
              I'm driven by curiosity about how data moves across networks and
              by the challenge of keeping that movement fast, reliable, and
              secure.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">
                <Counter target={8} />.<Counter target={66} />
              </span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                <Counter target={2} />+
              </span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                <Counter target={5} />
              </span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .about-text p {
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 16px;
          font-size: 0.95rem;
        }

        .about-text p:last-child { margin-bottom: 0; }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 20px;
          text-align: center;
          transition: var(--transition);
        }

        .stat-card:hover {
          border-color: var(--text-muted);
          transform: translateY(-2px);
        }

        .stat-number {
          display: block;
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 4px;
          color: var(--text-primary);
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-stats { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .about-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}