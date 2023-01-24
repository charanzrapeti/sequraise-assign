import React from "react";

export function Details({ event, url }) {
  return (
    <>
      <div className="details">
        <h1>{event.ID}</h1>
        <h3>Person Detected</h3>

        <li>Name :{event.Name}</li>

        <li>Location :{event.Location}</li>

        <li>Date :{event.Date}</li>

        <li>Time :{event.Time}</li>
        <br></br>
        <br></br>
        <p>Description:</p>
        <li>{event.Name} Detected at chennai</li>
        <li>on {event.Date}</li>
      </div>
      <div class="image">
        <h3>{event.Gender}</h3>
        <img src={url} alt="" />
      </div>
    </>
  );
}
