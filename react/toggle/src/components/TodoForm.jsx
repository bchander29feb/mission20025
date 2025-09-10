import { useState } from "react";

const TodoForm = () => {

 const [userDetails, setUserDetails] = useState({
    name: "",
    password : "",
    phone: ""
 });


 const handleInput = (e) => {
    const {name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name] : value }) )

    }

 const handlesubmitform = (e) => {
    e.preventDefault();
   console.log("Form Submitted:", userDetails);

    setUserDetails({
      name: "",
      password: "",
      phone: "",
    });

 }


    return (

        <>
            
            <form onSubmit={handlesubmitform}>

                <input
                type="text"
                name="name"
                id="name"
                value={userDetails.name}
                onChange={handleInput}
                placeholder="Enter Password"
                />
                <br />
                 <input 
                value={userDetails.password}
                type="password"
                name="password" 
                id="password"
                onChange={handleInput}
                />
                  <br />
                 <input
                    value={userDetails.phone}
                type="text"
                name="phone" 
                id="phone"
                onChange={handleInput}
                />
 <br />
                <button type="submit"> submit </button>

            </form>


        </>
    )


}


export default TodoForm;