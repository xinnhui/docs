/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c072b8f1243fe79cbc05d53895d47cfa"
  },
  {
    "url": "about.html",
    "revision": "00f7f0936dffe195104d263f30031a4f"
  },
  {
    "url": "about1.html",
    "revision": "d43cac280bd087c59d7914e012828f73"
  },
  {
    "url": "about2.html",
    "revision": "fc1a8dbde38c17ce558673fc7163e125"
  },
  {
    "url": "assets/css/0.styles.7e0e013d.css",
    "revision": "dc81a8161d3b065a1b7f7c233f75b7a8"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.998d8720.js",
    "revision": "d557e7fe6e3269bca022b999bd96dfdd"
  },
  {
    "url": "assets/js/11.0ce806c5.js",
    "revision": "f1de3e8c3f4baddab0634d6c6cbfaa7d"
  },
  {
    "url": "assets/js/12.dbb70ba6.js",
    "revision": "ec8b26ab05a6cbd5fd86bc5142e9485f"
  },
  {
    "url": "assets/js/13.ddcaf6c6.js",
    "revision": "4ea441f2e3cef85f4d2d204fa6f0a623"
  },
  {
    "url": "assets/js/14.1141843c.js",
    "revision": "670e22cee632a7d3a3c457743784978e"
  },
  {
    "url": "assets/js/15.ecaaaeae.js",
    "revision": "b3929ea2d7da0d84f0dc8235e40abc25"
  },
  {
    "url": "assets/js/16.b35b7f07.js",
    "revision": "6b0302eea2956d93e4508103560c192f"
  },
  {
    "url": "assets/js/17.eed3aac9.js",
    "revision": "6c3542fae38fb126c9912a514e717cf6"
  },
  {
    "url": "assets/js/18.4bf1eb58.js",
    "revision": "cb0c4808503db30a6c295d47387aa89d"
  },
  {
    "url": "assets/js/19.d5c95e0c.js",
    "revision": "c1d6a1a269113e8d89121ec14d71b792"
  },
  {
    "url": "assets/js/2.1bd9a8ea.js",
    "revision": "fc035bd517b3234b1e07b0a3262654c0"
  },
  {
    "url": "assets/js/20.4b59e845.js",
    "revision": "c7fe579c5ce85bc971c0308077d2e084"
  },
  {
    "url": "assets/js/21.1c0c0446.js",
    "revision": "5c25d71ae1f181d3af19de237e7c808c"
  },
  {
    "url": "assets/js/22.13129040.js",
    "revision": "96c67d7b585bff35388be90b20591c01"
  },
  {
    "url": "assets/js/23.a2a090de.js",
    "revision": "ec72a3e95a3f0d56be87943dd87c5e07"
  },
  {
    "url": "assets/js/24.09b26256.js",
    "revision": "dad4e267d3480c3f3f71d57b81a6084c"
  },
  {
    "url": "assets/js/25.1d048fcd.js",
    "revision": "2d80fb0b6f6a16980a145730149a116e"
  },
  {
    "url": "assets/js/26.2eaa31cb.js",
    "revision": "d9f000d18e0356795ea8666ad9c9c225"
  },
  {
    "url": "assets/js/27.3c766a17.js",
    "revision": "44d47bac3e946512a8ce24a117102991"
  },
  {
    "url": "assets/js/28.58e76272.js",
    "revision": "8c7ac226527a20277508b28ea3f48f84"
  },
  {
    "url": "assets/js/29.04cf3506.js",
    "revision": "aefb53dc257b0674c0e9abb2ac00a7b9"
  },
  {
    "url": "assets/js/3.e5f07c0b.js",
    "revision": "ab6e2ed96a63e6416f608c939269ac8a"
  },
  {
    "url": "assets/js/30.478839ff.js",
    "revision": "c1bd577abfdf40889341d49cf0d4f5cc"
  },
  {
    "url": "assets/js/31.776ce368.js",
    "revision": "7ce093a3abb27aeb66e5858c9e0815c9"
  },
  {
    "url": "assets/js/4.5aa0c94d.js",
    "revision": "993308101c85f92bd7616f3f4e390d2d"
  },
  {
    "url": "assets/js/5.79973c24.js",
    "revision": "84a0013811f28e752072f6c922b12449"
  },
  {
    "url": "assets/js/6.84cc97d3.js",
    "revision": "08159818cc4c8c5e12f8fd489ff87cec"
  },
  {
    "url": "assets/js/7.323aeaf1.js",
    "revision": "14499cb9b0473d47733d011978d368f5"
  },
  {
    "url": "assets/js/8.2af28487.js",
    "revision": "12d63d1051edda3aad46f124e3353772"
  },
  {
    "url": "assets/js/9.4cc043bc.js",
    "revision": "9a725d22566b087d3f1391b348f2e477"
  },
  {
    "url": "assets/js/app.14b9b7e8.js",
    "revision": "d7e9166b0d6a1b4940e106653ee86399"
  },
  {
    "url": "countup.html",
    "revision": "d2d9efe7d2ebc619a84d1dac22214a2b"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "9bed4743c098dd1025bb2a5543476c1a"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c47ceed8c096f52644ee79720ebb1c44"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "3ff6139dd8c822d031d229462deb8441"
  },
  {
    "url": "css/index.html",
    "revision": "4f284e4c7169852f841bd67ca3b5940f"
  },
  {
    "url": "frontend/css/c-aaa.html",
    "revision": "c5cb48b89f5ff641dd7293a9bff5a710"
  },
  {
    "url": "frontend/css/c-bbb.html",
    "revision": "baf306dd8e26f59fe008b95f96045299"
  },
  {
    "url": "frontend/css/c-ccc.html",
    "revision": "be2705fbabd42a87c63a2dcb42ff0eaf"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "98cbb692394372d00fd3250f8b104cf1"
  },
  {
    "url": "frontend/javascript/j-aaa.html",
    "revision": "9d8a185ba0e862c0a315c875ee4bb0e8"
  },
  {
    "url": "frontend/javascript/j-bbb.html",
    "revision": "4ae60b7380b7d58b7c034e265e4e980f"
  },
  {
    "url": "frontend/javascript/j-ccc.html",
    "revision": "f7f02f74fabcffa6014ed3b8176e495b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "d509823b9b7ac025e64e0a46e86b4fe1"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "08a788bffb95cb4b41bb18799efbbe5f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "45e976633face32cd3904f535c10c9a4"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "3ab99eef723b248ed1fdb2b712abd363"
  },
  {
    "url": "quanxue.html",
    "revision": "d861c47e7eb3254faf95ec73619745c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
