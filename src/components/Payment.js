import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {

  updateName(event) {
    const { actions } = this.props;
    let name = event.target.value;
    actions.setName(name);
  }

  updateStreet(event) {
    const { actions } = this.props;
    let street = event.target.value;
    actions.setStreet(street);
  }

  updateReferences(event) {
    const { actions } = this.props;
    let references = event.target.value;
    actions.setReferences(references);
  }

  updateCity(event) {
    const { actions } = this.props;
    let city = event.target.value;
    actions.setCity(city);
  }

  updateState(event) {
    const { actions } = this.props;
    let state = event.target.value;
    actions.setState(state);
  }

  updateZipcode(event) {
    const { actions } = this.props;
    let zipcode = event.target.value;
    actions.setZipcode(zipcode);
  }

  updateCountry(event) {
    const { actions } = this.props;
    let country = event.target.value;
    actions.setCountry(country);
  }

  updatePhone(event) {
    const { actions } = this.props;
    let phone = event.target.value;
    actions.setPhone(phone);
  }

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
            <input type="text" onChange={this.updateName.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">Street address:</p>
            <input type="text" placeholder="Street and number, P.O. box, c/o."onChange={this.updateStreet.bind(this)}/>
            <input type="text" placeholder="Apartment, suite, unit, building, floor, etc."onChange={this.updateReferences.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">City:</p>
            <input type="text" onChange={this.updateCity.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">State:</p>
            <input type="text" onChange={this.updateState.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">Zip code:</p>
            <input type="text" onChange={this.updateZipcode.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">Country:</p>
            <input type="text" onChange={this.updateCountry.bind(this)}/>
          </div>
          <div className="inputs__wrapper">
            <p className="label">Phone number:</p>
            <input type="tel" onChange={this.updatePhone.bind(this)}/>
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
  checkout: PropTypes.object,
  actions: PropTypes.object,
  routesActions: PropTypes.object
};

export default Payment;
