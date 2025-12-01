import { motion } from 'framer-motion'
import DecryptedText from './DecryptedText'

export default function Hero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 matrix-bg" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl md:text-7xl font-orbitron font-bold mb-4 flex justify-center tracking-wider text-offwhite drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <DecryptedText
            text="Colby Hackers"
            speed={100}
            maxIterations={20}
            sequential={true}
            revealDirection="center"
            animateOn="view"
            className="revealed"
            encryptedClassName="encrypted opacity-50"
          />
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-mono text-offwhite opacity-80 mb-8">Building a creative CS community at Colby College.</motion.p>
        <div className="space-x-3">
          <a href="/join" className="px-6 py-3 bg-cybergreen text-navy rounded font-semibold">Join Us</a>
          <a href="/projects" className="px-6 py-3 border border-neonblue text-neonblue rounded">See Our Projects</a>
        </div>
      </div>
    </section>
  )
}
