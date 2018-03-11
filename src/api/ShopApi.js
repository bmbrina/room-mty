import firebase from 'firebase';
import app from './firebase/firebase';

let database = firebase.database();

export default class ShopApi {

  static getCategories() {
    let ref = database.ref('productCategories');
    let categories = ['All'];
    return ref.once('value').then(snapshot => {
      snapshot.forEach(data => {
        categories.push(data.val());
      });
      return categories;
    });
  }
}
