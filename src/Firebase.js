import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyD6KbhJzxErDvQlAOerJnBrbQx2qmtEoHA",
    authDomain: "color-text-game.firebaseapp.com",
    projectId: "color-text-game",
    storageBucket: "color-text-game.appspot.com",
    messagingSenderId: "968792805518"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};