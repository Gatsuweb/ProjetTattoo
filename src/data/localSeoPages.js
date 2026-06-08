const BASE_URL = "https://valkyrink-tattoo.com";
const PUBLISH_NOW = "2026-06-08";

const sharedSections = (city) => [
  {
    title: "Melanie, artiste tatoueuse en Centre Bretagne",
    body: [
      `Melanie accueille les projets de tatouage dans son salon prive a Plevin, au coeur du Centre Bretagne. Les personnes venant de ${city} peuvent echanger avec elle dans un cadre calme, loin du passage et pense pour prendre le temps.`,
      "Son approche repose sur l'ecoute, le dessin et une ambiance de rendez-vous simple : comprendre votre idee, vos references, l'emplacement souhaite et ce que le tatouage doit raconter.",
    ],
  },
  {
    title: "Styles de tatouages",
    body: [
      "Valkyr Ink travaille des pieces personnalisees, des flashs, des compositions fines, ornementales, graphiques, florales ou colorees selon les projets. Chaque motif est adapte a la peau, au placement et a l'intention de la personne tatouee.",
      "Le style final se construit pendant l'echange : une base claire, des references utiles, puis une proposition qui garde l'identite artistique de Melanie sans copier un dessin existant.",
    ],
  },
  {
    title: "Deroule d'un projet",
    body: [
      "Le premier contact sert a poser les bases : idee, taille, zone, budget, references et disponibilites. Melanie revient ensuite vers vous avec les informations utiles pour cadrer le projet et le rendez-vous.",
      "Le jour de la seance, le dessin, le stencil, le placement et les consignes sont repris avec vous avant l'encrage. Les conseils de soin sont expliques apres la seance pour accompagner la cicatrisation.",
    ],
  },
];

const createFaq = (city, distanceText) => [
  {
    question: `Le salon Valkyr Ink est-il proche de ${city} ?`,
    answer: `Oui. Valkyr Ink se situe a Plevin, en Centre Bretagne, ${distanceText}. Les rendez-vous se font uniquement sur demande pour garder un cadre calme et attentif.`,
  },
  {
    question: `Puis-je venir de ${city} pour un projet personnalise ?`,
    answer:
      "Oui. Vous pouvez envoyer votre idee, vos references, la zone souhaitee et une estimation de taille. Melanie vous repondra avec les prochaines etapes pour construire un projet sur-mesure.",
  },
  {
    question: "Quels styles de tatouages propose Melanie ?",
    answer:
      "Elle realise des projets personnalises et des flashs dans un univers artistique, graphique, ornemental, floral, fin ou colore selon les demandes et la faisabilite du motif.",
  },
  {
    question: "Comment obtenir un tarif ?",
    answer:
      "Le tarif depend de la taille, du placement, du niveau de detail et du temps necessaire. Le plus simple est d'envoyer une description claire du projet pour recevoir une estimation adaptee.",
  },
  {
    question: "Faut-il prendre rendez-vous ?",
    answer:
      "Oui, le salon fonctionne sur rendez-vous. Cela permet de preparer chaque projet, de limiter l'attente et de conserver une ambiance intimiste.",
  },
];

