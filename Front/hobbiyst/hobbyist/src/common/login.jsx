import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";
import { ReactComponent as LoginSvg } from "../assets/login.svg";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //call server & save
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container d-flex flex-column justify-content-around align-self-center">
        <h1>Login </h1>

        <div className="row">
          <div className="col-6">
            <form onSubmit={this.handleSubmit} className="d-flex flex-column">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>

          <LoginSvg
            className="col-6"
            style={{ width: "100 px", height: "350px" }}
          />
        </div>
      </div>
    );
  }
}

export default LoginForm;
