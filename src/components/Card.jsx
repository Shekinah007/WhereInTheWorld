import React from "react";

const Card = ({ name, capital, region, population, flag }) => {
  return (
    <a href="#">
      <div className="Card">
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
    </a>
  );
};

export default Card;
