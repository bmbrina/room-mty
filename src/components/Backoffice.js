import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Backoffice/Menu';
import Clients from '../containers/Clients';
import Catalog from '../containers/AdminCatalog';

class Backoffice extends React.Component {

  returnSelectedComponent(component) {
    switch (component) {
      case 'Clients':
        return (
          <Clients/>
        );
      case 'Catalog':
        return (
          <Catalog />
        );
      case 'Orders':
      case 'Sales':
        return (
          <div/>
        );
    }
  }

  render() {
    const {backoffice, actions} = this.props;
    let selectedComponent = this.returnSelectedComponent(backoffice.selectedMenuItem);
    return (
      <div className="backoffice">
        <Menu selected={backoffice.selectedMenuItem} actions={actions}/> {selectedComponent}
      </div>
    );
  }
}

Backoffice.propTypes = {
  backoffice: PropTypes.object,
  actions: PropTypes.object
};

export default Backoffice;
