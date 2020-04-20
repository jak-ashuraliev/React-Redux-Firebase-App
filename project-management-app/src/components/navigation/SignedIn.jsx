import React from "react";
import { NavLink } from "react-router-dom";

const SignedIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Create Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating teal lighten-2">
          AD
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
