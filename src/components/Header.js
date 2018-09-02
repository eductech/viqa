import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { startSignOut } from "../actions/auth";

const Header = (props) => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h3 className="my-0 mr-md-auto font-weight-normal">VIQA</h3>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink 
          to='/equipment' 
          activeClassName="selected"
          className="p-2 text-dark"
        >
          equipment
        </NavLink>
        <NavLink 
          to='/scope' 
          activeClassName="selected"
          className="p-2 text-dark"
        >
          scope
        </NavLink>
      </nav>
      <button 
        className="btn btn-outline-primary"
        onClick={props.startSignOut}
      >
        Sign out
      </button>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSignOut: () => dispatch(startSignOut())
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(Header));