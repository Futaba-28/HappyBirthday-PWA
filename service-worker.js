self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vsm-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/icon/192x192.png',
        '/icon/512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});