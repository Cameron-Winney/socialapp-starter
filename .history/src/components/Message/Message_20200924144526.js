import React from "react"

class Message extends React.Component {
  render () {
    return (
      <li className="Message">
          {new Date(this.props.createdAt).toDateString()} at
          {this.props.username}
          posted:
          <div className="message-text">
            {this.props.text}
          </div>
          <div className="likes">Likes: {this.props.likes.length}</div>
      </li>
    )
  }
}

export default Message