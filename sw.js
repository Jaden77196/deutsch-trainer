/* ============================================================
   Service Worker：让在线版离线可用
   为什么需要它：单文件版从 file:// 打开时，浏览器对本地文件的
   localStorage 支持不稳定——换文件、换路径就可能读不到，用户的
   掌握度会凭空消失。挂到 github.io 这个 HTTPS 来源上之后，数据
   存在一个固定的来源下，离线也能打开，还顺带能自动更新。

   策略：网络优先（4 秒超时），失败回退到缓存。
   ============================================================ */
const CACHE = 'deutsch-v1';
const SHELL = ['./', './index.html'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){ return c.addAll(SHELL); })
      .then(function(){ return self.skipWaiting(); })
      .catch(function(){})
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys()
      .then(function(keys){
        return Promise.all(keys.map(function(k){
          return k === CACHE ? null : caches.delete(k);
        }));
      })
      .then(function(){ return self.clients.claim(); })
  );
});

function withTimeout(promise, ms){
  return new Promise(function(resolve, reject){
    const t = setTimeout(function(){ reject(new Error('timeout')); }, ms);
    promise.then(function(v){ clearTimeout(t); resolve(v); },
                 function(e){ clearTimeout(t); reject(e); });
  });
}

self.addEventListener('fetch', function(e){
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    withTimeout(fetch(req), 4000)
      .then(function(res){
        if (res && res.status === 200 && res.type === 'basic'){
          const copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); }).catch(function(){});
        }
        return res;
      })
      .catch(function(){
        return caches.match(req).then(function(hit){
          return hit || caches.match('./index.html');
        });
      })
  );
});
