import React from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

const Card = ({ name, capital, region, population, flag, id }, data) => {
  // const { id } = useParams();

  return (
    <Link to={`/details/${id}`}>
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
    </Link>
  );
};

export default Card;
