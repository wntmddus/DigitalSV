import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDPpZV6ufCWiUbiRk_dp0NrAWo7-akHX48',
    authDomain: 'svdigital-ed7d2.firebaseapp.com',
    databaseURL: 'https://svdigital-ed7d2.firebaseio.com',
    projectId: 'svdigital-ed7d2',
    storageBucket: 'svdigital-ed7d2.appspot.com',
    messagingSenderId: '863600410672',
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;