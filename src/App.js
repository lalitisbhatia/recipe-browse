// import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Create from './Create';
import BlogDetails from  './BlogDetails'
import Search  from './Search';
import NotFound from './NotFound';
import BlogTutorial from './BlogTutorial';
import RecipeDetails from './RecipeDetails';



function App() {
  const title = "Welcome to the Recipe search and browse";
  const likes = 50;
  const link = "http://google.com"
  return (
    <Router>
      <div className="App">
        <div className="navbar">
        <h1 >Recipe Search and Browse</h1>
        </div>
        <Navbar />
        <div className="content">
          <Routes>        
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/blogs' element={<BlogTutorial/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/recipes/:id' element={<RecipeDetails/>} />
            <Route path='/blogs/:id' element={<BlogDetails />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>  
  );
}

export default App;
