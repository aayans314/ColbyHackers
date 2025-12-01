import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState([
    "Colby Hackers Terminal v1.0.0",
    "Type 'help' for available commands."
  ])
  const [input, setInput] = useState('')
  const router = useRouter()
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines, open])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const commands = {
    help: () => [
      "Available commands:",
      "  help     - Show this help message",
      "  ls       - List available pages",
      "  cd [dir] - Navigate to a page",
      "  whoami   - Display current user",
      "  clear    - Clear terminal output",
      "  date     - Show current date/time"
    ],
    ls: () => [
      "Directory listing:",
      "  home",
      "  about",
      "  events",
      "  projects",
      "  join"
    ],
    whoami: () => ["guest@colby-hackers"],
    date: () => [new Date().toString()],
    clear: () => [],
  }

  function handleCommand(cmd) {
    const parts = cmd.trim().split(' ')
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    if (command === 'clear') {
      setLines([])
      return
    }

    if (command === 'cd') {
      if (args.length === 0) {
        return ["Usage: cd [page]"]
      }
      const page = args[0].toLowerCase()
      const validPages = ['home', 'about', 'events', 'projects', 'join']

      if (page === 'home' || page === '/') {
        router.push('/')
        return [`Navigating to /...`]
      } else if (validPages.includes(page)) {
        router.push(`/${page}`)
        return [`Navigating to /${page}...`]
      } else {
        return [`cd: ${page}: No such file or directory`]
      }
    }

    if (commands[command]) {
      return commands[command]()
    } else {
      return [`Command not found: ${command}`]
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return

    const output = handleCommand(input)
    if (output) {
      setLines(prev => [...prev, `> ${input}`, ...output])
    }
    setInput('')
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button
        onClick={() => setOpen(o => !o)}
        className="px-3 py-2 bg-neutral-800 text-offwhite border border-neutral-700 rounded font-mono text-xs hover:bg-neutral-700 transition-colors shadow-lg"
      >
        {open ? '_ CLOSE' : '> TERMINAL'}
      </button>
      {open && (
        <div className="absolute bottom-12 right-0 w-80 md:w-96 bg-black/95 text-offwhite p-3 rounded-lg border border-neutral-700 shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2 border-b border-neutral-800 pb-1">
            <span className="text-xs text-neutral-500">guest@colby-hackers:~</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="h-64 overflow-y-auto text-xs font-mono mb-2 space-y-1 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
          >
            {lines.map((l, i) => (
              <div key={i} className={l.startsWith('>') ? 'text-neutral-400' : 'text-green-400'}>
                {l}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center bg-neutral-900/50 p-1 rounded border border-neutral-800">
            <span className="text-green-500 mr-2 text-xs">➜</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none font-mono text-offwhite placeholder-neutral-700"
              placeholder="Type help..."
              autoComplete="off"
            />
          </form>
        </div>
      )}
    </div>
  )
}
