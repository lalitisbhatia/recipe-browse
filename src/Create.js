import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    let [title, setTitle] = useState("")
    let [body, setBody] = useState("")
    let [author, setAuthor] = useState("")
    let [isPending,setIsPending] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        //create a new blog object
        const blog = {title,body,author}

        setIsPending(true)
        
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(res =>{
            if(res.ok){
                setIsPending(false)
                navigate('/')
                console.log(res)
            }
            
        })
    }
    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value= {title}
                    onChange={(e) =>{ 
                        setTitle(e.target.value);                        
                    }}
                />
                <label>Blog Body: </label>
                <textarea 
                    required
                    value= {body}
                    onChange={(e) =>{ 
                        setBody(e.target.value);                        
                    }}
                />
                <label>Blog Author: </label>
                <select 
                    value={author}
                    onChange={(e) =>{ 
                        setAuthor(e.target.value);                        
                    }}>
                    <option value="SMG">SMG</option>
                    <option value="RSD">RSD</option>
                    <option value="SRT">SRT</option>
                    <option value="VK">VK</option>

                </select>

                {!isPending &&<button>Add blog</button>}
                {isPending &&<button disabled>Adding blog...</button>}
                {/* <p>{isPending} && Creating ...</p> */}
                {/* <p>{!isPending} && Done creating new blog</p> */}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;