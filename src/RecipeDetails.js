import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useFetch } from "./useFetch";

const RecipeDetails = (props) => {
    const location = useLocation()
    const recipeId = location.state.id.id
    console.log(location.state.id.id)
    const {data: recipeDetail,isPending,error} = useFetch(`http://localhost:3300/recipes/${recipeId}`)
    console.log("fetched recipe detail = ", typeof(recipeDetail));
    
    console.log(recipeDetail)
    const showImage =  true
    // !(recipeDetail.images===undefined || recipeDetail.images===null || Object.keys(recipeDetail.images).length === 0);
    return (
        
        
            <div className="row">
                <div >
                    <div className="recipe-details">
                        {recipeDetail && <article>
                        <h2>{recipeDetail.data.name}</h2>
                        <div><span>  <b><i>POINTS</i> : </b></span>{Math.round(recipeDetail.data.maxPointsPrecise)} </div>
                        <div className="row">
                            <div className="column">
                                <span>{recipeDetail.data.description}</span>
                            </div>
                            <div className="column">
                                <img src={ !(recipeDetail.data.images===undefined || recipeDetail.data.images===null || Object.keys(recipeDetail.data.images).length === 0)?recipeDetail.data.images.LARGE.url:""}></img>        
                            </div>
                        </div>
                        
                        <br></br>
                        
                        
                        {/* {console.log(recipeDetail.tags)} */}
                        <p><b>Tags: </b> {recipeDetail.data.tags.reduce((acc,tag) => {
                            return acc+=tag + ", "
                        },"")}</p>

                        <br></br>
                        <h3><b>Ingredients: </b></h3>
                        <div className="recipe-ingredients-list">
                            {recipeDetail.data.ingredients.map((ingr)=>(
                                <div className="recipe-ingredient" key={ingr.id}>
                                    {ingr.ingredientName}
                                </div>
                            ))}    
                        </div>
                        <br></br>
                        <h3><b>Instructions: </b></h3>
                        <div className="recipe-instruction-list">
                            {recipeDetail.data.instructions.map((instr)=>(                            
                                <div className="recipe-ingredient" key={instr.id}>
                                    <b>{instr.id}</b>.  {instr.instruction}
                                </div>
                            ))}    
                        </div>
                                        
                    </article>  }
                    </div>
                </div>
                <div >
                    <div className="similar-recipes">
                        <h2 style={{fontSize: 20,color: '#1a9c9c', marginBottom: 10, textAlign:"center" }}>Similar Recipes</h2>
                        <p style={{width:500, padding:"4px 40px"}}>recipes similar to the one on the left go here</p>
                    </div>
                    
                </div>
            </div>
            
    )
}
export default RecipeDetails;