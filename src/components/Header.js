import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showAuthorizationModal } from "../actions/sessionSettingsActions";

const Header = (props) => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h3 className="my-0 mr-md-auto font-weight-normal">VIQA</h3>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink 
          exact 
          to="/" 
          activeClassName="selected"
          className="p-2 text-dark"
        >
          home
        </NavLink>
        <NavLink 
          to={`/dashboard/${props.lastOpenedList}`} 
          activeClassName="selected"
          className="p-2 text-dark"
        >
          dashboard
        </NavLink>
      </nav>
      <button 
        className="btn btn-outline-primary"
        onClick={props.showAuthorizationModal}
      >
        Sign up / Sign in
      </button>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    lastOpenedList: state.sessionSettings.lastOpenedList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthorizationModal: () => dispatch(showAuthorizationModal(true))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));