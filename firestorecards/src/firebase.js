import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3yFnkcv5pw28UoP25HiXeXPwTX-UAG8w",
    authDomain: "api-resource-dev.firebaseapp.com",
    projectId: "api-resource-dev",
    storageBucket: "api-resource-dev.appspot.com",
    messagingSenderId: "806647119220",
    appId: "1:806647119220:web:1df63540408bfc0b9e8021"
  };

//initialize firebase

firebase.initializeApp(firebaseConfig);

export default firebase;