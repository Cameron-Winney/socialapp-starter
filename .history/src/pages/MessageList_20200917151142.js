import React from "react"
import Menu from "../components/menu/Menu"
import api from "../BackendService/BackendService"

class MessageList extends React.Component {
  componentDidMount () {
    api.getMessages()
    console.lo
  }

  render () {
    return (
      <div className="MessageList">
        <Menu />
        <h1>Message Feed</h1>
        <ul></ul>
      </div>
    )
  }
}