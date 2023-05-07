import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0_9vpWJdvT-u7Ce3IrVuwxpa-Ud6wMW8",
  authDomain: "disneyplus-clone-d00af.firebaseapp.com",
  projectId: "disneyplus-clone-d00af",
  storageBucket: "disneyplus-clone-d00af.appspot.com",
  messagingSenderId: "190012516490",
  appId: "1:190012516490:web:9c77c917252a570d65e573",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
