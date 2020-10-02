import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import Dreddit from './redditLogo.png'

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <img src={Dreddit} alt="Dreddit"></img>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            <Link to="/profile/"  {username}>Profile</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
