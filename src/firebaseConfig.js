import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-rusG4R-skFCbv8Cx9c8VTyqfxTx4z04",
    authDomain: "facebook-8fe9e.firebaseapp.com",
    databaseURL: "https://facebook-8fe9e.firebaseio.com",
    projectId: "facebook-8fe9e",
    storageBucket: "facebook-8fe9e.appspot.com",
    messagingSenderId: "175815585322",
    appId: "1:175815585322:web:02ab195db7d67c6295dd53",
    measurementId: "G-T1FZRRJBH8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); // for google login service

  export { auth, provider };
  export default db;