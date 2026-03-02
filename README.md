# JavaScript Chile - Official Website

¡Bienvenido al repositorio oficial del website de la comunidad [JavaScript Chile](https://jschile.org)! 
Este proyecto es el hogar virtual para la comunidad de JavaScript más grande de Chile, conectando desarrolladores y centralizando nuestros eventos, recursos e información desde 2013.

## 🚀 Tech Stack

Este proyecto está construido con un stack de tecnologías modernas y optimizadas para un alto rendimiento y escalabilidad:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Librería UI:** [React 19](https://react.dev/)
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/)
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
   Se recomienda encarecidamente utilizar `pnpm` para asegurar lockfiles consistentes.
   ```bash
   pnpm install
   ```

3. **Configura las Variables de Entorno:**
   Para poder usar el formulario de postulación a charlas o pruebas locales del envío de correos, crea un archivo `.env.local` en la raíz copiando el `.env.example` y añade tu clave:
   ```env
   RESEND_API_KEY=tu_api_key_de_resend
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🛳️ Despliegue en Vercel

Este proyecto está preparado bajo los estándares de Next.js listos para ser desplegados sin contratiempos (Zero-config deployment) en **Vercel**. ¡La forma más fácil de desplegar tu aplicación en Next.js!

**Instrucciones sugeridas:**
1. Crea un proyecto en el panel de [Vercel](https://vercel.com/new).
2. Importa el repositorio desde tu cuenta de GitHub.
3. Asegúrate que en los **Environment Variables** de la configuración de Vercel (antes de darle Deploy) agregar tu `RESEND_API_KEY`.
4. ¡El resto es trabajo automágico de Next.js! Todos los scripts de compilación (`pnpm build`) serán interpretados por defecto.

## 🤝 Contribuyendo

La rama principal del entorno de producción es `main`. 
Para enviar contribuciones, se recomienda encarecidamente hacer branching desde la rama `dev` o usar tu propia rama feature (`feature/mi-implementacion`), para proceder a generar un Pull Request.

---
**Copyright © JavaScript Chile Community**
