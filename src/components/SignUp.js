import React from 'react';
import PropTypes from 'prop-types';
import close from '../images/close.svg';

class SignUp extends React.Component {

  updateUserName(event) {
    const { actions } = this.props;
    let name = event.target.value;
    actions.setUserName(name);
  }

  updateUserLastName(event) {
    const { actions } = this.props;
    let lastname = event.target.value;
    actions.setUserLastName(lastname);
  }

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

  createAccount() {
    const { actions, user } = this.props;
    actions.signUp(user).then( () => {
      this.close();
    });
  }

  close() {
    const { shopMenuActions } = this.props;
    shopMenuActions.setShowSignUp(false);
  }

  render() {
    const { shopMenu } = this.props;
    let hidden = '';
    if (!shopMenu.showSignUp) {
      hidden = 'hidden';
    }

    return (
      <div className={`signUp ${hidden}`}>
        <div className="signUp__container">
          <img src={close} className="signUp__container__close" onClick={this.close.bind(this)} />
          <div className="signUp__container__content align-flex center is-column">
            <h2 className="signUp__title">Sign Up</h2>
            <div className="inputs__wrapper">
              <p className="label">First name:</p>
              <input type="text" onChange={this.updateUserName.bind(this)} />
            </div>
            <div className="inputs__wrapper">
              <p className="label">Last name:</p>
              <input type="text" onChange={this.updateUserLastName.bind(this)} />
            </div>
            <div className="inputs__wrapper">
              <p className="label">Email:</p>
              <input type="text" onChange={this.updateUserEmail.bind(this)} />
            </div>
            <div className="inputs__wrapper">
              <p className="label">Password:</p>
              <input type="password" onChange={this.updateUserPassword.bind(this)} />
            </div>
            <a className="button__dark action" onClick={this.createAccount.bind(this)}>Create Account</a>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  user: PropTypes.object,
  shopMenu: PropTypes.object,
  actions: PropTypes.object,
  shopMenuActions: PropTypes.object
};

export default SignUp;
