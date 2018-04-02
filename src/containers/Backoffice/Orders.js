import Orders from '../../components/Backoffice/Orders';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/adminActions';

function mapStateToProps(state) {
  return {
    orders: state.admin.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
