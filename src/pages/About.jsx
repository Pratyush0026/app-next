import React from 'react'
import AboutHero from '../components/AboutHero'
import BrandCarousel from '../components/BrandCarousel'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnershipImpact from '../components/PartnershipImpact'
import ProjectSteps from '../components/ProjectSteps'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <AboutHero/>
        <BrandCarousel/>
        <WhyChooseUs/>
        <PartnershipImpact/>
        <ProjectSteps/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default About