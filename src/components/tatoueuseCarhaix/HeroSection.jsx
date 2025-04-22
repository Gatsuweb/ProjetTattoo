import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../../assets/bgVideo.mov";
import Insta from "../../assets/contact/insta.svg"
import Mail from "../../assets/contact/mail.svg"
import Tel from "../../assets/galerieCarhaix/icone-tel.png"
import mel from "../../assets/mescreations.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  // Get current date in DD/MM format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const currentDate = `${day}/${month}`;

  return (
    <section className="hero-section">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="heroCarhaix-content">
        <div className="heroCarhaix-header">
          <h1>Tatoueuse Carhaix</h1>
          <p>
            Artiste tatoueuse à proximité de Carhaix. <br />Je vous accueille dans mon salon de tatouage pour encrer vos idées.
            <br />Discutons de votre projet autour d'un café.
          </p>
          <div className="buttonsContainer">
            <Link to="/contact">
              <button className="btnContact">Prendre RDV</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomHeroCarhaix">
        <h3>{currentDate}</h3>
        
        <div className="contact-icone">
                    <a href="mailto:valkyrink@outlook.com" className="iconemail" target="_blank" aria-label="Envoyer un mail"  rel="noopener noreferrer">                    <img src={Mail} alt="" />
                    </a>
                    <a href="https://www.instagram.com/valkyr__ink/" className="iconeinst" aria-label="Voir sur Instagram"  target="_blank" rel="noopener noreferrer"><img src={Insta} alt="" /></a>
                    <a href="tel:+33606420066" className="iconetel" aria-label="Appeler Valkyr Ink" target="_blank" rel="noopener noreferrer"><img src={Tel} alt="" height={22} width={22} /></a>
                    </div>
            
          <Link to="/galerie">
        <div className="imgElipseCarhaix">
          <img src={mel} alt="Tatouages réalisés par Mélanie, tatoueuse à proximité de Carhaix" />
        </div>
          </Link>
      </div>
    </section>
  );
};

export default HeroSection;