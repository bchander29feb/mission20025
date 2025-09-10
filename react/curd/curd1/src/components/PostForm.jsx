import { useState } from "react";
import {postmethods} from '../apis/api'

const PostForm = ({postdata,setPostdata}) => {

   const [formdata, setFormData] = useState({
     body : '',
     title : ''

   });

   

  const handleInput = (e) => {
   let {name,value} = e.target

    setFormData( (prev) => {
      return {...prev, [name] :value}
    });

     
    

  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        let res = await postmethods(formdata);
        console.log('data sending ....');

        if(res.status === 201){
            setPostdata ([...postdata,res.data ])
        }

      }
      catch(error){
        console.log(error)

      }

  }



     return (
            <>

        <form className="card-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formdata.title}
          name="title"
          onChange={handleInput}
          required
        />
        <input
          type="text"
          placeholder="Subtitle"
         value={formdata.body}
         name="body"
          onChange={handleInput}
          required
        />
        <button type="submit">Post</button>
      </form>


            </>
     )

}

export default PostForm;