import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

function CityWeather(props) {

  const location = useLocation();
  const navigate=useNavigate();

  return (
    <>
      <div className="city">
        <h1>
          {location?.state?.name || props.city},
          {location?.state?.country || props.country}
        </h1>
        <h2>{location?.state?.localtime || props.localtime}</h2>
        <img
          src={location?.state?.icon || props.icon}
          alt={location?.state?.location || props.location}
        />
        <h1>{location?.state?.temp || props.temp} C°</h1>
        <button onClick={()=>navigate("/")}>back</button>   
      </div>
    </>
  );
}

export default CityWeather;
