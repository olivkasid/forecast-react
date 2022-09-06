import React from "react";

export default function City(props) {
  return (
    <div className="City">
      <div class="current-city">{props.value}</div>
    </div>
  );
}
