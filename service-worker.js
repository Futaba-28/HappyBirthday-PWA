self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vsm-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/celebrate.js',
        '/celebrate.html',
        '/make-a-wish.html',
        '/make-a-wish.js',
        '/music.js',
        'music.html',
        '/media/images/logos/cake_192.png',
        '/media/images/logos/cake_512.png'
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