// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import  firebase from  'firebase/compat/app';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBqvOIfHEUc415UIf0f8VxHfSNaKs7rdQQ",
    authDomain: "tinder-clone-f2493.firebaseapp.com",
    projectId: "tinder-clone-f2493",
    storageBucket: "tinder-clone-f2493.appspot.com",
    messagingSenderId: "902565879913",
    appId: "1:902565879913:web:1a687f6f275e5c7d7802f8",
    measurementId: "G-YJDQ85902C"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();
  export default database;
