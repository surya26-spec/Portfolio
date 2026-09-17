import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const openResume = () => setResumeOpen(true)
  const closeResume = () => setResumeOpen(false)

  return (
    <>
      <Navbar onPreviewResume={openResume} />
      <main>
        <Hero onPreviewResume={openResume} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact onPreviewResume={openResume} />
      </main>
      <ResumeModal open={resumeOpen} onClose={closeResume} />
    </>
  )
}
