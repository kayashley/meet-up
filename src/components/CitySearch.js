// src/components/CitySearch.js

import { useEffect, useState } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
  // false as you don't want it to be shown unless the input field is "in focus"
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];
    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemCLicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // hides the list
    setCurrentCity(value);
  };

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a City"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li onClick={handleItemCLicked} key={suggestion}>
                {suggestion}
              </li>
            );
          })}
          <li onClick={handleItemCLicked} key="See all cities">
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
