/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LocalSeoContact({ page }) {
  return (
    <section className="localSeoContact">
      <div>
        <p className="localSeoContact-kicker">Projet tattoo depuis {page.shortVille}</p>
        <h2>Parlez moi de votre projet</h2>
        <p>
          Envoyez-moi vos inspirations, la zone souhaitée, la taille approximative et vos disponibilités. Je vous répondrai pour cadrer le projet avec vous et vous proposer la suite.
        </p>
      </div>
      <div className="localSeoContact-actions">
        <Link to="/contact">Contact</Link>
        <a href="mailto:valkyrink@outlook.com">Écrire un mail</a>
      </div>
    </section>
  );
}

export default LocalSeoContact;
