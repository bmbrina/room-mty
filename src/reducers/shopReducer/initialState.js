export default {
  shop: {
    showSignIn: false,
    showSignUp: false,
    showRecoverPassword: false,
    categories: [],
    products: [],
    product: {
      id: "",
      name: "",
      price: "",
      category: "",
      stock: {
        small: 0,
        medium: 0,
        large: 0
      },
      images: [],
      selectedImage: 0
    },
    selectedMenuItem: 'All',
    selectedProduct: {
      product: {},
      size: "",
      quantity: 0
    }
  }
};
