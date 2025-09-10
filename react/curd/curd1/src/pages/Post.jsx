import { useEffect, useState } from "react";
import { deleteMethods, getmethods } from "../apis/api";
import Card from "../components/ui/Card";
import PostForm from "../components/PostForm";

const Post  = () => {

    const [postdata, setPostdata] = useState([])
    const getPost = async() => {
        try{
          let res = await getmethods();
          setPostdata(res.data)
        //   console.log('res is ', res.data)
        }
        catch(error){
            console.log(error.messge)

        }

    }

    useEffect(() => {
        getPost()
    },[])

    const handleDelete = async(id) => {
        try{
            let res  = await deleteMethods(id);
             
            if(res.status === 200){
              
                let updateddata = postdata.filter((curr) => {
                  return  curr.id  !== id
                })
                // console.log(updateddata)
                setPostdata(updateddata)

            }

        }
        catch(error){
            console.log(error)

        }

    }



     return(

     <>
        <PostForm postdata={postdata} setPostdata={setPostdata} />
        <ol style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', margin :' 20px auto' }} className="card-item">
        {postdata.map((currEl,index) => {
            return <li key={currEl.id}> <Card   handleDelete ={handleDelete} currEl={currEl} /> </li>
        })}

        </ol>
     </>
     
    )

}

export default Post;