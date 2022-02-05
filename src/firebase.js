import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA770UA4nzWY55ylvQidHFt2M8xy59TcfM',
  authDomain: 'rt-disney-clone.firebaseapp.com',
  projectId: 'rt-disney-clone',
  storageBucket: 'rt-disney-clone.appspot.com',
  messagingSenderId: '522766861755',
  appId: '1:522766861755:web:d00b33cd1f8beef652b09e',
  measurementId: 'G-56W624RG6L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
