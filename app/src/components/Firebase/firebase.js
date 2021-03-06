import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  getExampleRef = () => {
    var ref = this.db.ref();
    var hash = window.location.hash.replace(/#/g, '');
    if (hash) {
      ref = ref.child(hash);
    } else {
      ref = ref.push(); // generate unique location.
      window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
      console.log('Firebase data: ', ref.toString());
    }
    return ref;
  }

  initFirepad = () => {
    //// Get Firebase Database reference.
    var firepadRef = this.getExampleRef();

    //// Create CodeMirror (with line numbers and the JavaScript mode).
    var codeMirror = global.CodeMirror(document.getElementById('firepad-container'), {
      lineNumbers: true,
      mode: 'pml'
    });

    //// Create Firepad.
    global.firepad = global.Firepad.fromCodeMirror(firepadRef, codeMirror, {
      defaultText: "This is a @person. It can also have a role like @observer:jimi\n\nDates are used as follows: &29-12-2019\n\n[-] Un task care este asignat lui @elisei care trebuie finalizat pana pe &13-01-2019\n\n[-] Aici il avem asignat pe @reviewer:jimi\n\telisei >>> Un comentariu\n\jimi >>> Alt comentariu \n      dar pe mai multe \n      linii",
      richTextShortcuts: true,
    });
  }

}



export default Firebase;
