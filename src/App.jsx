import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogicSection from './components/LogicSection'
import StatsSection from './components/StatsSection'
import BenefitsSection from './components/BenefitsSection'
import FounderMessage from './components/FounderMessage'
import Footer from './components/Footer'

import TrustSection from './components/TrustSection'
import FeaturedCourses from './components/FeaturedCourses'
import TabbedGrid from './components/TabbedGrid'
import StudentFeedback from './components/StudentFeedback'
import PortfolioShowcase from './components/PortfolioShowcase'

import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'

function App() {
  return (
    <div className="bg-skillvant-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <LogicSection />
      <StatsSection />
      <FeaturedCourses />
      <BenefitsSection />
      <TabbedGrid />
      <StudentFeedback />
      <PortfolioShowcase />
      <FounderMessage />
      <PricingSection />
      <FAQSection />

      <Footer />
    </div>
  )
}

export default App
