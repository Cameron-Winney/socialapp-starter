import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import "../styles.css";
import ReCAPTCHA from "react-google-recaptcha";


class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isVerified: false
      }
    }
  
  render() {
    return (
      <div className="container background-grey">
      <div className="Home">
        <Menu />
        <br />
        <div className="row justify-content-center">
        <h2>Welcome to Dreddit! Yeet!</h2>
        </div>
        <br />

          <div className="row">
            <div className="col-4">
          <LoginForm />
          </div>
          <div className="offset-sm-4 col-4">
          <h3>Register</h3>
          <RegistrationForm />
          </div>
          </div>
        </div>
        <Recaptcha sitekey=""
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
