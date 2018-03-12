import React from 'react';
import PropTypes from 'prop-types';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import RecoverPassword from '../containers/RecoverPassword';
import Menu from './Shop/Menu';
import Catalog from './Shop/Catalog';

class Shop extends React.Component {
  render() {
    const { shop, shopMenu, actions, routesActions, shopMenuActions } = this.props;
    return (
      <div>
        <SignIn />
        <SignUp />
        <RecoverPassword />
        <Menu
          actions={actions}
          shopMenuActions={shopMenuActions}
          selected={shopMenu.selectedMenuItem}
          categories={shop.categories}
        />
        <Catalog
          routesActions={routesActions}
          actions={actions}
          shop={shop}
          shopMenu={shopMenu}
        />
      </div>
    );
  }
}

Shop.propTypes = {
  shop: PropTypes.object,
  shopMenu: PropTypes.object,
  actions: PropTypes.object,
  shopMenuActions: PropTypes.object,
  routesActions: PropTypes.object
};

export default Shop;
