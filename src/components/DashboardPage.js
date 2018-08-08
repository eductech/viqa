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
            to={`${match.url}/equipment`} 
            activeClassName="selected">
            One
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
        render={(props) => <One {...props} sectionChange={sectionChange}/>}
      />
      <Route 
        path={`${match.url}/scope`}  
        render={(props) => <Two {...props} sectionChange={sectionChange}/>}
      />
    </div>
  );
}

export default DashboardPage;
