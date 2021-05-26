import Navbar from "./common/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import auth from "./services/authService";
import "./App.css";
import LoginForm from "./common/login";
import Register from "./common/Register";
import Events from "./common/events";
import Logout from "./components/logout";
import { Component } from "react";
import Home from "./components/home";
import SuggestionAmis from "./common/SuggestionAmis";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={user} />
          {
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
              <Route path="/SuggestionAmis" component={SuggestionAmis} />

              {user && <Route path="/events" component={Events} />}
            </Switch>
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
