import React from "react";

const SearchBox = ({ searchQuery, onSerchQueryChange, onSearch }) => {
  const handleInputChange = (event) => {
    onSerchQueryChange(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={searchQuery}
        onChange
      />
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>검색</button>
      </div>
    </div>
  );
};

export default SearchBox;
