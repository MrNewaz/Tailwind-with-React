import './App.css'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'
import Dropdown from './components/Dropdown'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar setOpen={setOpen} />
      <Dropdown open={open} />
      <Hero />
      <Content />
      <Footer />
    </>
  )
}

export default App
