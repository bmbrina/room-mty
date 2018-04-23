import Orders from '../../components/Backoffice/Orders';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/adminActions';
import * as routesActions from '../../actions/routesActions';

function mapStateToProps(state) {
  return {
    orders: state.admin.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    routesActions: bindActionCreators(routesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
