// src/components/Event.js

import moment from "moment";
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      {/* <p>{event.created}</p> */}
      <p>
        {event && moment(event.start.dateTime).format("MMMM Do YYYY, h:mm a")}
      </p>

      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <p>
            <em>Event status: </em>
            {event.status}
          </p>
          <p></p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
