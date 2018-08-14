import React from "react";
import { Route, NavLink } from "react-router-dom";

// components
import EquipmentList from "./EquipmentList";
import Two from "./Two";

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
            Two
          </NavLink>
        </li>
      </ul>
      <Route 
        path={`${match.url}/equipment`}
        render={(props) => <EquipmentList {...props} sectionChange={sectionChange}/>}
      />
      <Route 
        path={`${match.url}/scope`}  
        render={(props) => <Two {...props} sectionChange={sectionChange}/>}
      />
    </div>
  );
}

export default DashboardPage;
