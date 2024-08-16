import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Me from './Components/Me';
import Contact from './Components/Contact';
import Card from "./Components/Card";
import Stack from './Components/Stack';
import "./CSS/App.css";
import Project from "./Components/Projectt";


const arr = [
  {
    name: "Front-End Developer",
    src: "/web-developmrnt.png",
    description: "I am a front-end developer",
    Language: "Languages I Speak",
    language: "Html, Css, Git, Js",
    Tools: "Tools I use",
    tools: "VSCode, React, Github, Bootstrap, Tailwind",
  },
];

function App() {
  return (
    
    
      <div className="App">
        <Router>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/proj" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
        </Router> 
        
      </div>
   
  );
}

export default App;
