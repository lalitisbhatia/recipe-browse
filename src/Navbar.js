import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">            
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            {/* <Link to="/blogs">Blog Tutorial</Link> */}
            {/* <Link to="/create" style={{
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
            }}>New Blog</Link> */}
        </nav>
    );
}
 
export default Navbar