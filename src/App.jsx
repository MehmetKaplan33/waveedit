import React from 'react'
import Header from './sectionas/Header'
import Hero from './sectionas/Hero'
import Features from './sectionas/Features'
import Pricing from './sectionas/Pricing'
import Faq from './sectionas/Faq'
import Testimonials from './sectionas/Testimonials'
import Download from './sectionas/Download'
import Footer from './sectionas/Footer'
import About from './sectionas/About'

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Download />
      <Footer />
    </main>
  )
}

export default App