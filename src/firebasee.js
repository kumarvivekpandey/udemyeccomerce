import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCJYOwNexdcWEdQqCl6NCCMMDv-EaRRxvE",
  authDomain: "apnidukaan-b6a9c.firebaseapp.com",
  projectId: "apnidukaan-b6a9c",
  storageBucket: "apnidukaan-b6a9c.appspot.com",
  messagingSenderId: "1081823477939",
  appId: "1:1081823477939:web:a43d52634bb9dfcfaef0c6",
  measurementId: "G-J6DWMXL8PP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

