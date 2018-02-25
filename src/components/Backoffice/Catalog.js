import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Catalog extends React.Component {

  render() {
    const { admin } = this.props

    return (
      <div className="adminCatalog align-flex horizontal">
        <div className="adminCatalog__content">
          <Link to="/backoffice/products/new" className="adminCatalog__new pull-right">Add Product</Link>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  admin: PropTypes.object
};

export default Catalog;
