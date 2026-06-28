import { useEffect, useRef, useState } from 'react'

const TYPING_TITLES = [
  'Cybersecurity Enthusiast',
  'IT Student',
  'Secure Coding Advocate',
]

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let neurons = []
    let signals = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Neuron {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 3 + 2
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.opacity = Math.random() * 0.4 + 0.6
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += this.pulseSpeed
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        const pulseFactor = Math.sin(this.pulse) * 0.3 + 0.7
        const r = this.size * pulseFactor

        ctx.beginPath()
        ctx.arc(this.x, this.y, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity * 0.06 * pulseFactor})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, r * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity * 0.25 * pulseFactor})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * pulseFactor})`
        ctx.fill()
      }
    }

    class Signal {
      constructor(from, to) {
        this.from = from
        this.to = to
        this.progress = 0
        this.speed = Math.random() * 0.02 + 0.005
        this.size = Math.random() * 2 + 1.5
      }
      update() {
        this.progress += this.speed
      }
      draw() {
        const x = this.from.x + (this.to.x - this.from.x) * this.progress
        const y = this.from.y + (this.to.y - this.from.y) * this.progress
        const fade = Math.sin(this.progress * Math.PI)

        ctx.beginPath()
        ctx.arc(x, y, this.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 38, 38, ${fade * 0.15})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${fade * 0.8})`
        ctx.fill()
      }
      alive() {
        return this.progress < 1
      }
    }

    const count = Math.min(50, Math.floor(canvas.width * canvas.height / 25000))
    neurons = Array.from({ length: count }, () => new Neuron())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      neurons.forEach(n => n.update())

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x
          const dy = neurons[i].y - neurons[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.2
            ctx.beginPath()
            ctx.moveTo(neurons[i].x, neurons[i].y)
            ctx.lineTo(neurons[j].x, neurons[j].y)
            ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()

            if (Math.random() < 0.002) {
              signals.push(new Signal(
                Math.random() < 0.5 ? neurons[i] : neurons[j],
                Math.random() < 0.5 ? neurons[j] : neurons[i]
              ))
            }
          }
        }
      }

      signals = signals.filter(s => s.alive())
      signals.forEach(s => { s.update(); s.draw() })

      neurons.forEach(n => n.draw())

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particles" />
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const containerRef = useRef(null)

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

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <ParticleCanvas />

      <div className="hero-gradient-sphere" />
      <div className="hero-gradient-sphere sphere-2" />

      <div className="hero-content">
        <div className="hero-badge">Available for opportunities</div>
        <h1 className="hero-greeting">Hi, I'm</h1>
        <h2 className="hero-name">Surya P</h2>
        <div className="hero-type-wrapper">
          <span className="hero-type-label">I'm a </span>
          <span className="hero-type-text">
            {TYPING_TITLES[titleIndex].substring(0, charIndex)}
            <span className="hero-cursor">|</span>
          </span>
        </div>
        <p className="hero-desc">
          Passionate about secure coding, network monitoring, and building
          intelligent systems that make the digital world safer.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/Resume.pdf" download className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/surya26-spec" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/surya-ponnusaamy-60b464374" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:sur24imt61l@gmail.com" className="social-icon" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
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
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .hero-gradient-sphere {
          position: absolute;
          top: 10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent-primary-dim) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(60px);
          animation: float 12s ease-in-out infinite;
          pointer-events: none;
        }

        .sphere-2 {
          top: auto;
          left: auto;
          bottom: 10%;
          right: -10%;
          background: radial-gradient(circle, var(--accent-secondary-dim) 0%, transparent 60%);
          animation: float 15s ease-in-out infinite reverse;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 780px;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent-primary);
          background: var(--accent-primary-dim);
          border: 1px solid var(--accent-primary-border);
          margin-bottom: 28px;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00ff88;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .hero-greeting {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
          letter-spacing: 3px;
        }

        .hero-name {
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 1.05;
          margin-bottom: 16px;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .hero-type-wrapper {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: var(--text-secondary);
          margin-bottom: 24px;
          min-height: 2em;
        }

        .hero-type-label {
          font-weight: 300;
        }

        .hero-type-text {
          font-weight: 600;
          color: var(--accent-primary);
        }

        .hero-cursor {
          display: inline-block;
          color: var(--accent-secondary);
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
          max-width: 520px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition);
          border: none;
        }

        .btn-primary {
          background: var(--gradient-primary);
          color: #fff;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--accent-primary) 25%, transparent);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px color-mix(in srgb, var(--accent-primary) 40%, transparent);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border: 1px solid var(--border-light);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          border-color: var(--accent-primary);
          background: var(--accent-primary-dim);
          transform: translateY(-3px);
          box-shadow: var(--glow-primary);
        }

        .hero-socials {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .social-icon:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-3px);
          box-shadow: var(--glow-primary);
          background: var(--accent-primary-dim);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-dot {
          width: 3px;
          height: 8px;
          border-radius: 2px;
          background: var(--accent-primary);
          animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 20px 60px; }
          .hero-desc { font-size: 0.95rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 300px; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
