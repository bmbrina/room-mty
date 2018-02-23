import Catalog from '../components/Backoffice/Catalog';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/adminActions';

function mapStateToProps(state) {
  return {
    admin: state.admin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
