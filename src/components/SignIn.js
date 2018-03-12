import React from 'react';
import PropTypes from 'prop-types';
import close from '../images/close.svg';

class SignIn extends React.Component {

  updateUserEmail(event) {
    const { actions } = this.props;
    let email = event.target.value;
    actions.setUserEmail(email);
  }

  updateUserPassword(event) {
    const { actions } = this.props;
    let password = event.target.value;
    actions.setUserPassword(password);
  }

  signIn() {
    const { actions, user, routesActions } = this.props;
    actions.signIn(user).then(response => {
      this.close();
      if (response.user.admin) {
        routesActions.goToBackoffice();
      }

    });
  }

  showSignUp() {
    const { shopMenuActions } = this.props;
    this.close();
    shopMenuActions.setShowSignUp(true);
  }

  showRecoverPassword() {
    const { shopMenuActions } = this.props;
    this.close();
    shopMenuActions.setShowRecoverPassword(true);
  }

  close() {
    const { shopMenuActions } = this.props;
    shopMenuActions.setShowSignIn(false);
  }

  render() {
    const { shopMenu } = this.props;
    let hidden = '';
    if (!shopMenu.showSignIn) {
      hidden = 'hidden';
    }

    return (
      <div className={`signIn ${hidden}`}>
        <div className="signIn__container">
          <img src={close} className="signIn__container__close" onClick={this.close.bind(this)}/>
          <div className="signIn__container__content align-flex center is-column">
            <h2 className="signIn__title">Sign In</h2>
            <div className="inputs__wrapper">
              <p className="label">Email:</p>
              <input type="text" onChange={this.updateUserEmail.bind(this)} />
            </div>
            <div className="inputs__wrapper">
              <p className="label">Password:</p>
              <input type="password" onChange={this.updateUserPassword.bind(this)} />
            </div>
            <a className="button__dark action" onClick={this.signIn.bind(this)}>Sign In</a>
            <a className="recover" onClick={this.showRecoverPassword.bind(this)}>Recover Password</a>
          </div>
          <div className="signIn__prompt text-center">
            <a onClick={this.showSignUp.bind(this)}>Create Account</a>
          </div>
        </div>

      </div>
    );
  }
}

SignIn.propTypes = {
  user: PropTypes.object,
  shopMenu: PropTypes.object,
  actions: PropTypes.object,
  shopMenuActions: PropTypes.object,
  routesActions: PropTypes.object
};

export default SignIn;
