import React, { Component } from "react";
import Messages from "./Messages.jsx";
import PropTypes from "prop-types";

class MessageList extends Component {
  render() {
    return <Messages messages={this.props.messages} />;
  }
}
MessageList.propTypes = {
  messages: PropTypes.array
};
export default MessageList;
