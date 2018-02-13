import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shopActions';

function mapStateToProps(state) {
  return {
    user: state.user,
    location: state.routing.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
