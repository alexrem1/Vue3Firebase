import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCGQOFOnlYOv1GsxHoIamgocEC_dKzAoU",
  authDomain: "muso-ninjas-f4256.firebaseapp.com",
  projectId: "muso-ninjas-f4256",
  storageBucket: "muso-ninjas-f4256.appspot.com",
  messagingSenderId: "259526558779",
  appId: "1:259526558779:web:b1ceeac0632d30b4c9481e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
firebase.firestore().settings({ experimentalForceLongPolling: true });

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
