import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import WeatherComponent from "../weather-component/WeatherComponent";
import { setWeatherData } from "../../redux-store/actions/Actions";
const WeatherListing = () => {
  const weathers = useSelector((state) => state).allWeathers.weathers;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const response = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=0e7dac43043571373272c117217d12db`
      )
      .catch((err) => {
        console.log("Error --> ", err);
      });

    console.log("Response-Data ==> ", response.data);

    //Dispatch an action
    dispatch(setWeatherData(response.data));
  };

  // console.log("WeatherData ===> ", weathers);
  return (
    <div>
      <WeatherComponent />
    </div>
  );
};

export default WeatherListing;
