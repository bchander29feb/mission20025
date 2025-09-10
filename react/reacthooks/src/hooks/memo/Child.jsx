import { memo, useState } from "react"

const Child = memo(({data, task}) => {

    const[userdata,setUserdata] = useState();

    const handlecall = () => {
          setUserdata(task())
    }



     console.log('child is rendering ')

    return (

        <>
            <h1> Child </h1>
            <p>  {task} </p>
            {/* <p>{userdata}</p> */}
                  <p>Result: {userdata === null ? "NoData" : userdata}</p>


             <button onClick={handlecall}>resultshow</button>
           
            
        </>

    )

})

export default Child