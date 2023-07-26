import firebase from 'firebase/app';
import "firebase/auth"; // Importing the authentication service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "*",
  authDomain: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*",

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
