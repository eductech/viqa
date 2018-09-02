import React from "react";
import { Link } from "react-router-dom";

class ScopeList extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center private-page__content scope">
        <p className="scope__content">
          sorry, this section is under construction, <Link to="/equipment">go back to equipment section</Link>
        </p>
      </div>
    );
  }
}

export default ScopeList;