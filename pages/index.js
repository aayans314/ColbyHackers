import Head from 'next/head'
import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import projects from '../data/projects.json'

export default function Home(){
  const featured = projects.find(p => p.slug === 'retro-vault')
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <Head>
        <title>Colby Hackers</title>
        <meta name="description" content="Building a creative CS community at Colby College." />
      </Head>
      <Hero />
      {featured && <FeaturedProject project={featured} />}
    </main>
  )
}
