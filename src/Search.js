import { useState, useEffect, useRef } from "react";
// import RecipeList from './RecipeList'
import foods from "./foodsRaw";
import { generateTrie } from "./createTrie";
import { search } from "./trieHelper";
import FoodList from "./FoodList"


const Search = () => {
  let foodTrieRef = useRef(0);
  let foodTrie;
  let test = "test"
  useEffect(() => {
    foodTrieRef.current = generateTrie(foods);
    console.log("use effect running")
    console.log(foodTrieRef.current)
  }, [foodTrie, test])

  foodTrie = foodTrieRef.current
  // console.log(foodTrie)
  let [predictions, setPredictions] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  // let topPredictions = []
  console.log(predictions);   
  const searchHandler = (e) => {
    const str = e.target.value;
    console.log("inside handler: string = ", str)

    setSearchTerm(str)
    setPredictions(search(str, 0, foodTrieRef.current));
    // topPredictions = predictions.slice(0,100)
  }
  return (
    <div className='home'>
      <h2>Search foods</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={searchHandler}
      />
      <br></br>
      <br></br>

      {/* {console.log(`all predictions ${predictions}`)} */}
      {predictions.length>0 && <FoodList foods={predictions} title="Search Results!" />}
    </div>
  )
}

export default Search;