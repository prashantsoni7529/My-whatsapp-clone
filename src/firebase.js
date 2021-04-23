import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWk_GzB1LDAgpnKNDKdY_sDg0sKyseHEo",
    authDomain: "whatsapp-clone-7e228.firebaseapp.com",
    projectId: "whatsapp-clone-7e228",
    storageBucket: "whatsapp-clone-7e228.appspot.com",
    messagingSenderId: "637138517471",
    appId: "1:637138517471:web:c0383d73f0bbe9c758586a",
    measurementId: "G-N7CESFVNN4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
