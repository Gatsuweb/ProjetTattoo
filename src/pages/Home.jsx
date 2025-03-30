import { useRef } from "react";
import Lenis from 'lenis'
import About from "../components/About";
import Elipse from "../components/Elipses";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import Faq from "../components/Faq";
import Soin from "../components/Soin";
import BackgroundVideo from "../components/BackgroundVideo";
import "../styles/NavBar.css";
import Footer from "../components/Footer";
import Avis from "../components/Avis";

function Home() {
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const faqRef = useRef(null);
    const soinRef = useRef(null);

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
      
      requestAnimationFrame(raf)

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
                <BackgroundVideo />
                <NavBar />
                <MainContent />
                <Elipse functionScroll={{ handleClick: scrollQuiSuisJe }} functionServiceScroll={{ handleClick: scrollService}} functionFaqScroll={{ handleClick: scrollFaq}} functionSoinScroll={{ handleClick: scrollSoin}}/>
                <About ref={aboutRef} anotherRef={serviceRef}/>
                <Soin soinRef={soinRef} />
                <Avis />
                <Faq faqRef={faqRef}/>
                <Footer />
            </div>
        </>
    );
}

export default Home;
