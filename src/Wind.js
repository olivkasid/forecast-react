import React from "react";

export default function Wind(props) {
  return (
    <div className="Wind">
      <div class="current-wind">
        Wind: <span id="current-wind">{props.value} km/h</span>
      </div>
    </div>
  );
}
