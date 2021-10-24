import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBNVVM5VbcP2poUO2oI6kEPA6ERM5ActRc",
    authDomain: "olxdemo-4f52e.firebaseapp.com",
    projectId: "olxdemo-4f52e",
    storageBucket: "olxdemo-4f52e.appspot.com",
    messagingSenderId: "32280523911",
    appId: "1:32280523911:web:70c743a9dd34332ac97422",
    measurementId: "G-5ENHTTLGC1"
  };

export default firebase.initializeApp(firebaseConfig)