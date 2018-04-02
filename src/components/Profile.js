import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {

  componentDidMount() {
    const { actions, user } = this.props;
    actions.getUserOrders(user.id);
  }

  displayOrders(orders) {
    if (orders.length == 0) {
      return (
        <tr/>
      );
    } else {
      return orders.map( (order, index) => {
        return (
          <tr className="" key={index}>
            <td>{order.date}</td>
            <td>{order.id}</td>
            <td className="status">{order.status}</td>
            <td>${order.total} MXN</td>
            <td><a className="button__light">See detail</a></td>
          </tr>
        );
      });
    }
  }

  signOut() {
    const { actions, routesActions } = this.props;
    actions.signOut().then( () => {
      routesActions.goToRoot();
    });
  }

  render() {
    const { user } = this.props;
    let orders = this.displayOrders(user.orders);
    return (
      <div className="profile align-flex center is-column">
        <div className="profile__content">
          <h2 className="profile__title">Order History</h2>
          <div className="profile__table">
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
        <a className="action button__dark" onClick={this.signOut.bind(this)}>Sign out</a>
      </div>
    );
  }
}

Profile.propTypes = {
  actions: PropTypes.object,
  routesActions: PropTypes.object,
  user: PropTypes.object
};

export default Profile;
