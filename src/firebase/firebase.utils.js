import * as firebase from "firebase";

import "firebase/firebase-firestore";

import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyAhNSJ2SHiaz0upvFjURDF-wytNzE_Sd60",
  authDomain: "e-volve-80dcc.firebaseapp.com",
  databaseURL: "https://e-volve-80dcc.firebaseio.com",
  projectId: "e-volve-80dcc",
  storageBucket: "e-volve-80dcc.appspot.com",
  messagingSenderId: "542587852690",
  appId: "1:542587852690:web:a77cea9ed1f15741e6934b",
  measurementId: "G-M1NYLZ5CJJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
