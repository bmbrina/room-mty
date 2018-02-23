import Backoffice from '../components/Backoffice';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/backofficeActions';

function mapStateToProps(state) {
  return {
    backoffice: state.backoffice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Backoffice);
