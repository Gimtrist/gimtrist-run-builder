// Emitted by vite.config.ts - see the note beside SW_PURGE_SOURCE there.
// Imported by sw.js, so it runs in the service worker and not in any page.
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.delete("ellaz-pages"));
});
