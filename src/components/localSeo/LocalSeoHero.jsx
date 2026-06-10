/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import bgVideo from "../../assets/bgVideo.mov";
import Mail from "../../assets/contact/mail.svg";
import Insta from "../../assets/contact/insta.svg";
import Tel from "../../assets/galerieCarhaix/icone-tel.png";
import mel from "../../assets/mescreations.jpg";

function LocalSeoHero({ page }) {
  const today = new Date();
  const currentDate = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}`;

  return (
    <section className="localSeoHero">
      <video className="localSeoHero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="localSeoHero-content">
        <p className="localSeoHero-kicker">Valkyr Ink - Plevin</p>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <Link to="/contact" className="localSeoHero-cta">
          Prendre rendez-vous
        </Link>
      </div>

      <div className="localSeoHero-bottom">
        <span>{currentDate}</span>
        <div className="localSeoHero-icons">
          <a href="mailto:valkyrink@outlook.com" aria-label="Envoyer un mail à Valkyr Ink" target="_blank" rel="noopener noreferrer">
            <img src={Mail} alt="" />
          </a>
          <a href="https://www.instagram.com/valkyr__ink/" aria-label="Voir Valkyr Ink sur Instagram" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="" />
          </a>
          <a href="tel:+33606420066" aria-label="Appeler Valkyr Ink" target="_blank" rel="noopener noreferrer">
            <img src={Tel} alt="" width="22" height="22" />
          </a>
        </div>
        <Link to="/galerie" className="localSeoHero-medallion">
          <img src={mel} alt={`Galerie de tatouages Valkyr Ink près de ${page.shortVille}`} />
        </Link>
      </div>
    </section>
  );
}

export default LocalSeoHero;
