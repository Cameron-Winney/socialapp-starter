import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../DataService";

class CreateMessage extends React.Component {
  state = {text: ""};

  handleLogin = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  countText = () => {
    let text = document.getElementById("textArea");
    document.getElementById("message").innerHTML =
      255 - text.value.length + " / 255";
  };

  
}