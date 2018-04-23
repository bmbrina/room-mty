import React from 'react';
import PropTypes from 'prop-types';

class Orders extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getOrders();
  }

  displayOrders() {
    const { orders } = this.props;
    if (orders.length == 0) {
      return (
        <tr/>
      );
    } else {
      return orders.map( (order, index) => {
        return (
          <tr key={index}>
            <td>{order.date}</td>
            <td>{order.id}</td>
            <td className="status">{order.status}</td>
            <td>${order.total} MXN</td>
            <td><a className="action" onClick={this.orderDetail.bind(this, order.id)}>See Detail</a></td>
          </tr>
        );
      });
    }
  }

  orderDetail(id) {
    const { routesActions } = this.props;
    routesActions.showAdminOrder(id);
  }

  render() {
    let orders = this.displayOrders();
    return (
      <div className="orders align-flex center">
        <div className="orders__table">
          <table className="text-center">
            <thead>
              <tr>
                <th>Date</th>
                <th>ID</th>
                <th>Status</th>
                <th>Amount</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {orders}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Orders.propTypes = {
  actions: PropTypes.object,
  routesActions: PropTypes.object,
  orders: PropTypes.array
};

export default Orders;
