import PropTypes from "prop-types";
import Elipse3 from "../assets/Ellipse3color.svg";
import Elipse4 from "../assets/Ellipse4.svg";
import Elipse5 from '../assets/Ellipse5.svg'
import Elipse6 from '../assets/Ellipse6.svg'

import "../styles/Elipse.css";

function Elipse(props) {
    const { functionScroll, functionServiceScroll, functionFaqScroll, functionSoinScroll } = props;

    return (
        <section className="elipseContain">
            <div className="elipses une" onClick={functionScroll.handleClick}>
                <img src={Elipse6} alt="" />
                    <p>Qui suis-je ?</p>
                </div>
                <div className="elipses deux" onClick={functionServiceScroll.handleClick}>
                <img src={Elipse5} alt="" />
                    <p>Services</p>
                </div>
                <div className="elipses trois" onClick={functionSoinScroll.handleClick}>
                <img src={Elipse3} alt="" />
                    <p>Soin</p>
                </div>
                <div className="elipses quatre" onClick={functionFaqScroll.handleClick}>
                <img src={Elipse4} alt="" />
                    <p>FAQ</p>
            </div>
        </section>
    );
}

Elipse.propTypes = {
    functionScroll: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }).isRequired,
    functionServiceScroll: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }).isRequired,
    functionFaqScroll: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }).isRequired,
    functionSoinScroll: PropTypes.shape({
        handleClick: PropTypes.func.isRequired,
    }).isRequired
};

export default Elipse;
