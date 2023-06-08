import { useState, useEffect, useRef } from "react";
// import RecipeList from './RecipeList'
import foods from "./foodsRaw";
import FoodList from "./FoodList"
import { useFetch } from "./useFetch";
import {generateTrie,search,TrieNode} from "fast-trie-search"

const Search = () => {

  const {data: foodTrie_api} = useFetch("http://localhost:3400/foods/utils/trie",true)
  {foodTrie_api && console.log(foodTrie_api)}

  let foodTrieRef = useRef(0);
  let foodTrie;
  let test = "test"
  useEffect(() => {
    foodTrieRef.current = generateTrie(foods,'suggestion',{splitRegex:"/[ -]/"});
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
    setPredictions(search(str, 0, foodTrie_api));
    // topPredictions = predictions.slice(0,100)
  }
  return (
    <div className='home'>
      <h2>Search foods</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={searchHandler}
        placeholder="search foods"
        disabled={!foodTrie_api}
      />
      <br></br>
      <br></br>

      {/* {console.log(`all predictions ${predictions}`)} */}
      {predictions.length>0 && <FoodList foods={predictions} title="Search Results!" />}
    </div>
  )
}

export default Search;