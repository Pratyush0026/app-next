import React from 'react'
import Team from '../components/Team'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <Navbar/>

        <HomeHero/>

        <Team/>
        <Footer/>
    </div>
  )
}

export default Home