import { useContext } from "react";
import { UseContextData } from "../useapi";


const Home = () => {

   const data = useContext(UseContextData);
      
     const {name, age, weight } = data

       

    return (
            <>
                <h1>Home Compo</h1>
                <p> {name}  {age} </p>
            </>
    )

}

export default Home;