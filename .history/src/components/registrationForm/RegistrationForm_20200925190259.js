import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "../../services/DataService";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.state = {
      username: "",
      password: "",
      displayName: "",
      isVerified: false
    };

    this.client = new DataService()
  }

      recaptchaLoaded() {
      console.log("reCAPTCHA loaded")
    }
  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      console.log(result.data)
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  recaptchaInstance

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={this.handleChange}
          />
        <ReCAPTCHA sitekey="6LcniNAZAAAAAFTxaLpKdtfKDA3wUiA1tDjXg1lB"
        ref={el=>recaptchaInstance = el}
        onChange={(value)}
        />
          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
