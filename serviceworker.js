const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";

const assets = [
  "/", 
  "/index.html"
];

// install service worker
self.addEventListener("install", (event) => {
  // console.log('service worker has been installed');
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// active event
self.addEventListener("activate", (event) => {
  // console.log('service worker has been activated');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (event) => {
  // console.log('fetch event', evt);
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );


  if (event.request.url.endsWith('.mp4')) {

    console.log("INI LG DI CACHE ")
    console.log(event.request.url);

    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request).then(function(response) {
          if (!response || response.status !== 200 || response.type !== 'video/mp4') {
            return response;
          }

          var responseToCache = response.clone();

          caches.open('my-video-cache').then(function(cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }


});

// self.addEventListener('fetch', function(event) {
//   if (event.request.url.endsWith('.mp4')) {
//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//         if (response) {
//           return response;
//         }

//         return fetch(event.request).then(function(response) {
//           if (!response || response.status !== 200 || response.type !== 'video/mp4') {
//             return response;
//           }

//           var responseToCache = response.clone();

//           caches.open('my-video-cache').then(function(cache) {
//             cache.put(event.request, responseToCache);
//           });

//           return response;
//         });
//       })
//     );
//   }
// });