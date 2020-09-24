import React from "react"

class Message extends React.Component {
  render () {
    return (
      <li className="Message">{} at
          {this.props.username}
          posted:
      </li>
    )
  }
}

export default Message