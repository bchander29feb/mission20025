import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicFetch from './fetchapi/BasicFetch'
import ApiData from './fetchapi/ApiData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiData />
    </>
  )
}

export default App
