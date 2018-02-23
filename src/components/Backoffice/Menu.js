import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {

  getMenuTags() {
    const { selected } = this.props;
    return ['Orders', 'Catalog', 'Sales', 'Clients'].map( (tag, index) => {
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
    const { actions } = this.props;
    e.preventDefault();
    actions.setSelectedMenuItem(e.target.id);
  }

  render() {
    let menuTags = this.getMenuTags();
    return (
      <div className="backofficeMenu align-flex between">
        {menuTags}
      </div>
    );
  }
}

Menu.propTypes = {
  actions: PropTypes.object,
  selected: PropTypes.string
};

export default Menu;
