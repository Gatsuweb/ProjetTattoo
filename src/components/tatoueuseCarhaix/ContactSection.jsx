import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informations</h3>
            <p><strong>Adresse:</strong> 8 route de Langonnet (à 10 min de Carhaix)</p>
            <p><strong>Instagram: </strong><a href="https://www.instagram.com/valkyr__ink/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}> @Valkyr__ink</a> </p>
            <p><strong>Téléphone: </strong><a href="tel:+33606420066" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>06 06 42 00 66</a> </p>
            <p><strong>Horaires:</strong> Sur rendez-vous uniquement</p>
            <div className="contact-cta">
              <a href="mailto:valkyrink@outlook.com" target="_blank" rel="noopener noreferrer">
                <button className="btnContact">Prendre rendez-vous</button>
              </a>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10632.87644156243!2d-3.505419!3d48.2216553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa12c027e9bad1dd3%3A0x7879e4c10ddc8a8f!2sValkyr__Ink!5e0!3m2!1sfr!2sfr!4v1745312117357!5m2!1sfr!2sfr" 

              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation studio de tatouage près de Carhaix"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;