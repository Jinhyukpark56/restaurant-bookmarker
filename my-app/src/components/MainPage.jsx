import React from "react";
import SearchBox from "./SearchBox"; // Assuming you have a SearchBox component

const MainPage = () => {
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  };

  return (
    <div className="main-page">
      <div className="left-section">
        <SearchBox />
      </div>
      <div className="right-section">
        <h2>Map will be displayed here</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default MainPage;
