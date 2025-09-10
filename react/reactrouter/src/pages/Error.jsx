import { NavLink, useNavigate } from "react-router-dom"


const Error = () => {

   const navigate  = useNavigate()
  
   const handleback = () => {
      navigate(-1)
   }

    return (
        <>
            <h1> Opps, Page Not Found ! </h1>
            <p> <NavLink to='/'> Go Home ! </NavLink> </p>
            <p> <button onClick={handleback}> Go back </button> </p>
        </>
    )

}

export default Error