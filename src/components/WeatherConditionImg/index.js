import React from "react";

import Cloud from "../../assets/weather_condition/Cloud.png";
import Clouds from "../../assets/weather_condition/Clouds.png";
import Rain from "../../assets/weather_condition/Rain.png";
import Clear from "../../assets/weather_condition/Clear.png";

const WeatherConditionImg = ({ condition }) => {
  switch (condition) {
    case "Cloud":
      return <img src={Cloud} alt="Cloud" />;
    case "Clouds":
      return <img src={Clouds} alt="Clouds" />;
    case "Rain":
      return <img src={Rain} alt="Rain" />;
    case "Clear":
      return <img src={Clear} alt="Clear" />;
    default:
      return { condition };
  }
};

export default WeatherConditionImg;
