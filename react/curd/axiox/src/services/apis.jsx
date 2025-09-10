import axios from "axios";

let api = axios.create({
    baseURL : 'https://www.omdbapi.com/'
})


export const getMethod = () => {

  return api.get('?s=avengers&apikey=63497031');

}