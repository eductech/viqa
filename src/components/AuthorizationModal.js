import React from 'react';
import { connect } from "react-redux";
import Modal from 'react-modal';

import { showAuthorizationModal } from "../actions/sessionSettingsActions";
import { startCreateUserWithEmailAndPassword } from '../actions/auth';

class AuthorizationModal extends React.Component {
  state = {
    registration: true
  }

  onMailChange = (e) => {
    const mail = e.target.value;
    this.setState({mail});
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState({password});
  }

  onSubmitForNewUser = (e) => {
    e.preventDefault();
    this.props.createUser(
      this.state.mail,
      this.state.password
    );
    this.props.closeModal();
  }

  onSubmitForExistingUser = (e) => {
    e.preventDefault();
    console.log("existin user us trying to enter");
    this.props.closeModal();
  }

  onChangeToSignupMode = () => {
    this.setState({registration: true});
  }

  onChangeToSigninMode = () => {
    this.setState({registration: false});
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalVisibility}
        contentLabel="Authorization Modal"
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={200}
        className="authorization-modal"
      >
        <button onClick={this.onChangeToSignupMode}>
          Sign Up
        </button>
        <button onClick={this.onChangeToSigninMode}>
          Sigh In
        </button>
        <form onSubmit={
          this.state.registration ? this.onSubmitForNewUser : this.onSubmitForExistingUser 
        }>
          <input 
            autoFocus 
            type="text" 
            placeholder="your mail"
            onChange={this.onMailChange}
          />
          <input 
            type="text" 
            placeholder="your password"
            onChange={this.onPasswordChange}
          />
          <button>Confirm</button>
        </form>
      </Modal>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    modalVisibility: state.sessionSettings.showAuthorizationModal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(showAuthorizationModal(false)),
    createUser: (email, password) => dispatch(startCreateUserWithEmailAndPassword(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationModal);