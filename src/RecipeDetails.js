import { useParams } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

const RecipeDetails = (props) => {
    const location = useLocation()
    const routeParams = useParams();
    // console.log(location.state)
    // const recipeId = location.state.id.id
    const recipeId = routeParams.id
    // const recipeName = location.state.name.name
    const navigate = useNavigate();
    
    const {data: recipeDetail,isPending,error} = useFetch(`http://localhost:3300/recipes/${recipeId}`,true,[recipeId])
    const {data: similarRecipes,isPending1,error1} = useFetch(`http://localhost:3300/recipes/similar/${recipeId}`,true,[recipeId])
    // console.log("fetched recipe detail = ", recipeDetail);
    
    // console.log(recipeDetail)
    
    const showImage =  true
    
    // console.log("state id: ",recipeId)
    // console.log("route params: ",routeParams)
    // useEffect(() => {
    //     console.log("called use effect on recipa deatils");
    //      useFetch(`http://localhost:3300/recipes/${recipeId}`)
    //     redirect(`/recipes/${recipeId}`);
    //   }, [])
    
    // showImage = !(recipeDetail.images===undefined || recipeDetail.images===null || Object.keys(recipeDetail.images).length === 0);
    const getImageUrl = () => {
        if(!(recipeDetail.data.images===undefined || recipeDetail.data.images===null || Object.keys(recipeDetail.data.images).length === 0)){
            //images object exists
            //now check if the Large image exists
            
            if(recipeDetail.data.images.LARGE) return recipeDetail.data.images.LARGE.url;
            if(recipeDetail.data.images.MEDIUM) return recipeDetail.data.images.MEDIUM.url;   
            
            
        }
        return null
    }
    return (
        
        
            <div className="row">
                <div className="column" >
                    <div className="recipe-details">
                        {recipeDetail && <article>
                        <h2>{recipeDetail.data.name}</h2>
                        {/* <div><span>  <b><i>POINTS</i> : </b></span>{Math.round(recipeDetail.data.maxPointsPrecise)} </div> */}
                        <div className="row">
                            <div className="column">
                                <span>{recipeDetail.data.description}</span>
                            </div>
                            <div className="column">
                                <img src={getImageUrl()} width="300" height="300"></img>        
                            </div>
                        </div>
                        
                        <br></br>
                        
                        
                        {/* {console.log(recipeDetail.tags)} */}
                        <p><b>Tags: </b> {recipeDetail.data.tags.reduce((acc,tag) => {
                            return acc+=tag + " | "
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

                {/* Similar recipes column */}
                <div className="column"  >

                    <div className="similar-recipes">
                        <h2 style={{fontSize: 20,color: '#1a9c9c', marginBottom: 10, paddingLeft:"40px" }}>Similar Recipes</h2>
                        <p style={{width:500, padding:"4px 40px"}}></p>
                        <div className="column-border-left">
                            {similarRecipes && similarRecipes.data.map(({name,id,maxPointsPrecise,images}) => {             
                                
                                let showImage = !(images===undefined || images===null || Object.keys(images).length === 0) && Object.keys(images.SMALL).length!==0
                                // console.log("show Image: ", showImage)
                                // {console.log(images)}
                                return <div className="recipe-list-inner" key={id}>   
                                    <Link  to={{pathname:`/recipes/${id}` }} state={{ id: {id}, name:{name} }}>
                                        <div className="row">                       
                                            <div className="column">
                                            <p><span>{name} </span> </p>                        
                                            {/* <span> <br></br><b><i>POINTS: </i></b> {Math.round(maxPointsPrecise)} </span> */}
                                            </div>
                                            <div className="column">
                                                <img src={showImage?(images.SMALL.url):""}></img>                      
                                            </div>
                                        </div>
                                    </Link>           
                                    
                                </div>
                                })
                            }                            
                        </div>
                       
                    </div>
                    
                </div>
            </div>
            
    )
}
export default RecipeDetails;