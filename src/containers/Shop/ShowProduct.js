import ShowProduct from '../../components/Shop/ShowProduct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/shopActions';
import * as checkoutActions from '../../actions/checkoutActions';

function mapStateToProps(state) {
  return {
    product: state.shop.product,
    selectedProduct: state.shop.selectedProduct
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    checkoutActions: bindActionCreators(checkoutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
