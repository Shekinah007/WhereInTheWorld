import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

const Card = (
  { name, capital, region, population, flag, id, isDarkMode },
  data
) => {
  // const { id } = useParams();

  return (
    <Link to={`/details/${id}`}>
      <div
        className="Card"
        style={{
          background: isDarkMode ? "hsl(209, 23%, 22%)" : "white",
          boxShadow: isDarkMode
            ? "-1px 2px 9px 1px rgba(32, 32, 32, 0.75)"
            : "-1px 2px 9px 1px rgba(216, 214, 214, 0.75)",
          // transition: "0.4s",
        }}
      >
        <img className="flag-image" src={flag} alt="flag" />
        <div className="card-text">
          <h2>{name}</h2>
          <div>
            <p>
              <b>Population:</b> {population}
            </p>
            <p>
              <b>Region:</b> {region}
            </p>
            <p>
              <b>Capital:</b> {capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
