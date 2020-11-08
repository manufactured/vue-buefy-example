import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyALTKNA55xKcYkk13Aj06Xy_oUSgPizVf0",
  authDomain: "vue-buefy-example.firebaseapp.com",
  databaseURL: "https://vue-buefy-example.firebaseio.com",
  projectId: "vue-buefy-example",
  storageBucket: "vue-buefy-example.appspot.com",
  messagingSenderId: "148104068163",
  appId: "1:148104068163:web:5dda20a4f6427a3eaae8f6"
});

const auth = firebase.auth;
const firestore = firebase.firestore;
const db = firebase.firestore();

export { auth, firestore, db };
