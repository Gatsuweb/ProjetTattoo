import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../tatoueuseCarhaix/GallerySection.css";

// Import all images from gallerieCarhaix
import img0 from "../../assets/galerieCarhaix/melCarhaix.jpg";
import img1 from "../../assets/galerieCarhaix/melCarhaix1.jpg";
import img2 from "../../assets/galerieCarhaix/melCarhaix2.jpg";
import img3 from "../../assets/galerieCarhaix/melCarhaix3.jpg";
import img4 from "../../assets/galerieCarhaix/melCarhaix4.jpg";
import img5 from "../../assets/galerieCarhaix/melCarhaix5.jpg";

const GallerySection = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Array of all gallery images
  const galleryImages = [img0, img1, img2, img3, img4, img5];

  useEffect(() => {
    const slider = sliderRef.current;
    let isAnimating = true;
    let scrollAmount = slider ? slider.scrollWidth : 0; // Commencer par la fin pour défiler vers la gauche
    const scrollSpeed = 0.5; // ajustez selon la vitesse souhaitée
    
    const scroll = () => {
      if (slider && isAnimating && !isPaused) {
        // Diminuer la valeur de scrollLeft pour défiler vers la gauche
        scrollAmount -= scrollSpeed;
        slider.scrollLeft = scrollAmount;
        
        // Si on atteint le début, revenir à la fin
        if (scrollAmount <= 0) {
          scrollAmount = slider.scrollWidth - slider.clientWidth;
          slider.scrollLeft = scrollAmount;
        }
      }
      
      if (isAnimating) {
        requestAnimationFrame(scroll);
      }
    };
    
    const animationId = requestAnimationFrame(scroll);
    
    // Add pause/resume on hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      isAnimating = false;
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter);
        slider.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isPaused]);

  return (
    <section className="gallery-section">
      <span className="section-numbers">02</span>
      <div className="gallery-container">
        <div className="gallery-header">
          <div>
            <h2>Galerie</h2>
            <p className="gallery-subtitle">Découvrez mon univers et des projets que j&apos;ai eu le plaisir d&apos;encrer</p>
          </div>
        </div>
        
        <div className="horizontal-slider" ref={sliderRef}>
          {/* Répétez les images plusieurs fois pour avoir assez de contenu à défiler */}
          {[...Array(10)].map((_, repeatIndex) => (
            galleryImages.map((image, index) => (
              <div className="slider-item" key={`repeat-${repeatIndex}-${index}`}>
                <img src={image} alt={`Création tatouage ${index + 1}`} />
              </div>
            ))
          ))}
        </div>
        
        <Link to="/galerie" className="gallery-link">
        Explorer la galerie complète
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;