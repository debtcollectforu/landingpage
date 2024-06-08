// // src/firebaseConfig.js
// import firebase from 'firebase/app';
// import 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyANJu8JiS3piaO5X6yX-kGetJ3w4hYZl8w",
//     authDomain: "debtcoll-6b4cb.firebaseapp.com",
//     projectId: "debtcoll-6b4cb",
//     storageBucket: "debtcoll-6b4cb.appspot.com",
//     messagingSenderId: "531943483808",
//     appId: "1:531943483808:web:2dc4633c383cd60e34dcc5",
//     measurementId: "G-YBLZN6SQX6"
//   };
  

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export { storage, firebase as default };


// src/Components/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyANJu8JiS3piaO5X6yX-kGetJ3w4hYZl8w",
    authDomain: "debtcoll-6b4cb.firebaseapp.com",
    projectId: "debtcoll-6b4cb",
    storageBucket: "debtcoll-6b4cb.appspot.com",
    messagingSenderId: "531943483808",
    appId: "1:531943483808:web:2dc4633c383cd60e34dcc5",
    measurementId: "G-YBLZN6SQX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
const storage = getStorage(app);

export { storage, app as default };
