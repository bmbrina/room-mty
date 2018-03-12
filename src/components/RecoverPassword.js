import React from 'react';
import PropTypes from 'prop-types';
import close from '../images/close.svg';

class RecoverPassword extends React.Component {

  updateUserEmail(event) {
    const { actions } = this.props;
    let email = event.target.value;
    actions.setUserEmail(email);
  }

  recoverPassword() {
    const { actions, user } = this.props;
    actions.recoverPassword(user).then( () => {
      this.close();
    });
  }

  close() {
    const { shopMenuActions } = this.props;
    shopMenuActions.setShowRecoverPassword(false);
  }

  render() {
    const { shopMenu } = this.props;
    let hidden = '';
    if (!shopMenu.showRecoverPassword) {
      hidden = 'hidden';
    }

    return (
      <div className={`recoverPassword ${hidden}`}>
        <div className="recoverPassword__container">
          <img src={close} className="recoverPassword__container__close" onClick={this.close.bind(this)}/>
          <div className="recoverPassword__container__content align-flex center is-column">
            <h2 className="recoverPassword__title">Recover Password</h2>
            <div className="inputs__wrapper">
              <p className="label">Email:</p>
              <input type="text" onChange={this.updateUserEmail.bind(this)} />
            </div>
            <a className="button__dark action" onClick={this.recoverPassword.bind(this)}>Recover Password</a>
          </div>
        </div>
      </div>
    );
  }
}

RecoverPassword.propTypes = {
  user: PropTypes.object,
  shopMenu: PropTypes.object,
  actions: PropTypes.object,
  shopMenuActions: PropTypes.object
};

export default RecoverPassword;
