"use strict";var precacheConfig=[["/index.html","34abae340e7cfa85979e6919f8b819cc"],["/static/css/main.6695d5fd.css","f1124985c287fce9a10d73b8649e7e43"],["/static/media/DINPro-Bold.37684a0a.otf","37684a0a69c0bf7152f34ed934dc07a6"],["/static/media/DINPro.26790dcd.otf","26790dcdb56da3868ccaae2649fe16ce"],["/static/media/Roboto-Bold.39b2c303.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["/static/media/Roboto-Bold.dc81817d.woff","dc81817def276b4f21395f7ea5e88dcd"],["/static/media/Roboto-Bold.e31fcf18.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/static/media/Roboto-Bold.ecdd509c.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/static/media/Roboto-Light.3b813c2a.woff","3b813c2ae0d04909a33a18d792912ee7"],["/static/media/Roboto-Light.46e48ce0.ttf","46e48ce0628835f68a7369d0254e4283"],["/static/media/Roboto-Light.69f8a061.woff2","69f8a0617ac472f78e45841323a3df9e"],["/static/media/Roboto-Light.a990f611.eot","a990f611f2305dc12965f186c2ef2690"],["/static/media/Roboto-Medium.4d9f3f9e.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/static/media/Roboto-Medium.574fd0b5.woff2","574fd0b50367f886d359e8264938fc37"],["/static/media/Roboto-Medium.894a2ede.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/static/media/Roboto-Medium.fc78759e.woff","fc78759e93a6cac50458610e3d9d63a0"],["/static/media/Roboto-Regular.2751ee43.woff2","2751ee43015f9884c3642f103b7f70c9"],["/static/media/Roboto-Regular.30799efa.eot","30799efa5bf74129468ad4e257551dc3"],["/static/media/Roboto-Regular.ba3dcd89.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/static/media/Roboto-Regular.df7b648c.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/static/media/Roboto-Thin.7500519d.woff","7500519de3d82e33d1587f8042e2afcb"],["/static/media/Roboto-Thin.94998475.ttf","94998475f6aea65f558494802416c1cf"],["/static/media/Roboto-Thin.954bbdeb.woff2","954bbdeb86483e4ffea00c4591530ece"],["/static/media/Roboto-Thin.dfe56a87.eot","dfe56a876d0282555d1e2458e278060f"],["/static/media/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["/static/media/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["/static/media/artist.4b4399a1.png","4b4399a1518aef9db6f14b344a2eda0c"],["/static/media/bg.420eb484.png","420eb484711366a2c68de60df820ffe4"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/guitar-wallpaper.d5be1183.jpg","d5be118393aae850b7f274df1b4e0081"],["/static/media/help.b98665a0.png","b98665a00d92a6e5d5f9768c52064ee0"],["/static/media/host.a804e2e1.png","a804e2e134726c723b22fd6fa4d9aa41"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/logo.3afb259e.png","3afb259e7d35be855f6783e3c06dc7ed"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/preview_visible.a1905fd2.png","a1905fd2d5af19839def25575cd93c7f"],["/static/media/profile1.5961c428.png","5961c4283653f3fde1a9e4646c171d59"],["/static/media/wizard_step_1.236e5f18.png","236e5f182fd6baee868e2147955eba56"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});