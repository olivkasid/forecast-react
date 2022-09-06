import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div id="current-weather">{props.value}</div>
    </div>
  );
}
