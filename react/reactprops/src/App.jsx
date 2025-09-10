import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home';
import Parent from './components/Memo';
import UseContext from './useContext/UseContext';

function App() {
  const [childData, setChildData] = useState(""); // state to hold child data

  // function in parent
  const custonfun = (data) => {
    console.log("Data from child:", data);
    setChildData(data); // save data in state
  }

  return (
    <>

      <UseContext >

          <About />
          <Home />

      </UseContext>


    </>
  )
}

export default App
