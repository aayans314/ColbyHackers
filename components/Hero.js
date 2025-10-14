import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 matrix-bg" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-5xl neon-text font-bold mb-3">Colby Hackers</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-xl opacity-80 mb-6">Building a creative CS community at Colby College.</motion.p>
        <div className="space-x-3">
          <a href="/join" className="px-6 py-3 bg-cybergreen text-navy rounded font-semibold">Join Us</a>
          <a href="/projects" className="px-6 py-3 border border-neonblue text-neonblue rounded">See Our Projects</a>
        </div>
      </div>
    </section>
  )
}
