import { useState } from "react"


const Registration = () => {

const [userInput, setUserInput] = useState({
    fullname : "",
    email : "",
    password : "",
    confirmPassword : ""

});

const handleInputform = (e) => {
    let {name, value} = e.target
    setUserInput((prev) =>({...prev,[name]: value }) );


}
const handlesubmitform = (e) => {
    e.preventDefault();
    console.log("Form data is : ", userInput)

}


    return (
        <>
        
<div className="form-container">
    <h2>Register</h2>
    <form onSubmit={handlesubmitform}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input onChange={handleInputform}
         name="fullname"
         type="text" 
         id="fullname" placeholder="Enter your full name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
         name="email"
         onChange={handleInputform} type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input autoComplete="off" 
        name="password"
        onChange={handleInputform} type="password" id="password" placeholder="Enter your password" required />
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input autoComplete="off"
         name="confirmPassword"
        onChange={handleInputform} type="password" id="confirm-password" placeholder="Confirm your password" required />
      </div>

      <button type="submit">Register</button>
    </form>
    <div className="form-footer">
      Already have an account? <a href="#">Login</a>
    </div>
  </div>
        </>

    )


}


export default Registration ;