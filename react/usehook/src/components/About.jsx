import { use } from "react";
import { UseContextData } from "../useapi";

const About = () => {

   const useData = use(UseContextData);
    const{name,age,weight} = useData

    return (
        <>
            <h1>Home Compo</h1>
            <p> {name} {age} {weight} </p>
        </>
    )

}

export default About;