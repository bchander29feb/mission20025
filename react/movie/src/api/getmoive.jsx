// src/api/getmoive.js
const getmoive = async () => {
  const res = await fetch("http://www.omdbapi.com/?s=avengers&apikey=63497031");

  if (!res.ok) {
    throw new Response("Failed to fetch movies", { status: res.status });
  }

  const data = await res.json();
  return data.Search || []; // return only movie list
};

export default getmoive;
