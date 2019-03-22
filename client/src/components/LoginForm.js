import React from "react";
import Wrapper from "./Wrapper";
import GitHubLoginBtn from "./GitHubLoginBtn";
import GoogleLoginBtn from "./GoogleLoginBtn";

import { login } from "../services/authService";

import Joi from "joi-browser";
import Form from "./Form";
class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Pastname")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      login(data.email, data.password).then(() => {
        window.location.href = "/home";
      })
      .catch(err => {
        document.getElementById("loginErr").innerHTML = "Invalid email or password."
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };

  gitHubOnClick() {
    window.location.href="/auth/github";
  };

  googleOnClick() {
    window.location.href="/auth/google";
  };
  
  render() {
    return (
      <div className="login-container">
        <Wrapper>
          <div className="loginTitle">
            <h2>Login</h2>
            <h6>Enter you email and password</h6>
            <hr />
          </div>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <div className="errorText" id="loginErr"></div>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
          <div className="GitGoogleTitle">
            <hr />
            <h6>Login with GitHub or Google+</h6>
          </div>
          <GitHubLoginBtn gitHubOnClick={this.gitHubOnClick}/>
          <GoogleLoginBtn googleOnClick={this.googleOnClick}/>
        </Wrapper>
      </div>
    );
  }
}

export default LoginForm;
