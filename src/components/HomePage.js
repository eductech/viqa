import React from "react";
import { connect } from 'react-redux';

import { startSignOut } from '../actions/auth';
import AuthorizationModal from "./AuthorizationModal";

const HomePage = (props) => {
  return (
    <div>
      <p>this is home</p>
      <button 
        className="btn btn-primary"
        onClick={props.startSignOut}
      >
        Sign Out
      </button>
      <AuthorizationModal />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSignOut: () => dispatch(startSignOut())
  }
}

export default connect(undefined, mapDispatchToProps)(HomePage);
