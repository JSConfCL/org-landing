# JavaScript Chile - Official Website

¡Bienvenido al repositorio oficial del website de la comunidad [JavaScript Chile](https://jschile.org)! 
Este proyecto es el hogar virtual para la comunidad de JavaScript más grande de Chile, conectando desarrolladores y centralizando nuestros eventos, recursos e información desde 2013.

## 🚀 Tech Stack

Este proyecto está construido con un stack de tecnologías modernas y optimizadas para un alto rendimiento y escalabilidad:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Librería UI:** [React 19](https://react.dev/)
- **Gestor de Paquetes:** [npm](https://www.npmjs.com/)
- **Estilos & Componentes:** [Material UI (MUI) v7](https://mui.com/)
- **Formularios & Validación:** `react-hook-form` + `zod`
- **Envío de Correos:** [Resend](https://resend.com/) (Vía Server Actions)
- **Lenguaje:** TypeScript

## 📁 Estructura del Proyecto

El código está organizado priorizando modularidad y separación de responsabilidades:

- `/src/app`: Rutas principales de Next.js (App Router), `layout.tsx` principal y configuración básica de Metadatos y SEO de Next.js.
- `/src/components`: Componentes UI reutilizables.
- `/src/sections`: Componentes de gran escala que construyen estructuralmente la Single Page Application (ej: `Hero`, `HomeGallery`, `CodeOfConduct`).
- `/src/layout`: Envolturas como `Navbar` y `Footer`.
- `/src/theme`: Configuración, paleta de colores global y `CssBaseline` de Material UI.
- `/src/actions`: Lógica de backend (Server Actions) como el envío de emails con Resend.
- `/src/schemas`: Esquemas de validación abstractos de Zod.

## 🛠️ Desarrollo Local

Si quieres correr o contribuir con el proyecto de forma local, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/armandorivasv-dev/website-jschile.git
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las Variables de Entorno:**
   Para poder usar el formulario de postulación a charlas o pruebas locales del envío de correos, crea un archivo `.env.local` en la raíz copiando el `.env.example` y añade tu clave:
   ```env
   RESEND_API_KEY=tu_api_key_de_resend
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🛳️ Despliegue en Cloudflare Pages

Este proyecto está configurado para exportación estática y listo para ser desplegado en **Cloudflare Pages**.

**Configuración de Despliegue:**
1. Conecta tu repositorio de GitHub a [Cloudflare Pages](https://dash.cloudflare.com/).
2. Configura los siguientes parámetros en el dashboard de Cloudflare:
   - **Framework preset:** `Next.js (Static HTML export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Asegúrate de agregar tu `RESEND_API_KEY` en las variables de entorno de Cloudflare.
4. El proyecto usa `output: 'export'` en `next.config.ts`, lo que genera una carpeta `out` lista para ser servida por Cloudflare.

## 🤝 Contribuyendo

La rama principal del entorno de producción es `main`. 
Para enviar contribuciones, se recomienda encarecidamente hacer branching desde la rama `dev` o usar tu propia rama feature (`feature/mi-implementacion`), para proceder a generar un Pull Request.

---
**Copyright © JavaScript Chile Community**

