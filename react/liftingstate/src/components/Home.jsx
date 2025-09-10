import { useState } from "react";

const Home = ({formdata, setFormdata}) => {



    const handleinputdata = (e) => {

        const{name,value} = e.target

        setFormdata((prv) =>({...prv,[name]:value }) )

    }

    const handlesubmitform = (e) => {
        e.preventDefault();

        console.log('form data is: ', formdata );

        setFormdata({
            name : '',
            password : '',
        })

    }

    return (

            <>
            <h1>Home : </h1>
            <form onSubmit={handlesubmitform}>
                <input type="text" name="name" onChange={handleinputdata} value={formdata.name}  /><br />
                <input type="password" name="password" value={formdata.password} onChange={handleinputdata}  /> <br />
                 <button> Submit </button>
           </form>
           
            
            </>
    )

}

export default Home;