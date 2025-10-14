import events from '../data/events.json'

export default function Events(){
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl neon-text mb-4">Events</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map(e => (
          <article key={e.id} className="p-4 retro-card rounded-md">
            <h2 className="text-xl">{e.title}</h2>
            <p className="text-sm opacity-80">{e.date} • {e.tags.join(', ')}</p>
            <p className="mt-2">{e.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
