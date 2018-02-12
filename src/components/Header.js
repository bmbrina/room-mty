import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

class Header extends React.Component {

  displayHeader(path) {
    if (["/", "/about", "/contact", "/location"].includes(path)) {
      return (
        <div className="mainLogo">
          <NavLink exact to="/">
            <img className="mainLogo__image" src={logo}/>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="header row">
          <div className="offset-5 col-3">
            <a href="/"><img className="header__logo" src={logo}/></a>
          </div>
          <div className="col-3 text-right">
            <a className="header__auth">Sign In</a>
          </div>
        </div>
      );
    }
  }

  render() {
    const { location } = this.props;
    let header = this.displayHeader(location.pathname);
    return (
      <div>
        {header}
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
