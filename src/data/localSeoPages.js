const BASE_URL = "https://valkyrink-tattoo.com";
const PUBLISH_NOW = "2026-06-08";

const sharedSections = (city) => [
  {
    title: "Artiste tatoueuse en Centre Bretagne",
    body: [
      `Venez me rencontrer dans mon salon privé à Plevin, au coeur du Centre Bretagne, pour prendre le temps de parler de votre projet. Si vous venez de ${city}, je vous reçois dans un cadre calme, loin du passage, pour imaginer un tatouage qui vous ressemble vraiment.`,
      "Ma façon de travailler repose sur l'écoute, l'échange et le dessin. J'aime comprendre votre idée, vos références, l'emplacement souhaité et ce que ce tatouage représente pour vous avant de construire une proposition juste.",
    ],
  },
  {
    title: "Styles de tatouages",
    body: [
      "Je réalise des pièces personnalisées, des flashs et des compositions de plusieurs styles, ornemental, floral, japonisant, mediéval, fin ou coloré selon les projets. Chaque motif est pensé en fonction de la peau, du placement et de l'intention que vous voulez y mettre.",
      "Le style final se construit avec vous pendant l'échange. À partir d'une base claire et de références utiles, je crée une proposition qui reste fidèle à mon univers sans reprendre un dessin existant.",
    ],
  },
  {
    title: "Deroule d'un projet",
    body: [
      "Le premier contact me permet de poser les bases avec vous : idée, taille, zone, budget, références et disponibilités. Je reviens ensuite vers vous avec les informations utiles pour cadrer le projet et préparer le rendez-vous.",
      "Le jour de la séance, je reprends avec vous le dessin, le stencil, le placement et les derniers détails avant l'encrage. Après la séance, je vous explique les conseils de soin pour accompagner la cicatrisation sereinement.",
    ],
  },
];

const createFaq = (city, distanceText) => [
  {
    question: `Le salon Valkyr Ink est-il proche de ${city} ?`,
    answer: `Oui. Mon salon se situe à Plevin, en Centre Bretagne, ${distanceText}. Je travaille uniquement sur rendez-vous pour garder un cadre calme, intime et attentif.`,
  },
  {
    question: `Puis-je venir de ${city} pour un projet personnalisé ?`,
    answer:
      "Oui, bien sûr. Vous pouvez m'envoyer votre idée, vos références, la zone souhaitée et une estimation de taille. Je vous répondrai avec les prochaines étapes pour construire un projet sur-mesure.",
  },
  {
    question: "Quels styles de tatouages proposes-tu ?",
    answer:
      "Je réalise des projets personnalisés et des flashs de plusieurs styles, ornemental, floral, japonisant, mediéval, fin ou coloré selon vos envies et la faisabilité du motif.",
  },
  {
    question: "Comment obtenir un tarif ?",
    answer:
      "Le tarif dépend de la taille, du placement, du niveau de détail et du temps nécessaire. Le plus simple est de m'envoyer une description claire du projet pour que je puisse vous faire une estimation adaptée.",
  },
  {
    question: "Faut-il prendre rendez-vous ?",
    answer:
      "Oui, je travaille sur rendez-vous. Cela me permet de préparer chaque projet avec attention, de limiter l'attente et de conserver une ambiance intimiste.",
  },
];

