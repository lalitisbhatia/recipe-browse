// import { Link } from "react-router-dom";

const FoodList = (props) => {
    // console.log(props)
    return (  
        <div className="blog-list">
            <h2>{props.title}</h2>
            
            {props.foods.map((food) => (                
                <div className="blog-preview" key={Math.random()*100000}>                    
                        <p><span>{food.suggestion}, </span><span><b>count:</b>  {food.count}</span> </p>
                    
                </div>
                

            ))}
        </div>
    );
}
 
export default FoodList;