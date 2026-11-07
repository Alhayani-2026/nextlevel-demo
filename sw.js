// يجعل الصفحة قابلة للتثبيت كتطبيق؛ لا يخزّن شيئًا، كل الطلبات تمر للشبكة كما هي.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
