import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <p>Sorry, that page doesn't exist, <Link to="/">click here to go to the main page</Link></p>
    </div>
  );
}

export default Page404;
