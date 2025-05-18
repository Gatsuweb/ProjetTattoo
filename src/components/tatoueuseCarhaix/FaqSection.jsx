import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Votre salon de tatouage est proche de Carhaix ?",
      answer: "Mon salon de tatouage se trouve à Plévin, à seulement quelques minutes de Carhaix. L'accès est facile en voiture, avec un stationnement à proximité. J'accueille régulièrement des clients venant de Carhaix et du Centre-Bretagne."
    },
    {
      question: "Quels sont les tarifs d'un tatouage à Carhaix ?",
      answer: "Le tarif dépend de la taille, de la complexité et du style de votre projet. N'hésitez pas à me décrire votre idée pour obtenir un devis précis. Mes tarifs restent accessibles et transparents pour tous les clients de Carhaix."
    },
    {
      question: "Proposez-vous uniquement des tatouages personnalisés ?",
      answer: "Oui, tous mes tatouages sont uniques. Je réalise chaque dessin sur-mesure après avoir échangé avec vous, pour que le motif corresponde parfaitement à votre histoire et vos envies."
    },
    {
      question: "Quelles garanties d'hygiène offrez-vous ?",
      answer: "Je respecte rigoureusement les normes sanitaires en vigueur : matériel à usage unique, espace désinfecté après chaque séance, hygiène irréprochable pour garantir votre sécurité"
    },
    {
      question: "Puis-je vous rencontrer avant de me décider ?",
      answer: "Bien sûr ! Discutons de votre projet autour d'un café, le salon est à côté de Carhaix, c'est sans engagement, je vous aiderai à concrétiser votre projet avec plaisir."
    }
  ];

  return (
    <div className="faq-section">
      <h2>Questions frequentes</h2>
      <div className="faq-accordion">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;