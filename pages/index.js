import Hero from '../components/Hero'
import FeaturedProject from '../components/FeaturedProject'
import projects from '../data/projects.json'

export default function Home(){
  const featured = projects.find(p => p.slug === 'retro-vault')
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <Hero />
      {featured && <FeaturedProject project={featured} />}
    </main>
  )
}
