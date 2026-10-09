const CACHE_NAME = 'rosario-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',         // Cambia por tus archivos CSS si los tienes por separado
  './app.js',             // Cambia por tus scripts JS si los tienes por separado
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // Agrega aquí las rutas relativas de tus imágenes o audios
];

// Instalación e inicio del guardado en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activación y limpieza de cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepción de solicitudes para responder desde la caché si está offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
