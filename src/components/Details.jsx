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
      topLevelDomain = card.tld ? card.tld[0] : "None";
      currencies = card.currencies[Object.keys(card.currencies)[0]].name;
      nativeName =
        card.name.nativeName[Object.keys(card.name.nativeName)[0]].common;
    }
  });
  // console.log(languages);
  return (
    <div className="Details">
      <article>
        <div className="imgAndLink">
          <Link to="/">
            <button className="btn">Back</button>
          </Link>
          <img src={flag} alt="" className="details-img" />
        </div>
        <div className="details-text">
          <h2>{name}</h2>
          <div className="details-middle">
            <div className="middle-left">
              <p>
                <b>Native Name: </b>
                {nativeName}
              </p>
              <p>
                <b>Population: </b> {population}{" "}
              </p>
              <p>
                <b>Region: </b> {region}{" "}
              </p>
              <p>
                <b>Sub Region: </b> {subregion}{" "}
              </p>
              <p>
                <b>Capital: </b> {capital}{" "}
              </p>
            </div>
            <div class="middle-right">
              <p>
                <b>Top Level Domain: </b> {topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b> {currencies}
              </p>
              {/* <p><b>Top Level Domain: </b> {topLevelDomain}</p> */}
            </div>
          </div>
          <div>
            <button>France</button>
            <button>France</button>
            <button>France</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Details;
