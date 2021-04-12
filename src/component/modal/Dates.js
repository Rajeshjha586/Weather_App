import React, { Component } from "react";

import { render } from "react-dom";
import "./Dates.css";

class Dates extends Component {
  constructor(props) {
    super(props);

    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date(),
      date =
        monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        " " +
        today.getFullYear();

    var todayT = new Date(),
      time = todayT.getHours() + ":" + todayT.getMinutes();

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var d = new Date();
    var dayName = days[d.getDay()];

    this.state = {
      currentDate: date,
      currentTime: time,
      currentDay: dayName,
    };
  }

  render() {
    return (
      <div className="mainDiv">
        <div className="times">{this.state.currentTime}</div>
        <div className="Days">
          <p>{this.state.currentDay.toUpperCase()}</p>
          <p>{this.state.currentDate}</p>
        </div>
      </div>
    );
  }
}

export default Dates;
