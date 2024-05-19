import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 align="center">Welcome RB</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
