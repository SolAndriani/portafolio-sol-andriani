# Portfolio · Sol Andriani

Portfolio personal: quién soy, en qué trabajo y un caso de estudio de los asistentes de WhatsApp con IA que desarrollo en Austreon.

**Sitio:** https://portafolio-sol-andriani.vercel.app

## Stack

- **React 19** (Create React App), sin librerías de componentes ni frameworks de CSS
- **CSS propio** con variables para colores, tipografía y espaciados
- **Lenis** para el scroll suave y un **shader de WebGL** para el fondo animado
- Tipografías **Inter** e **Instrument Serif**, servidas desde el propio sitio con Fontsource
- Deploy en **Vercel**

## Decisiones técnicas

**Rendimiento**
- La foto del hero está en el HTML con `preload` y `srcset` (WebP en dos tamaños), así se ve antes de que cargue React.
- El fondo animado arranca recién cuando la página terminó de cargar. En celular se dibuja a menor resolución y a 30 cuadros por segundo, y no se vuelve a armar cuando la barra de Safari aparece o se esconde al scrollear.
- El resto de las imágenes carga a medida que se llega a ellas.

**Accesibilidad**
- Contraste AA en todos los textos, áreas de toque de 44 px en celular y foco visible al navegar con teclado.
- Si el sistema tiene activado "reducir movimiento", las animaciones se desactivan o se simplifican.
- El menú de celular bloquea el scroll de atrás y se cierra con Escape. El texto que se escribe solo tiene una versión fija para lectores de pantalla.

**Idiomas**
- Español e inglés con un contexto de React propio, sin librerías. El idioma se elige según el del navegador y se recuerda en `localStorage`.

**Diseño responsive**
- En celular el hero se reorganiza (foto arriba, texto abajo) y el menú pasa a pantalla completa. En horizontal vuelve al layout de dos columnas.

## Estructura

```
src/
├── components/     Secciones del sitio (Presentacion, Proyectos, CasoAustreon…), cada una con su CSS
├── hooks/          useModalAccesible
├── idioma.js       Contexto de idioma y helper t("es", "en")
├── scrollSuave.js  Scroll suave con Lenis
├── revelar.js      Títulos que aparecen al scrollear
└── magnetico.js    Efecto magnético de los botones
```

## Cómo correrlo

```bash
npm install
npm start          # desarrollo en http://localhost:3000
npm run build      # build de producción en /build
npm run format     # formatea el código con Prettier
```
