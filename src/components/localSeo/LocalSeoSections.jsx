/* eslint-disable react/prop-types */
import melanie from "../../assets/melanie.jpg";

function LocalSeoSections({ page }) {
  return (
    <section className="localSeoSections">
      <div className="localSeoIntro">
        <div className="localSeoIntro-image">
          <img src={melanie} alt={`Melanie, tatoueuse près de ${page.shortVille}`} />
        </div>
        <div className="localSeoIntro-text">
          <div className="localSeoSectionTitle">
            <h2>{page.sections[0].title}</h2>
            <span>01</span>
          </div>
          {page.sections[0].body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="localSeoCards">
        {page.sections.slice(1).map((section, index) => (
          <article className="localSeoCard" key={section.title}>
            <span>{String(index + 2).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
        <article className="localSeoCard localSeoZone">
          <span>04</span>
          <h2>Zone desservie</h2>
          <p>{page.zone}</p>
          <ul>
            {page.areaServed.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default LocalSeoSections;
