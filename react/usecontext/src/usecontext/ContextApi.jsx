import { createContext, useState } from "react";

export const CreateContData = createContext()

const ContextApi = ({children}) => {

    const [theme,setTheme] = useState("light");

    const handleTheme = () => {

        setTheme((prev) => prev === "dark" ? 'light' : "dark" )

    }


    return (
        <>

            <CreateContData value={{theme,handleTheme}} >
                {children}
            </CreateContData>
        
        </>
    )


}

export default ContextApi;