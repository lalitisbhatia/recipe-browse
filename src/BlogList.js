import { Link } from "react-router-dom";

const BlogList = (props) => {

    return (  
        <div className="blog-list">
            <h2>{props.title}</h2>
            {props.blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>                    
                    {/* // USING functions as props - demo using a delete button . the handleDelete function will be defined in the home component where the actual data is and then its passed in as a prop */}
                    {/* <button onClick={() => props.handleDelete(blog.id)}>delete blog</button> */}

                </div>
                

            ))}
        </div>
    );
}
 
export default BlogList;