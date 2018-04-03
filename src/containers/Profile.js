import Profile from '../components/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import * as routesActions from '../actions/routesActions';


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    routesActions: bindActionCreators(routesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);