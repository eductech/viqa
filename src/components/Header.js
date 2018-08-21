import React from 'react';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const getLastOpenedSection = () => {
    return props.lastOpenedSection ? props.lastOpenedSection : 'equipment';
  }

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h1 className="my-0 mr-md-auto font-weight-normal">VIQA</h1>
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
          to={`/dashboard/${getLastOpenedSection()}`} 
          activeClassName="selected"
          className="p-2 text-dark"
        >
          dashboard
        </NavLink>
      </nav>
    </header>
  );

}

export default Header;