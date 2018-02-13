import React from 'react';
import PropTypes from 'prop-types';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

class Shop extends React.Component {
  render() {
    const { shop } = this.props;
    return (
      <div>
        <SignIn
          shop={shop}
        />
        <SignUp
          shop={shop}
        />
      </div>
    );
  }
}

Shop.propTypes = {
  shop: PropTypes.object
};

export default Shop;
