import { useContext } from "react";
import { CreateContData } from "../usecontext/ContextApi";

const Home = () => {
   
  const {handleTheme, theme} = useContext(CreateContData);
    
  console.log(theme);

    return (
        <>
            <div className={`defautlclass ${ theme=== "dark" ? "darkcls" : 'lightcls'  } `} >
                <h1> Home : </h1>
                <button onClick={handleTheme}> 
                {theme === "dark" ? "switch to light" : "switch to dark" }    
                 </button>
            </div>
        </>
    )
  
}

export default Home;