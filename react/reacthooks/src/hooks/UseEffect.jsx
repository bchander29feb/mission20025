import { useEffect, useState } from "react";

const UseEffect = () => {

  const [count, setCount] = useState(0);

//   useEffect(() => {

//   const id =  setInterval(() => {
//         setCount((prev) => prev + 1) 
//     },1000);

//     return ()=> {

//         clearInterval(id);
//         console.log('clearInterval')
//     }


//   },[])


    return (

        <>

            <h1> UseState hook : </h1>
            <h1 className="box">                             
            The useState hook in React is a built-in hook that lets you add state to functional components.
            State is like a variable that React keeps track of.
            When you update it using setState, the component re-renders automatically with the new value.

            </h1>   

                <h1>{count}</h1>


        </>
    )

}

export default UseEffect;