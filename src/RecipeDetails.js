import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useFetch } from "./useFetch";

const RecipeDetails = (props) => {
    const location = useLocation()
    const recipeId = location.state.id.id
    console.log(location.state.id.id)
    const {data: recipeDetail,isPending,error} = useFetch(`http://localhost:3300/recipes/${recipeId}`)
    console.log("fetched recipe detail = ", typeof(recipeDetail));
    
    // console.log(recipeDetail.hasOwnProperty("id"))
    const showImage =  true
    // !(recipeDetail.images===undefined || recipeDetail.images===null || Object.keys(recipeDetail.images).length === 0);
    return (
        <div className="recipe-details">
            {recipeDetail && <article>
                    <h2>{recipeDetail.name}</h2>
                    <div><span>  <b><i>POINTS</i> : </b></span>{Math.round(recipeDetail.maxPointsPrecise)} </div>
                    <div className="row">
                        <div className="column">
                            <span>{recipeDetail.description}</span>
                        </div>
                        <div className="column">
                            <img src={ !(recipeDetail.images===undefined || recipeDetail.images===null || Object.keys(recipeDetail.images).length === 0)?recipeDetail.images.LARGE.url:""}></img>        
                        </div>
                    </div>
                    
                    <br></br>
                    
                    
                    {/* {console.log(recipeDetail.tags)} */}
                    <p><b>Tags: </b> {recipeDetail.tags.reduce((acc,tag) => {
                        return acc+=tag + ", "
                    },"")}</p>

                    <br></br>
                    <h3><b>Ingredients: </b></h3>
                    <div className="recipe-ingredients-list">
                        {recipeDetail.ingredients.map((ingr)=>(
                            <div className="recipe-ingredient" key={ingr.id}>
                                {ingr.ingredientName}
                            </div>
                        ))}    
                    </div>
                    <br></br>
                    <h3><b>Instructions: </b></h3>
                    <div className="recipe-instruction-list">
                        {recipeDetail.instructions.map((instr)=>(                            
                            <div className="recipe-ingredient" key={instr.id}>
                                <b>{instr.id}</b>.  {instr.instruction}
                            </div>
                        ))}    
                    </div>
                                    
                </article>  }
        </div>
    )
}
export default RecipeDetails;