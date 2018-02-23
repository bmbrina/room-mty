import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

class Header extends React.Component {

  showSignIn() {
    const { actions } = this.props;
    actions.setShowSignIn(true);
  }

  chooseHeader(path) {
    if (["/", "/about", "/contact", "/location"].includes(path)) {
      return (
        <div className="mainLogo">
          <NavLink exact to="/">
            <img className="mainLogo__image" src={logo}/>
          </NavLink>
        </div>
      );
    } else if (["/backoffice"].includes(path)){
      return (
        <div className="header row">
          <div className="offset-5 col-3">
            <a href="/"><img className="header__logo" src={logo}/></a>
          </div>
          <div className="col-3 text-right">
            <a onClick={this.signOut.bind(this)}>Sign out</a>
          </div>
        </div>
      );
    } else {
      let user = this.isUserSignedIn();
      return (
        <div className="header row">
          <div className="offset-5 col-3">
            <a href="/"><img className="header__logo" src={logo}/></a>
          </div>
          <div className="col-3 text-right">
            {user}
          </div>
        </div>
      );
    }
  }

  isUserSignedIn() {
    const { user } = this.props;

    if (user.id != '') {
      return (
        <a>{user.name + " " + user.lastname}</a>
      );
    } else {
      return (
        <a className="header__auth" onClick={this.showSignIn.bind(this)}>Sign In</a>
      );
    }
  }

  signOut() {
    const { userActions, routesActions } = this.props;
    userActions.signOut().then( () => {
      routesActions.goToRoot();
    });
  }

  render() {
    const { location } = this.props;
    let header = this.chooseHeader(location.pathname);
    return (
      <div>
        {header}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  actions: PropTypes.object,
  routesActions: PropTypes.object,
  userActions: PropTypes.object
};

export default Header;
