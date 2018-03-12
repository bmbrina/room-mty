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

  static getProducts() {
    let ref = database.ref('products');
    let products = [];
    return ref.once('value').then(snapshot => {
      snapshot.forEach(data => {
        products.push({id: data.key, ...data.val()});
      });
      return products;
    });
  }

  static getProductById(id) {
    let ref = database.ref('products/' + id);
    return ref.once('value').then(snapshot => {
      return {
        id: snapshot.key,
        selectedImage: 0,
        ...snapshot.val()
      };
    });
  }
}
