import React from "react";
import { Route, NavLink } from "react-router-dom";

// components
import One from "./One";
import Two from "./Two";

const DashboardPage = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${match.url}/laboratory_equipment`}>One</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/laboratory_scope`}>Two</NavLink>
        </li>
      </ul>
      <Route path={`${match.url}/laboratory_equipment`} component={One} />
      <Route path={`${match.url}/laboratory_scope`} component={Two} />
    </div>
  );
}

export default DashboardPage;
