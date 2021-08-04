// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDg1uaX5OaXpj1Dw3_4huafn5eCzsW3paY",
  authDomain: "news-feed-1986.firebaseapp.com",
  projectId: "news-feed-1986",
  storageBucket: "news-feed-1986.appspot.com",
  messagingSenderId: "99575109283",
  databaseURL:
    "https://news-feed-1986-default-rtdb.asia-southeast1.firebasedatabase.app/",
  appId: "1:99575109283:web:eb9715c9c95e44a93c9116"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
