import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCg6wdfyIs-6HsUOChCl2u7Yqoq5ilqwnQ",
  authDomain: "react-planners-app.firebaseapp.com",
  projectId: "react-planners-app",
  storageBucket: "react-planners-app.appspot.com",
  messagingSenderId: "86166241723",
  appId: "1:86166241723:web:45c76a0a6cbe6ec97e049e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore(); //.settings({timestampsInSnapshots: true})

export default firebase