import NavBar from "../components/NavBar";
import "../styles/Flash.css";
import Modal from 'react-modal';
import GalerieFlash from "../components/GalerieFlash";
import { CarousselFlash } from "../components/CarousselFlash";


Modal.setAppElement('#root');

function Flash() {


    return (
        <>
            <section className="container-flash">
                <NavBar />
                <h1>Galerie des Flashs</h1>
            <CarousselFlash />
            <div >
                <GalerieFlash />
           
            </div>
        </section>
        </>
    );
}

export default Flash;