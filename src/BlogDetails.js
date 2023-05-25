import { useParams } from "react-router-dom"
import { useFetch } from "./useFetch"
import {useNavigate} from "react-router-dom"

const BlogDetails = () => {
    const {id} = useParams()    
    // let [pending,setPending] = useState(false)
    let navigate = useNavigate()
    // use the custom fetch hook to get the data for this blog
    const {data: blog,isPending,error} = useFetch("http://localhost:8000/blogs/"+id)
    const handleDelete = (e) => {
        console.log( "Delete button clicked")
        fetch("http://localhost:8000/blogs/"+id,{
            method: "DELETE"
        }).then(res =>{
            if(res.ok){
                // setPending(false)
                navigate('/')
                // console.log(res)
            }
            
        })
    }
    return (        
        <div className="blog-details">
            {isPending && <div>loading ...</div>}
            <div>ERROR: {error}</div>
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={(e) => {handleDelete(e)}}>Delete Blog</button>
                </article>                
            )}
        </div>
        
    )
}

export default BlogDetails