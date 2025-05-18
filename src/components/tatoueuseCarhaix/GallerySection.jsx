import React from "react";
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
  // Array of all gallery images
  const galleryImages = [img0, img1, img2, img3, img4, img5];

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
        
        <div className="slider-container">
          <div className="slider-track">
            {/* First set of images */}
            {galleryImages.map((image, index) => (
              <div className="slider-item" key={`first-${index}`}>
                <img src={image} alt={`Création tatouage personnalisé à Carhaix`} />
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {galleryImages.map((image, index) => (
              <div className="slider-item" key={`second-${index}`}>
                <img src={image} alt={`Création tatouage personnalisé à Carhaix`} />
              </div>
            ))}
          </div>
        </div>
        
        <Link to="/galerie" className="gallery-link">
          Explorer la galerie complète
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;