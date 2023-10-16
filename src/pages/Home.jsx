import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Next from '../components/Next'
import Middle from '../components/Middle'
import Body from '../components/Body'
import Socials from '../components/Socials'

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
    </>
  );
}

export default Home