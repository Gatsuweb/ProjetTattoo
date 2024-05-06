import { useState } from "react";
import "../styles/Galerie.css";
import Colo1 from "../assets/colo1.jpg";
import Colo2 from "../assets/colo2.jpg";
import Colo3 from "../assets/colo3.jpg";
import Colo4 from "../assets/colo4.jpg";
import Gris1 from "../assets/gris1.jpg";
import Gris2 from "../assets/gris2.jpg";
import Gris3 from "../assets/gris3.jpg";
import Gris4 from "../assets/gris4.jpg";
import Gris5 from "../assets/gris5.jpg";
import NavBar from "../components/NavBar";

function Galerie() {
  const [imageAgrandie, setImageAgrandie] = useState(null);

  const handleClick = (url) => {
    setImageAgrandie(url);
  };

  const handleClose = () => {
    setImageAgrandie(null);
  };

  return (
    <section className="galerieContainer">
      <header>
        <NavBar />
        <h1 className="galerie-title">Galerie</h1>
      </header>
      <main className="galerieContent">
        <div className="container1">
          <img src={Colo1} alt="" onClick={() => handleClick(Colo1)} />
          <img src={Gris1} alt="" onClick={() => handleClick(Gris1)} />
          <img src={Gris5} alt="" onClick={() => handleClick(Gris5)} />
          <img src={Gris3} alt="" onClick={() => handleClick(Gris5)} />
        </div>
        <div className="container2">
        <img src={Colo2} alt="" onClick={() => handleClick(Colo2)} />

          <img src={Gris2} alt="" onClick={() => handleClick(Gris2)} />
          <img src={Gris3} alt="" onClick={() => handleClick(Gris3)} />
          <img src={Gris4} alt="" onClick={() => handleClick(Gris4)} />
        </div>
        <div className="container3">
        <img src={Colo3} alt="" onClick={() => handleClick(Colo3)} />
          <img src={Gris4} alt="" onClick={() => handleClick(Gris4)} />
          <img src={Gris5} alt="" onClick={() => handleClick(Gris5)} />
          <img src={Gris1} alt="" onClick={() => handleClick(Gris1)} />
        </div>
        <div className="container4">
        <img src={Colo4} alt="" onClick={() => handleClick(Colo4)} />

          <img src={Gris2} alt="" onClick={() => handleClick(Gris4)} />
          <img src={Gris5} alt="" onClick={() => handleClick(Gris5)} />
          <img src={Gris1} alt="" onClick={() => handleClick(Gris1)} />
        </div>
      </main>
      {imageAgrandie && (
        <div className="modal" onClick={handleClose}>
          <div className="modalContent">
            <img src={imageAgrandie} alt="" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Galerie;
