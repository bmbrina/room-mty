import Shop from '../components/Shop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shopActions';
import * as routesActions from '../actions/routesActions';
import * as shopMenuActions from '../actions/shopMenuActions';

function mapStateToProps(state) {
  return {
    shop: state.shop,
    shopMenu: state.shopMenu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    routesActions: bindActionCreators(routesActions, dispatch),
    shopMenuActions: bindActionCreators(shopMenuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
