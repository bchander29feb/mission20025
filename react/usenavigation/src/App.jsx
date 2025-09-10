import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './compo/Home'
import { useNavigation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   
  <Home />
      
    </>
  )
}

export default App
