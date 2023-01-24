import React from "react";

export function ExpenseList({ events, handleClick }) {
  return (
    <>
      <div className="events-list">
        <h3>Events</h3>
        {events.map((event, i) => (
          <div className="event" key={i} onClick={() => handleClick(event)}>
            <div className="line1">
              <p>
                {event.ID}:{event.Location}
              </p>
              <p>
                {event.Date} {event.Time}
              </p>
            </div>

            <p className="line2">Person detected</p>
          </div>
        ))}
      </div>
    </>
  );
}
