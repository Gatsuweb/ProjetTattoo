import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoTransition from "../assets/contact/IMG_1087.jpg"
import "../styles/Preloader.css"

function Preloader () {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/home');
        }, 7000);
        return () => clearTimeout(timer);
      }, [navigate]);
    
      return (
        <>
        <div className="transition-page">
          <img src={LogoTransition} alt="Project Logo" className="logo" />
        </div>
        <div className="barcontainer">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        </>
      );
    }

export default Preloader;