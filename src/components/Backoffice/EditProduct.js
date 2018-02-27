import React from 'react';
import PropTypes from 'prop-types';
import imageIcon from '../../images/image.svg';
import arrow from '../../images/arrow.svg';
import deleteIcon from '../../images/close-white.svg';

class EditProduct extends React.Component {

  componentDidMount() {
    const {actions, match} = this.props;
    let id = match.params.id;
    actions.getProductById(id).then( () => {
      actions.getCategories();
    });
  }

  onImageChange(e) {
    e.preventDefault();
    const {actions} = this.props;
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      actions.uploadProductImage(file);
    };
    reader.readAsDataURL(file);
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

  updateName(event) {
    const {actions} = this.props;
    let name = event.target.value;
    actions.setProductName(name);
  }

  updatePrice(event) {
    const {actions} = this.props;
    let price = event.target.value;
    actions.setProductPrice(price);
  }

  updateCategory(event) {
    const {actions} = this.props;
    let category = event.target.value;
    actions.setProductCategory(category);
  }

  updateSelectedImage(index) {
    const {actions} = this.props;
    actions.setSelectedImage(index);
  }

  updateStockS(event) {
    const {actions} = this.props;
    let small = event.target.value;
    actions.setProductStockS(small);
  }

  updateStockM(event) {
    const {actions} = this.props;
    let medium = event.target.value;
    actions.setProductStockM(medium);
  }

  updateStockL(event) {
    const {actions} = this.props;
    let large = event.target.value;
    actions.setProductStockL(large);
  }

  categoriesOptions(categories) {
    return categories.map((option, index) => {
      return (<option key={index} value={option}>{option}</option>);
    });
  }

  deleteImage() {
    const { actions, admin } = this.props;
    actions.deleteProductImage(admin.product);
  }

  deleteProduct() {
    const { actions, admin } = this.props;
    actions.deleteProduct(admin.product);
  }

  editProduct() {
    const {actions, admin} = this.props;
    actions.editProduct(admin.product);
  }

  render() {
    const { admin } = this.props;
    let previews, selectedImage;
    if (admin.product.images.length != 0) {
      previews = this.displayPreviewImages(admin.product);
      selectedImage = admin.product.images[admin.product.selectedImage];
    }
    let options = this.categoriesOptions(admin.categories);

    return (<div className="editProduct align-flex horizontal">
      <div className="editProduct__content">
        <h2 className="editProduct__title">Edit Product</h2>
        <div className="row">
          <div className="col-2">
            {previews}
            <div className="uploader align-flex center">
              <input type="file" name="pic" accept="image/*" onChange={this.onImageChange.bind(this)}/>
              <img src={imageIcon}/>
            </div>
          </div>
          <div className="col-5 item">
            <img src={selectedImage} className="selectedImage"/>
            <div className="delete" onClick={this.deleteImage.bind(this)}>
              <img src={deleteIcon} />
            </div>
          </div>
          <div className="offset-1 col-4">
            <div className="inputs__wrapper">
              <p className="label">Product name:</p>
              <input type="text" onChange={this.updateName.bind(this)} value={admin.product.name} />
            </div>
            <div className="inputs__wrapper">
              <p className="label">Price:</p>
              <input type="number" onChange={this.updatePrice.bind(this)} value={admin.product.price}/>
            </div>
            <div className="inputs__wrapper">
              <p className="label">Category:</p>
              <select style={{backgroundImage: `url("${arrow}")`}} onChange={this.updateCategory.bind(this)} value={admin.product.category}>
                {options}
              </select>
            </div>
            <div className="row inputs__wrapper">
              <p className="label">Stock:</p>
              <div className="inputs__wrapper offset-1 col-3">
                <p className="label">S:</p>
                <input type="number" onChange={this.updateStockS.bind(this)} value={admin.product.stock.small}/>
              </div>
              <div className="inputs__wrapper offset-1 col-3">
                <p className="label">M:</p>
                <input type="number" onChange={this.updateStockM.bind(this)} value={admin.product.stock.medium}/>
              </div>
              <div className="inputs__wrapper offset-1 col-3">
                <p className="label">L:</p>
                <input type="number" onChange={this.updateStockL.bind(this)} value={admin.product.stock.large}/>
              </div>
            </div>
            <div className="action">
              <a className="button button__dark" onClick={this.editProduct.bind(this)}>Edit Product</a>
              <a className="button button__delete" onClick={this.deleteProduct.bind(this)}>Delete Product</a>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

EditProduct.propTypes = {
  admin: PropTypes.object,
  actions: PropTypes.object,
  match: PropTypes.object
};

export default EditProduct;
