import SignIn from '../components/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import * as shopActions from '../actions/shopActions';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    shopActions: bindActionCreators(shopActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
