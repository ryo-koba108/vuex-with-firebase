import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCv0Y15BWou24vbJA_IYRzvbP8FNJwVcyc",
  authDomain: "vue-app-with-firebase-a61f4.firebaseapp.com",
  databaseURL: "https://vue-app-with-firebase-a61f4.firebaseio.com",
  projectId: "vue-app-with-firebase-a61f4",
  storageBucket: "vue-app-with-firebase-a61f4.appspot.com",
  messagingSenderId: "398985111689",
  appId: "1:398985111689:web:fa11365ae127c355b17e58",
  measurementId: "G-5604PFXF9C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbChannels = db.collection('channels');

export const getCollectionMessages = (channelId) => {
  return db.collection(`channels/${channelId}/messages`);
};