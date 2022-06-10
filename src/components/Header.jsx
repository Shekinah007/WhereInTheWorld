import React from "react";
import { SpinnerDotted } from "spinners-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Header = ({ isPending, isDarkMode, handleTheme }) => {
  const divStyles = {
    boxShadow: "1px 2px 9px #F4AAB9",
    margin: "4em",
    padding: "1em",
  };
  return (
    <header
      className="Header flex-row"
      style={{
        background: isDarkMode ? "hsl(209, 23%, 22%)" : "white",
        boxShadow: isDarkMode
          ? "-1px 2px 9px 1px rgba(32, 32, 32, 0.75)"
          : "-1px 2px 9px 1px rgba(216, 214, 214, 0.75)",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h1> Where in the world?</h1>
      <p onClick={handleTheme}>{isDarkMode ? "Light Mode" : "Dark Mode"} </p>
    </header>
  );
};

export default Header;
