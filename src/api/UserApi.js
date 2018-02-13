import firebase from 'firebase';
import app from './firebase/firebase';

let auth = firebase.auth();
let database = firebase.database();

export default class UserApi {

  static signUp(userData) {
    return auth.createUserWithEmailAndPassword(userData.email, userData.password)
               .then(user => {
                 return this.setDisplayName(user, userData).then(response => {
                   return this.createDBUser(userData, user.uid).then(response => user.uid);
                 });
               }).catch(error => error);
  }

  static createDBUser(user, id) {
    delete user.id;
    delete user.password;
    return database.ref('users/' + id)
                   .set(user)
                   .then(response => response)
                   .catch(error => error);
  }

  static setDisplayName(user, userData) {
    return user.updateProfile({
      displayName: userData.name + " " + userData.lastname
    }).then(response => response);
  }


  static signIn(user) {
    return auth.signInWithEmailAndPassword(user.email, user.password)
               .then(response => {
                 return this.getUserInformation(response.uid)
                            .then(response => response);
               }).catch(error => error);
  }

  static recoverPassword(user) {
    return auth.sendPasswordResetEmail(user.email)
               .then(response => response);
  }

  static getUserInformation(id) {
    let ref = database.ref('users/' + id);
    return ref.once('value')
              .then(snapshot => {
                let user = snapshot.val();
                user.id = snapshot.key;
                return user;
              });
  }
}
