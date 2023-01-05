import React, { useState } from "react";
import GetDeviceLocation from "./GetDeviceLocation";
import HrWithText from "./HrWithText";
import "./InputForm.css";
function InputForm(props) {
  const [city, setCity] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const handleOnchageInput = (event) => {
    setCity(event.target.value);
    setIsError(false);
    if (event.target.value.length < 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  const handleFormSubmit = (event) => {
    props.handleLoading(true);
    event.preventDefault();
    const str = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d57956a3759d44b141a367000d3ebb9&units=metric`;
    fetch(str)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cod >= "400") {
          setIsError(true);
          setCity("");
        } else {
          var newData = {
            cod: data.cod,
            place: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
            id: data.weather[0].id,
          };

          props.fetchWeather(newData);
          props.handleLoading(false);
        }
      })
      .catch((error) => {
        props.handleLoading(false);
      });
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return;
    }
  }

  function showPosition(position) {
    props.handleLoading(true);
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    const str = `https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=8d57956a3759d44b141a367000d3ebb9&units=metric`;
    fetch(str)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cod >= "400") {
          setIsError(true);
          setCity("");
        } else {
          var newData = {
            cod: data.cod,
            place: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
            id: data.weather[0].id,
          };
          props.fetchWeather(newData);
        }
      })
      .catch((error) => {
        props.handleLoading(false);
      });
    props.handleLoading(false);
  }
  return (
    <div className="InputForm">
      <h3>Weather App</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Enter city name :</label>
        <br></br>
        <input type="text" value={city} onChange={handleOnchageInput} />
        <br></br>
        <br></br>
        {isError && <p id="error">Please enter a valid city name</p>}
        <button type="submit" disabled={isDisabled}>
          Get Weather
        </button>
      </form>
      <HrWithText content="OR" />
      <GetDeviceLocation onClick={getLocation} />
    </div>
  );
}

export default InputForm;
