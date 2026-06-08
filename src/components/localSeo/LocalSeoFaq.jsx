/* eslint-disable react/prop-types */
import { useState } from "react";

function LocalSeoFaq({ page }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="localSeoFaq">
      <h2>Questions frequentes</h2>
      <div className="localSeoFaq-list">
        {page.faq.map((item, index) => (
          <article className={`localSeoFaq-item ${activeIndex === index ? "active" : ""}`} key={item.question}>
            <button type="button" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <span>{item.question}</span>
              <strong>{activeIndex === index ? "-" : "+"}</strong>
            </button>
            <div className="localSeoFaq-answer">
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LocalSeoFaq;
