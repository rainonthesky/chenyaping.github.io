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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b87d30c96f77e88e06f0cd611c64ad6"
  },
  {
    "url": "assets/css/0.styles.714a7de3.css",
    "revision": "1c773189bfaed7d87cc55780d944021d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9cdbdadc.js",
    "revision": "57b5e05431334737b8efbe32194b5d16"
  },
  {
    "url": "assets/js/11.44b4bf04.js",
    "revision": "6dd39d34935672eb1c4d2ce4d6d1dc3f"
  },
  {
    "url": "assets/js/12.223e7852.js",
    "revision": "940a035af51bb7f11c0af29ce4aa4f0e"
  },
  {
    "url": "assets/js/13.119600f8.js",
    "revision": "50d856a8c884b1d10f8919873dde6680"
  },
  {
    "url": "assets/js/14.6ea8ad17.js",
    "revision": "5901a56c82bdbbe137718fbbc3ef7328"
  },
  {
    "url": "assets/js/15.bc3877d9.js",
    "revision": "f9c62f2f31f7652491db98d1f3ffa38f"
  },
  {
    "url": "assets/js/16.b78e0297.js",
    "revision": "cd2dc6616ad74dc79f08725da0b3120e"
  },
  {
    "url": "assets/js/17.412fc907.js",
    "revision": "7f6f0d415e76fb23ff1885675ec2911a"
  },
  {
    "url": "assets/js/18.1bb9bba0.js",
    "revision": "fee3bfec3ca0b394f6423d884e818629"
  },
  {
    "url": "assets/js/19.6ab98531.js",
    "revision": "b74044a6eaead7f5c90b8b6f796accb7"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.1934ffb2.js",
    "revision": "5ec9009aab8eb8cac187242b715db376"
  },
  {
    "url": "assets/js/21.c1b834a3.js",
    "revision": "9bfb48fb7397fc63b23478a0f5a1279d"
  },
  {
    "url": "assets/js/22.048af009.js",
    "revision": "f5285ea21c11eb8daed24e3855482bc7"
  },
  {
    "url": "assets/js/23.71383d65.js",
    "revision": "a50bed72c2e4d3be2475de08336a8954"
  },
  {
    "url": "assets/js/24.4ca016e0.js",
    "revision": "b2d370a36d0a5c0cecea476949cbc87c"
  },
  {
    "url": "assets/js/25.9c93a42b.js",
    "revision": "0e2829483d53b44010b4353a4826a1e3"
  },
  {
    "url": "assets/js/26.5d122e14.js",
    "revision": "b5a316b28067517e0371b485770ddf97"
  },
  {
    "url": "assets/js/27.5ed61c14.js",
    "revision": "3ab4ccefa23addbc2f236e8d23d54306"
  },
  {
    "url": "assets/js/28.ba522461.js",
    "revision": "a64eb44fc26686c642a7d50a5c1823a5"
  },
  {
    "url": "assets/js/29.470ea5e0.js",
    "revision": "6103a00a4e746f38c883161c5d546d65"
  },
  {
    "url": "assets/js/3.db377b69.js",
    "revision": "33771c63d4b805ea6dc0be2d88d27fe8"
  },
  {
    "url": "assets/js/30.04f21a00.js",
    "revision": "32b6abaf480c668e2eb38f8db6d79214"
  },
  {
    "url": "assets/js/31.4afce0dd.js",
    "revision": "5347e42b533af8bafc18d70a1d5e7ae7"
  },
  {
    "url": "assets/js/32.1221de58.js",
    "revision": "709a43ced5aad298f5fe0112464433d5"
  },
  {
    "url": "assets/js/33.7c9c6eaf.js",
    "revision": "140a0069a5aed1eeacd85ffda8986f32"
  },
  {
    "url": "assets/js/34.b91e5d64.js",
    "revision": "2472af52736f6d31f20316c64500294d"
  },
  {
    "url": "assets/js/4.98419bbc.js",
    "revision": "daf77436081263338a71bf84a4ab9015"
  },
  {
    "url": "assets/js/5.3ced6ce5.js",
    "revision": "7e6bf8a82af7be1644154ca10f093c9c"
  },
  {
    "url": "assets/js/6.f987e03c.js",
    "revision": "76e4716e35977b96270a5ef2286d32f5"
  },
  {
    "url": "assets/js/7.761c82d4.js",
    "revision": "08eaa063af8510cd9dddb8f4cbb81d4f"
  },
  {
    "url": "assets/js/8.5e14fe72.js",
    "revision": "628039d4670fe9c40ad3dd227cbe44b4"
  },
  {
    "url": "assets/js/9.a060d641.js",
    "revision": "bb9dc5ea570be30b957ecc429ccf55a0"
  },
  {
    "url": "assets/js/app.0933967a.js",
    "revision": "394c272e9e794319ee25ba8bb053613d"
  },
  {
    "url": "blog/first.html",
    "revision": "74334ee4ea5af1fe1bd417cb7ca33f54"
  },
  {
    "url": "blog/index.html",
    "revision": "e28626bbe9a8ffeb3da211b14ad91013"
  },
  {
    "url": "guide/assets.html",
    "revision": "3f7ee633ab7adbc8c3254b33523ed6c5"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "c4531e89489904baa24c957eb7531f78"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "b9d8db95602efb47d9cf5509d23d6988"
  },
  {
    "url": "guide/deploy.html",
    "revision": "4e882ba6d5b774b2d91615471bfd914c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "382f2205c147ff447e7fdb5c5471f73e"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c2e2b1454031903707cf9ad3fe70e0ea"
  },
  {
    "url": "guide/index.html",
    "revision": "cc2515cc8ab1dafa6f4a1ab809e514f0"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b030102e8cf8f6cb3113a7d081017caa"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "dc8215ec3f005b77d0482c320a10bb85"
  },
  {
    "url": "hero.png",
    "revision": "aefc3df39e2ab3a590bf18a46709d4b6"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "e04d66064ec598ca523a10bbe26cf3cd"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "personalprofile/index.html",
    "revision": "64d321716fa0df36ffb1f9d712144c14"
  },
  {
    "url": "recommend/index.html",
    "revision": "0a07341169ece4c34717e740253407fc"
  },
  {
    "url": "work/index.html",
    "revision": "65f8dd4c68dcb43e69b5369cba98627d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d4a4b344733e76a63e6c6fd680b93bbf"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "3d802a6bff9d0d9412de0317ea4c4173"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "288ba0514307a452fb70728753bd70b8"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "7c908a4836b207bd0804cc457a1f7ff2"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "74fed965d4f922fafbb3f45bf09ff6a1"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e2ff15e65087a806d5004e2217fb8cf3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "c56b919eeb60464a176ec8caeb860d81"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0326b9a45741e543c0ead3cb1182addd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5945e96ac0a9e1e62ede75985d80ddf2"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "9d4edbc1133fb12484f3c96a3ea428d6"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "b5acbacd0104166d0b285caf2d3415c9"
  },
  {
    "url": "zh/index.html",
    "revision": "eaca1524027a93895f7b7daf6b739706"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
