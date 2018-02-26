import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import edit from '../../images/edit.svg';

class Catalog extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getProducts().then(response => response);
  }

  goToEdit() {
    
  }

  displayProducts(products) {
    return products.map( (product, index) => {
      let stock;
      if (product.stock.small != 0 || product.stock.small != 0 || product.stock.small != 0) {
        stock = "In Stock";
      } else {
        stock = "Empty";
      }
      return (
        <div className="adminCatalog__item col-3" key={index}>
          <img src={product.images[0]} />
          <p className="title">{product.name}</p>
          <p className="stock">{stock}</p>
          <div className="edit" onClick={this.goToEdit.bind(this)}>
            <img src={edit} />
          </div>
        </div>
      )
    })
  }

  render() {
    const { admin } = this.props;
    let products = this.displayProducts(admin.products);
    return (
      <div className="adminCatalog align-flex horizontal">
        <div className="adminCatalog__content">
          <div className="adminCatalog__new">
            <Link to="/backoffice/products/new" className="button button__dark">Add Product</Link>
          </div>
          <div className="row text-center">
            {products}
          </div>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  admin: PropTypes.object,
  actions: PropTypes.object
};

export default Catalog;
