import firebase from 'firebase';

let database = firebase.database();
let storage = firebase.storage();

export default class AdminApi {

  static getClients() {
    let ref = database.ref('users');
    let clients = [];
    return ref.once('value').then(snapshot => {
      snapshot.forEach(data => {
        if (!data.val().admin) {
          clients.push(data.val());
        }
      });
      return clients;
    });
  }

  static getProducts() {
    let ref = database.ref('products');
    let products = [];
    return ref.once('value').then(snapshot => {
      snapshot.forEach(data => {
        products.push(data.val());
      });
      return products;
    });
  }

  static getCategories() {
    let ref = database.ref('productCategories');
    let categories = [];
    return ref.once('value').then(snapshot => {
      snapshot.forEach(data => {
        categories.push(data.val());
      });
      return categories;
    });
  }

  static uploadProductImage(file) {
    return storage.ref("products/" + file.name)
           .put(file)
           .then(response => {
             return response.downloadURL;
           }).catch(error => error);
  }

  static addProduct(product) {
    delete product.selectedImage;
    return database.ref('products/')
                   .push(product)
                   .then(response => response)
                   .catch(error => error);

  }
}
