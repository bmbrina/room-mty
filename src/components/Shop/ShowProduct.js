import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../../images/arrow.svg';

class ShowProduct extends React.Component {

  componentDidMount() {
    const {actions, match} = this.props;
    let id = match.params.id;
    actions.getProductById(id).then( () => {
      actions.setSelectedProduct(this.props.product);
    });
  }

  displayPreviewImages(product) {
    return product.images.map((image, index) => {
      let selected;
      if (product.selectedImage == index) {
        selected = 'selected';
      }
      return (
        <img src={image} className={`previewImage ${selected}`} key={index} onClick={this.updateSelectedImage.bind(this, index)}/>
      );
    });
  }

  updateSelectedImage(index) {
    const {actions} = this.props;
    actions.setSelectedImage(index);
  }

  sizeOptions(sizes) {
    return Object.keys(sizes).filter( (size) => Number(sizes[size]) > 0).map((size, index) => {
      let char = size.charAt(0).toUpperCase();
      return (<option key={index} value={size}>{char}</option>);
    });
  }

  setSelectedSize(event) {
    const { actions } = this.props;
    let size = event.target.value;
    actions.setSelectedProductSize(size);
  }

  quantityOptions(stock, selectedSize) {
    if (selectedSize != "") {
      let quantity = Number(stock[selectedSize]);
      let arr = [...Array(quantity+1).keys()];
      return arr.map( (q, index) => {
        return(<option key={index} value={q}>{q}</option>);
      });
    } else {
      return(<option value={0}>0</option>);
    }
  }

  setSelectedQuantity(event) {
    const { actions } = this.props;
    let quantity = event.target.value;
    actions.setSelectedProductQuantity(quantity);
  }

  addProduct() {
    const { checkoutActions, selectedProduct } = this.props;
    checkoutActions.addProduct(selectedProduct);
  }

  render() {
    const { product, selectedProduct } = this.props;
    let previews, selectedImage;
    if (product.images.length != 0) {
      previews = this.displayPreviewImages(product);
      selectedImage = product.images[product.selectedImage];
    }
    let sizeOptions = this.sizeOptions(product.stock);
    let quantityOptions = this.quantityOptions(product.stock, selectedProduct.size);

    return (<div className="showProduct align-flex horizontal">
      <div className="showProduct__content">
        <div className="row">
          <div className="col-2">
            {previews}
          </div>
          <div className="col-5 item">
            <img src={selectedImage} className="selectedImage"/>
          </div>
          <div className="offset-1 col-4">
            <p className="showProduct__name">{product.name}</p>
            <p className="showProduct__price">${product.price} MXN</p>
            <div className="inputs__wrapper">
              <p className="label">Size:</p>
              <select style={{backgroundImage: `url("${arrow}")`}} onChange={this.setSelectedSize.bind(this)}>
                <option value="">Select size</option>
                {sizeOptions}
              </select>
            </div>
            <div className="inputs__wrapper">
              <p className="label">Quantity:</p>
              <select style={{backgroundImage: `url("${arrow}")`}} onChange={this.setSelectedQuantity.bind(this)}>
                {quantityOptions}
              </select>
            </div>
            <div className="action">
              <a className="button button__dark" onClick={this.addProduct.bind(this)}>Add to Basket</a>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

ShowProduct.propTypes = {
  product: PropTypes.object,
  selectedProduct: PropTypes.object,
  actions: PropTypes.object,
  checkoutActions: PropTypes.object,
  match: PropTypes.object
};

export default ShowProduct;
