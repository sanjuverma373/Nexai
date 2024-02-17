import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
