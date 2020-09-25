import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import ReCAPTCHA from "react-google-recaptcha";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    const recaptchaRef = React.createRef();
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }

  

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form onSubmit={this.onSubmit} >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="Your client site key"
        onChange={onChange}
      />
    </form>
        <h3>Login</h3>

        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" disabled={loading}>
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
