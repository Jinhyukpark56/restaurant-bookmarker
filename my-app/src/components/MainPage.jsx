import React, { useState } from "react";
import SearchBox from "./SearchBox";

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // 검색 로직
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
      <div className="right-section"></div>
      {/*맵 로드 구간*/}
    </div>
  );
};

export default MainPage;
