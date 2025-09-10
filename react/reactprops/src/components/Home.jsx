import { useContext } from "react";
import { ContxtContainer } from "../useContext/UseContext";


const Home = () => {
    let mydata = useContext(ContxtContainer);
    
    let {name,biodata} = mydata;

    let {name:biodaname,age,weight} = biodata;
    console.log(mydata);



 

    return (
            <>
            <p>{name}</p>
            <p>{biodaname}</p>
            <p>{age}</p>
            <p>{weight}</p>

            </>
    )

}

export default Home;