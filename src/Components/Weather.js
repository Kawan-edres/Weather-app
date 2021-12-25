import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Weather() {
  //states
  const [location, setLocation] = useState("Arbil");
  const [weather, setWeather] = useState({});
  const navigate = useNavigate();

  const API_KEY = "9290ad272ab345da8a8150146212412";
  const updateWeather = async () => {
    const result = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
    const data = await result.json();
    const newWeather = {
      name: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
    };

    setWeather(newWeather);
  };

  useEffect(updateWeather, [location]);

  return (
    <div className="weather-app">
      <h1>weather app</h1>
    <div className="container">

  
      <label htmlFor="input" className="lab">
        City
        <input
          type="text"
          id="input"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </label>
     
      
      <button onClick={(e) => navigate("/cityweather", { state: weather })}>
        
        Enter
      </button>
      </div>
      {/* <CityWeather
        city={weather.name}
        country={weather.country}
        localtime={weather.localtime}
        icon={weather.icon}
        temp={weather.temp}
      /> */}
    </div>
  );
}

export default Weather;
