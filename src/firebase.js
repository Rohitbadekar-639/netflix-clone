import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJoz89efcQv33bL_4t_CQNi0gKi6crZ0Q",  
    authDomain: "netflix-clone-c0cf6.firebaseapp.com",
    projectId: "netflix-clone-c0cf6",
    storageBucket: "netflix-clone-c0cf6.appspot.com",
    messagingSenderId: "205938129121",
    appId: "1:205938129121:web:c1c237f01108527b50dfa0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

