if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const f=e=>s(e,n),r={module:{uri:n},exports:t,require:f};a[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/VV4EF38FdTZ8iLi6GefnI/_buildManifest.js",revision:"7d6916bc7c7af1387ed165dc49aa3609"},{url:"/_next/static/VV4EF38FdTZ8iLi6GefnI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/66-e474372c98c41401.js",revision:"e474372c98c41401"},{url:"/_next/static/chunks/893-c143561eeb2a17f8.js",revision:"c143561eeb2a17f8"},{url:"/_next/static/chunks/main-4a261285dff1b9ac.js",revision:"4a261285dff1b9ac"},{url:"/_next/static/chunks/pages/_app-1951b6ae93566ddb.js",revision:"1951b6ae93566ddb"},{url:"/_next/static/chunks/pages/_error-c0ec4b4a9c6ac069.js",revision:"c0ec4b4a9c6ac069"},{url:"/_next/static/chunks/pages/home-875f3e6d00295a1d.js",revision:"875f3e6d00295a1d"},{url:"/_next/static/chunks/pages/index-5ae3362b63a21770.js",revision:"5ae3362b63a21770"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/3e1fb17181264ab7.css",revision:"3e1fb17181264ab7"},{url:"/_next/static/media/4566239e8b75c436-s.p.woff2",revision:"6cb7b1b6200b4da2818d5282be8a8200"},{url:"/_next/static/media/530214ed610d7220-s.p.woff2",revision:"3daf9f1f18e2374a84bff0a111863b22"},{url:"/_next/static/media/55bdc5ec492c5eea-s.p.woff2",revision:"138ec9825943fe8aac28ae18b2a65bcf"},{url:"/_next/static/media/777278f01e4ea19a-s.p.woff2",revision:"6c83c583818c079d0d90e2a6ce46f644"},{url:"/_next/static/media/80a86e80fb7da456-s.p.woff2",revision:"7f1ec928dcd11d387fa857f91be006e5"},{url:"/_next/static/media/9108e8f15a21a443-s.p.woff2",revision:"6c3cfafbc74a4e34143fb8ab0f2d204d"},{url:"/_next/static/media/b0812b202c05ab53-s.p.woff2",revision:"710f88ea3f1c123602a30d3acdde74d0"},{url:"/_next/static/media/be158f80b5f4ec06-s.p.woff2",revision:"43175c048cdface37ecb81a8816c1883"},{url:"/_next/static/media/c0ba0a664b4b6f20-s.p.woff2",revision:"8203aee21006d82cb2aaa7d4c7556551"},{url:"/_next/static/media/c40c7277063db1b9-s.p.woff2",revision:"1826054539d6e8181ac3f4bfb68401f8"},{url:"/_next/static/media/c9dc5612607edc0e-s.p.woff2",revision:"a93fca41afafe062cbcbc540f4964d7a"},{url:"/_next/static/media/db343b2497640ee1-s.p.woff2",revision:"a74077fa2495d475bbce8935c1da777c"},{url:"/_next/static/media/f8c32fd3a03b9130-s.p.woff2",revision:"14b269cc3fabea5a8aeb453d800c5b9b"},{url:"/_next/static/media/fafd25c083e40144-s.p.woff2",revision:"59d4ec95d2371086a58441b870bc0b9f"},{url:"/browserconfig.xml",revision:"36f0dab8af1455f218722e699a6014f8"},{url:"/favicon/android-chrome-96x96.png",revision:"9efa58629f2060b7b3d84fb57c34425f"},{url:"/favicon/apple-touch-icon.png",revision:"37601c956f4058211e24df9bebd8a593"},{url:"/favicon/favicon-16x16.png",revision:"6d1ccc6f03a1bfab3d6d2e4a748c031b"},{url:"/favicon/favicon-32x32.png",revision:"703abc740b36863d92671abc711ffb2d"},{url:"/favicon/favicon.ico",revision:"d9c0591b94d150966a1a8ebc800e5bf9"},{url:"/favicon/mstile-150x150.png",revision:"c6c99e23d67ffa839523be4fab08f4dc"},{url:"/favicon/og-image.jpg",revision:"55e22a34b0812dff3bab65bae9226b3f"},{url:"/favicon/safari-pinned-tab.svg",revision:"48edba9a864ae331258f766643d03129"},{url:"/favicon/site.webmanifest",revision:"dbaad73daaf1598364a68a9927a2b00a"},{url:"/images/1.png",revision:"736cd21a85d1e1f62fca374da4a1c313"},{url:"/images/2.png",revision:"f5cf252a12c9ba016027d18648ca2e48"},{url:"/images/bear.png",revision:"b1558158ea5c373d7d023c855d5169e7"},{url:"/images/blue.png",revision:"263db72e8c64ea1bfc51bfe441790adb"},{url:"/images/pink.png",revision:"15c1f42ce420eb06e393d5f5b0bab06c"},{url:"/images/purple.png",revision:"d2ef57b5ecba1a88792f75bcfeb3850a"},{url:"/images/red.png",revision:"993bb68523bda959bc4b2cc4cb51c8cd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
