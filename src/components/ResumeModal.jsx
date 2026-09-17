import { useEffect } from 'react'

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="resume-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume preview">
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-toolbar">
          <span className="resume-toolbar-title">Resume Preview</span>
          <div className="resume-toolbar-actions">
            <a href="/Resume.pdf" download className="resume-toolbar-download">
              Download PDF
            </a>
            <button className="resume-toolbar-close" onClick={onClose} aria-label="Close preview">
              Close
            </button>
          </div>
        </div>

        <iframe
          src="/Resume.pdf"
          title="Resume PDF preview"
          className="resume-frame"
        />
      </div>

      <style>{`
        .resume-overlay {
          position: fixed;
          inset: 0;
          z-index: 1500;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: 48px 24px;
        }

        .resume-modal {
          width: 820px;
          max-width: 100%;
        }

        .resume-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
        }

        .resume-toolbar-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
        }

        .resume-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-toolbar-download {
          padding: 8px 18px;
          border-radius: 6px;
          background: var(--text-primary);
          color: var(--bg-primary);
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--text-primary);
          transition: var(--transition);
        }

        .resume-toolbar-download:hover {
          background: transparent;
          color: var(--text-primary);
        }

        .resume-toolbar-close {
          padding: 8px 14px;
          border-radius: 6px;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: var(--transition);
        }

        .resume-toolbar-close:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }

        .resume-frame {
          width: 100%;
          height: 82vh;
          border: 1px solid var(--border);
          border-top: none;
          border-radius: 0 0 10px 10px;
          background: #fff;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 768px) {
          .resume-overlay { padding: 16px 12px; align-items: flex-start; }
          .resume-toolbar { flex-direction: column; align-items: flex-start; }
          .resume-toolbar-actions { width: 100%; }
          .resume-toolbar-download { flex: 1; text-align: center; }
          .resume-frame { height: 74vh; }
        }
      `}</style>
    </div>
  )
}