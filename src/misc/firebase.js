import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCwSCZi0QVI7hOuN1czWK2WpSmg7xa7JXc",
    authDomain: "telegram-clone-64646.firebaseapp.com",
    databaseURL: "https://telegram-clone-64646.firebaseio.com",
    projectId: "telegram-clone-64646",
    storageBucket: "telegram-clone-64646.appspot.com",
    messagingSenderId: "545137159103",
    appId: "1:545137159103:web:1619c6abb14eb2aca5cf0a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, googleProvider };
export default db;