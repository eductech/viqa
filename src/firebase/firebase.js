import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCqWPrZCoSEesWgu-fXaOvCetW2XfDVZyg",
  authDomain: "viqa-2340a.firebaseapp.com",
  databaseURL: "https://viqa-2340a.firebaseio.com",
  projectId: "viqa-2340a",
  storageBucket: "viqa-2340a.appspot.com",
  messagingSenderId: "638608360193"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};
