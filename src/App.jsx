import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HighLights from './components/HighLights'
import Modal from './components/Modal'
import Features from "./components/Features"
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className="bg-black">
      {/* navbar */}
      <Navbar/>
      {/* hero */}
      <Hero />
      {/* Highlights */}
      <HighLights />
      <Modal/>
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App