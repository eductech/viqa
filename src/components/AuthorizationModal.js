import React from 'react';
import { connect } from "react-redux";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { googleAuthProvider, githubAuthProvider } from '../firebase/firebase';
import { showAuthorizationModal } from "../actions/sessionSettingsActions";
import { 
  startCreateUserWithEmailAndPassword,
  startSignInWithEmailAndPassword,
  startSignInWithProvider
} from '../actions/auth';

class AuthorizationModal extends React.Component {
  state = {
    registration: true,
    mail: '',
    password: '',
    mailValidationErrMsg: 'please enter your email',
    passwordValidationErrMsg: 'please enter your password'
  }

  onMailChange = (e) => {
    const mail = e.target.value;
    if (!mail) {
      this.setState({mailValidationErrMsg: 'please enter your email', mail});
    } else if (!mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.setState({mailValidationErrMsg: 'email must be valid', mail});
    } else {
      this.setState({mailValidationErrMsg: '', mail});
    }
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    if (!password) {
      this.setState({passwordValidationErrMsg: 'please enter your password', password});
    } else if (!password.match(/.{8,}/)) {
      this.setState({passwordValidationErrMsg: 'password must be at least 8 characters long', 
        password});
    } else {
      this.setState({passwordValidationErrMsg: '', password});
    }
  }

  onSubmitHandler = (registration) => {
    const submitHandler = registration ? 
      this.props.createUser : this.props.startSignIn;
    return (e) => {
      e.preventDefault();
      submitHandler(
        this.state.mail,
        this.state.password
      );
      this.props.closeModal();
    }
  }

  onSignInWithProviderHandler = (provider) => {
    return () => {
      this.props.startSignInWithProvider(provider, this.props.pendingCredInfo)
    }
  }

  onShowRegistrationForm = (registration) => {
    return () => {
      console.log('registration: ' + registration);
      this.setState({registration});
    }
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
        { !this.props.pendingCredInfo ? (
          <div>
            <button 
              onClick={this.props.closeModal} 
              className="authorization-modal__btn-close btn btn-link btn-lg"
            >
              <FontAwesomeIcon icon={faTimes} className=""/>
            </button>
            <div className="d-flex justify-content-around">
              <button 
                className={
                            `btn btn-outline-primary btn-block mx-4 
                            ${this.state.registration ? 'active' : ''}`
                          }
                onClick={this.onShowRegistrationForm(true)}
              >
                Sign Up
              </button>
              <button 
                className={
                            `btn btn-outline-primary btn-block mt-0 mx-4 
                            ${this.state.registration ? '' : 'active'}`
                          }
                onClick={this.onShowRegistrationForm(false)}
              >
                Sigh In
              </button>
            </div>
            <p className="text-center mt-3">
              choose the way you want to <span className="font-weight-bold">{this.state.registration ? 'sign up' : 'sign in'}</span>
            </p>
            <div className="btn-group-vertical w-100">
              <button 
                className="btn btn-success"
                onClick={
                  this.onSignInWithProviderHandler(googleAuthProvider)
                }
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-2"/>
                {this.state.registration ? 'Sign Up' : 'Sign In'} With Google
              </button>
              <button 
                className="btn btn-warning"
                onClick={
                  this.onSignInWithProviderHandler(githubAuthProvider)
                }
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2"/>
                {this.state.registration ? 'Sign Up' : 'Sign In'} With GitHub
              </button>
            </div>
            <p className="text-center my-1">
              or
            </p>
            <form onSubmit={this.onSubmitHandler(this.state.registration)}>
              <div className="form-group">
                <input 
                  className="form-control"
                  autoFocus type="text" placeholder="enter mail"
                  onChange={this.onMailChange}
                />
                {
                  this.state.mailValidationErrMsg &&
                  <small className="form-text text-danger">
                    {this.state.mailValidationErrMsg}
                  </small>
                }
              </div>
              <div className="form-group">
                <input 
                  className="form-control"
                  type="text" placeholder="enter password"
                  onChange={this.onPasswordChange}
                />
                {
                  this.state.passwordValidationErrMsg &&
                  <small className="form-text text-danger">
                    {this.state.passwordValidationErrMsg}
                  </small>
                }
              </div>
              <button type="submit" className="btn btn-primary"
                disabled={this.state.mailValidationErrMsg || this.state.passwordValidationErrMsg}
              >
                {this.state.registration ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <button 
              className="btn btn-primary"
              onClick={this.onSignInWithProviderHandler(this.props.pendingCredInfo.provider)}
            >
              Continue
            </button>
          </div>
        )}
      </Modal>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    modalVisibility: state.sessionSettings.showAuthorizationModal,
    pendingCredInfo: state.auth.pendingCredInfo
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => dispatch(showAuthorizationModal(false)),
    createUser: (email, password) => dispatch(startCreateUserWithEmailAndPassword(email, password)),
    startSignIn: (email, password) => dispatch(startSignInWithEmailAndPassword(email, password)),
    startSignInWithProvider: (provider, pendingCredInfo) => dispatch(startSignInWithProvider(provider, pendingCredInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationModal);