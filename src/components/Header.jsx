import React from "react";
import { SpinnerDotted } from "spinners-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Header = ({ isPending }) => {
  return (
    <header className="Header flex-row">
      <h1> Where in the world?</h1>
      <p>Dark Mode</p>
    </header>
  );
};

export default Header;
