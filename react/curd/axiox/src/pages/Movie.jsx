import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import { getMethod } from "../services/apis"

const Movie  = () => {

    const [moviedata, setMovieData] = useState([]);
    const [loader, setLoader] = useState(true)

    const getdata = async() => {

        try{
            let res = await getMethod()
            setMovieData(res.data.Search);
            setLoader(false)
            
           
        }
        catch(error){

            console.log(error.message)
            console.log(error.response);
            setLoader(false)
            
        }

    }


    useEffect(() => {
        getdata()
    },[])



    return (

        <>
        
        {loader ? (<h1> Loading ... </h1>) : (

        <ul style={{display: 'flex', flexWrap: 'wrap' }}>
        {moviedata.map((currEle) => {
        return <Card currEle ={currEle} key={currEle.imdbID}   />
        } )}


        </ul>

        )}




            

            



        </>
    )

}

export default Movie