import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import PageTransition from '../components/PageTransition'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>
      <AnimatePresence mode="wait">
        <PageTransition key={router.asPath}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  )
}
