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

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="message-form" onSubmit={this.handleLogin}>
          <FormTextarea
            id="textArea"
            maxLength="255"
            placeholder="Typing..."
            type="text"
            name="text"
            autoFocus
            required
            onKeyUp={this.countText}
            onChange={this.handleChange}
            value={this.state.text}
          />

          <Button type="submit" disabled={loading}>
            Post
          </Button>
        </Form>
   
      </React.Fragment>
    );
  }
}

export default (CreateMessage)