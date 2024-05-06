import { useRef } from "react";
import About from "../components/About";
import Elipse from "../components/Elipses";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import "../styles/Home.css";

function Home() {
    const aboutRef = useRef(null);

    const scrollQuiSuisJe = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="homepage">
                <NavBar />
                <MainContent />
                <Elipse functionScroll={{ handleClick: scrollQuiSuisJe }} />
            </div>
            <About ref={aboutRef} />
        </>
    );
}

export default Home;
