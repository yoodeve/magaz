import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCB3ub5RTTZ5kYVJKmnRW-STkhotCkO3NE",
  authDomain: "image-community-7a32f.firebaseapp.com",
  projectId: "image-community-7a32f",
  storageBucket: "image-community-7a32f.appspot.com",
  messagingSenderId: "844011384986",
  appId: "1:844011384986:web:1acba65e66bc8264a76f23",
  measurementId: "G-YQM06Y3NQ5"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};