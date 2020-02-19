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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;