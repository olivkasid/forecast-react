import React from "react";

export default function Date(props) {
  return (
    <div className="Date">
      <div class="current-date">
        Last updated at:
        <span id="date">
          {props.hours}:{props.minutes}
        </span>
      </div>
    </div>
  );
}
