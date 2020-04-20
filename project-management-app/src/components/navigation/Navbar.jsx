import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
  return (
    <nav className="nav-wrapper pink lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project M
        </Link>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  );
};

export default Navbar;
