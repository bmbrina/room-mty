import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Catalog extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getProducts().then(response => response);
  }

  displayProducts(products) {
    return products.map( (product, index) => {
      return (
        <div className="shopCatalog__item col-3" key={index}>
          <img src={product.images[0]} />
          <p className="title">{product.name}</p>
          <p className="price">${product.price} MXN</p>
        </div>
      );
    });
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
