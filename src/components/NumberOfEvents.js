// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Please enter a number between 0 and 32";
      setErrorAlert(infoText);
    } else {
      infoText = "";
      setErrorAlert(infoText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label className="label-number-of-events">
        <p>Number of Events: </p>
      </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
