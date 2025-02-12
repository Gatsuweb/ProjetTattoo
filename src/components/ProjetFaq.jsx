import { useState } from "react";
import "../styles/ProjetFaq.css";
import flechebas from "../assets/flecheBas.svg";
import flechehaut from "../assets/flecheHaut.svg";

function ProjetFaq () {

    const [flecheTurn, setFlecheturn] = useState({
        "question-1": flechebas,
        "question-2": flechebas,
        "question-3": flechebas,
        "question-4": flechebas,
      });
      const [isReponseVisible, setReponseVisible] = useState({
        "question-1": false,
        "question-2": false,
        "question-3": false,
        "question-4": false,
      });

      const toggleReponseVisible = (questionId) => {
        setReponseVisible((ancienEtat) => ({
          ...ancienEtat,
          [questionId]: !ancienEtat[questionId],
        }));
    
        setFlecheturn((ancienEtat) => ({
          ...ancienEtat,
          [questionId]:
            ancienEtat[questionId] === flechebas ? flechehaut : flechebas,
        }));
      };

    
        return(
            <div className="page-contact">
                <h2>Un projet ?</h2>
                <div className="container-projet">
    
                    <div className="projet-container"  onClick={() => toggleReponseVisible("question-8")}>        
                        <h3 className="questions" id="question-8">
                                Motifs
                            </h3>
                            <button
                                type="button"
                                className="flechebas"
                               
                            >
                                <img
                                src={flecheTurn["question-1"]}
                                className="img-flechebas"
                                alt="icone fleche vers le bas"
                                />
                            </button>
                            {isReponseVisible["question-8"] && (
                                <div className="reponse">
                                Décrivez le motif souhaité - dites-nous ce que vous voulez que le design contienne ou ce que vous ne voulez pas du tout.
                                Toute information est utile et précieuse.
                                </div>
                            )}
                            </div>
                    <div className="projet-container" onClick={() => toggleReponseVisible("question-5")}
                    >
                        <h3 className="questions" id="question-5">
                            Taille
                        </h3>
                        <button
                            type="button"
                            className="flechebas"
                        >
                            <img
                            src={flecheTurn["question-2"]}
                            className="img-flechebas"
                            alt="icone fleche vers le bas"
                            />
                        </button>
                        {isReponseVisible["question-5"] && (
                            <div className="reponse">
                       Les dimensions souhaitées pour le tatouage doivent être exprimées en centimètres.
                            </div>
                        )}
                        </div>

                    <div className="projet-container"  onClick={() => toggleReponseVisible("question-6")}>
                    <h3 className="questions" id="question-6">
                        Zone
                    </h3>
                    <button
                        type="button"
                        className="flechebas"
                        onClick={() => toggleReponseVisible("question-6")}
                    >
                        <img
                        src={flecheTurn["question-3"]}
                        className="img-flechebas"
                        alt="icone fleche vers le bas"
                        />
                    </button>
                    {isReponseVisible["question-6"] && (
                        <div className="reponse">
                        Les informations sur la position ne sont pas nécessaires, mais elles sont très utiles. Chaque design est dessiné en corrélation avec la position,
                        car nous croyons qu&apos;un tatouage doit suivre la ligne du corps et en faire partie intégrante.
                        </div>
                    )}
                    </div>
                    <div className="projet-container" onClick={() => toggleReponseVisible("question-7")}>
                    <h3 className="questions" id="question-7">
                    Inspiration
                    </h3>
                    <button
                        type="button"
                        className="flechebas"
                        
                    >
                        <img
                        src={flecheTurn["question-4"]}
                        className="img-flechebas"
                        alt="icone fleche vers le bas"
                        />
                    </button>
                    {isReponseVisible["question-7"] && (
                        <div className="reponse">De la photographie, de l&apos;illustration, la musique, des films, des livres, la nature, un moment,
                         un objet, une personne ou un lieu, voire d&apos;autres tatouages - l&apos;inspiration pour un tatouage peut provenir de tout ce que vous souhaitez.
                         Sur la base des pièces jointes que vous nous envoyez.
                         Le tatouage est unique (sur mesure) spécialement pour vous.</div>
                    )}
                    </div>
                </div>
                {/* <div className="download-section">
                    <p>Vous pouvez aussi télécharger le PDF ici :</p>
                    <button >Télécharger le PDF</button>
                </div> */}

        </div>
        
        )
}

export default ProjetFaq;