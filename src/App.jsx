import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Headersection from './components/Headersection'
import Homesection from './components/Homesection'
import Featuressection from './components/Featuressection'
import Blockchainsection from './components/Blockchainsection'
import Sliderssection from './components/Sliderssection'
import Whatnexai from './components/Whatnexai'
import Utilitysection from './components/Utilitysection'
import Startedsection from './components/Startedsection'
import Footersection from './components/Footersection'
import Preloadersection from './components/Preloadersection'
import Backtop from './components/Backtop'

function App() {
  useEffect(() => {
    AOS.init({once: true });
  }, [])
  const [count, setCount] = useState(0)

  return (
    <>
    <Preloadersection/>
      <div className=' bg-black'>
        <Headersection />
        <Homesection />
        <Featuressection />
        <Blockchainsection />
        <Sliderssection/>
        <Whatnexai/>
        <Utilitysection/>
        <Startedsection/>
        <Footersection/>
        <Backtop/>
      </div>
    </>
  )
}

export default App
