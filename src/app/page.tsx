import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Expertise />
      <Contact />
    </main>
  )
}