import PropTypes from "prop-types";
import Elipse1 from "../assets/Ellipse1.svg";
import Elipse2 from "../assets/Ellipse2.svg";
import Elipse3 from "../assets/Ellipse3color.svg";
import Elipse4 from "../assets/Ellipse4.svg";
import "../styles/Elipse.css";

function Elipse(props) {
    const { functionScroll } = props;

    return (
        <section className="elipseContain">
            <div className="elipses une">
                <img src={Elipse1} alt="" />
                <p>Devis</p>
            </div>
            <div className="elipses deux" onClick={functionScroll.handleClick}>
                <img src={Elipse2} alt="" />
                <p>Qui suis-je ?</p>
            </div>
            <div className="elipses trois">
                <img src={Elipse3} alt="" />
                <p>Hygiène</p>
            </div>
            <div className="elipses quatres">
                <img src={Elipse4} alt="" />
                <p>Event</p>
            </div>
        </section>
    );
}

Elipse.propTypes = {
    functionScroll: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }).isRequired,
};

export default Elipse;
