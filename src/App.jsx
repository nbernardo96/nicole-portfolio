import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
