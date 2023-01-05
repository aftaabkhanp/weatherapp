import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import WeatherCard from "./components/WeatherCard";
import spinner from "./assets/Rolling-1s-200px.gif";

function App() {
  const [isForm, setisForm] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = (status) => {
    console.log("loading");
    setIsLoading(status);
  };
  const handleToggleForm = () => {
    setisForm((prev) => !prev);
  };
  const handleWeather = (data) => {
    setWeatherData(data);
    setisForm((prev) => !prev);
  };

  return (
    <div className="App">
      {!isLoading && !isForm && (
        <InputForm fetchWeather={handleWeather} handleLoading={handleLoading} />
      )}
      {!isLoading && isForm && (
        <WeatherCard
          handleToggleForm={handleToggleForm}
          weatherData={weatherData}
        />
      )}
      {isLoading && 
      <div className="InputForm">
        <img src={spinner} alt="spinning logo" className="spinner-gif"></img>
        </div>}
    </div>
  );
}

export default App;
