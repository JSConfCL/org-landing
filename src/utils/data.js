const title = "JavaScript Chile | Organización";
const description = "JavaScript Chile | Buscamos promover el desarrollo y aprendizaje de JavaScript en el país y, a    la vez, ayudar a las comunidades de desarrolladores de todo Chile.";
const url = "https://jschile.org";
const images = "/og-image.png";

export const seo = {
  metadataBase: new URL('https://jschile.org'),
  title,
  description,

  keywords: ["JavaScript",  "Comunidades", "Chile", "React", "Node"],
  authors: [{ name: "JSChile", url }],

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eacf39" },
    { media: "(prefers-color-scheme: dark)", color: "#333" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images,
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    domain: "jschile.org",
    url,
    title,
    description,
    images,
  },
};

export const footer = [
  { id: 0, name: "Donaciones y Sponsors", url: "https://donacion.jschile.org/"},
  { id: 1, name: "CÓDIGO DE CONDUCTA", url: "https://github.com/jsconfcl/code_of_conduct"},
  { id: 2, name: "CONTACTO@JSCHILE.ORG", url: "mailto:contacto@jschile.org"},
  { id: 3, name: "MIT Licencse  - JavaScript Chile", url: "https://github.com/jsconfcl/org-landing"},
  { id: 4, name: "Con ❤️ - El equipo JavaScript Chile", url: "https://github.com/jsconfcl"},
];
