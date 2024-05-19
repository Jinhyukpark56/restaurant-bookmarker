import React, { useState } from "react";
import SearchBox from "./SearchBox";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <div className="main-page">
      <div className="left-section">
        <SearchBox
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onSearch={handleSearch}
        />
      </div>
      <div className="right-section">
        {/* Add your map component here */}
        <h2>Map will be displayed here</h2>
      </div>
    </div>
  );
};

export default MainPage;
