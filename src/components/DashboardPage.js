import React from "react";
import { Route, NavLink } from "react-router-dom";

// components
import EquipmentList from "./EquipmentList";
import ScopeList from "./ScopeList";

const DashboardPage = ({ match, sectionChange }) => {
  return (
    <div>
      <p>this is dashboard page</p>
      <ul>
        <li>
          <NavLink  
            to={`${match.url}/equipment`} 
            activeClassName="selected">
            Equipment
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={`${match.url}/scope`} 
            activeClassName="selected">
            ScopeList
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.url}/equipment`} component={EquipmentList} />
      <Route path={`${match.url}/scope`} component={ScopeList} />
    </div>
  );
}

export default DashboardPage;
