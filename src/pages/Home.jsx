import { useRef } from "react";
import About from "../components/About";
import Elipse from "../components/Elipses";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import "../styles/Home.css";
import Faq from "../components/Faq";
import Soin from "../components/Soin";

function Home() {
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const faqRef = useRef(null);
    const soinRef = useRef(null);

    const scrollQuiSuisJe = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollService = () => {
        serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollFaq = () => {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollSoin = () => {
        soinRef.current.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <>
            <div className="homepage">
                <NavBar />
                <MainContent />
                <Elipse functionScroll={{ handleClick: scrollQuiSuisJe }} functionServiceScroll={{ handleClick: scrollService}} functionFaqScroll={{ handleClick: scrollFaq}} functionSoinScroll={{ handleClick: scrollSoin}}/>
            </div>
            <About ref={aboutRef} anotherRef={serviceRef}/>
            <Soin soinRef={soinRef} />
            <Faq faqRef={faqRef}/>
        </>
    );
}

export default Home;
