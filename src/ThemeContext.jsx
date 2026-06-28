import { createContext, useContext, useState, useEffect } from 'react'

const THEMES = [
  { id: 'charcoal', label: 'Black & Crimson', colors: ['#DC2626', '#991B1B', '#EF4444'] },
  { id: 'forest', label: 'Emerald Forest', colors: ['#00ff88', '#f59e0b', '#10b981'] },
  { id: 'royal', label: 'Royal Purple', colors: ['#a855f7', '#d946ef', '#7c3aed'] },
  { id: 'ocean', label: 'Ocean Deep', colors: ['#38bdf8', '#818cf8', '#6366f1'] },
  { id: 'sunset', label: 'Sunset Warm', colors: ['#fb923c', '#f472b6', '#e879f9'] },
  { id: 'aurora', label: 'Aurora', colors: ['#2dd4bf', '#a78bfa', '#06b6d4'] },
]

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'charcoal'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
