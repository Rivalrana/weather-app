import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const api = {
  key: "058599832c11c0c744aae58ce6db2240",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Weather</h1>
          <p>Use this site to get your Weather!</p>
          <input
            type="text"
            placeholder="Location.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
          {weather.main && weather.main.temp && (
            <div>
              <p>
                It is currently {weather.main.temp} degrees out. There is{" "}
                {weather.main.humidity}% humidity.
              </p>
            </div>
          )}
        </div>
        <div className="copy-right">&copy;Rival Rana all right reserved</div>
      </header>
    </div>
  );
}

export default App;
