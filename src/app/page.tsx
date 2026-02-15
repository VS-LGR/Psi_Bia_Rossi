import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Gamification from '@/components/sections/Gamification'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gamification />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

