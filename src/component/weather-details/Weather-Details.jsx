import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { selectedWeatherCity } from "../../redux-store/actions/Actions";
import MapView from "../map/MapView";
import "./Weather-Details.css";

const WeatherDetails = (props) => {
  var id = props.location.state.id;
  console.log("Console Id", id);
  // console.log(props.location.state);

  const weather = useSelector((state) => state).allWeathers.weathers.list;
  const pr = weather && weather.filter((item) => item.id == id)[0];
  // console.log("Pr => ", pr)
  // console.log(typeof pr);

  // console.log("Pr Main ==> ", pr.main);

  const min = Math.trunc((pr.main.temp_min - 273.15).toFixed(2));
  const max = Math.trunc((pr.main.temp_max - 273.15).toFixed(2));
  const celsius = Math.trunc((pr.main.temp - 273.15).toFixed(2));

  const lat = pr.coord.lat;
  const lon = pr.coord.lon;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    // console.log("ID++", id);
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=0e7dac43043571373272c117217d12db`
      )
      .catch((err) => {
        console.log("Error ==> ", err);
      });
    console.log("Response ==> ", response.data);
    dispatch(selectedWeatherCity(response.data));
  };

  return (
    <div>
      {Object.keys(weather).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="map">
            <MapView className="mapStyle" lat={lat} lon={lon} />
          </div>
          <div className="weatherDetail">
            <div className="weatherDdetail-info">
              <h1>{pr.name}</h1>
              <p>{pr.weather[0].description}</p>
              <p>Humidity: {pr.main.humidity}</p>
              <p>Wind Speed: {pr.wind.speed}</p>
              <p>Min.Temp.: {min}°C</p>
              <p>Max.Temp: {max}°C</p>
            </div>
            <div className="weatherDetail-temperature">
              <p>{celsius}°C</p>
              <img src="https://i.pinimg.com/736x/c3/55/87/c35587a5a68196015d9365ca2c0fd25e.jpg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
