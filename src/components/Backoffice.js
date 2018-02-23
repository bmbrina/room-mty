import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/Backoffice/Menu';

class Backoffice extends React.Component {

  render() {
    const { backoffice, actions } = this.props;
    return (
      <div className="backoffice">
        <Menu selected={backoffice.selectedMenuItem} actions={actions} />
      </div>
    );
  }
}

Backoffice.propTypes = {
  backoffice: PropTypes.object,
  actions: PropTypes.object
};

export default Backoffice;
