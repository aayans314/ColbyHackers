import { motion } from 'framer-motion'

export default function FeaturedProject({ project }){
  return (
    <motion.section initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="mt-12 p-6 retro-card rounded-lg">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <h3 className="text-2xl neon-text font-bold">{project.title}</h3>
          <p className="mt-2 text-sm opacity-80">{project.summary}</p>
          <div className="mt-4 space-x-2">
            <a href={project.links?.devpost || '#'} className="px-3 py-1 border rounded text-neonblue">Devpost</a>
            <a href={project.links?.demo || '#'} className="px-3 py-1 bg-cybergreen text-navy rounded">Live Demo</a>
          </div>
        </div>
        <div className="w-full md:w-48 retro-card crt-glow p-3">
          <div className="text-xs opacity-70">Team</div>
          <div className="font-semibold">{project.team.join(', ')}</div>
        </div>
      </div>
    </motion.section>
  )
}
