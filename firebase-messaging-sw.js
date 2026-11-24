importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyD-ACBznqdwv_5SiFdO32ii_SSSTFSVqAc',authDomain:'right-on-pos.firebaseapp.com',projectId:'right-on-pos',messagingSenderId:'159713993799',appId:'1:159713993799:web:39210634f514f9c91b7d62'});
firebase.messaging();
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws){if(w.url.indexOf('/kintai/')>=0&&'focus' in w)return w.focus();}return clients.openWindow('./');}));});
