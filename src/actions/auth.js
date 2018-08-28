import { firebase, googleAuthProvider, githubAuthProvider } from "../firebase/firebase";

// email and password authentication
export const startCreateUserWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
      alert(err.message);
    });
  }
};

export const startSignInWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
      alert(err.message);
    });
  }
};

// provider authentication
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

// SIGN_OUT
export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const startSignOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

// Handling account-exists-with-different-credential Errors
const handleAcountExistsWithDifferentCredentialError = (err, dispatch) => {
  var pendingCred = err.credential;
  var email = err.email;
  firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
    if (methods[0] === 'password') {
      var password = '14011993'; // TODO: implement promptUserForPassword.
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        // read about this function
        return user.link(pendingCred);
      }).then(() => {
        // Google account successfully linked to the existing Firebase user.
      });
      return;
    }
    var provider = (methods.indexOf("google.com") > -1) ? googleAuthProvider : githubAuthProvider;
    dispatch(addPendingCredInfo({provider, pendingCred}));
  });
};

// ADD_PENDING_CRED_INFO
export const addPendingCredInfo = ({provider, pendingCred}) => {
  return {
    type: 'ADD_PENDING_CRED_INFO',
    pendingCredInfo: {
      provider,
      pendingCred
    }
  }
}

// REMOVE_PENDING_CRED_INFO
export const removePendingCredInfo = () => {
  return {
    type: 'REMOVE_PENDING_CRED_INFO'
  }
}