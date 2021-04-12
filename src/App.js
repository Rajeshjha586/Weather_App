import React from "react";
import Header from "./component/header/Header.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WeatherListing from "./component/weatherListing/WeatherListing.jsx";
import WeatherDetails from "./component/weather-details/Weather-Details.jsx";
import ModalNotification from "./component/modal/ModalNotification.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ModalNotification />
        <Switch>
          <Route path="/" exact component={WeatherListing} />
          <Route path="/weather/:id" exact component={WeatherDetails} />
          <Route>OOPs.. 404! Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
