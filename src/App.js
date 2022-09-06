import React from "react";
import "./styles.css";

import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Weather from "./Weater";
import Humidity from "./Humidity";
import Wind from "./Wind";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form id="search-form">
        <div class="search-field">
          <input type="text" placeholder="Enter a city" id="search" />
          <input type="submit" id="search-submit" value="Search" />
        </div>
      </form>
      <div class="main">
        <div class="main-forecast">
          <City value="Milan" />
          <Date hours={14} minutes={20} />
          <div class="temperature">
            <div class="icon">
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Sun"
                id="main-icon"
              />
            </div>
            <Temperature value={27} />
          </div>
          <Weather value="Sunny" />
          <Humidity value={15} />
          <Wind value={6} />
        </div>
      </div>

      <div class="container cards-container">
        <div class="row">
          <div class="col">
            <div class="day-card">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="sun"
                class="card-img"
              />
              <div class="day">Mon</div>
              <div class="day-weather">Sunny</div>
              <div class="day-temperature">21°C</div>
            </div>
          </div>
          <div class="col">
            <div class="day-card">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="rain"
                class="card-img"
              />
              <div class="day">Tue</div>
              <div class="day-weather">Rainy</div>
              <div class="day-temperature">18°C</div>
            </div>
          </div>
          <div class="col">
            <div class="day-card">
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="wind"
                class="card-img"
              />
              <div class="day">Wed</div>
              <div class="day-weather">Windy</div>
              <div class="day-temperature">25°C</div>
            </div>
          </div>
          <div class="col">
            <div class="day-card">
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="sun"
                class="card-img"
              />
              <div class="day">Thu</div>
              <div class="day-weather">Sunny</div>
              <div class="day-temperature">20°C</div>
            </div>
          </div>
          <div class="col">
            <div class="day-card">
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="wind"
                class="card-img"
              />
              <div class="day">Fri</div>
              <div class="day-weather">Windy</div>
              <div class="day-temperature">23°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