const pages = [
  {
    slug: "tatoueuse-plevin",
    publishAt: PUBLISH_NOW,
    ville: "Plevin",
    shortVille: "Plevin",
    distanceText: "directement à Plevin, là où se trouve le studio",
    title: "Tatoueuse a Plevin - Valkyr Ink, salon prive en Centre Bretagne",
    description:
      "Tatoueuse à Plevin : je vous accueille sur rendez-vous dans mon salon privé, artistique et intimiste, en Centre Bretagne.",
    h1: "Tatoueuse a Plevin",
    intro:
      "Je vous accueille à Plevin pour imaginer votre projet tattoo dans un cadre calme et artistique. Ici, je prends le temps de parler avec vous du motif, du placement et de ce que votre projet raconte.",
    areaServed: ["Plevin", "Carhaix-Plouguer", "Mael-Carhaix", "Rostrenen", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-carhaix",
    publishAt: PUBLISH_NOW,
    ville: "Carhaix-Plouguer",
    shortVille: "Carhaix",
    distanceText: "à quelques minutes de Carhaix-Plouguer",
    title: "Tatoueuse pres de Carhaix - Valkyr Ink a Plevin",
    description:
      "Tatoueuse près de Carhaix-Plouguer : je vous accueille à Plevin, dans mon salon privé en Centre Bretagne, pour créer un projet de tatouage sur-mesure.",
    h1: "Tatoueuse pres de Carhaix",
    intro:
      "Vous cherchez une tatoueuse près de Carhaix pour un projet personnel, un flash ou une pièce sur-mesure ? Je vous accueille à Plevin, dans un univers noir, artistique et intimiste, pour en parler simplement et sans pression.",
    areaServed: ["Carhaix-Plouguer", "Plevin", "Motreff", "Cleden-Poher", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-rostrenen",
    publishAt: "2026-06-15",
    ville: "Rostrenen",
    shortVille: "Rostrenen",
    distanceText: "à proximité de Rostrenen par les routes du Centre Bretagne",
    title: "Tatoueuse pres de Rostrenen - Valkyr Ink, salon prive a Plevin",
    description:
      "Tatoueuse près de Rostrenen : je vous accompagne pour un projet personnalisé ou un flash dans mon salon privé à Plevin, en Centre Bretagne.",
    h1: "Tatoueuse pres de Rostrenen",
    intro:
      "Si vous venez de Rostrenen, je vous accueille à Plevin pour penser votre tatouage avec calme, précision et sensibilité artistique.",
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
      "Vous cherchez une tatoueuse près de Gourin ? Je réalise des tatouages personnalisés et des flashs dans mon salon privé à Plevin.",
    h1: "Tatoueuse pres de Gourin",
    intro:
      "Pour un tatouage près de Gourin, je vous propose une approche attentive et humaine : discussion, dessin, placement et séance dans un cadre confidentiel.",
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
      "Tatoueuse près de Callac : je vous accompagne pour un projet de tatouage sur-mesure dans mon salon privé à Plevin.",
    h1: "Tatoueuse pres de Callac",
    intro:
      "Si vous venez de Callac, je vous reçois à Plevin pour créer un tatouage réfléchi, dessiné avec soin et réalisé sur rendez-vous.",
    areaServed: ["Callac", "Carnoet", "Plusquellec", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-huelgoat",
    publishAt: "2026-07-20",
    ville: "Huelgoat",
    shortVille: "Huelgoat",
    distanceText: "pour les personnes venant de Huelgoat et des Monts d'Arrée",
    title: "Tatoueuse pres de Huelgoat - Valkyr Ink, univers artistique",
    description:
      "Tatoueuse près de Huelgoat : je vous accompagne à Plevin pour créer un projet de tatouage personnalisé, dans un univers artistique et intime.",
    h1: "Tatoueuse pres de Huelgoat",
    intro:
      "Si vous venez de Huelgoat, vous pouvez me confier votre projet pour un tatouage sur-mesure dans un univers noir, graphique et sensible.",
    areaServed: ["Huelgoat", "Poullaouen", "Berrien", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-mael-carhaix",
    publishAt: "2026-07-06",
    ville: "Mael-Carhaix",
    shortVille: "Mael-Carhaix",
    distanceText: "tout près de Mael-Carhaix",
    title: "Tatoueuse pres de Mael-Carhaix - Valkyr Ink a Plevin",
    description:
      "Tatoueuse près de Mael-Carhaix : je vous reçois dans mon salon privé à Plevin pour des projets personnalisés, des flashs et un accompagnement sur rendez-vous.",
    h1: "Tatoueuse pres de Mael-Carhaix",
    intro:
      "À proximité de Mael-Carhaix, je vous accueille dans un cadre intime pour transformer une idée, une envie ou un symbole en tatouage personnel.",
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
      "Tatoueuse près de Plouguernevel : je crée des tatouages personnalisés et des flashs dans mon salon privé en Centre Bretagne.",
    h1: "Tatoueuse pres de Plouguernevel",
    intro:
      "Pour un projet tattoo près de Plouguernevel, je vous accompagne avec une approche calme, artistique et adaptée à votre histoire.",
    areaServed: ["Plouguernevel", "Rostrenen", "Gouarec", "Plevin", "Centre Bretagne"],
  },
  {
    slug: "tatoueuse-chateauneuf-du-faou",
    publishAt: "2026-07-27",
    ville: "Chateauneuf-du-Faou",
    shortVille: "Chateauneuf-du-Faou",
    distanceText: "pour les personnes venant de Chateauneuf-du-Faou et du Centre Finistère",
    title: "Tatoueuse pres de Chateauneuf-du-Faou - Valkyr Ink a Plevin",
    description:
      "Tatoueuse près de Chateauneuf-du-Faou : je vous accompagne à Plevin pour construire un projet de tatouage personnalisé en Centre Bretagne.",
    h1: "Tatoueuse pres de Chateauneuf-du-Faou",
    intro:
      "Si vous venez de Chateauneuf-du-Faou, vous pouvez me contacter pour un projet de tatouage personnalisé, un flash ou une pièce pensée avec soin dans l'univers Valkyr Ink.",
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
    `Je vous accueille à Plevin pour des projets venant de ${page.areaServed
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
