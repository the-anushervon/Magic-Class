const CACHE_NAME = "magic-class-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",   // add your CSS/JS here
  "/script.js",
  "/icons/icon.ico",
  "/icons/icon2.ico"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
