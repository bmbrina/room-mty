import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

  componentDidMount() {
    const { actions, match } = this.props;
    let id = match.params.id;
    actions.getOrderDetail(id);
  }

  displayItems() {
    const { user } = this.props;
    let items = user.selectedOrder.products;
    return items.map( (item, index) => {
      const size = item.size.charAt(0).toUpperCase();
      return (
        <tr key={index}>
          <td>{item.productId}</td>
          <td>{size}</td>
          <td>{item.quantity}</td>
        </tr>
      );
    });

  }

  render() {
    const { user } = this.props;
    let items = this.displayItems();
    let total= 0;
    let order = {
      address: {
        name: "",
        street: "",
        references: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
      }
    };

    let showTracking = 'hidden';
    let trackingNum;
    if (user.selectedOrder) {
      order = user.selectedOrder;
      total = order.total;
      if (order.trackingNum) {
        showTracking = '';
        trackingNum = order.trackingNum;
      }
    }
    return (
      <div className="order align-flex center is-column">
        <div className="order__content">
          <h2 className="order__title">Order Detail</h2>
          <h1 className="order__subtitle">Shipping Address</h1>
          <div className="align-flex between">
            <div className="order__address">
              <p className="order__user">{order.address.name}</p>
              <p>{order.address.street}</p>
              <p>{order.address.zipcode}, {order.address.city}</p>
              <p>{order.address.state}, {order.address.country}</p>
              <p className="order__phone">Phone: {order.address.phone}</p>
            </div>
            <div className="order__detail">
              <p><span>Date:</span>{order.date}</p>
              <p><span>Order ID:</span>{order.id}</p>
              <p className="status"><span>Status:</span>{order.status}</p>
              <p className={showTracking}><span>Tracking Number:</span>{trackingNum}</p>
            </div>
          </div>
          <div className="order__table">
            <table className="text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Size</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </table>
          </div>
          <p className="total pull-right">Total: <span>${total}</span> MXN</p>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  actions: PropTypes.object,
  user: PropTypes.object,
  match: PropTypes.object
};

export default Order;
