import React from "react"
import Menu from "../components/menu/Menu"
import api from "../services"

class MessageList extends React.Component {
  state = { messages: [] }
  componentDidMount () {
    api.getMessages()
    .then(response => console.log(response) )
  }

  render () {
    if (this.state.messages.length === 0) {
     }    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <ul></ul>
      </div>
    )
  }
}