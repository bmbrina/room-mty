import OrderDetail from '../../components/Backoffice/OrderDetail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/userActions';
import * as adminActions from '../../actions/adminActions';

function mapStateToProps(state) {
  return {
    user: state.user,
    admin: state.admin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    adminActions: bindActionCreators(adminActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
