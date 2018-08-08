import React from 'react';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const getLastOpenedSection = () => {
    return props.lastOpenedSection ? props.lastOpenedSection : 'equipment';
  }

  return (
    <header>
      <h1>VIQA</h1>
      <NavLink exact to="/" activeClassName="selected">home</NavLink>
      <NavLink 
        to={`/dashboard/${getLastOpenedSection()}`} 
        activeClassName="selected">
        dashboard
      </NavLink>
    </header>
  );

}

export default Header;