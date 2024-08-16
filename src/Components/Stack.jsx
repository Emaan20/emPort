import React, { useEffect, useRef } from "react";
import "../CSS/Stack.css"; 

import jsIcon from "../assets/js.png";
import cssIcon from "../assets/social-media.png";
import htmlIcon from "../assets/program.png";
import bootstrapIcon from "../assets/bootstrapping.png";
import tailwindIcon from "../assets/wind.png";
import reactIcon from "../assets/atom.png";
import sqlimg from "../assets/database.png"
import expressimg from "../assets/express.svg"
import Cardd from "./Cardd";
import "../CSS/Cardd.css";


function Stack() {
 

    const stackRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const icons = entry.target.querySelectorAll("img");
                    if (entry.isIntersecting) {
                        icons.forEach((icon, index) => {
                            icon.classList.add("animate");
                        });
                    } else {
                        icons.forEach((icon, index) => {
                            icon.classList.remove("animate");
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (stackRef.current) {
            observer.observe(stackRef.current);
        }

        return () => {
            if (stackRef.current) {
                observer.unobserve(stackRef.current);
            }
        };
    }, []);

    return (
        <div id="out">
        <div className="stack-container" ref={stackRef}>
            <h2>MY SKILLS</h2>
            <br />
            <br />
            <div className="stack-icons">
                <div className="icon-container">
                    <img src={jsIcon} alt="JavaScript Icon" />
                    <span className="icon-text">JavaScript</span>
                </div>
                <div className="icon-container">
                    <img src={cssIcon} alt="CSS Icon" />
                    <span className="icon-text">CSS</span>
                </div>
                <div className="icon-container">
                    <img src={htmlIcon} alt="HTML Icon" />
                    <span className="icon-text">HTML</span>
                </div>
                <div className="icon-container">
                    <img src={bootstrapIcon} alt="Bootstrap Icon" />
                    <span className="icon-text">Bootstrap</span>
                </div>
                <div className="icon-container">
                    <img src={tailwindIcon} alt="Tailwind Icon" />
                    <span className="icon-text">Tailwind</span>
                </div>
                <div className="icon-container">
                    <img src={reactIcon} alt="React Icon" />
                    <span className="icon-text">React</span>
                </div>
                <div className="icon-container">
                    <img src={sqlimg} alt="SQL Icon" />
                    <span className="icon-text">MongoDb</span>
                </div>
                <div className="icon-container">
                    <img src={expressimg} alt="Express Icon" />
                    <span className="icon-text">Express</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Stack;
