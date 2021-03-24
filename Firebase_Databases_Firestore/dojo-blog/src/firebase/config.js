import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC69Cq3Hhdrq4f78DK4HvJIGhTwTMn7YVc",
  authDomain: "fir-site-3af20.firebaseapp.com",
  projectId: "fir-site-3af20",
  storageBucket: "fir-site-3af20.appspot.com",
  messagingSenderId: "326687482030",
  appId: "1:326687482030:web:e1683f5aa216f314b40d3f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export default projectFirestore;
