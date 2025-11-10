import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DashboardPreview from './components/DashboardPreview'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
