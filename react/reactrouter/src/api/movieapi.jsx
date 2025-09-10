// movieLoader.js
 const movieLoader = async () => {
//   const api = "https://www.omdbapi.com/?t=Inception&apikey=63497031";
  const api = "https://www.omdbapi.com/?s=batman&apikey=63497031"
  try {
    const res = await fetch(api);
    const resData = res.json();
    if (!res.ok) {
        throw new Response("Failed to fetch movie data", { status: res.status });
    }
    
    return resData;

  }
  catch(error){
    console.log(`Error is : ${error.message} `)

  }

  
};

export default movieLoader;
