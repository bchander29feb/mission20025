import axios from "axios";


const api = axios.create({
 baseURL : 'https://jsonplaceholder.typicode.com'

})

//get post
export const getmethods = ()=> {
    return api.get('/posts')
}
// delete post
export const deleteMethods = (id) => {
    return api.delete(`/posts/${id}`)
}
// NewPost  

export const postmethods = (post) => {
    return api.post('/posts', post)
}