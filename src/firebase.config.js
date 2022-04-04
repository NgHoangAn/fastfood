import { getApp, getApps, initializeApp } from 'firebase/app'

import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGjqhTA0eGI254WpJ3zzXWT043EHFvTGI",
    authDomain: "restaurant-584d5.firebaseapp.com",
    databaseURL: "https://restaurant-584d5-default-rtdb.firebaseio.com",
    projectId: "restaurant-584d5",
    storageBucket: "restaurant-584d5.appspot.com",
    messagingSenderId: "918919771859",
    appId: "1:918919771859:web:bfdc018278f03e47eb0626"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
