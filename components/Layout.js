import Nav from './Nav'
import Footer from './Footer'
import TerminalEasterEgg from './TerminalEasterEgg'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }){
  return (
    <div className="min-h-screen relative scanlines">
      <Nav />
      <div className="pt-20">
        {children}
      </div>
      <ThemeToggle />
      <TerminalEasterEgg />
      <Footer />
    </div>
  )
}
