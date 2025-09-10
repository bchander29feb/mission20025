import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import About from './components/About';

function App() {
    const [count,setCount] = useState({
        
        name : '',
        password : '',

    });



  return (
    <>

    <Home formdata={count} setFormdata = {setCount} />
    <About formdata={count} />
      
    </>
  )
}

export default App
