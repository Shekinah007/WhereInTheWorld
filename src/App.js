import React, { useEffect, useState, CSSProperties } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { SpinnerDotted } from "spinners-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("Africa");
  const allResultsUrl = "https://restcountries.com/v3.1/all";
  const filterUrl = "https://restcountries.com/v3.1/region/" + filter;

  useEffect(() => {
    setIsPending(true);
    fetch(allResultsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].capital);
        setData(data.slice(0, 20));
        setIsPending(false);
      });
  }, []);

  useEffect(() => {
    setIsPending(true);
    fetch(allResultsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].capital);
        setData(data.slice(0, 20));
        setIsPending(false);
      });
  }, [filter]);
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/name/" + filter)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [filter]);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  console.log("Filter: ", filter);

  return (
    <div className="App">
      <Header />
      <SpinnerDotted enabled={isPending} />
      {/* <ClimbingBoxLoader
        color={"green"}
        loading={isPending}
        cssOverride={override}
        size={70}
      />
      <SpinnerDotted enabled={isPending} /> */}
      <div className="filters">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="filters">Filter By Region</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
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
                key={data.area}
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
    </div>
  );
}

export default App;
