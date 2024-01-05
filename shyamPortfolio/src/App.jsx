import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Home/>
       <About />
       <SocialLinks />
    </>
  )
}

export default App
