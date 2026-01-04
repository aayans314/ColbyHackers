import Head from 'next/head'
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import projects from '../data/projects.json'
import ModernBackground from '../components/ModernBackground'
// import DecryptedText from '../components/DecryptedText' // Removed as it is now inside Hero or we can keep if needed elsewhere

export default function Home() {
  const featured = projects.find(p => p.slug === 'retro-vault') || projects[0] // Fallback to first if not found

  return (
    <main className="relative min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Head>
        <title>Colby Hackers | Build the Future</title>
        <meta name="description" content="Colby Hackers is the premier Computer Science club at Colby College. We build, learn, and innovate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ModernBackground />

      <div className="relative z-10">
        <Hero />

        {featured && (
          <section className="py-20 px-4 md:px-0 bg-gradient-to-b from-transparent to-black/50">
            <div className="max-w-6xl mx-auto">
              <FeaturedProject project={featured} />
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

