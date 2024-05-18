import PropTypes from 'prop-types';
import { useState } from "react";
import "../styles/Faq.css";
import flechebas from "../assets/flecheBas.svg";
import flechehaut from "../assets/flecheHaut.svg";

function Faq( props) {
    const { faqRef } = props;

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

  return (
    <section className="faq" ref={faqRef}>
      <h1 className="title-faq">FAQ</h1>
      <div className="container-faq">
        <div className="faq-container">
          <h3 className="questions" id="question-1">
            Il y a un age minimum ?
          </h3>
          <button
            type="button"
            className="flechebas"
            onClick={() => toggleReponseVisible("question-1")}
          >
            <img
              src={flecheTurn["question-1"]}
              className="img-flechebas"
              alt="icone fleche vers le bas"
            />
          </button>
          {isReponseVisible["question-1"] && (
            <div className="reponse">
              Oui, il faut avoir 18 ans
            </div>
          )}
        </div>

        <div className="faq-container">
          <h3 className="questions" id="question-2">
            Comment prendre rendez-vous ?
          </h3>
          <button
            type="button"
            className="flechebas"
            onClick={() => toggleReponseVisible("question-2")}
          >
            <img
              src={flecheTurn["question-2"]}
              className="img-flechebas"
              alt="icone fleche vers le bas"
            />
          </button>
          {isReponseVisible["question-2"] && (
            <div className="reponse">
              Il suffit de se rendre dans la rubrique contact et suivre les étapes. Vous pouvez aussi me contacter sur mes réseaux sociaux. 
            </div>
          )}
        </div>

        <div className="faq-container">
          <h3 className="questions" id="question-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ?
          </h3>
          <button
            type="button"
            className="flechebas"
            onClick={() => toggleReponseVisible("question-3")}
          >
            <img
              src={flecheTurn["question-3"]}
              className="img-flechebas"
              alt="icone fleche vers le bas"
            />
          </button>
          {isReponseVisible["question-3"] && (
            <div className="reponse">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          )}
        </div>
        <div className="faq-container">
          <h3 className="questions" id="question-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit ?
          </h3>
          <button
            type="button"
            className="flechebas"
            onClick={() => toggleReponseVisible("question-4")}
          >
            <img
              src={flecheTurn["question-4"]}
              className="img-flechebas"
              alt="icone fleche vers le bas"
            />
          </button>
          {isReponseVisible["question-4"] && (
            <div className="reponse">Oui</div>
          )}
        </div>
      </div>
    </section>
  );
}
Faq.propTypes = {
    faqRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Faq;
