import { Children, createContext } from "react"


export const UseContextData = createContext();

const UseContainer = ({children}) => {

    let bidodata = {
        name : 'Rahul Kumar',
        age : 32,
        weight : '60kg'
    }
    
    return(
        <>
        
          <UseContextData.Provider value={bidodata}>
            {children} 
          </UseContextData.Provider>

        </>
    )

}


export default UseContainer