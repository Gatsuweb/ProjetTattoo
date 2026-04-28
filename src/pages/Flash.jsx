import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Modal from 'react-modal';
import GalerieFlash from "../components/GalerieFlash";
import { CarousselFlash } from "../components/CarousselFlash";
import { Link } from "react-router-dom";
import "../styles/Flash.css";


Modal.setAppElement('#root');

function Flash() {


    return (
        <>
        <Helmet>
        <title>Flashs disponibles - Valkyr Ink Tattoo</title>
        <meta 
          name="description" 
          content="Flashs de tatouages uniques et originaux créés par Valkyr Ink à Plévin, à proximité de Carhaix. Réservez dès maintenant votre coup de cœur !"
        />
      </Helmet>
            <section className="container-flash">
                <NavBar />
                <h1>Galerie des Flashs</h1>
                <div className="flash-header">
                    <p>Découvrez mes créations originales disponibles immédiatement</p>
                    <Link to="/reservation-flash" className="reserve-button">
                        Réserve ton flash
                    </Link>
                </div>
                <CarousselFlash />
                <div>
                    <GalerieFlash />
                </div>
            </section>
        </>
    );
}

export default Flash;