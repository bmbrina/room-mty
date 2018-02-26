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
    delete product.id;
    return database.ref('products/')
                   .push(product)
                   .then(response => response)
                   .catch(error => error);

  }

  static editProduct(product) {
    let id = product.id;
    delete product.selectedImage;
    delete product.id;
    return database.ref('products/' + id)
                   .update(product)
                   .then(response => response)
                   .catch(error => error);

  }

  static deleteProduct(product) {
    return database.ref('products')
                   .child(product.id)
                   .remove()
                   .then(response => {
                     return product.images.map( url => {
                       return this.deleteImageFromStorage(url);
                     })
                   })
  }

  static deleteProductImage(product) {
    return database.ref('products/' + product.id + '/images')
                   .child(product.selectedImage)
                   .remove()
                   .then(response => {
                     return this.deleteImageFromStorage(product.images[product.selectedImage]);
                   })
  }

  static deleteImageFromStorage(url) {
    return storage.refFromURL(url)
                  .delete()
                  .then(response => response)
                  .catch(error => error);
  }
}
