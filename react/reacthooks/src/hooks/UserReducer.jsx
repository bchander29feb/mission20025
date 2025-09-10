import { useReducer } from "react";


const reducer = (state,action) => {

    switch(action.type){

    case 'increment' : return {counter : state.counter + 1}
    break;
    case 'decrement' : return {counter : state.counter - 1}
     break;
    case 'reset' : return {counter : 0}
    
    break;

    default :  return intitialState


    }

}

const UseReducer = () => {
  
  const intitialState = {
        counter : 0

    }
    const [state, dispatch] = useReducer(reducer, intitialState);
    


    


    return (

            <>
                <div className="container">
                        <h1> Usereducer hook : </h1>
                        <h1 className="box"> The useReducer hook in React is used to manage complex state logic in a component.
                        It’s an alternative to useState when you have multiple related state values or when the next state depends on the previous state.</h1>


                        <p>{state.counter}</p>
                        <button onClick={() => dispatch({type : 'increment'})} > increment </button>
                        <button onClick={() =>dispatch({type : 'decrement'})} > decrement </button>
                        <button onClick={() => dispatch({type : 'reset'})} > reset </button>



                </div>
            
            </>
    )


}


export default UseReducer;