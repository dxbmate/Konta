// Konta & Cie: офлайн-режим. Сеть ждём недолго (1,2 с для приложения, 2,5 с для остального), иначе кэш.
const C = 'konta-v62';
const CORE = ['./', './index.html', './manifest.webmanifest', './k6-icon-192.png', './k6-touch-180.png', './konta-mark.jpg?v=2', './nion.jpg?v=2', './onest.woff?v=2'];
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
  const net = fetch(r).then(res => {
    if (nav && res.ok) {
      const cp = res.clone(), tx = res.clone();
      caches.open(C).then(c => c.put('./index.html', cp));
      // вместе со страницей сразу кладём в кэш её код, чтобы офлайн они совпадали
      tx.text().then(t => { const m = t.match(/app\.js\?v=\d+/); if (m) caches.open(C).then(c => c.match('./' + m[0]).then(h => h || c.add('./' + m[0]))); }).catch(() => {});
      return res;
    }
    return put(r, res);
  });
  // само приложение: свежее из сети, если ответ пришёл за 1,2 с, иначе из кэша (без лишних перезагрузок)
  if (nav) { e.respondWith(timeout(net, 1200).catch(() => caches.match('./index.html').then(m => m || net))); return; }
  // код приложения: точная версия из кэша мгновенно, иначе сеть, а без сети любая сохранённая версия
  if (u.pathname.endsWith('/app.js')) { e.respondWith(caches.match(r).then(m => m || timeout(net, 2500).catch(() => caches.match(r, { ignoreSearch: true }).then(o => o || net)))); return; }
  e.respondWith(timeout(net, 2500).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('./index.html') : net))));
});
