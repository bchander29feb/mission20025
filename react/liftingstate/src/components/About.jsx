const About = ({formdata}) => {

    console.log(formdata)

    return (

        <>
           <h1> About : </h1>
           <h1> Form data is : {formdata.name} and password is : {formdata.password} </h1>
        </>

    )

}

export default About;