import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shopActions';
import * as userActions from '../actions/userActions';
import * as routesActions from '../actions/routesActions';

function mapStateToProps(state) {
  return {
    user: state.user,
    location: state.routing.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    routesActions: bindActionCreators(routesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
