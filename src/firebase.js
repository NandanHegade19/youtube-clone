import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLXNflqEiZv_jBLg5vMyxXUBMvCSoD6S8",
    authDomain: "clone-8a536.firebaseapp.com",
    databaseURL: "https://clone-8a536.firebaseio.com",
    projectId: "clone-8a536",
    storageBucket: "clone-8a536.appspot.com",
    messagingSenderId: "639546997220",
    appId: "1:639546997220:web:be63d4e512ec565a92aff1"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export {db, auth, storage};