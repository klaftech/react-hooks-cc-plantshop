import React from "react";

function Search({query,onQuery}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onQuery(e)}
        value={query}
      />
    </div>
  );
}

export default Search;
