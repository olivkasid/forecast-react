import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span class="temperature-degrees">{props.value}°C</span>
    </div>
  );
}
