import { useState, useEffect } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    document.documentElement.dataset.theme = theme
  },[theme])

  return (
    <button onClick={() => setTheme(t => t==='dark'? 'light':'dark')} className="px-3 py-1 border rounded">
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
