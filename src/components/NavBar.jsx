import { useState } from "react"
import { Link } from "react-router-dom"
import IconeBurger from "../assets/burger2.svg"
import "../styles/NavBar.css"

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <section className="navbar">
        <Link to="/home" className="navLink" onClick={closeMenu}>
        <div className="Logo">Valkyr Ink</div>
        </Link>
        <div className={`pages ${isOpen ? "open" : ""}`}>
          <ul>
            <Link to="/home" className="navLink" onClick={closeMenu}>
            <li>Accueil</li>
            </Link>
            <Link to="/galerie" className="navLink" onClick={closeMenu}>
            <li>Galerie</li>
            </Link>
            <Link to="/flash" className="navLink" onClick={closeMenu}>
            <li>Flash</li>
            </Link>
            <Link to="/event" className="navLink" onClick={closeMenu}>
            <li>Evenements</li>
            </Link>
          </ul>
        </div>
            <button type="button" className="burger" onClick={toggleMenu} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen}>
              <img src={IconeBurger} alt="" className="iconeburger" />
            </button>
      </section>
    )
}

export default NavBar
