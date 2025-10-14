import Link from 'next/link'

export default function Nav(){
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-navy/80 backdrop-filter backdrop-blur-md border-b border-b-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg neon-text">Colby Hackers</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/join" className="px-3 py-1 border rounded">Join</Link>
        </nav>
      </div>
    </header>
  )
}
