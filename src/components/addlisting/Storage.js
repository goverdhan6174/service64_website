import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBhs-DRUqpIZIbu6XDUcP7Z06zYz2HH_Yo",
  authDomain: "service64-97623.firebaseapp.com",
  databaseURL: "https://service64-97623.firebaseio.com",
  projectId: "service64-97623",
  storageBucket: "service64-97623.appspot.com",
  messagingSenderId: "775131201437",
  appId: "1:775131201437:web:ea02797349395beba53974",
  measurementId: "G-3NNTTSG0SX"
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBakSwWDH3fEl6BLUolAjiGYhEtZRbj6Cg",
//   authDomain: "service64-bb245.firebaseapp.com",
//   databaseURL: "https://service64-bb245.firebaseio.com",
//   projectId: "service64-bb245",
//   storageBucket: "service64-bb245.appspot.com",
//   messagingSenderId: "181941916281",
//   appId: "1:181941916281:web:4985b2a4e24094952bfaa8",
//   measurementId: "G-KP0YPZQQW2"
// };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
