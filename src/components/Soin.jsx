import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Soin.css";
import FicheSoin from "../assets/contact/fiche_de_soin.jpg";

function Soin(props) {
    const { soinRef } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="soinContainer" ref={soinRef}>
            <div className="soinContent">
                <h2>SOIN</h2>
                <img 
                    src={FicheSoin} 
                    alt="Fiche de soin" 
                    className="ficheSoin"
                    onClick={openModal}
                />
                {isModalOpen && (
                    <div className="modalOverlay" onClick={closeModal}>
                        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                            <img src={FicheSoin} alt="Fiche de soin" />
                            <button className="closeModal" onClick={closeModal}>×</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

Soin.propTypes = {
    soinRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Soin;
