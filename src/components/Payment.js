import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {

  displayProducts(products) {
    return products.map( (item, index) => {
      const amount = Number(item.product.price) * Number(item.quantity);
      const size = item.size.charAt(0).toUpperCase();
      return (
        <tr className="payment__product" key={index}>
          <td><img className="image" src={item.product.images[0]}/></td>
          <td>{item.product.name}</td>
          <td>{size}</td>
          <td>${amount} MXN</td>
        </tr>
      );
    });
  }

  getTotal(products) {
    let total = 0;
    if (products.length == 0) {
      return total;
    } else {
      products.map( item => {
        total += Number(item.product.price) * Number(item.quantity);
      });
      return total;
    }
  }

  render() {
    const { checkout } = this.props;
    let products = this.displayProducts(checkout.products);
    let total = this.getTotal(checkout.products);
    return (
      <div className="payment align-flex horizontal row">
        <div className="col-9 payment__content align-flex center is-column">
          <h2 className="payment__title">Shipping Address</h2>
          <div className="inputs__wrapper">
            <p className="label">Full name:</p>
            <input type="text" />
          </div>
          <div className="inputs__wrapper">
            <p className="label">Street address:</p>
            <input type="text" placeholder="Street and number, P.O. box, c/o."/>
            <input type="text" placeholder="Apartment, suite, unit, building, floor, etc."/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">City:</p>
            <input type="text" />
          </div>
          <div className="inputs__wrapper">
            <p className="label">State:</p>
            <input type="text" />
          </div>
          <div className="inputs__wrapper">
            <p className="label">Zip code:</p>
            <input type="text" />
          </div>
          <div className="inputs__wrapper">
            <p className="label">Country:</p>
            <input type="text" />
          </div>
          <div className="inputs__wrapper">
            <p className="label">Phone number:</p>
            <input type="tel" />
          </div>
        </div>
        <div className="col-3 payment__sidebar">
          <h3 className="payment__subtitle text-center">Overview</h3>
          <div className="payment__sidebar__content">
            <div className="payment__table">
              <table className="text-center">
                <tbody>
                  {products}
                </tbody>
              </table>
              <p className="total text-right">Total: ${total} MXN</p>
            </div>
            <div className="action text-center">
              <a href="#" className="button__ghost">Pay with Paypal</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Payment.propTypes = {

};

export default Payment;
