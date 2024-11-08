import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ExpertiseSection from './components/ExpertiseSection'
import PortfolioTestimonials from './components/PortfolioTestimonials'
import WhyChooseMe from './components/WhyChooseMe'
import About from './components/About'
const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <HeroSection/>
      <ExpertiseSection/>
      <PortfolioTestimonials/>
      <WhyChooseMe/>
      <About/>
    </div>
  )
}

export default Home