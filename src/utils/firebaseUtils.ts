import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvnoGtNHOmbuKNJdEDAI8J3imQMjwm5mY',
  authDomain: 'trevi-5f3a9.firebaseapp.com',
  databaseURL: 'https://trevi-5f3a9.firebaseio.com',
  projectId: 'trevi-5f3a9',
  storageBucket: '',
  messagingSenderId: '676972806236',
  appId: '1:676972806236:web:3c7e5898a7a6a8e6',
};

export const fire = () => {
  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(config);
  }
};

export const getFireDB = () => {
  return firebase.database().ref('/').once('value');
};
