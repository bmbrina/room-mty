import Payment from '../components/Payment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/checkoutActions';

function mapStateToProps(state) {
  return {
    checkout: state.checkout,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
