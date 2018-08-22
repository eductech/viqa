import { firebase, googleAuthProvider, githubAuthProvider } from "../firebase/firebase";

// email and password authentication
export const startCreateUserWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
};

export const startSignInWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
};

// google authentication
export const startSignInWithGoogleProvider = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
} 

// github authentication
export const startSignInWithGitHubProvider = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
  }
} 

// sign out
export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const startSignOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};