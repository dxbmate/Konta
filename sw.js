// Konta & Cie: офлайн-режим. Приложение открывается из кэша сразу, сеть ждём не дольше 2,5 с.
const C = 'konta-v23';
const CORE = ['./', './index.html', './manifest.webmanifest', './k2-icon-192.png', './k2-touch-180.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const put = (r, res) => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; };
const timeout = (p, ms) => new Promise((ok, no) => { const t = setTimeout(() => no(new Error('timeout')), ms); p.then(v => { clearTimeout(t); ok(v); }, e => { clearTimeout(t); no(e); }); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const lib = /fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(u.host);
  // курсы, биржи и прочие API: только из сети
  if (u.origin !== location.origin && !lib) return;
  // version.json: только сеть, без кэша
  if (u.pathname.endsWith('/version.json')) return;
  if (lib) {
    // шрифты и библиотеки: сразу из кэша, в фоне обновляем
    e.respondWith(caches.match(r).then(m => {
      const net = fetch(r).then(res => put(r, res));
      if (m) { net.catch(() => {}); return m; }
      return timeout(net, 2500).catch(() => new Response('', { status: 504 }));
    }));
    return;
  }
  const nav = r.mode === 'navigate';
  const net = fetch(r).then(res => { if (nav && res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put('./index.html', cp)); return res; } return put(r, res); });
  // само приложение: мгновенно из кэша, свежая версия качается в фоне (о ней сообщит version.json)
  if (nav && !u.searchParams.has('v')) {
    e.respondWith(caches.match('./index.html').then(m => {
      if (m) { net.catch(() => {}); return m; }
      return timeout(net, 2500).catch(() => net);
    }));
    return;
  }
  e.respondWith(timeout(net, 2500).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('./index.html') : net))));
});
