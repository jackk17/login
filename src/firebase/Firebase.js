//import firebase from 'firebase/app'

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyCxHGjgmWQh-nmRlIVAddWEhq-HLJNkb3E",
  
    authDomain: "reactlogin-c616c.firebaseapp.com",
  
    databaseURL: "https://reactlogin-c616c-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "reactlogin-c616c",
  
    storageBucket: "reactlogin-c616c.appspot.com",
  
    messagingSenderId: "579270086710",
  
    appId: "1:579270086710:web:2f12b82d3ea1df30b04897",
  
    measurementId: "G-55G9PRZ859"
  
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  //export default {firebase}