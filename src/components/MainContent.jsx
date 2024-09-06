import { Link } from "react-router-dom"
import "../styles/MainContent.css"
import Fleche from "../assets/fleche.svg"
import SplineGravity from "./SplineGravity";


function MainContent() {

        const getCurrentDate = () => {
          const date = new Date();
          const options = { day: 'numeric', month: 'numeric'  };
          return date.toLocaleDateString(undefined, options);
        };

    return(
        <section className="mainContent">
            <div className="txt-main">
                <h1 className="titleSpline">
                    <SplineGravity />
                </h1>
                <h1 className="titleClassic">Tattoo Artist.</h1>
                <h3>Ancrer son histoire ou encrer l’instant</h3>
            </div>
            <div className="contain-rdv">
                <p id="date">{getCurrentDate()}.</p>
                <Link to="/contact" className="navLink" >
                    <button className="btn-rdv" type="button">
                        <span>Contact</span>
                        <img src= {Fleche} alt="" id="flecheBtn" />
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default MainContent;