import "../styles/Contact.css"
import { useState } from 'react';
import NavBar from "./NavBar";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("degage d'ici")
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-container">
            <NavBar />
            <div className="page-contact">
                <div>
                    <h2>Un projet ?</h2>
                    <p className="contact-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci fugit magnam minima dolore eligendi, porro eos ea culpa, voluptatem blanditiis minus asperiores. Quam sapiente, delectus quasi officiis laborum exercitationem?</p>
                </div>
                <div className="contact-form">
                    <h2>Contactez-moi</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">Prénom:</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Nom:</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;