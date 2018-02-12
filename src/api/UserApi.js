import firebase from 'firebase';
import app from './firebase/firebase';

let auth = firebase.auth();
let database = firebase.database();

export default class UserApi {

  static signUp(user) {
    return auth.createUserWithEmailAndPassword(user.email, user.password)
               .then(response => {
                 return this.createDBUser(user, response.id).then(response => user.id);
               }).catch(error => error);
  }

  static createDBUser(user, id) {
    return database.ref('users/' + id)
                   .set(user)
                   .then(response => response)
                   .catch(error => error);
  }

  static signIn(user) {
    return auth.signInWithEmailAndPassword(user.email, user.password)
               .then(response => response)
               .catch(error => error);
  }

  static recoverPassword(user) {
    return auth.sendPasswordResetEmail(user.email)
               .then(response => response);
  }
}
