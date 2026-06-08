/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LocalSeoContact({ page }) {
  return (
    <section className="localSeoContact">
      <div>
        <p className="localSeoContact-kicker">Projet tattoo depuis {page.shortVille}</p>
        <h2>Parler de votre idee avec Melanie</h2>
        <p>
          Envoyez vos inspirations, la zone souhaitee, la taille approximative et les disponibilites possibles. Melanie vous repondra pour cadrer le projet et proposer la suite.
        </p>
      </div>
      <div className="localSeoContact-actions">
        <Link to="/contact">Contact</Link>
        <a href="mailto:valkyrink@outlook.com">Ecrire un mail</a>
      </div>
    </section>
  );
}

export default LocalSeoContact;
