/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

function LocalSeoHelmet({ page }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Valkyr Ink",
    url: page.url,
    image: "https://valkyrink-tattoo.com/images/og-valkyr.jpg",
    telephone: "+33606420066",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Plevin",
      addressRegion: "Bretagne",
      addressCountry: "FR",
    },
    areaServed: page.areaServed,
    sameAs: ["https://www.instagram.com/valkyr__ink/"],
    description: page.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={page.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://valkyrink-tattoo.com/images/og-valkyr.jpg" />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={page.url} />
      <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
  );
}

export default LocalSeoHelmet;
