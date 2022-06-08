import React from "react";
import { useParams, useHistory } from "react-router";
import Header from "./Header";
import { Link } from "react-router-dom";

const Details = ({ data }) => {
  const { id } = useParams();
  let name = "";
  let nativeName = "";
  let flag = "";
  let population = "";
  let region = "";
  let subregion = "";
  let capital = "";
  let topLevelDomain = "";
  let currencies = [];
  let languages = [];
  let borderCountries = [];

  data.forEach((card) => {
    if (card.area == id) {
      name = card.name.official;
      region = card.region;
      capital = card.capital ? card.capital[0] : "None";
      population = card.population;
      flag = card.flags.svg;
      subregion = card.subregion;
      topLevelDomain = card.tld[0];
      currencies = card.currencies[Object.keys(card.currencies)[0]].name;
      nativeName =
        card.name.nativeName[Object.keys(card.name.nativeName)[0]].common;
    }
  });
  // console.log(languages);
  return (
    <div className="Details">
      <article>
        <div className="img-link">
          <Link to="/">
            <button className="btn">Back</button>
            <div class="flex-space-between">{/* <im src="" */}</div>
          </Link>
          <img src={flag} alt="" className="details-img" />
        </div>
        <div className="details-text">
          <p>{name}</p>
          <p>Top Level Domain: {topLevelDomain}</p>
          <p>Here is currencies {currencies}</p>
          <p>Native name: {nativeName}</p>
        </div>
      </article>
    </div>
  );
};

export default Details;
