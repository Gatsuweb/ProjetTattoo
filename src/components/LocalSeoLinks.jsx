import { Link } from "react-router-dom";
import { mainLocalSeoPages } from "../data/localSeoPages";
import "../styles/LocalSeoLinks.css";

function LocalSeoLinks() {
  return (
    <section className="localSeoLinks" aria-labelledby="local-seo-links-title">
      <div className="localSeoLinks-heading">
        <span>Centre Bretagne</span>
        <h2 id="local-seo-links-title">
          Tatoueuse centre-bretagne
        </h2>
        <p>
          Retrouvez moi aussi par le biais de ces pages dédiées.
        </p>
        <div className="localSeoLinks-meta" aria-label="Informations du salon">
          <span>Salon prive sur rendez-vous</span>
        </div>
      </div>
      <div className="localSeoLinks-list">
        {mainLocalSeoPages.map((page, index) => (
          <Link to={`/${page.slug}`} key={page.slug} className="localSeoLinks-card">
            <span className="localSeoLinks-cardIndex">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="localSeoLinks-cardContent">
              <strong>{page.h1}</strong>
              <small>Infos locales autour de {page.shortVille}</small>
            </span>
            <span className="localSeoLinks-cardCta">Voir</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LocalSeoLinks;
