import * as firebase from 'firebase';

const config =  {
    apiKey: "AIzaSyC1mTDLDqjgz1dkyF2RsSmy6wCPPSzd8w0",
    authDomain: "project-55731.firebaseapp.com",
    databaseURL: "https://project-55731.firebaseio.com",
    projectId: "project-55731",
    storageBucket: "project-55731.appspot.com",
    messagingSenderId: "487845670140"
  };
export const firebaseApp = firebase.initializeApp(config);
export const database = firebase.database();