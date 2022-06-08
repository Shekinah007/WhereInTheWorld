import React, { useEffect, useState, CSSProperties } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { SpinnerDotted } from "spinners-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("Africa");
  const [search, etSearch] = useState("");
  const allResultsUrl = "https://restcountries.com/v3.1/all";
  const filterUrl = "https://restcountries.com/v3.1/region/" + filter;
  const searchUrl = "https://restcountries.com/v2/name/" + search;

  // All
  useEffect(() => {
    setIsPending(true);
    fetch(allResultsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].capital);
        setData(data);
        setIsPending(false);
      });
  }, []);

  // Filter
  useEffect(() => {
    console.log("SelectFilter: ", filter);
    setIsPending(true);
    fetch(filterUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].capital);
        setData(data);
        setIsPending(false);
      });
  }, [filter]);

  //Search by name--------------------------------------
  useEffect(() => {
    console.log("SelectFilter: ", filter);
    setIsPending(true);
    fetch(filterUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].capital);
        setData(data);
        setIsPending(false);
      });
  }, [search]);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  console.log("Filter: ", filter);

  return (
    <Router>
      <div className="App">
        <Header />
        <SpinnerDotted enabled={isPending} />
        <ClimbingBoxLoader
          color={"green"}
          loading={isPending}
          cssOverride={override}
          size={70}
        />
        <Switch>
          <Route exact path="/">
            <div className="filters">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="filters">Filter By Region</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
            <main>
              {data &&
                data.map((data, index) => {
                  return (
                    <Card
                      key={index}
                      id={data.area}
                      name={data.name.official}
                      // capital={data.capital[0]}
                      capital={data.capital ? data.capital[0] : "None"}
                      population={data.population}
                      region={data.region}
                      flag={data.flags.svg}
                    />
                  );
                })}
            </main>
          </Route>
          <Route exact path="/details/:id">
            <Details data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
