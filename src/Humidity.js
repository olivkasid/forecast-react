import React from "react";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <div class="current-humidity">
        Humidity:
        <span id="current-humidity">{props.value}%</span>
      </div>
    </div>
  );
}
