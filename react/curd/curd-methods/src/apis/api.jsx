import axios from "axios";

const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})


export const getpost = () => {
    return api.get('/posts')
}

export const deletpost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const posts = (post) => {

    return api.post('/posts', post );

}