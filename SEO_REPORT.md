# SEO Audit Report — JavaScript Chile
Generated: 2026-06-20

> **Nota:** Este es un proyecto Next.js App Router. Las correcciones se aplican en `src/app/layout.tsx`, `public/robots.txt` y `public/sitemap.xml` directamente (no existe carpeta `seo-optimized/` porque no son HTMLs estáticos).

---

## Summary
- Páginas analizadas: 1 (SPA — single page)
- Issues críticos: 4
- Warnings: 3
- Checks pasados: 7

---

## Resultados

### `src/app/layout.tsx` (metadata global)

#### ✅ Pasando
- `<html lang="es">` presente y correcto
- `<title>` bien formado: "JavaScript Chile | Comunidad de Desarrolladores" (52 chars)
- `<meta name="description">` presente y relevante (~200 chars — ver warning)
- `og:title` presente
- `og:description` presente
- `og:url` presente (`https://jschile.org/`)
- `og:siteName` presente
- `og:locale` presente (`es_CL`)
- `og:type` presente (`website`)

#### ⚠️ Warnings
- **Description demasiado larga**: 218 chars (recomendado: 150–160). Google la trunca en SERP.
- **`metadataBase` es string**: debe ser `new URL('https://jschile.org')` para que Next.js resuelva URLs relativas correctamente.
- **Sin `twitter:card`**: falta por completo. Afecta previews en X/Twitter.

#### ❌ Issues Críticos
- **`og:image` apunta a `/icon.png` que NO EXISTE** (fue eliminado al convertir imágenes a webp). Las previews sociales (LinkedIn, WhatsApp, Twitter) están rotas.
- **Sin `<link rel="canonical">`**: sin esto Google puede indexar duplicados (www vs non-www, http vs https).
- **Sin `robots.txt`**: Google no tiene instrucciones de crawl.
- **Sin `sitemap.xml`**: Google no conoce la estructura del sitio.

---

### Imágenes

#### ✅ Pasando
- `group-crowd.webp` → alt: "Asistentes en evento JavaScript Chile" ✅
- `group-selfie.webp` → alt: "JSConf Chile — foto grupal" ✅
- `group-stage.webp` → alt: "Escenario JSConf Chile" ✅
- Logo en Navbar → alt: "JavaScript Chile" ✅
- Logo en Footer → alt: "JavaScript Chile" ✅
- Mapa Chile → alt: "Mapa de Chile" ✅
- Fotos de galería → alt descriptivo ✅

#### ⚠️ Warning
- **Imágenes de staff sin alt en StaffCard**: usan `background-image` CSS en lugar de `<img>`. Google no indexa imágenes de fondo CSS. Las fotos de staff son invisibles para buscadores.

---

## Issues Globales
- `robots.txt` ausente
- `sitemap.xml` ausente
- OG image rota (`/icon.png` eliminado)
- Twitter Card inexistente
- `metadataBase` es string, no URL
- `canonical` ausente

---

## Quick Wins (fix estos primero)
1. ✅ **APLICADO** — Crear `robots.txt` en `/public/`
2. ✅ **APLICADO** — Crear `sitemap.xml` en `/public/`
3. ✅ **APLICADO** — Corregir `metadataBase` a `new URL(...)`
4. ✅ **APLICADO** — Añadir Twitter Card tags
5. ✅ **APLICADO** — Añadir canonical
6. ✅ **APLICADO** — Acortar description a 155 chars
7. ⚠️ **PENDIENTE MANUAL** — Crear imagen OG 1200×630px y reemplazar `/icon.png` en metadata (ver abajo)
8. ⚠️ **PENDIENTE MANUAL** — StaffCard: cambiar background-image CSS por `<img>` con alt text

---

## Imagen OG — Acción requerida

Se necesita una imagen de **1200×630 px** en formato JPG o PNG para las previews sociales.

**Opciones:**
- Usar `hero-bg.webp` redimensionada a 1200×630 (conversión manual o con sharp)
- Diseñar una imagen de marca con el logo y claim
- Usar Next.js [opengraph-image.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/opengraph-image) para generarla dinámicamente

Mientras tanto se ha configurado la URL a `/assets/og-image.jpg` — **debes crear ese archivo**.
