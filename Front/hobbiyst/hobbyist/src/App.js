import Navbar from "./common/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import LoginForm from "./common/login";
import Register from "./common/Register";
import Events from "./common/events";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
            <Route path="/events" component={Events} />
          </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
