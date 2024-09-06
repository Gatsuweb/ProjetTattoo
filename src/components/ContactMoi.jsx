import InstaSpline from "../components/InstaSpline"
import MailSpline from "../components/MailSpline"
import "../styles/ContactMoi.css"

function ContactMoi () {
    return(
    <div className="contacteMoi-container">
        <h2>Contacte-moi</h2>
        <p>Clique sur une des icônes pour être redirigé(e)</p>
        <div className="spline-contact">
            <a href="mailto: valkyrink@outlook.com" target="_blank" rel="noopener noreferrer">
                <div className="mailspline">
                    <MailSpline />
                </div>
            </a>
            <a href="https://www.instagram.com/valkyr__ink/" target="_blank" rel="noopener noreferrer">
                <div className="instaspline">
                    <InstaSpline />
                </div>
            </a>
        </div>
   </div>
    )
}

export default ContactMoi;