import { useState } from "react"
import { Link } from "react-router-dom"
import IconeBurger from "../assets/burger2.svg"
import "../styles/NavBar.css"

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <section className="navbar">
        <Link to="/home" className="navLink">
        <div className="Logo">Valkyr Ink</div>
        </Link>
        <div className={`pages ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to="/home" className="navLink">
            <li>Accueil</li>
            </Link>
            <Link to="/galerie" className="navLink">
            <li>Galerie</li>
            </Link>
            <Link to="/flash" className="navLink">
            <li>Flash</li>
            </Link>
            <Link to="/event" className="navLink" >
            <li>Evenements</li>
            </Link>
          </ul>
        </div>
            <div className="burger" onClick={toggleMenu}><img src= {IconeBurger} alt="" className="iconeburger"/></div>
      </section>
    )
}

export default NavBar