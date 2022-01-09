import React, { useState } from "react";
import Cards from "./Cards";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "a7018c6c";
  const YOUR_APP_KEY = "c3ec7d8e93fa5409dddae150dbbbe0fd";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div>
      <center>
        <h4>Food recipe App</h4>
        <br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <br />
          <br />
          <input
            type="submit"
            value="search"
            className="btn btn-primary"
          ></input>
        </form>
        {data.length >= 1 ? <Cards data={data} /> : null}
      </center>
    </div>
  );
}

export default App;
