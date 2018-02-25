import React from 'react';
import PropTypes from 'prop-types';

class Clients extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getClients().then(response => response);
  }

  displayClients(clients) {
    if (clients.length == 0) {
      return (
        <tr/>
      );
    } else {
      return clients.map( (client, index) => {
        return (
          <tr key={index}>
            <td>{client.name} {client.lastname}</td>
            <td>{client.email}</td>
            <td>5</td>
            <td><a className="action">See Details</a></td>
          </tr>
        );
      });
    }

  }

  render() {
    const { admin } = this.props;
    let clients = this.displayClients(admin.clients);
    return (
      <div className="showClients align-flex center">
        <div className="showClients__table">
          <table className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Orders Made</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {clients}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

Clients.propTypes = {
  actions: PropTypes.object,
  admin: PropTypes.object
};

export default Clients;
