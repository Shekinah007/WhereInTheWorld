import React from "react";
import { useParams, useHistory } from "react-router";
import Header from "./Header";
import { Link } from "react-router-dom";

const Details = ({ data, isSearch, isDarkMode }) => {
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

  let borderCountriesCard = [];

  data.forEach((card) => {
    if (card.area == id) {
      name = card.name.official ? card.name.official : card.name;
      region = card.region;
      capital = card.capital ? card.capital : "None";
      population = card.population;
      flag = card.flags.svg;
      subregion = card.subregion;
      topLevelDomain = card.tld ? card.tld[0] : card.tld ? card.tld : "None";
      currencies = card.currencies[Object.keys(card.currencies)[0]].name;
      nativeName = card.name.nativeName
        ? card.name.nativeName[Object.keys(card.name.nativeName)[0]].common
        : card.nativeName;
      borderCountries = card.borders ? card.borders : [];
      languages = card.languages;
    }
  });
  console.log("Languages: ", languages);
  for (let i = 0; i < borderCountries.length; i++) {
    data.forEach((card) => {
      if (borderCountries[i] === card.cca3) {
        borderCountriesCard.push(card);
        console.log("Country Name: ", card.name.common);
      }
    });
  }
  console.log();
  console.log("Border: ", borderCountriesCard);

  return (
    <div className="Details" style={{ color: isDarkMode ? "white" : "black" }}>
      <article>
        <div className="imgAndLink">
          <Link to="/WhereInTheWorld">
            <button
              className="btn back"
              style={{
                boxShadow: isDarkMode
                  ? "-1px 2px 9px 1px rgba(32, 32, 32, 0.75)"
                  : "-1px 2px 9px 1px rgba(216, 214, 214, 0.75)",
              }}
            >
              Back
            </button>
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
            <h3>Border Countries:</h3>
            {borderCountries &&
              borderCountriesCard.map((country) => {
                return (
                  <button
                    className="borderCountries"
                    style={{
                      boxShadow: isDarkMode
                        ? "-1px 2px 9px 1px rgba(32, 32, 32, 0.75)"
                        : "-1px 2px 9px 1px rgba(216, 214, 214, 0.75)",
                    }}
                  >
                    <Link to={`/details/${country.area}`}>
                      {country.name.common}
                    </Link>
                  </button>
                );
              })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Details;
