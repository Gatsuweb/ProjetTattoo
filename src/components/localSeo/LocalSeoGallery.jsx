/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img0 from "../../assets/galerieCarhaix/melCarhaix.jpg";
import img1 from "../../assets/galerieCarhaix/melCarhaix1.jpg";
import img2 from "../../assets/galerieCarhaix/melCarhaix2.jpg";
import img3 from "../../assets/galerieCarhaix/melCarhaix3.jpg";
import img4 from "../../assets/galerieCarhaix/melCarhaix4.jpg";
import img5 from "../../assets/galerieCarhaix/melCarhaix5.jpg";

const galleryImages = [img0, img1, img2, img3, img4, img5];

function LocalSeoGallery({ page }) {
  return (
    <section className="localSeoGallery">
      <span className="localSeoNumber">05</span>
      <div className="localSeoGallery-inner">
        <h2>Galerie</h2>
        <p>Quelques pieces et inspirations de l&apos;univers Valkyr Ink pour imaginer votre projet pres de {page.shortVille}.</p>
        <div className="localSeoGallery-grid">
          {galleryImages.map((image, index) => (
            <img
              src={image}
              alt={`Tatouage realise par Valkyr Ink pres de ${page.shortVille} - creation ${index + 1}`}
              key={image}
            />
          ))}
        </div>
        <Link to="/galerie" className="localSeoTextLink">
          Voir la galerie complete
        </Link>
      </div>
    </section>
  );
}

export default LocalSeoGallery;
