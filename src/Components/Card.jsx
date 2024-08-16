import React from "react";
import "../CSS/Card.css";

function Card(props){
    return (
      
        <div className="cards">
            <img id="imgg" src={props.src}></img>
            <h2>{props.name}</h2>
            <h3>{props.Language}</h3>
            <p>{props.language}</p>
            <h3>{props.Tools}</h3>
            <p>{props.tools}</p>
        </div>
    
    )
}
export default Card;