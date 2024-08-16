import React from "react";
import "../CSS/Cardd.css";
import gitImage from "../assets/github.svg"; 
import demoImage from "../assets/demo.png"; 

function Cardd(props) {
    return (
        <div className="card">
            <div id="cardimg" >
            <img src={props.src} alt="Card Image" />
            </div>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.tools}</h4>
                <p>{props.description}</p>
            </div>
            <div className="icons-container">
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <img src={demoImage} alt="demo Link" id="demoimg"  className="imgs" />
                </a>
            <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
                <img src={gitImage} alt="GitHub Link" id="gitimg" className="imgs" />
            </a>
            </div>
           </div>
    );
}

export default Cardd;
