import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
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
