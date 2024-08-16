import React from "react";
import "../CSS/Main.css";
import Card2 from "./Cardd";

import developerIcon from "../assets/developer.png";

import comIcon from "../assets/computer1.png";
import laptopIcon from "../assets/laptop.png";
import keyboardIcon from "../assets/keyboard.png";
import mouseIcon from "../assets/mouse.png";
import htmlTagIcon from "../assets/html.png";
import cupIcon from "../assets/cup.png"; // Last icon
import Me from "./Me";
import Header from "./Header";
import Stack from "./Stack";
import Contact from "./Contact";
import Project from "./Projectt";

function Main() {
    return (
        <div id="main">
       
            <Header/>
    
        <div className="main-container">
            <div className="content">
                <div className="text">
                    <h1>HI, I AM <span>EMAAN!</span></h1>
                    <h2 class="animated-heading">FULL-STACK DEVELOPER</h2>

                    <div className="developer-icon">
                        <img src={developerIcon} alt="Developer Icon" />
                    </div>
                    
                </div>
                <div className="icons">
                    <img className="htmltag" src={htmlTagIcon} alt="HTML Tag Icon" />  
                    <img className="lap" src={laptopIcon} alt="Laptop Icon" />
                    <img className="key" src={keyboardIcon} alt="Keyboard Icon" />
                    <img className="mouse" src={mouseIcon} alt="Mouse Icon" />
                       <img className="cup" src={cupIcon} alt="Cup Icon" />
                    <img className="com" src={comIcon} alt="Computer Icon" />  
                 
                    
                </div>
            </div>
            
        </div>
        <Me/>
        <Stack/>
    
        </div>
    );
}

export default Main;
