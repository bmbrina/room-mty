import React from 'react';
import PropTypes from 'prop-types';

class Catalog extends React.Component {

  render() {
    const { admin } = this.props

    return (
      <div className="adminCatalog align-flex horizontal">
        <div className="adminCatalog__content">
          <a className="adminCatalog__new pull-right">Add Product</a>
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  admin: PropTypes.object
};

export default Catalog;
