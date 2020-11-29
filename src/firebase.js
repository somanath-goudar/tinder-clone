import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnIHoTMy5NZDgwhtTsIt0csl6xicvDa34",
  authDomain: "tinder-clone-a9033.firebaseapp.com",
  databaseURL: "https://tinder-clone-a9033.firebaseio.com",
  projectId: "tinder-clone-a9033",
  storageBucket: "tinder-clone-a9033.appspot.com",
  messagingSenderId: "577159656855",
  appId: "1:577159656855:web:94adf4984c6117f55040d2",
  measurementId: "G-5NSRHWBLDJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
