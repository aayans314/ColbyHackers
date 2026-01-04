import { motion } from 'framer-motion'
import DecryptedText from './DecryptedText'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            <span className="text-white">Colby </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Hackers</span>
          </h1>
          {/* We keep DecryptedText as a sub-header or effect if desired, or replace the main title. 
              Let's use it for a tag line or effect. */}
          <div className="h-8 md:h-12 flex justify-center items-center text-xl md:text-2xl font-mono text-blue-300/80">
            <DecryptedText
              text="Builder. Creator. Hacker."
              speed={70}
              maxIterations={15}
              sequential={true}
              revealDirection="center"
              animateOn="view"
              className="revealed"
              encryptedClassName="encrypted opacity-50 text-purple-500"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building a creative Computer Science community at Colby College. <br className="hidden md:block" />
          Join us to build the future, one line of code at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a href="/join" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10">Join the Club</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          <a href="/projects" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-medium hover:border-white/40">
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  )
}

