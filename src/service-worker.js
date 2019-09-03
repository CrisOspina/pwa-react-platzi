// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || []);

// Deprecated
//workbox.precaching.suppressWarnings()

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// App shell
workbox.routing.registerNavigationRoute('./index.html');
// workbox.routing.registerNavigationRoute(
//   workbox.precaching.getCacheKeyForURL('./index.html')
// );

// Google Analytics offline
workbox.googleAnalytics.initialize();

// Estrategia de carga StateWhileRevalidate()
workbox.routing.registerRoute(
  new RegExp(/^https?:\/\/www.themealdb.com\/api\/.*/),
  new workbox.strategies.StaleWhileRevalidate(),
  'GET'
);

// Estrategia de carga CacheFirst() para las fonts de google
workbox.routing.registerRoute(
  new RegExp(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/),
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-cache',
    plugin: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  }),
  'GET'
);

// Estrategia de carga CacheFirst() para las imagenes
workbox.routing.registerRoute(
  new RegExp(/^https?:\/\/www.themealdb.com\/images\/.*/),
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugin: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 20
      })
    ]
  })
);

// Estrategia de carga - todo lo demás usa Network First por defecto
workbox.routing.registerRoute(
  new RegExp(/^https?.*/),
  new workbox.strategies.NetworkFirst(),
  'GET'
);
