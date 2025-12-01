import Head from 'next/head'
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import projects from '../data/projects.json'
import DecryptedText from '../components/DecryptedText'
import MatrixRain from '../components/MatrixRain'

export default function Home() {
  const featured = projects.find(p => p.slug === 'retro-vault')
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MatrixRain speed={40} />
      </div>
      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        <Head>
          <title>Colby Hackers</title>
          <meta name="description" content="Building a creative CS community at Colby College." />
        </Head>
        <Hero />
        {featured && <FeaturedProject project={featured} />}
      </div>
    </main>
  )
}
