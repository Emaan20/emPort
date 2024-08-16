import React, { useEffect, useRef } from "react";
import "../CSS/Stack.css"; 

import jsIcon from "../assets/js.png";
import cssIcon from "../assets/social-media.png";
import htmlIcon from "../assets/program.png";
import bootstrapIcon from "../assets/bootstrapping.png";
import tailwindIcon from "../assets/wind.png";
import reactIcon from "../assets/atom.png";
import Cardd from "./Cardd";
import "../CSS/Project.css";
import hostelImage from "../assets/Hostel.jpeg"; 
import weatherImage from "../assets/weather.png"; 
import qrImage from "../assets/qr.png"; 
import Header from "./Header";
import projBack from "../assets/pexels-enginakyurt-14524917.jpg"
import attendanceImage from "../assets/att.jpeg"
import bloodDonationImage from "../assets/bloo.jpeg"

function Project() {
    const arr = [
        {
            src: attendanceImage,  // Replace with the actual image variable
            name: "Automatic-Attendance System",
            tools: "Python, MySQL",
            description: "This project is used to mark attendance of students using a camera. The system first enrolls the students and then marks the attendance of enrolled students in a registered course. This project is created with the help of OpenCV and the LBPH Algorithm in Python.",
            gitLink: "https://github.com/abasit834/Automatic-Attendance-System", // Add your link here
            demoLink: "https://www.linkedin.com/posts/abdul-basit-b4s17_i-am-excited-to-share-my-recent-semester-ugcPost-7224754988357455873-bzBl?utm_source=share&utm_medium=member_desktop",
        },
        {
            src: hostelImage, 
            name: "Hostel Management System",
            tools: "IntelliJ, OOP, Github, Javafx, Java, SQL",
            description: " I Developed a basic Hostel Management System using Java, SQL, and JavaFX to simplify hostel searches for students. The system supports adding, deleting, displaying, and searching records while leveraging core OOP principles. The application aims to streamline hostel management tasks and improve accessibility for students seeking accommodation. ",
            gitLink: "https://github.com/ZohaibAhmad0/HostelManagementSystem.git", // Add your link here
            demoLink:"https://www.linkedin.com/posts/emaan-fatima-a78a08282_im-excited-to-share-a-recent-project-that-activity-7221138267784544257-oeZi?utm_source=share&utm_medium=member_desktop",
        },
    
        {
            src: bloodDonationImage,  // Replace with the actual image variable
            name: "Blood Donation Website",
            tools: "MERN Stack",
            description: "The project features a React front end and an Express/MongoDB backend. It collects donor information, retrieves donors for recipients, and updates donor records. Admins use a secure dashboard to view total donors and recipients.",
            gitLink: "https://github.com/abasit834/blood-donation", // Add your link here
            demoLink: "",
        },
     
        {
            src: qrImage, 
            name: "QR-Generator ",
            tools: "React, Github, JS, html, CSS, API",
            description: "Developed a QR Code Generator application that creates QR codes for any given text or URL. This tool allows users to input text or links and instantly generates corresponding QR codes, making it easy to share information and access websites. The app leverages JavaScript for dynamic functionality and provides a straightforward, user-friendly interface for generating and downloading QR codes. This project enhanced my skills in front-end development and demonstrated the practical use of QR code technology.",
            gitLink: "https://github.com/Emaan20/QR-code-Generator.git", // Add your link here
            demoLink:"https://emaan20.github.io/QR-code-Generator/",
        },
   
        {
            src: weatherImage, 
            name: "Weather App",
            tools: "React, Github, JS, html, CSS, API",
            description: "I developed a weather application that fetches the current weather data from an API. This application allows users to enter the name of any city and get real-time weather information for that location. The app displays key details such as temperature, weather conditions, humidity, and wind speed. This project helped me enhance my skills in front-end development using HTML, CSS, jQuery, and JavaScript, as well as working with APIs to handle real-time data.",
            gitLink: "https://github.com/Emaan20/Weather-App.git", // Add your link here
            demoLink:"https://lnkd.in/dU3htjEg",
        },
    
        
        
    ];

    return (
        <div>
            <Header/>
        <div className="projects-container" id="proj">
        <img src={projBack} alt="Contact Background" className="proj-back" />

            <h1>PROJECTS I HAVE WORKED ON</h1>
            {arr.map((item, index) => (
                <Cardd
                    key={index}
                    src={item.src}
                    name={item.name}
                    tools={item.tools}
                    description={item.description}
                    demoLink={item.demoLink}
                    gitLink={item.gitLink} 
                    
                />
            ))}
        </div>
        </div>
    );
}

export default Project;
