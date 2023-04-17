const title = "JavaScript Chile | Organización"
const description = "JavaScript Chile | Buscamos promover el desarrollo y aprendizaje de JavaScript en el país y, a la vez, ayudar a las comunidades de desarrolladores de todo Chile."

export const seo = {
  title,
  description,
  metadata: [
    // General
    { category: "name", name: "robots", content: "index" },
    { category: "name", name: "keywords", content: "JavaScript, Node, React, Comunidades, Chile" },
    { category: "name", name: "author", content: "JavaScript Chile" },

    // Facebook
    { category: 'property', name: "og:type", content: "website" },
    { category: 'property', name: "og:url", content: "https://jschile.org" },
    { category: 'property', name: "og:title", content: title },
    { category: 'property', name: "og:description", content: description },
    { category: 'property', name: "og:image", content: "/og-image.png" },

    // Twitter
    { category: "name", name: "twitter:card", content: "summary_large_image" },
    { category: "property", name: "twitter:domain", content: "jschile.org" },
    { category: "property", name: "twitter:url", content: "https://jschile.org" },
    { category: "name", name: "twitter:title", content: title },
    { category: "name", name: "twitter:description", content: description },
    { category: "name", name: "twitter:image", content: "/og-image.png" },
  ]
}

export const footer = [
  { id: 1, name: 'CÓDIGO DE CONDUCTA', url: 'https://github.com/jsconfcl/code_of_conduct'},
  { id: 2, name: 'CONTACTO@JSCHILE.ORG', url: 'contacto@jschile.org'},
  { id: 3, name: 'MIT Licencse  - JavaScript Chile', url: 'https://github.com/jsconfcl/org-landing'},
  { id: 4, name: 'Con ❤️ - El equipo JavaScript Chile', url: 'https://github.com/jsconfcl'},
]
