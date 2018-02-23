import firebase from 'firebase';

let database = firebase.database();

export default class AdminApi {

  static getClients() {
    let ref = database.ref('users');
    let clients = []
 	  return ref.once('value').then(snapshot => {
 		   snapshot.forEach(data => {
         if (!data.val().admin) {
           clients.push(data.val());
         }
       })
       return clients;
 	   })
  }
}
