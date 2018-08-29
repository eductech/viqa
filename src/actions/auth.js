import { firebase, googleAuthProvider, githubAuthProvider } from "../firebase/firebase";

// SIGN IN
// 1. email and password authentication
//   1.1 email and password sign up
//   1.2 email and password sign in
// 2. provider authentication
// 3. SIGN_IN
// 4. handling account-exists-with-different-credential error
// 5. ADD_PENDING_CRED_INFO
// 6. REMOVE_PENDING_CRED_INFO
//
// SIGN OUT
// 7. firebase sign out
// 8. SIGN_OUT

// 1.   email and password authentication
// 1.1  email and password sign up
export const startCreateUserWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
      alert(err.message);
    }).catch((err) => {
      alert(err.message);
    });
  }
};

// 1.2 email and password sign in
export const startSignInWithEmailAndPassword = (email, password, pendingCredInfo) => {
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      if (pendingCredInfo) {
        user.linkAndRetrieveDataWithCredential(pendingCredInfo.pendingCred).then(() => {
          dispatch(removePendingCredInfo())
        });
      }
    }).catch((err) => {
      alert(err.message);
    });
  }
};

// 2. provider authentication
export const startSignInWithProvider = (provider, pendingCredInfo) => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(provider).then((userCred) => {
      if (pendingCredInfo) {
        userCred.user.linkAndRetrieveDataWithCredential(pendingCredInfo.pendingCred).then(() => {
          dispatch(removePendingCredInfo())
        });
      }
    }).catch((err) => {
      if (err.code === 'auth/account-exists-with-different-credential') {
        handleAcountExistsWithDifferentCredentialError(err, dispatch)
      } else {
        alert(err.message);
      }
    });
  }
}

// 3. SIGN_IN
export const signIn = (uid) => {
  return {
    type: 'SIGN_IN',
    uid
  }
}

// 4. handling account-exists-with-different-credential error
const handleAcountExistsWithDifferentCredentialError = (err, dispatch) => {
  var pendingCred = err.credential;
  var email = err.email;
  firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
    if (methods[0] === 'password') {
      dispatch(addPendingCredInfo({email, pendingCred}));
      return;
    }
    var provider = (methods.indexOf("google.com") > -1) ? googleAuthProvider : githubAuthProvider;
    dispatch(addPendingCredInfo({provider, pendingCred}));
  });
};

// 5. ADD_PENDING_CRED_INFO
export const addPendingCredInfo = ({email, provider, pendingCred}) => {
  return {
    type: 'ADD_PENDING_CRED_INFO',
    pendingCredInfo: {
      email,
      provider,
      pendingCred
    }
  }
}

// 6. REMOVE_PENDING_CRED_INFO
export const removePendingCredInfo = () => {
  return {
    type: 'REMOVE_PENDING_CRED_INFO'
  }
}

// 7. firebase sign out
export const startSignOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

// 8. SIGN_OUT
export const signOut = () => ({
  type: 'SIGN_OUT'
});
