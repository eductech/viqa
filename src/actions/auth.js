import { firebase } from "../firebase/firebase";

// email and password authentication
export const startCreateUserWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
};

export const stertSignInWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
};

// google authentication


// github authentication
