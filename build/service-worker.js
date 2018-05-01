var staticCacheName = 'neighborhood-react-map-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        "/index.html",
        "/static/css/main.eb8b4b46.css",
        "/static/js/main.697236fe.js",
        "/service-worker.js",
      ]);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== staticCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if(response !== undefined) {
        caches.open(staticCacheName).then(function (cache) {
          fetch(event.request).then(function(responseFetch) {
            cache.put(event.request, responseFetch.clone());
          })
        });
        return response;
      }
      let cacheResponse;
      caches.open(staticCacheName).then(function (cache) {
        if (!event.request.url.startsWith('https://maps.googleapis.com/maps/vt')) {
          fetch(event.request).then(function(responseFetch) {
            cache.put(event.request, responseFetch.clone());
          })
        }
      });
      return fetch(event.request);
    })
  );
});
