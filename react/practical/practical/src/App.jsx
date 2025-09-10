import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputfocus from './interviewpractical/Inputfoucs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Inputfocus />
    </>
  )
}

export default App
