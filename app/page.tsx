import LandingPage from '@/components/shared/LandingPage'
import NavBar from '@/components/shared/NavBar'
import React from 'react'

const Home = () => {
  return (
    <section className='bg-background'>
        <NavBar/>
        <LandingPage/>
    </section>
  )
}

export default Home