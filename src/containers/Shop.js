import Shop from '../components/Shop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/shopActions';

function mapStateToProps(state) {
  return {
    shop: state.shop
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
