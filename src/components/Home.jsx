import React from "react";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
