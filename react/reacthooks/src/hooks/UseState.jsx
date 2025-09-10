import { useState } from "react";


const UseState = () => {

const [counter, setCounter] = useState(0)

//How do you update state based on the previous state?
const handleClick = () => {

    setCounter ( (prev) =>  prev + 1 )
    
}



    return (
     <>

           <div className="container">

                <h1> UseState hook : </h1>
                <h1>                             
                The useState hook in React is a built-in hook that lets you add state to functional components.
                State is like a variable that React keeps track of.
                When you update it using setState, the component re-renders automatically with the new value.

                </h1>    


                <p>{counter}</p>
                <button onClick={handleClick}>Click Me </button>
           </div>

     </>

     )

}


export default UseState;