import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4O__Fmij67LsMke47JmgRj2hjRqvXZuo",
  authDomain: "live-chatroom-c0ad4.firebaseapp.com",
  projectId: "live-chatroom-c0ad4",
  storageBucket: "live-chatroom-c0ad4.appspot.com",
  messagingSenderId: "1017912490899",
  appId: "1:1017912490899:web:8e4bc4f0f14deb0203c666",
};

// init firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
