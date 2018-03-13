import Checkout from '../components/Checkout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/checkoutActions';

function mapStateToProps(state) {
  return {
    checkout: state.checkout
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
