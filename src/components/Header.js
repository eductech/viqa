import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>VIQA</h1>
      <NavLink exact to="/" activeClassName="selected">home</NavLink>
      <NavLink to="/dashboard" activeClassName="selected">dashboard</NavLink>
    </header>
  );
}

export default Header;