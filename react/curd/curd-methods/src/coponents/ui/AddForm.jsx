import { useState } from "react"
import { posts } from "../../apis/api";

const AddForm = ({movie,setMovie}) =>{

  const [fdata, setFdata] = useState({
    title: "",
    body: "",

  });


  const handleInputData = (e) => {
     const {name, value} = e.target
    setFdata((prev) => {
        return { ...prev, [name]:value}
    })

  }

  const addPost = async() => {
     try{

        let res = await posts(fdata);
        console.log('res data is ', res)

        if(res.status === 201){
            setMovie([...movie, res.data]);
            setFdata({
                title : '',
                body :''
            })
        }

        }
        catch(error){
            console.log(error)

        }
          
    }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPost();

  }

    return (
        <>

            <form onSubmit={handleFormSubmit}>

                <div>
                    <input
                    placeholder="Title ..."
                    type="text" name="title" id="title"
                    value={fdata.title}
                    onChange={handleInputData}
                    />
                    <input 
                    type="text" name="body" id="itile" 
                    placeholder="Description ..."
                        value={fdata.body}
                        onChange={handleInputData}
                    
                    />
                </div>
                <div>
                    <button type="submit"> Add Post </button>
                </div>


            </form>
        
        </>
    )



} 

export default AddForm