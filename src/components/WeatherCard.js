import React from "react";
import "./WeatherCard.css";
  function fetchName(id)
  {
    if(id>=200 && id<=232)
    {
      return "storm";
    }
    else if(id>=500 && id<=531)
    {
      return "rain";
    }
    else if(id>=600 && id<=632)
    {
      return "snow";
    }
    else if(id>700 && id<=781)
    {
      return "haze";
    }
    else if(id>800 && id<=804)
    {
      return "cloud";
    }
    return "clear";
  }
function WeatherCard(props) {
  const name=fetchName(parseInt(props.weatherData.id));
  return (
    <div className="WeatherCard">
      <div className="topBar">
        <i className="bx bx-left-arrow-alt" onClick={props.handleToggleForm}></i>
        <h3>Weather App</h3>
      </div>
      <div className="mid">
        <div>
        <img
    src={require(`../assets/${name}.svg`)}
    alt="triangle with all three sides equal"
    height="150"
    width="150" />
          <h1>{props.weatherData.temperature}&deg;C</h1>
         <p>{props.weatherData.description}</p> 
        </div>
        <div className="mid-bottom">
        <i className='bx bxs-map'></i>
        <p>{props.weatherData.place},{props.weatherData.country}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <i className="bx bxs-thermometer"></i>
          <div>
            <h5>{props.weatherData.feelsLike}&deg;C</h5>
            <h5>Feels like</h5>
          </div>
        </div>
        <div className="bottom-right">
          <i className="bx bxs-droplet-half"></i>
          <div>
            <h5>{props.weatherData.humidity}%</h5>
            <h5>Humidity</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
