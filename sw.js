self.addEventListener('install',e=>e.waitUntil(caches.open('fc1').then(c=>c.addAll(['./','index.html','logo.png','icon-192.png']))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!e.request.url.startsWith(self.location.origin))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
