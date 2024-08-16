import React, { useState } from 'react';
import '../CSS/Contact.css'; 
import Header from './Header';
import contactBack from '../assets/pexels-enginakyurt-14524917.jpg'; // Import the background image
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast notifications

function Contact() {
    const [name, setName] = useState(sessionStorage.getItem("name") || '');
    const [email, setEmail] = useState(sessionStorage.getItem("email") || '');
    const [message, setMessage] = useState(sessionStorage.getItem("message") || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Form validation
        if (!name || !email || !message) {
            toast.error("Please fill all input fields");
            return;
        }

        // Form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        try {
            
            const response = await fetch('https://formspree.io/f/mvgpqpol', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
               
                setName("");
                setEmail("");
                setMessage("");
                sessionStorage.clear();
                toast.success("Message sent successfully!");
            } else {
                toast.error("There was a problem with your submission. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("There was a problem with your submission. Please try again.");
        }
    };

    return (
        <div>
            <Header />
            <div className="contact-wrapper">
                <img src={contactBack} alt="Contact Background" className="contact-back" />
                <img src={require('../assets/contact-us.svg').default} alt="Contact Us" className="contact-image" />
                <div className="contact-container" id='contact'>
                    <h2>Thanks for taking your time to reach out. How can I help you today?</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                const value = e.target.value;
                                setName(value);
                                sessionStorage.setItem('name', value);
                            }}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                const value = e.target.value;
                                setEmail(value);
                                sessionStorage.setItem('email', value);
                            }}
                            required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => {
                                const value = e.target.value;
                                setMessage(value);
                                sessionStorage.setItem('message', value);
                            }}
                            required
                        ></textarea>
                        <button type="submit" disabled={!name || !email || !message}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Contact;
