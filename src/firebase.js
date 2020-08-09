import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB-FT80xpEw4AHzEgLwLoUG2YYg7xRJjH4",
    authDomain: "vue-chat-471b2.firebaseapp.com",
    databaseURL: "https://vue-chat-471b2.firebaseio.com",
    projectId: "vue-chat-471b2",
    storageBucket: "vue-chat-471b2.appspot.com",
    messagingSenderId: "30403183652",
    appId: "1:30403183652:web:9dbbbc40715a2db22484b1"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();