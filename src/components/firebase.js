import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJ4oV3M04QkgM30rYKnSPcvTXPpGQaFrA",
  authDomain: "talkies-34abd.firebaseapp.com",
  databaseURL: "https://talkies-34abd.firebaseio.com",
  projectId: "talkies-34abd",
  storageBucket: "talkies-34abd.appspot.com",
  messagingSenderId: "418677547731",
  appId: "1:418677547731:web:4903efb50dc10240596a26",
  measurementId: "G-PM9RSC9TJJ",
});

const db = firebaseApp.firestore();
export default db;
