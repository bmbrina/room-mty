import React from 'react';
import PropTypes from 'prop-types';
import deleteImage from '../images/delete.svg';
import arrow from '../images/arrow.svg';

class Checkout extends React.Component {
  quantityOptions(stock, selectedSize) {
    let quantity = Number(stock[selectedSize]);
    let arr = [...Array(quantity+1).keys()];
    arr.splice(0,1);
    return arr.map( (q, index) => {
      return(<option key={index} value={q}>{q}</option>);
    });
  }

  updateQuantity(index, event) {
    const { actions } = this.props;
    let quantity = event.target.value;
    actions.updateQuantity(index, quantity);
  }

  displayProducts(products) {
    if (products.length == 0) {
      return (
        <tr/>
      );
    } else {
      return products.map( (item, index) => {
        const amount = Number(item.product.price) * Number(item.quantity);
        const size = item.size.charAt(0).toUpperCase();
        const options = this.quantityOptions(item.product.stock, item.size);
        return (
          <tr className="checkout__product" key={index}>
            <td><img className="image" src={item.product.images[0]}/></td>
            <td>{item.product.name}</td>
            <td>{size}</td>
            <td className="inputs__wrapper">
              <select style={{backgroundImage: `url("${arrow}")`}} onChange={this.updateQuantity.bind(this, index)} value={item.quantity}>
                {options}
              </select>
            </td>
            <td>${amount} MXN</td>
            <td><img className="delete" src={deleteImage} onClick={this.deleteProduct.bind(this, index)}/></td>
          </tr>
        );
      });
    }
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

  deleteProduct(index) {
    const { actions } = this.props;
    actions.deleteProduct(index);
  }

  render() {
    const { checkout } = this.props;
    let products = this.displayProducts(checkout.products);
    let total = this.getTotal(checkout.products);
    return (
      <div className="checkout align-flex center">
        <div className="checkout__content">
          <h2 className="checkout__title">Shopping Basket</h2>
          <div className="checkout__table">
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
                {products}
              </tbody>
            </table>
          </div>
          <div className="pull-right">
            <p className="total">Total: <span>${total}</span> MXN</p>
            <a href="#" className="button__dark pull-right">Checkout</a>
          </div>
        </div>

      </div>
    );
  }
}

Checkout.propTypes = {
  checkout: PropTypes.object,
  actions: PropTypes.object
};

export default Checkout;