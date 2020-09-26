import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoginForm.css";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.state = {
      username: "",
      password: "",
      isVerified: false,
    };
  }

  recaptchaLoaded() {
    console.log("reCAPTCHA loaded")
  }

  ReCAPTCHA = require("react-google-recaptcha")
  onChange(value) {
  }

  enableButton(){
    document.getElementById("btn2").disabled = false;
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <h3>Login</h3>

        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Your Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder=""
            required
            onChange={this.handleChange}
          />
          <br />
          <ReCAPTCHA sitekey="6LcniNAZAAAAAFTxaLpKdtfKDA3wUiA1tDjXg1lB"
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          onChange={this.enableButton}
        />
          <br />
          <button id='btn2' type="submit" disabled="true">
            Login
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
