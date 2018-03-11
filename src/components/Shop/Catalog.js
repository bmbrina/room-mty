import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Catalog extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getProducts().then(response => response);
  }

  filterProducts(products) {
    let selected = this.props.shop.selectedMenuItem;

    if (selected === "All") {
      return products;
    } else {
      return products.filter( product => product.category === selected);
    }
  }

  displayProducts(products) {
    let filtered_products = this.filterProducts(products);
    if (filtered_products.length === 0) {
      return (
        <div className="text-center">
          <h2>No products to display.</h2>
        </div>
      );
    } else {
      return filtered_products.map( (product, index) => {
        return (
          <div className="shopCatalog__item col-3" key={index}>
            <img src={product.images[0]} />
            <p className="title">{product.name}</p>
            <p className="price">${product.price} MXN</p>
          </div>
        );
      });
    }
  }

  render() {
    const { shop } = this.props;
    let products = this.displayProducts(shop.products);
    return (
      <div className="shopCatalog align-flex horizontal">
        <div className="shopCatalog__content">
          <div className="row">
            {products}
          </div>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  shop: PropTypes.object,
  actions: PropTypes.object
};

export default Catalog;
