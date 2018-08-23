import { firebase, googleAuthProvider, githubAuthProvider } from "../firebase/firebase";
import { showAuthorizationModal } from "../actions/sessionSettingsActions";

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
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => {
        dispatch(showAuthorizationModal(false))
      });
  }
} 

// github authentication
export const startSignInWithGitHubProvider = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(githubAuthProvider).catch((err) => {
      if (err.code === 'auth/account-exists-with-different-credential') {
        handleAcountExistsWithDifferentCredentialError(err)
      }
    }).finally(
      () => {
        dispatch(showAuthorizationModal(false))
      }
    )
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

// Handling account-exists-with-different-credential Errors
const handleAcountExistsWithDifferentCredentialError = (err) => {
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
    // TODO: implement getProviderForProviderId.
    var provider = googleAuthProvider;
    return;
    firebase.auth().signInWithPopup(provider).then((result) => {
      result.user.linkAndRetrieveDataWithCredential(pendingCred).then((usercred) => {
        // Google account successfully linked to the existing Firebase user.
        // goToApp();
      });
    });
  });
};
