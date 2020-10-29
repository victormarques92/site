import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDrUe6SdT4mDQ_wWIRjFfKluZg6NN_k7a0',
    authDomain: 'victormarques-d6cb6.firebaseapp.com',
    databaseURL: 'https://victormarques-d6cb6.firebaseio.com',
    projectId: 'victormarques-d6cb6',
    storageBucket: 'victormarques-d6cb6.appspot.com',
    messagingSenderId: '838700167441',
    appId: '1:838700167441:web:07a1219adbfff8477edcb0',
};

firebase.initializeApp(config);

export default firebase;
