import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESS,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
});

const db = firebaseApp.firestore();
export default db;
