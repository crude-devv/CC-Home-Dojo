import Navigation from '@/components/Navigation'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesSectors from '@/components/services/ServicesSectors'
import ServicesOfferings from '@/components/services/ServicesOfferings'
import Contact from '@/components/Contact'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesSectors />
      <ServicesOfferings />
      <Contact />
    </main>
  )
}