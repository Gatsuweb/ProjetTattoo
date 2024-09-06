import Insta from "../assets/contact/insta.svg"
import Mail from "../assets/contact/mail.svg"
import "../styles/Footer.css"
function Footer () {
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="mail">
                    <img src={Mail} alt="" />
                    <a href="mailto:valkyrink@outlook.com" target="_blank" rel="noopener noreferrer">valkyrink@outlook.com</a>
                    </div>
                <div className="insta-footer">
                    <img src={Insta} alt="" />
                    <a href="https://www.instagram.com/valkyr__ink/" target="_blank" rel="noopener noreferrer">Valkyr-ink</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;