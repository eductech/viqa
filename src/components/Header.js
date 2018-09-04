import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import $ from 'jquery';
import { startSignOut } from "../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faFileAlt, faVial, faFolderOpen, faTasks } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  componentWillMount() {
    this.setMobileIcons();
  }

  componentDidMount() {
    window.addEventListener("resize", this.setMobileIcons);
  }  

  componentWillUnmount() {
    window.removeEventListener("resize", this.setMobileIcons);
  }

  setMobileIcons = () => {
    ($(window).width() <= 570) ? this.setState({mobileIcons: true}) : this.setState({mobileIcons: false});
  }

  render() {
    return (
      <header className="d-flex flex-row align-items-center p-3 bg-white border-bottom shadow-sm header">
        <div className="d-flex align-items-center ml-2 header__logo">
          <img className="mr-3" src="/images/logo.svg" alt="logo" width="72" height="72"/>
          <div>
            <h2 className="mb-0">VIQA</h2>
            <small className="text-muted">app for testing laboratories</small>
          </div>
        </div>
        <nav className="m-auto header__nav">
          <NavLink 
            to='/equipment' 
            activeClassName="selected"
            className="mx-3 text-dark header-navlink"
            title="equipment"
          >
            <FontAwesomeIcon icon={faVial} />{this.state.mobileIcons ? "" : " equipment"}
          </NavLink>
          <NavLink 
            to='/scope' 
            activeClassName="selected"
            className="mx-3 text-dark header-navlink"
            title="scope"
          >
            <FontAwesomeIcon icon={faFileAlt} />{this.state.mobileIcons ? "" : " scope"}
          </NavLink>
          <NavLink 
            to='/protocols' 
            activeClassName="selected"
            className="mx-3 text-dark header-navlink"
            title="protocols"
          >
            <FontAwesomeIcon icon={faFolderOpen} />{this.state.mobileIcons ? "" : " protocols"}
          </NavLink>
          <NavLink 
            to='/tasks' 
            activeClassName="selected"
            className="mx-3 text-dark header-navlink"
            title="tasks"
          >
            <FontAwesomeIcon icon={faTasks} />{this.state.mobileIcons ? "" : " tasks"}
          </NavLink>
        </nav>
        <button 
          className="btn btn-danger mr-4 header__button"
          onClick={this.props.startSignOut}
          title="sign out"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSignOut: () => dispatch(startSignOut())
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(Header));