import SignIn from '../components/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import * as shopMenuActions from '../actions/shopMenuActions';
import * as routesActions from '../actions/routesActions';


function mapStateToProps(state) {
  return {
    user: state.user,
    shopMenu: state.shopMenu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    shopMenuActions: bindActionCreators(shopMenuActions, dispatch),
    routesActions: bindActionCreators(routesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
