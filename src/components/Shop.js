import React from 'react';
import PropTypes from 'prop-types';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import RecoverPassword from '../containers/RecoverPassword';
import Menu from './Shop/Menu';
import Catalog from './Shop/Catalog';

class Shop extends React.Component {
  render() {
    const { shop, actions } = this.props;
    return (
      <div>
        <SignIn
          shop={shop}
        />
        <SignUp
          shop={shop}
        />
        <RecoverPassword
          shop={shop}
        />
        <Menu
          actions={actions}
          selected={shop.selectedMenuItem}
          categories={shop.categories}
        />
        <Catalog
          actions={actions}
          shop={shop}
        />
      </div>
    );
  }
}

Shop.propTypes = {
  shop: PropTypes.object,
  actions: PropTypes.object
};

export default Shop;
