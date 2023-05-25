
import { useState } from "react";
import BlogList from "./BlogList";
import { useFetch } from "./useFetch";

const BlogTutorial = () => {

    // var name = "Lalit";

    
    /********** USING STATE **********/
    /********** useState **********/
    /********** Declare some state variables here **********/
    const [name,setName] = useState('Lalit')
    let [age,setAge] = useState(25)
    /********** End State declarations **********/

    const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs")
    

    /********** EVENT HANDLERS **********/
    const handleClick = (e) =>{
        console.log("Button clicked: ", e)
    }
    // handle click funtions with arguments 
    const handleClickAgain = (name,e) => {
        console.log(`Hello ${name}`, e)
    }
    const handleName = (name,e) => {
        setName(name)
    }
    const handleAge = (changeType,e) => {
        console.log('+- btn clicked')
        changeType==='add'?setAge(++age):setAge(--age)
    }
    const handleDelete = (id) => {
        console.log(`delete button clicked for ${id}`)
        let newBlogs = blogs.filter(blog => blog.id!==id)
        // setBlogs(newBlogs)
    }
    /********** ********************** **********/

    /********** RETURN COMPONENT CODE STARTS HERE **********/
    return ( 

        <div className='home'>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                handleClickAgain("Lalit",e)
            }}>Click Me Again</button>

            {/* another button here to demo react hooks to update state : use the useState hook */}
            <br></br><br></br>
            <p>**************</p>
            <p>{name}</p>
            <button onClick={(e) => {handleName("Lalit Bhatia",e)}}>Demo state hook</button>


            <p>******useState can be used for any data type. Demo here for number ********</p>
            <p>{age}</p>
            <button onClick={(e) => {handleAge('add',e)}}>+</button> &nbsp; <button onClick={(e) => {handleAge('subtract',e)}}>-</button>
            <br></br><br></br>
            <p>********Start the Blogs Here ******</p>

            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))} */}

            {/* Take the above blog list into its own reusable component */}
            {/* use props to pass data from parent to child component. 
            Name of the prop can be anything 
            Can have multiple props*/}

            {/*using LOGICAL AND will ensure that the {blogs} have reurned from the promise before being rendered */} 
            {isPending && <div>Loading ....</div>}
            {error && <div>ERROR: {error.message}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} {/* passing a function as a prop to the Blogs component */} 
            {blogs && <BlogList blogs={blogs.filter((item)=>item.author==="VVS")} title="Laxman's Blogs!"  handleDelete={handleDelete}/>}

      </div>
     );
}
 

export default BlogTutorial;