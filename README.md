# Curso de PWA 👉 Progressive Web App con ReactJS ⚛️

## Scripts

- `npm install` => Instalar dependencias
- `npm run dev` => Entorno desarrollo
- `npm run build && npm start` => Entorno producción
- API Utilizada en la app => API de MealDB

## App 👇

<p align="center">
  <img src="https://user-images.githubusercontent.com/38017835/64213488-bfbdee80-ce72-11e9-9481-37a27136fa9a.PNG">
</p>

## Deploying on Now.sh 👉 [https://platzi-recetas.now.sh](https://platzi-recetas.now.sh)

## Conceptos importantes en las PWA:
- Performance:
  - Mobile First
  - Responsive
  - Foco en UX

- Instalable en Home Screen:
  - Web Manifest
  - Iconos para App
  
- Dar soporte offline:
  - Sportar malas conexiones
  - Confiabilidad en todo momento

- Ventajas de las PWA:
  - Mejor experiencia de usuario
  - Estar en la Home Screen de nuestros dispositivos móviles
  - No hay App Stores
  - Mejor desempeño en SEO
  - Más sencillo de conseguir y convertir usuarios
  - Costos de producción menores
  - Facilidad para conseguir usuarios

- Los <b>Service worker</b>
  - Es lo que hace posible que las pwa funcionen, es un script que nuestro navegador corre detrás de escena y este no puede tocar el DOM
  - Podemos tener control absoluto a nivel de red de nuestra app gracias a los service workers
  - Son la característica más importante de una PWA
  - Los service worker solo funcionan en producción
  - Soporte offline
  - Proxy in-browser
 
<h3 align="center">
  Para implementar nuestro propio service worker se puede usar una librería creada por google para crear Service Workers
</h3>

<h2 align="center">
  <a href="https://developers.google.com/web/tools/workbox/"> | Workbox |</a>
</h2>
