import "./styles/Weather.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Weather from "./Components/Weather";
import CityWeather from "./Components/CityWeather";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Weather  />} />
        <Route path="/cityweather" element={<CityWeather />} />
      </Routes>
    </>
  );
}

export default App;
