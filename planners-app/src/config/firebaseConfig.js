import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore(); //.settings({timestampsInSnapshots: true})

export default firebase