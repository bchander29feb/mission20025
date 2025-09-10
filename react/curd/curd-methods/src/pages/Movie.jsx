import { useEffect, useState } from "react";
import { deletpost, getpost } from "../apis/api";
import Card from "../coponents/ui/Card";
import AddForm from "../coponents/ui/AddForm";


const Movie = () => {

const [movie, setMovie] = useState([]);
const [loader, setLoader] = useState(true)

const getMoveidata = async() =>{
    try{
        let res = await getpost();
        // console.log(res.data);
        setMovie(res.data)
    }
    catch(error){
        console.log(error.message)

    }
}


  useEffect(() => {
    getMoveidata()
  },[]);


  const handleDelet = async(id) => {
   
    try{
         
     
        let res = await deletpost(id);
        if(res.status === 200){
          let updateddData = movie.filter((curritem) => {
            return curritem.id !== id
          });
          setMovie(updateddData)
        }

    }
    catch(error){

      console.log('delete error' , error)

    }
  }

    return (
    <>

      <AddForm movie={movie} setMovie={setMovie} />

       <ol
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // ✅ always 4 per row
    gap: "20px",
    padding: "20px",
  }}
>
  {movie    .map((currEle) => (
    <Card movie={movie} setMovie={setMovie} handleDelet ={handleDelet}  currEle={currEle} key={currEle.id || currEle.imdbID} />
  ))}
</ol>
        

    </>)

    
}

export default Movie;