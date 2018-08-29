import React from "react";
import AuthorizationModal from './AuthorizationModal';

class LoginPage extends React.Component {
  state = {
    authModalVisible: false
  }

  onAuthModalVisible = () => {
    this.setState({authModalVisible: true});
    console.log(this.state.authModalVisible);
    
  }

  render() {
    return (
      <div className="login-page">
        <h1 className="color-primary">VIQA</h1>
        <p>app for managment laboratory equipment</p>
        <p>
          simple tool, that allows you to create laboratory equipment database, which is invaluable for
          managment proposals. Also it allows a librarian to create database of scope of accreditation
          and link particulary sort of trials with nessesary equipment
        </p>
        <button 
          onClick={this.onAuthModalVisible}
          className="btn btn-outline-primary"
        >
          Sign up / Sign in
        </button>
        <AuthorizationModal modalVisibility={this.state.authModalVisible}/>
      </div>
    )
  }
}

export default LoginPage;
