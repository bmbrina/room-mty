import Clients from '../components/Backoffice/Clients';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/adminActions';

function mapStateToProps(state) {
  return {
    clients: state.admin.clients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
