import React, { Component } from "react";
import PropTypes from "prop-types";

class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <div>{this.props.currentUser}</div>
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and press ENTER"
        />
      </footer>
    );
  }
}

ChatBar.propTypes = {
  currentUser: PropTypes.string
};
export default ChatBar;
