import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Next from '../components/Next'
import Middle from '../components/Middle'
import Body from '../components/Body'
import Socials from '../components/Socials'
import Visibility from '../components/Visibility'
import Statistics from '../components/Statistics'
import Why from '../components/Why'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Middle/>
      </div>
      <Next />
      <Body/>
      <Socials/>
      <Visibility/>
      <Statistics/>
      <Why/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default Home