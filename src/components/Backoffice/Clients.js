import React from 'react';
import PropTypes from 'prop-types';

class Clients extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getClients().then(response => response);
  }

  displayClients() {
    const { clients } = this.props;
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
          </tr>
        );
      });
    }
  }

  render() {
    let clients = this.displayClients();
    return (
      <div className="showClients align-flex center">
        <div className="showClients__table">
          <table className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
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
  clients: PropTypes.array
};

export default Clients;
