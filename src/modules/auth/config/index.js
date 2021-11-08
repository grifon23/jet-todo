import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFoZcseV8jFEwJ9nqfK-Np5hUGNZNwrn0",
  authDomain: "example-d660c.firebaseapp.com",
  projectId: "example-d660c",
  storageBucket: "example-d660c.appspot.com",
  messagingSenderId: "505323313652",
  appId: "1:505323313652:web:3b452730774b8c78a781a1",
};

export const app = firebase.initializeApp(firebaseConfig);
