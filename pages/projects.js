import projects from '../data/projects.json'

export default function Projects(){
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl neon-text mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(p => (
          <article key={p.slug} className="p-4 retro-card rounded-md">
            <h2 className="text-xl">{p.title}</h2>
            <p className="text-sm opacity-80">{p.summary}</p>
            <div className="mt-2">
              <a href={p.links?.demo || '#'} className="text-neonblue underline">View Project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
