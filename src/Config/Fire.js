import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLe-q7X8yUIDN1PUTQ9fkJQvuaE--YNRU",
  authDomain: "react-blog-8fea6.firebaseapp.com",
  projectId: "react-blog-8fea6",
  storageBucket: "react-blog-8fea6.appspot.com",
  messagingSenderId: "729254901736",
  appId: "1:729254901736:web:bd7d59ad52eda772ed165d",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();

export default firebase;
