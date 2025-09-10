import { useContext } from "react";
import { ContextContainer } from "../hooks/usecontext";
// import {usecontext} from 'react'



const About = () => {

    const propData = useContext(ContextContainer);
    
     let {name,age,weight} = propData;
   

    return (

        <>
            <h1> About </h1>
            <p> Name is: {name } and age is : {age} and weight is 
                    
                    {weight}
                     </p>
        </>
    )
    
}

export default About;