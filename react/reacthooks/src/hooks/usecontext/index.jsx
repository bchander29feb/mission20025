import { createContext } from "react";

export const ContextContainer = createContext();

export const ContextApi = ({children}) => {

    let biodata =  {
        name : 'kabir',
        age : 32,
        weight : '50kg'
    }


    return (

        <>

            <ContextContainer.Provider value={biodata}>
                    {children}
            </ContextContainer.Provider>

        
        </>
    )

}
