import PropTypes from "prop-types";
import "../styles/Soin.css"

function Soin(props) {
    const {soinRef} = props
    return (
        <section className="soinContainer" ref={soinRef}>
            <div className="soinContent">
                <h2>SOIN</h2>
                <ul className="listSoin">
                    <li>Fait ça</li>
                    <li>Fait ci</li>
                    <li>Puis ça</li>
                    <li>Et encore ça</li>
                    <li>Et pas de soleil</li>
                    <li>Et pas de mer</li>
                </ul>
            </div>
        </section>
    )
}
Soin.propTypes = {
    soinRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Soin;