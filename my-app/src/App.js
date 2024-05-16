import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 align="center">Welcome RB</h1>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/MainPage" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
