import { createContext } from "react"

export const ContxtContainer = createContext();


const UseContext = ({children}) => {

   let name = "bhuvan";
   
   let biodata = {
    name : 'Rahul',
    age : 23,
    weight: 32

   }

    return (

        <>
            <ContxtContainer.Provider value={{name,biodata}}>
                {children}
            </ContxtContainer.Provider>

        </>
    )
}


export default UseContext