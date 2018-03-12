import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {

  componentDidMount() {
    const {actions} = this.props;
    actions.getCategories().then(response => response);
  }

  getMenuTags() {
    const { categories, selected } = this.props;
    return categories.map( (tag, index) => {
      let active = '';
      if (selected === tag) {
        active = 'selected';
      }
      return (
        <a className={active} key={index} id={tag} onClick={this.setSelectedTag.bind(this)}>{tag}</a>
      );
    });
  }

  setSelectedTag(e) {
    const { shopMenuActions } = this.props;
    e.preventDefault();
    shopMenuActions.setSelectedMenuItem(e.target.id);
  }

  render() {
    let menuTags = this.getMenuTags();
    return (
      <div className="shopMenu align-flex between">
        {menuTags}
      </div>
    );
  }
}

Menu.propTypes = {
  actions: PropTypes.object,
  shopMenuActions: PropTypes.object,
  selected: PropTypes.string,
  categories: PropTypes.array
};

export default Menu;
