import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { publishedLocalSeoPages } from "../src/data/localSeoPages.js";

const distDir = path.resolve("dist");
const distIndexPath = path.join(distDir, "index.html");
const sitemapPath = path.join(distDir, "sitemap.xml");
const baseSitemapUrls = [
  "https://valkyrink-tattoo.com/",
  "https://valkyrink-tattoo.com/galerie",
  "https://valkyrink-tattoo.com/flash",
  "https://valkyrink-tattoo.com/contact",
  "https://valkyrink-tattoo.com/event",
  "https://valkyrink-tattoo.com/event/hauts-de-kerano",
];

function buildLocalRoute(page) {
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

  const sectionsHtml = page.sections
    .map(
      (section) => `
        <section>
          <h2>${section.title}</h2>
          ${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>`
    )
    .join("");

  const faqHtml = page.faq
    .map(
      (item) => `
          <h3>${item.question}</h3>
          <p>${item.answer}</p>`
    )
    .join("");

  return {
    route: `/${page.slug}`,
    title: page.title,
    description: page.description,
    canonical: page.url,
    ogTitle: page.title,
    ogDescription: page.description,
    ogUrl: page.url,
    structuredData: [localBusinessJsonLd, faqJsonLd],
    rootHtml: `
      <main>
        <h1>${page.h1}</h1>
        <p>${page.intro}</p>
        ${sectionsHtml}
        <section>
          <h2>Zone desservie</h2>
          <p>${page.zone}</p>
        </section>
        <section>
          <h2>Questions frequentes</h2>
          ${faqHtml}
        </section>
        <section>
          <h2>Contact</h2>
          <p>Valkyr Ink accueille les projets sur rendez-vous a Plevin, en Centre Bretagne.</p>
          <p>Telephone : 06 06 42 00 66.</p>
          <p>Instagram : @Valkyr__ink.</p>
        </section>
      </main>
    `,
  };
}

const routes = [
  ...publishedLocalSeoPages.map(buildLocalRoute),
  {
    route: "/event",
    title: "Evenements de Tatouage en Bretagne | Valkyr Ink",
    description:
      "Retrouvez mes evenements de tatouage en Bretagne : soirees tapas a Paimpol, flash days a Plevin et afterworks tatouage. Flashs uniques disponibles et moments conviviaux.",
    canonical: "https://valkyrink-tattoo.com/event",
    ogTitle: "Evenements de Tatouage en Bretagne | Valkyr Ink",
    ogDescription:
      "Retrouvez mes evenements de tatouage en Bretagne : soirees tapas a Paimpol, flash days a Plevin et afterworks tatouage.",
    ogUrl: "https://valkyrink-tattoo.com/event",
  },
  {
    route: "/event/hauts-de-kerano",
    title: "Soiree Tatouage et Tapas aux Hauts de Kerano | Valkyr Ink Tattoo Bretagne",
    description:
      "Rejoignez-nous aux Hauts de Kerano a Paimpol pour une soiree unique melant tatouage et tapas. Flash tattoos et projets personnalises disponibles dans une ambiance conviviale.",
    canonical: "https://valkyrink-tattoo.com/event/hauts-de-kerano",
    ogTitle: "Soiree Tatouage et Tapas aux Hauts de Kerano",
    ogDescription:
      "Soiree tatouage et tapas a Paimpol avec flash tattoos et projets personnalises dans une ambiance conviviale.",
    ogUrl: "https://valkyrink-tattoo.com/event/hauts-de-kerano",
  },
];

function escapeAttribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function writeSitemap() {
  const urls = [...baseSitemapUrls, ...publishedLocalSeoPages.map((page) => page.url)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`).join("\n")}
</urlset>
`;

  await writeFile(sitemapPath, xml, "utf8");
}

function buildStructuredDataScripts(structuredData) {
  if (!structuredData) {
    return "";
  }

  const items = Array.isArray(structuredData) ? structuredData : [structuredData];

  return items
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n  ");
}

function buildRouteHtml(baseHtml, config) {
  let html = baseHtml;

  html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, "");
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(config.title)}</title>`);
  const seoBlock = [
    `<meta name="description" content="${escapeAttribute(config.description)}">`,
    config.keywords ? `<meta name="keywords" content="${escapeAttribute(config.keywords)}">` : "",
    `<meta property="og:title" content="${escapeAttribute(config.ogTitle || config.title)}">`,
    `<meta property="og:description" content="${escapeAttribute(config.ogDescription || config.description)}">`,
    `<meta property="og:url" content="${escapeAttribute(config.ogUrl || config.canonical)}">`,
    '<meta name="robots" content="index,follow,max-image-preview:large">',
    `<link rel="canonical" href="${escapeAttribute(config.canonical)}">`,
    buildStructuredDataScripts(config.structuredData),
  ]
    .filter(Boolean)
    .map((tag) => `  ${tag}`)
    .join("\n");

  html = html.replace("</head>", `${seoBlock}\n</head>`);

  if (config.rootHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${config.rootHtml}</div>`);
  }

  return html;
}

async function writeRoutePage(baseHtml, config) {
  const outputDir = path.join(distDir, config.route.replace(/^\//, ""));
  const outputPath = path.join(outputDir, "index.html");
  const html = buildRouteHtml(baseHtml, config);

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

async function main() {
  const baseHtml = await readFile(distIndexPath, "utf8");

  await Promise.all(routes.map((route) => writeRoutePage(baseHtml, route)));
  await writeSitemap();
}

main().catch((error) => {
  console.error("SEO postbuild failed:", error);
  process.exitCode = 1;
});
