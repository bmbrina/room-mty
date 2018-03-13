import React from 'react';
import PropTypes from 'prop-types';

class Shop extends React.Component {
  render() {
    const { checkout, actions } = this.props;
    return (
      <div>
        <h2>Shopping Basket</h2>
        <div className="showClients__table">
          <table className="text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Size</th>
                <th>Units</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
        <p>Total:<span></span></p>
        <a>Checkout</a>
      </div>
    );
  }
}

Shop.propTypes = {
  checkout: PropTypes.object,
  actions: PropTypes.object
};

export default Shop;
