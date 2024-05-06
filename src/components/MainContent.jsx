import "../styles/MainContent.css"
import Fleche from "../assets/fleche.svg"

function MainContent() {
    return(
        <section className="mainContent">
            <div className="txt-main">
                <h1>Tattoo Artist.</h1>
                <h3>Ancrer son histoire ou encrer l’instant</h3>
            </div>
            <div className="contain-rdv">
                <button className="btn-rdv">
                    <span>Prendre RDV</span>
                    <img src= {Fleche} alt="" id="flecheBtn" />
                </button>
            </div>
        </section>
    )
}

export default MainContent