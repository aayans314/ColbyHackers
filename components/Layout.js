import Nav from './Nav'
import Footer from './Footer'
import TerminalEasterEgg from './TerminalEasterEgg'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative scanlines flex flex-col">
      <Nav />
      <div className="pt-20 flex-grow">
        {children}
      </div>
      {/* <ThemeToggle /> */}
      <TerminalEasterEgg />
      <Footer />
    </div>
  )
}
