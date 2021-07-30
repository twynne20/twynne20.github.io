"use strict";var precacheConfig=[["/404.html","322a7acbfbdc28e589ac2a47a2efb27b"],["/about/index.html","a308993bcfe848530a5f0c67d9d7ab5c"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/configuration.html","5424d3701d1f442f3b597fc32e0c9f17"],["/creating-themes.html","45e3aee98d56b840d18a5eaff6fdbfab"],["/custom-color-scheme.html","f45421f13879add6dba538955b58ec21"],["/custom-css.html","52e038739a08b318e8b02d161fab7eaa"],["/custom-heading-background.html","38f3fe3f07054cff2971779c2599f48a"],["/custom-heading-image.html","7bfac3ea9e8a49090c2cbb04f6a5a3c9"],["/custom-html-markups.html","1ca60afef814d602e39717afc4c9acc6"],["/customizing-styles.html","c73babc5070802852a579ba3164e3ce7"],["/deployment-methods.html","c82fec0184611e35cd5d646240202776"],["/external-link-post.html","de2c1a84564b0a9229a8266a5eef8adc"],["/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/getting-started.html","65886f2ce3c38c9c4a11acc18ef4a4d0"],["/github-pages-setup.html","596a15f227ca88b57945cef461278ce7"],["/index.html","c6a8a91ccdd45536a6d15948525e2580"],["/jekyll-theme-compatibility.html","2acdb5bfbddc08d5afe0b7d5a056ae40"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/markdown-features-test.html","c30c0eaee46ef3133de1e2aaf08b63db"],["/markup-example.html","ba6b1d9436af194ef69ff7e9f0525376"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/multiple-themes-support.html","192aa070135aed472e72eafa6df7cf9f"],["/news/index.html","dad1829f051772d5907eff24c54f14f9"],["/open-graph.html","08f72522c44575944e1cb9e228878761"],["/svg-post-title.html","7c9118d8834f345b1c967f7157d30fc8"],["/syntax-highlighting.html","a31dd825b7e057b5645177fde050d97f"],["/theme-curtana.html","9015686af5b9453c62bb8771da8b8a2f"],["/themes.html","1ca2cb4bcd1cfa575fe4e68e1dd0a6fc"],["/upgrading-from-v1-to-v2.html","cbe39bfa8b8a125f2b4eef3a87ff52f6"],["/upgrading-guide-v1.1.0.html","3826dc1e71d64684a0236d96dfda4ab0"],["/welcome.html","981ed62c816dd8341821451afaa1a1a3"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some((function(e){return a.match(e)}))},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then((function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(a,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(a){return Promise.all(a.map((function(a){if(!t.has(a.url))return e.delete(a)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(a)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));