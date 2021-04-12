import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./WeatherComponent.css";
import { TableContainer } from "@material-ui/core";
import ModalNotification from "../modal/ModalNotification";

const WeatherComponent = () => {
  const weathers = useSelector((state) => state).allWeathers.weathers.list;
  console.log("Component Console ==> ", weathers);

  //map the data which is present in array
  const lists =
    weathers &&
    weathers.map((data) => {
      console.log("Data ==> ", data);
      //Destructured
      const celsius = Math.trunc((data.main.temp - 273.15).toFixed(2));
      const { id, name } = data;
      // console.log("id", id);

      return (
        <Link
          to={{ pathname: `/weather/${id}`, state: { id: id } }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="weather" key={id}>
            <div className="weather-country">
              <h1>{name}</h1>
              <p>{data.weather[0].description}</p>
            </div>
            <div className="weather-temperature">
              <p>{celsius}°C</p>
            </div>
          </div>
        </Link>
      );
    });

  return <div>{lists}</div>;
};

export default WeatherComponent;
