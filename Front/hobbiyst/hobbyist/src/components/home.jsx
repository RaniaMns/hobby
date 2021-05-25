import React, { Component } from "react";
import { ReactComponent as ConnectSvg } from "../assets/connect.svg";
class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6 inner cover " style={{ marginTop: "100px" }}>
            <h4 className="cover-heading">Welcome to Hobbbyist</h4>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <ConnectSvg className="col-6" style={{ width: "100 px" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
