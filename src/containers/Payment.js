import Payment from '../components/Payment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import * as routesActions from '../actions/routesActions';


function mapStateToProps(state) {
  return {
    checkout: state.checkout
  };
}

function mapDispatchToProps(dispatch) {
  return {
    routesActions: bindActionCreators(routesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
