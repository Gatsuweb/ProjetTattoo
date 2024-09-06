import NavBar from "../components/NavBar";
import "../styles/Flash.css";
import Modal from 'react-modal';
import Fl1 from "../assets/flash/f1.jpg"
import Fl2 from "../assets/flash/f2.jpg"
import Fl3 from "../assets/flash/f3.jpg"
import Flash9 from "../assets/flash/flash9.jpg";
import Flash10 from "../assets/flash/flash10.jpg";
import Flash2 from "../assets/flash/flash2.jpg";
import Fl7 from "../assets/flash/flash7.jpg";
import GalerieFlash from "../components/GalerieFlash";


Modal.setAppElement('#root');

function Flash() {


    return (
        <>
            <section className="container-flash">
                <NavBar />
            <div >
                <GalerieFlash />
           
            </div>
        </section>
        </>
    );
}

export default Flash;