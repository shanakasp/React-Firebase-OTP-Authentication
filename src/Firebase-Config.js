import firebase from 'firebase/app';
import "firebase/auth"; // Importing the authentication service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmmdu_VMfa2qi7an1vq_vDhjtvG4s0D04",
  authDomain: "react-phonenumber-auth-88156.firebaseapp.com",
  projectId: "react-phonenumber-auth-88156",
  storageBucket: "react-phonenumber-auth-88156.appspot.com",
  messagingSenderId: "32904507443",
  appId: "1:32904507443:web:9ac915ebb3a0327fb7f346",

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
