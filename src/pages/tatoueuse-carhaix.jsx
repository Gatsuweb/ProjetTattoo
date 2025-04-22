import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/tatoueuseCarhaix/HeroSection";
import AboutSection from "../components/tatoueuseCarhaix/AboutSection";
import GallerySection from "../components/tatoueuseCarhaix/GallerySection";
import ReviewsSection from "../components/tatoueuseCarhaix/ReviewsSection";
import ContactSection from "../components/tatoueuseCarhaix/ContactSection";
import "../styles/TatoueuseCarhaix.css";

export default function TatoueuseCarhaix() {
  return (
    <div className="tatoueuseCarhaix">
       <Helmet>
        <title>Tatoueur Carhaix – Valkyr Ink, une tatoueuse passionnée à proximité</title>
        <meta
          name="description"
          content="Vous cherchez une tatoueuse à Carhaix ? Valkyr Ink vous accueille dans son salon privé à Plévin, à seulement 10 minutes. Créations sur-mesure, ambiance calme et artistique. Sur rendez-vous uniquement."
          />
        <meta
          name="keywords"
          content="Tatoueur Carhaix, tatouage Carhaix, tatouage couleur Carhaix, tatoueur proche Carhaix, Valkyrink Carhaix"
        />
        <meta property="og:title" content="Tatoueur Carhaix – Valkyr Ink, une tatoueuse passionnée à proximité" />
        <meta
          property="og:description"
          content="À seulement 10 min de Carhaix, Valkyr Ink propose des tatouages sur-mesure dans un cadre confidentiel et artistique."
        />
        <meta property="og:url" content="https://valkyrink-tattoo.com/tatoueuse-carhaix" />
        <meta property="og:image" content="https://valkyrink-tattoo.com/images/og-valkyr.jpg" />
  
        <link rel="canonical" href="https://valkyrink-tattoo.com/tatoueuse-carhaix" />
      </Helmet>
      <NavBar />
      <div className="stickyContainer">
        <div className="divSticky">
        <HeroSection />
        </div>
        <div className="divSticky">
        <AboutSection />
        </div>
        <div className="divSticky">
          <GallerySection />
          <ReviewsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}