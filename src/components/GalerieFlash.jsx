import { useState } from "react";
import "../styles/GalerieFlash.css";
import Flash1 from "../assets/flash/f1.jpg";
import Flash2 from "../assets/flash/f2.jpg";
import Flash3 from "../assets/flash/f3.jpg";
import Flash4 from "../assets/flash/f4.jpg";
import Flash5 from "../assets/flash/f5.jpg";
import Flash6 from "../assets/flash/f6.jpg";
import Flash7 from "../assets/flash/f7.jpg";
import Flash20 from "../assets/flash/f20.jpg";
import Flash21 from "../assets/flash/f21.jpg";
import Flash15 from "../assets/flash/flash9.jpg";  
import Flash16 from "../assets/flash/flash10.jpg";
import Flash1000 from "../assets/flash/flash4.jpg";
import FlashBis from "../assets/flash/flashbis.jpg";

const cardsData = [
  { image: Flash21, alt: "Flash Ghibli" },
  { image: Flash1, alt: "Flash marin" },
  { image: Flash15, alt: "Flash Guts" },
  { image: Flash16, alt: "Flash fonts" },
  { image: Flash1000, alt: "Flash god hand with Beherit"},
  { image: Flash4, alt: "Flash nature"},
  { image: FlashBis, alt: "Flash Berserk" },
  { image: Flash2, alt: "Flash Ghibli 2" },
  { image: Flash3, alt: "Flash nature minimalisme" },
  { image: Flash5, alt: "Flash design minimalisme" },
  { image: Flash6, alt: "Flash flowers" },
  { image: Flash7, alt: "Flash design symetrique" },
  { image: Flash20, alt: "Flash planche Berserk" },
];

function GalerieFlash() {
  const [isDealt, setIsDealt] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getRandomPosition = (maxX, maxY) => {
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;
    return { x, y };
  };

  const dealCards = () => {
    setIsDealt(!isDealt);
  };

//   const resetCards = () => {
//     setIsDealt(false);
//   };

  const showModal = (cardData) => {
    setModalData(cardData);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="galerie-flash" >
    
      <div className="flash-content">
        <div className="deck">
            {cardsData.map((card, index) => (
            <div
                key={index}
                className="card"
                style={{
                zIndex: cardsData.length - index,
                transform: isDealt
                    ? `translate(${getRandomPosition(window.innerWidth, window.innerHeight - 300).x}px, ${getRandomPosition(window.innerWidth, window.innerHeight - 300).y}px) rotate(${Math.random() * 360}deg)`
                    : `translateZ(${-index}px)`,
                transition: "all 1s ease",
                }}
                onClick={() => showModal(card)}
            >
                <div className="card-front">
                <img src={card.image} alt={card.alt} width={200} height={280} />
                </div>
            </div>
            ))}
        </div>
      <button id="dealButton" onClick={dealCards}>
        {isDealt ? "Rassembler les Flashs" : "Voir les Flashs"}
      </button>
      </div>
      {modalData && (
        <div id="cardModal" className="modal-carte" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modalCarte-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="modalCarte-image"
              id="modalImage"
              src={modalData.image}
              alt={modalData.alt}
            />
            <p className="modalCarte-text" id="modalText">
              {modalData.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalerieFlash;
