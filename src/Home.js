import { useState, useRef,useEffect } from "react";

import { useFetch } from "./useFetch";
import RecipeList from './RecipeList'
import { recipeSearch } from "./trieHelper";
// import { useFetch } from "./useFetch";

const Home = () => {

    let [searchTerm, setSearchTerm] = useState("")
    let [searchResults, setSearchResults] = useState([])
    
  const searchHandler = (e) => {
    const str = e.target.value;
    console.log("inside handler: string = ", str)

    setSearchTerm(str)
    console.log(str)
    console.log(recipeTrie)
    // console.log(recipeSearch(str, 0, recipeTrie));
    let searchRes = recipeSearch(str, 0, recipeTrie).map(res => {
        return res.nodeObj;
    })
    
    console.log(searchRes)
    setSearchResults(searchRes);
    // topPredictions = predictions.slice(0,100)
  }


    // const recipeTrie = localStorage.getItem("recipeTrie")
    const {data: recipes,isPending,error} = useFetch("http://localhost:3300/recipes?num=20",true)
    const {data: recipeTrie} = useFetch("http://localhost:3300/recipes/utils/trie",true)
    
    // console.log(recipeTrie)


    /********** RETURN COMPONENT CODE STARTS HERE **********/
    return (         
        <div className='home'>
            {  <input  
                    className="search-input"
                    type="text"
                    required
                    disabled={!recipeTrie}
                    value= {searchTerm}
                    placeholder="search more recipes"
                    onChange={searchHandler}
                />}
            <br></br><br></br>
            {searchResults.length>0 && <RecipeList title="Recipes Results!" recipes={searchResults}/>}
            {searchResults.length===0 && searchTerm && <RecipeList title="No Results Found!" recipes={searchResults}/>}
            <br></br>
            {recipes && <RecipeList title="Popular Recipes!" recipes={recipes.data}/>}

      </div>
     );
}
 
export default Home;