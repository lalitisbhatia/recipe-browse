import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const RecipeList = (props) => {
    // console.log(props.recipes)

    // recipes list from all recipes endpoiont returns maxPointsPrecise whereas the search tfrom the Trie returns pts ( this is to make the size of the trie smaller)
    return (
        <div className="recipe-list">
            <h2>{props.title}</h2>
            {props.recipes.map(({name,id,maxPointsPrecise,key,images,pts,tags}) => {             
                // {let rid=recipe.id}
                // {console.log(tags.join(' | '))}
                
                let showImage = !(images===undefined || images===null || Object.keys(images).length === 0) && Object.keys(images.SMALL).length!==0
                // console.log("show Image: ", showImage)
                // {console.log(images)}
                return <div className="recipe-list-inner" key={key||id}>   
                    <Link  to={{pathname:`/recipes/${id}` }} state={{ id: {id}, name:{name} }}>
                        <div className="row">                       
                            <div className="column">
                                <p><span><b>{name} </b></span><span>  </span> </p>
                                {tags && <div className="tags-list">
                                    {tags.join(' | ')}
                                </div>   }                     
                                {/* {Math.round(maxPointsPrecise||pts)} <b>POINTS:</b> */}
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
    )
}
export default RecipeList