import React from 'react'
import './App.scss'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Parallax from './Component/Parallax/Parallax'
import Services from './Component/Services/Services'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>

      <section id='Services'><Parallax type="Services" /></section>
      <section> <Services /></section>
      <section id='Portfolio'><Parallax type="Portfolio"
      /></section>
      <Portfolio />
      <section id='Contact'><Contact /> </section>


    </div>
  )
}

export default App