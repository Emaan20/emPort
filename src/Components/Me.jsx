import React from "react";
import "../CSS/Me.css"; 
import Header from "./Header";
import Card from "./Card";
import  oopImage from "../assets/Oop.png"; 
import  backImage from "../assets/Back End Developer.png"; 
import  frontImage from "../assets/Front End.png"; 

function Me() {

    const arr = [
        {
          name: "Front-End Developer",
          src: frontImage,
         
          Language: "Languages I Speak",
          language: "Html, Css, Git, Js",
          Tools: "Tools I use",
          tools: "VSCode, React, Github, Bootstrap, Tailwind",
        },
        {
          name: "Back-End Developer",
          src: backImage,
        
          Language: "Languages I Speak",
          language: "JavaScript, SQL",
          Tools: "Tools I use",
          tools: "Express, MongoDB, Git",
        },
        {
          name: "Java Developer",
          src: oopImage,
         
          Language: "Languages I Speak",
          language: "Java",
          Tools: "Tools I use",
          tools: "IntelliJ, Git, SceneBuilder",
        }
      ];
    return (
       
<div id="outer"> 

        <div className="me-container" id="me">
            
            <h1>
                <span className="hover-text">Hi</span>, <span className="hover-text">I’m</span> <span className="hover-text">Emaan.</span>
            </h1>
            <br />
            <p>
            <span className="hover-text">I</span> <span className="hover-text">am</span> <span className="hover-text">a</span> <span className="hover-text">Full-stack</span> <span className="hover-text">Developer</span> <span className="hover-text">with</span> <span className="hover-text">a</span> <span className="hover-text">strong</span> <span className="hover-text">skill</span> <span className="hover-text">set</span> <span className="hover-text">in</span> <span className="hover-text">HTML,</span> <span className="hover-text">CSS,</span> <span className="hover-text">JavaScript,</span> <span className="hover-text">Bootstrap,</span> <span className="hover-text">Tailwind,</span> <span className="hover-text">React,</span> <span className="hover-text">and</span> <span className="hover-text">backend</span> <span className="hover-text">technologies</span> <span className="hover-text">such</span> <span className="hover-text">as</span> <span className="hover-text">Node.js,</span> <span className="hover-text">Express,</span> <span className="hover-text">and</span> <span className="hover-text">MongoDB.</span> <span className="hover-text">I</span> <span className="hover-text">also</span> <span className="hover-text">have</span> <span className="hover-text">experience</span> <span className="hover-text">in</span> <span className="hover-text">Java,</span> <span className="hover-text">which</span> <span className="hover-text">I</span> <span className="hover-text">use</span> <span className="hover-text">to</span> <span className="hover-text">develop</span> <span className="hover-text">robust</span> <span className="hover-text">and</span> <span className="hover-text">efficient</span> <span className="hover-text">OOP-based</span> <span className="hover-text">applications.</span> <span className="hover-text">My</span> <span className="hover-text">passion</span> <span className="hover-text">lies</span> <span className="hover-text">in</span> <span className="hover-text">building</span> <span className="hover-text">end-to-end</span> <span className="hover-text">solutions</span> <span className="hover-text">that</span> <span className="hover-text">are</span> <span className="hover-text">scalable,</span> <span className="hover-text">maintainable,</span> <span className="hover-text">and</span> <span className="hover-text">deliver</span> <span className="hover-text">an</span> <span className="hover-text">excellent</span> <span className="hover-text">user</span> <span className="hover-text">experience.</span>


            </p>
        </div>
        
        <div className="cards-container">
  {arr.map((item, index) => (
    <Card
      key={index}
      src={item.src}
      name={item.name}
      description={item.description}
      Language={item.Language}
      language={item.language}
      Tools={item.Tools}
      tools={item.tools}
    />
  ))}
        </div>

        </div>


      
    );
}

export default Me;
