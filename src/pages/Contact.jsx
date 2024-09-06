import ContactMoi from "../components/ContactMoi";
import ExempleMail from "../components/ExempleMail";
import NavBar from "../components/NavBar";
import ProjetFaq from "../components/ProjetFaq";
import "../styles/Contact.css"

const Contact = () => {

    return (
        <section className="contact-container">
            <NavBar />
            <div className="section-mail">
            <ProjetFaq />
            <ExempleMail />
            </div>
            <div className="contacte-moi">
                     <ContactMoi />
                </div>
        </section>
    );
};

export default Contact;