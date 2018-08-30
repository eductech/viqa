import React from "react";
import AuthorizationModal from './AuthorizationModal';
import AuthorizationComponent from "./AuthorizationComponent";

class LoginPage extends React.Component {
  state = {
    authModalVisible: false
  }

  onAuthModalShow = () => {
    this.setState({authModalVisible: true});
  }

  onAuthModalClose = () => {
    this.setState({authModalVisible: false})
  }

  render() {
    return (
      <div className="container">
        <div className="row login-page">
          <div className="col-md login-page__description">
            <h1 className="color-primary">VIQA</h1>
            <p>app for managment laboratory equipment</p>
            <p>
              simple tool, that allows you to create laboratory equipment database, which is invaluable for
              managment proposals. Also it allows a librarian to create database of scope of accreditation
              and link particulary sort of trials with nessesary equipment
            </p>
            <button 
              onClick={this.onAuthModalShow}
              className="btn btn-outline-primary btn-lg"
            >
              Sign up / Sign in
            </button>
          </div>
          <div className="col-md login-page__auth">
            <AuthorizationComponent />
          </div>
        </div>
        <AuthorizationModal 
          authModalVisible={this.state.authModalVisible}
          onAuthModalClose={this.onAuthModalClose}
        />
      </div>
    )
  }
}

export default LoginPage;
