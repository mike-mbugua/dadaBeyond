import React from "react";
import "./events.css";

function Events({ image, desc }) {
  return (
    <div className="events__holder">
      <img src={image} alt="" />
      <p>{desc}</p>
      <button>View details</button>
    </div>
  );
}

export default Events;
