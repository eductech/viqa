import React from "react";
import { Route, NavLink } from "react-router-dom";

// components
import One from "./One";
import Two from "./Two";

const DashboardPage = ({ match, sectionChange }) => {
  return (
    <div>
      <p>this is dashboard page</p>
      <ul>
        <li>
          <NavLink  
            to={`${match.url}/laboratory_equipment`} 
            activeClassName="selected">
            One
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={`${match.url}/laboratory_scope`} 
            activeClassName="selected">
            Two
          </NavLink>
        </li>
      </ul>
      <Route 
        path={`${match.url}/laboratory_equipment`}
        render={(props) => <One {...props} sectionChange={sectionChange}/>}
      />
      <Route 
        path={`${match.url}/laboratory_scope`}  
        render={(props) => <Two {...props} sectionChange={sectionChange}/>}
      />
    </div>
  );
}

export default DashboardPage;
