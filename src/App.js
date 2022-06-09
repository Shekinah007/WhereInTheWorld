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
  // const [name, setName] = useState("");
  const [filter, setFilter] = useState("Americas");
  const [search, setSearch] = useState("nigeria");
  const allResultsUrl = "https://restcountries.com/v3.1/all";
  const filterUrl = "https://restcountries.com/v3.1/region/" + filter;
  const searchUrl = "https://restcountries.com/v2/name/" + search;

  // Search--------------------------------------------
  useEffect(() => {
    setIsPending(true);
    fetch(searchUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Search Error");
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => console.log(error));
  }, [search]);

  // Filter --------------------------------------------------------------------
  useEffect(() => {
    setIsPending(true);
    fetch(filterUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      });
  }, [filter]);

  // All
  useEffect(() => {
    setIsPending(true);
    fetch(allResultsUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something Went wrong");
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <div className="spinner">
          {/* <SpinnerDotted enabled={isPending} /> */}
          <ClimbingBoxLoader
            color={"green"}
            loading={isPending}
            cssOverride={override}
            size={40}
          />
        </div>

        <Switch>
          <Route exact path="/">
            <div className="filters">
              <input
                placeholder="Search for a country..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search"
              />

              <select
                // value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="" hidden>
                  Filter by region
                </option>
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
            {data && <Details data={data} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
