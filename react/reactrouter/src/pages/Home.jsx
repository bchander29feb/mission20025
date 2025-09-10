import { useLoaderData } from "react-router-dom";
import Card from "../ui/Card";

const Home = () => {

 const movieData = useLoaderData();

 console.log(movieData)




 
//   const {Actors,Awards} = movieData;
  
    return (
        <>
            {movieData.Search.map((mData) => {
                return <Card key={mData.imdbID}  mData ={mData} />
            })}
        </>
    )

}

export default Home;