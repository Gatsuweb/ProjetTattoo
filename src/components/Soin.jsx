import PropTypes from "prop-types";
import "../styles/Soin.css"
import FicheSoin from "../assets/contact/fiche_de_soin.jpg"

function Soin(props) {
    // const handleDownload = () => {
    //     const imagePath = '../assets/contact/fiche_de_soin.jpg';
    //     const link = document.createElement('a');
    //     link.href = imagePath;
    //     link.download = 'fiche_de_soin.jpg';
    //     link.click();
    //     document.body.removeChild(link);
    //   };

    const {soinRef} = props
    return (
        <section className="soinContainer" ref={soinRef}>
            <div className="soinContent">
                <h2>SOIN</h2>
                {/* <button onClick={handleDownload} style={{ marginLeft: '10px' }}>
          Télécharger l'image
        </button> */}
                   <img src={FicheSoin} alt="" className="ficheSoin"/>
            </div>
        </section>
    )
}
Soin.propTypes = {
    soinRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Soin;