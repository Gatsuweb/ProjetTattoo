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
        <Link to="/" className="navLink">
        <div className="Logo">Valkyr ink</div>
        </Link>
        <div className={`pages ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Accueil</li>
            <Link to="/galerie" className="navLink">
            <li>Galerie</li>
            </Link>
            <li>Flash</li>

            <li>Contact</li>
          </ul>
        </div>
            <div className="burger" onClick={toggleMenu}><img src= {IconeBurger} alt="" className="iconeburger"/></div>
        </section>
    )
}

export default NavBar