const pages = [
  {
    slug: "tatoueuse-plevin",
    publishAt: PUBLISH_NOW,
    ville: "Plevin",
    shortVille: "Plevin",
    distanceText: "directement a Plevin, ville du studio",
    title: "Tatoueuse a Plevin - Valkyr Ink, salon prive en Centre Bretagne",
    description:
      "Tatoueuse a Plevin : Valkyr Ink accueille vos projets de tatouage sur rendez-vous dans un salon prive, artistique et intimiste en Centre Bretagne.",
    h1: "Tatoueuse a Plevin",
    intro:
      "Valkyr Ink est le salon prive de Melanie a Plevin. Ici, les projets de tatouage se construisent dans un cadre calme, noir et artistique, avec le temps necessaire pour parler du motif, du placement et de votre histoire.",
    areaServed: ["Plevin", "Carhaix-Plouguer", "Mael-Carhaix", "Rostrenen", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-carhaix",
    publishAt: PUBLISH_NOW,
    ville: "Carhaix-Plouguer",
    shortVille: "Carhaix",
    distanceText: "a quelques minutes de Carhaix-Plouguer",
    title: "Tatoueuse pres de Carhaix - Valkyr Ink a Plevin",
    description:
      "Tatoueuse pres de Carhaix-Plouguer : Valkyr Ink accueille vos projets de tatouage a Plevin, dans un salon prive en Centre Bretagne.",
    h1: "Tatoueuse pres de Carhaix",
    intro:
      "Vous cherchez une tatoueuse pres de Carhaix pour un projet personnel, un flash ou une piece sur-mesure ? Melanie vous accueille a Plevin, dans un univers noir, artistique et intimiste.",
    areaServed: ["Carhaix-Plouguer", "Plevin", "Motreff", "Cleden-Poher", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-rostrenen",
    publishAt: "2026-06-15",
    ville: "Rostrenen",
    shortVille: "Rostrenen",
    distanceText: "a proximite de Rostrenen par les routes du Centre Bretagne",
    title: "Tatoueuse pres de Rostrenen - Valkyr Ink, salon prive a Plevin",
    description:
      "Tatoueuse pres de Rostrenen : projets personnalises, flashs et accompagnement humain chez Valkyr Ink a Plevin, en Centre Bretagne.",
    h1: "Tatoueuse pres de Rostrenen",
    intro:
      "Depuis Rostrenen, Valkyr Ink vous accueille a Plevin pour penser un tatouage avec calme, precision et sensibilite artistique.",
    areaServed: ["Rostrenen", "Plevin", "Glomel", "Bonen", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-gourin",
    publishAt: "2026-06-22",
    ville: "Gourin",
    shortVille: "Gourin",
    distanceText: "dans le secteur de Gourin et du Centre Bretagne",
    title: "Tatoueuse pres de Gourin - Valkyr Ink en Centre Bretagne",
    description:
      "Vous cherchez une tatoueuse pres de Gourin ? Valkyr Ink realise des tatouages personnalises et des flashs dans son salon prive a Plevin.",
    h1: "Tatoueuse pres de Gourin",
    intro:
      "Pour un tatouage pres de Gourin, Melanie propose une approche attentive : discussion, dessin, placement et seance dans un cadre confidentiel.",
    areaServed: ["Gourin", "Le Saint", "Langonnet", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-callac",
    publishAt: "2026-06-29",
    ville: "Callac",
    shortVille: "Callac",
    distanceText: "accessible depuis Callac et les communes voisines",
    title: "Tatoueuse pres de Callac - Valkyr Ink a Plevin",
    description:
      "Tatoueuse pres de Callac : Melanie de Valkyr Ink accompagne vos projets de tatouage sur-mesure dans un salon prive a Plevin.",
    h1: "Tatoueuse pres de Callac",
    intro:
      "Valkyr Ink accueille les personnes venant de Callac pour des tatouages reflechis, dessines avec soin et realises sur rendez-vous.",
    areaServed: ["Callac", "Carnoet", "Plusquellec", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-huelgoat",
    publishAt: "2026-07-20",
    ville: "Huelgoat",
    shortVille: "Huelgoat",
    distanceText: "pour les personnes venant de Huelgoat et des Monts d'Arree",
    title: "Tatoueuse pres de Huelgoat - Valkyr Ink, univers artistique",
    description:
      "Tatoueuse pres de Huelgoat : Valkyr Ink vous accompagne pour un projet de tatouage personnalise a Plevin, en Centre Bretagne.",
    h1: "Tatoueuse pres de Huelgoat",
    intro:
      "Depuis Huelgoat, vous pouvez confier votre projet a Melanie pour un tatouage sur-mesure dans un univers noir, graphique et sensible.",
    areaServed: ["Huelgoat", "Poullaouen", "Berrien", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-mael-carhaix",
    publishAt: "2026-07-06",
    ville: "Mael-Carhaix",
    shortVille: "Mael-Carhaix",
    distanceText: "tout pres de Mael-Carhaix",
    title: "Tatoueuse pres de Mael-Carhaix - Valkyr Ink a Plevin",
    description:
      "Tatoueuse pres de Mael-Carhaix : salon prive a Plevin pour projets personnalises, flashs et accompagnement tattoo sur rendez-vous.",
    h1: "Tatoueuse pres de Mael-Carhaix",
    intro:
      "A proximite de Mael-Carhaix, Valkyr Ink propose un cadre intime pour transformer une idee, une envie ou un symbole en tatouage personnel.",
    areaServed: ["Mael-Carhaix", "Plevin", "Tremeven", "Treffrin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-plouguernevel",
    publishAt: "2026-07-13",
    ville: "Plouguernevel",
    shortVille: "Plouguernevel",
    distanceText: "dans le secteur de Plouguernevel et Rostrenen",
    title: "Tatoueuse pres de Plouguernevel - Valkyr Ink a Plevin",
    description:
      "Tatoueuse pres de Plouguernevel : Valkyr Ink cree des tatouages personnalises et des flashs dans un salon prive en Centre Bretagne.",
    h1: "Tatoueuse pres de Plouguernevel",
    intro:
      "Pour un projet tattoo pres de Plouguernevel, Melanie vous accompagne avec une approche calme, artistique et adaptee a votre histoire.",
    areaServed: ["Plouguernevel", "Rostrenen", "Gouarec", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-chateauneuf-du-faou",
    publishAt: "2026-07-27",
    ville: "Chateauneuf-du-Faou",
    shortVille: "Chateauneuf-du-Faou",
    distanceText: "pour les personnes venant de Chateauneuf-du-Faou et du Centre Finistere",
    title: "Tatoueuse pres de Chateauneuf-du-Faou - Valkyr Ink a Plevin",
    description:
      "Tatoueuse pres de Chateauneuf-du-Faou : Valkyr Ink accompagne vos projets de tatouage personnalise a Plevin, en Centre Bretagne.",
    h1: "Tatoueuse pres de Chateauneuf-du-Faou",
    intro:
      "Depuis Chateauneuf-du-Faou, vous pouvez contacter Melanie pour un projet de tatouage personnalise, un flash ou une piece pensee avec soin dans l'univers Valkyr Ink.",
    areaServed: ["Chateauneuf-du-Faou", "Pleyben", "Spezet", "Plevin", "Centre Bretagne"],
  },
];

function formatPublishDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function isPagePublished(page, date = new Date()) {
  if (!page.publishAt) {
    return true;
  }

  return page.publishAt <= formatPublishDate(date);
}

export const localSeoPages = pages.map((page) => ({
  ...page,
  url: `${BASE_URL}/${page.slug}`,
  sections: sharedSections(page.shortVille),
  faq: createFaq(page.shortVille, page.distanceText),
  zone:
    `Le salon se situe a Plevin et accueille des projets venant de ${page.areaServed
      .slice(0, -1)
      .join(", ")} et plus largement du Centre Bretagne.`,
}));

export const publishedLocalSeoPages = localSeoPages.filter((page) => isPagePublished(page));

export const mainLocalSeoPages = localSeoPages.filter((page) =>
  ["tatoueuse-plevin", "tatoueuse-carhaix", "tatoueuse-rostrenen", "tatoueuse-gourin", "tatoueuse-callac"].includes(page.slug) &&
  isPagePublished(page)
);

export function getLocalSeoPage(slug) {
  return localSeoPages.find((page) => page.slug === slug);
}

export { BASE_URL };
