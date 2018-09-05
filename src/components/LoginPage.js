import React from "react";
import Modal from './Modal';
import AuthorizationComponent from "./AuthorizationComponent";
import Typed from 'typed.js';
import { connect } from "react-redux";

import { removePendingCredInfo } from "../actions/auth";

class LoginPage extends React.Component {
  state = {
    authModalVisible: false
  }

  componentDidMount() {
    const strings = ["simple tool, that allows you to create laboratory equipment database, which is invaluable for \
    managment proposals. Also it allows a librarian to create database of scope of accreditation \
    and link particulary sort of trials with nessesary equipment"];
    const options = {
    	strings: strings,
      typeSpeed: 30
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  onAuthModalShow = () => {
    this.setState({authModalVisible: true});
  }

  onAuthModalClose = () => {
    this.setState({authModalVisible: false});
    this.props.removePendingCredInfo();
  }

  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="row login-page__content">
            <div className="col-md login-page__description">
              <div className="d-flex align-items-center p-md-3 mb-5 mb-md-4">
                <img className="mr-3" src="/images/logo.svg" alt="logo" width="72" height="72"/>
                <div>
                  <h2 className="mb-0">VIQA</h2>
                  <small className="text-muted">app for testing laboratories</small>
                </div>
              </div>
              <p className="mx-5 mx-md-0 mb-5 mb-md-0">
                <span className="typed__background">
                  simple tool, that allows you to create laboratory equipment database, which is invaluable for 
                  managment proposals. Also it allows a librarian to create database of scope of accreditation 
                  and link particulary sort of trials with nessesary equipment
                </span>
                <span className="typed">
                  <span ref={(el) => { this.el = el; }} />
                </span>
              </p>
              <button 
                onClick={this.onAuthModalShow}
                className="btn btn-primary btn-lg"
              >
                Sign up / Sign in
              </button>
            </div>
            <div className="col-md login-page__auth">
              <AuthorizationComponent />
            </div>
          </div>
          <Modal 
            authModalVisible={this.state.authModalVisible}
            onAuthModalClose={this.onAuthModalClose}
            contentComponent={AuthorizationComponent}
          />
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removePendingCredInfo: () => dispatch(removePendingCredInfo())
  }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);
