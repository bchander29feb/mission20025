import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContextApi from './usecontext/ContextApi'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <ContextApi>
          <Home />
        </ContextApi>


    </>
  )
}

export default App
