import React from "react";
import Menu from "../components/menu/Menu";
import api from "../services/BackendService";
import Message from "../components/Message/Message";

class MessageList extends React.Component {
  state = { messages: [] };

  componentDidMount() {
    api
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }

  render() {
    if (this.state.messages.length === 0) {
      <Menu isAuthenticated={this.props.isAuthenticated} />
      return (
        <div className="MessageList">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h1>MessageList</h1>
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <div className="MessageList">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h1>Message Feed</h1>
        <ul>
          {this.state.messages.map((messageObject) => (
            <Message key={messageObject.id} {...messageObject} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;
