import { useState } from 'react'

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState(["Welcome to Colby Hackers"])
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!input) return
    setLines(l => [...l, `> ${input}`, `Executed: ${input}`])
    setInput('')
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button onClick={() => setOpen(o => !o)} className="px-3 py-2 bg-neutral-800 text-offwhite border border-neutral-700 rounded font-mono text-xs hover:bg-neutral-700 transition-colors">Terminal</button>
      {open && (
        <div className="mt-2 w-80 bg-black/95 text-offwhite p-3 rounded retro-card">
          <div className="h-40 overflow-y-auto text-xs font-mono">
            {lines.map((l, i) => <div key={i}>{l}</div>)}
          </div>
          <form onSubmit={handleSubmit} className="mt-2 flex">
            <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 bg-transparent border-b border-neutral-700 mr-2 text-sm outline-none" />
            <button className="px-2" type="submit">Run</button>
          </form>
        </div>
      )}
    </div>
  )
}
