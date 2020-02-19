import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6HCTlasesdLPxaOIx48UoDq-45X1JsEM",
  authDomain: "crwn-db-499b4.firebaseapp.com",
  databaseURL: "https://crwn-db-499b4.firebaseio.com",
  projectId: "crwn-db-499b4",
  storageBucket: "crwn-db-499b4.appspot.com",
  messagingSenderId: "1002292478632",
  appId: "1:1002292478632:web:7b362a4d4f800731ffb89d",
  measurementId: "G-PWX3FZM5SL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;