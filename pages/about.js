import Head from 'next/head'

export default function About(){
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <Head>
        <title>About - Colby Hackers</title>
        <meta name="description" content="Learn about the mission and philosophy of Colby Hackers." />
      </Head>
      <h1 className="text-4xl neon-text mb-4">About Colby Hackers</h1>
      <p className="mb-3">Colby Hackers was revived to build a creative CS community at Colby College. We host workshops, hackathons, and socials to make CS approachable and fun.</p>
      <p className="mb-3">Our philosophy: inclusivity, curiosity, and hands-on learning.</p>
    </section>
  )
}
