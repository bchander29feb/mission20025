import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import UseContainer from './useapi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <UseContainer>
        <Home />
        <About />
      </UseContainer>
      



    </>
  )
}

export default App
