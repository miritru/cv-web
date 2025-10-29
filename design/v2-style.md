Versión 2 — Guía rápida de estilo

Objetivo
- Migrar la estética actual del sitio (PC móvil) a una V2 sin sobrescribir V1.
- Usar los HTML imprimibles (`cv-print.html` y `cv-print-dark.html`) como referencia visual para los temas Light y Dark.
- Ser 100% responsive (móvil/desktop) usando Bootstrap 5 utilidades y layout flex/grid.

Tokens y paleta
- Light (cv-print):
  - primary: #3B8E8C
  - dark: #1D4E4A
  - text: #12323a
  - background: #f7fdfd
  - header gradient: linear-gradient(180deg, #3B8E8C 0%, #2e7a79 100%)
  - header text: white

- Dark (cv-print-dark):
  - primary (neon): #00ff9d
  - dark: #002b25
  - text: #c6ffdf
  - background: #041014
  - header gradient: linear-gradient(180deg, #02120f 0%, #00120f 100%)
  - header text: #bfffe0

Componentes y comportamiento
- Header: 3-column floating header (foto | info | controls). Mantener la estructura actual.
- No habrá botón hamburguesa; en su lugar, en la esquina donde estaba, habrá un botón de alternancia de tema (Light / Dark).
- El botón de tema funciona igual que el selector de idioma: persistente en localStorage, accesible en móvil y escritorio.
- Las tarjetas y tarjetas impresas seguirán el estilo `card` (colores/gradientes) de los HTML imprimibles.

Responsive
- Bootstrap 5 se usará para la rejilla y utilidades (d-flex, gap, container, responsive helpers).
- Mantener los puntos de ruptura y micro-tipografía para que la versión se vea bien en móvil.

Impresión
- Conservaremos los HTML imprimibles creados (`cv-print.html`, `cv-print-dark.html`) como referencia y generadores de CSS para el modo 'print'.

Notas de implementación
1. Ya añadimos Bootstrap CDN a `index.html`.
2. El toggle de tema se implementará en `src/App.jsx` y persistirá en `localStorage`.
3. Estilos principales se aplicarán por combinación de CSS variables y estilos inline controlados por el estado `theme`.

Siguientes pasos
- Iterar en `src/App.jsx` para pulir micro-espaciados y asegurar que todos los colores provienen de los tokens.
- Crear prototipo `cv-v2.html` (estático) si quieres ver la versión imprimible de V2.
- Revisar juntos en navegador y ajustar tamaños para móvil.
