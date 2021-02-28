import firebase from "firebase/app";
import "firebase/database"

const config = {
    apiKey: "AIzaSyC-PJkIrYmd1KhD5bO3aSntU28T1VdvURQ",
    authDomain: "vuefirechat-aec15.firebaseapp.com",
    projectId: "vuefirechat-aec15",
    storageBucket: "vuefirechat-aec15.appspot.com",
    messagingSenderId: "620622147666",
    appId: "1:620622147666:web:2fe0fed38d74e87fdeaf8b"
}

const db = firebase.initializeApp(config);
export default db;