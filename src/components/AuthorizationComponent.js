import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { googleAuthProvider, githubAuthProvider } from '../firebase/firebase';
import { 
  startCreateUserWithEmailAndPassword,
  startSignInWithEmailAndPassword,
  startSignInWithProvider,
  removePendingCredInfo
} from '../actions/auth';

class AuthorizationComponent extends React.Component {
  state = {
    registration: true,
    mail: '',
    password: '',
    mailValidationErrMsg: 'please enter your email',
    passwordValidationErrMsg: 'please enter your password',
    showPassword: false
  }

  onShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
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
    } else if (this.state.registration && !password.match(/.{8,}/)) {
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
      let pendingCredInfoEmail = undefined;
      try {
        pendingCredInfoEmail = this.props.pendingCredInfo.email;
      } catch (error) {
        
      }
      !pendingCredInfoEmail ? (
        submitHandler(
          this.state.mail,
          this.state.password,
        )
      ) : (
        submitHandler(
          this.props.pendingCredInfo.email,
          this.state.password,
          this.props.pendingCredInfo
        )
      );
    }
  }

  onSignInWithProviderHandler = (provider) => {
    return () => {
      this.props.startSignInWithProvider(provider, this.props.pendingCredInfo)
    }
  }

  onShowRegistrationForm = (registration) => {
    return () => {
      this.setState({registration});
    }
  }

  render() {
    return (
      <div className="authorization">
        {!this.props.pendingCredInfo ? (
          <div>
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
                  autoFocus type="text" placeholder="email"
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
                <div className="input-group">
                  <input 
                    className="form-control"
                    type={this.state.showPassword ? "text" : "password"} 
                    placeholder="password"
                    onChange={this.onPasswordChange}
                  />
                  <div className="input-group-append" onClick={this.onShowPassword}>
                    <span className="input-group-text">
                      {this.state.showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                    </span>
                  </div>
                </div>
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
          !this.props.pendingCredInfo.email ? (
            <div className="d-flex flex-column align-items-center text-muted font-weight-bold">
              <p className="text-center">
                Account already exists with different credentials.
                Click continue button to setup new sign in method.
              </p>
              <div className="d-flex flex-row justify-content-around w-100">
                <button 
                  className="btn btn-danger"
                  onClick={this.props.removePendingCredInfo}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSignInWithProviderHandler(this.props.pendingCredInfo.provider)}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center text-muted font-weight-bold">
              <p className="text-center">
                Account already exists with different credentials.
                Provide your password and click continue button to setup new sign in method.
              </p>
              <form onSubmit={this.onSubmitHandler(false)}>
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
                <div className="d-flex flex-row justify-content-around w-100">
                  <button 
                    className="btn btn-danger"
                    onClick={this.props.removePendingCredInfo}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pendingCredInfo: state.auth.pendingCredInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, password) => dispatch(startCreateUserWithEmailAndPassword(email, password)),
    startSignIn: (email, password, pendingCredInfo) => dispatch(startSignInWithEmailAndPassword(email, password, pendingCredInfo)),
    startSignInWithProvider: (provider, pendingCredInfo) => dispatch(startSignInWithProvider(provider, pendingCredInfo)),
    removePendingCredInfo: () => dispatch(removePendingCredInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationComponent);
