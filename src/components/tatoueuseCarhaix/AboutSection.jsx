import React from "react";
import mel from "../../assets/melanie.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={mel} alt="Tatoueuse à Carhaix" />
        </div>
        <div className="about-text-container">
          <div className="titleAbout">
            <h2>Le salon</h2>
            <span>01</span>
          </div>
          <div className="about-paragraphs">
            <div className="about-paragraph">
              <p>
              Situé à seulement quelques minutes de Carhaix, le shop est intimiste, à l&apos;abri des regards, sans passage constant. Ici, pas de vitrine, pas de bruit : juste vous, moi, de l&apos;encre et des idées.. Dans un espace chaleureux et calme.
              </p>
            </div>
            <div className="about-paragraph">
              <p>
              Que vous ayez une idée bien précise ou simplement une envie, je prends le temps d&apos;échanger avec vous pour créer un motif unique qui vous ressemble. Beaucoup de mes clients viennent de Carhaix et des alentours pour cette approche humaine et sans pression, où l&apos;écoute et la bienveillance sont essentielles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;