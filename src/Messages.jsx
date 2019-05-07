import React, { Component } from "react";
import PropTypes from "prop-types";
class Messages extends Component {
  render() {
    const messageContent = this.props.messages.map(message => {
      return message.username ? (
        <div key={message.id} className="message">
          <span className="message-username">{message.username}</span>
          <span className="message-content">{message.content}</span>
        </div>
      ) : (
        <div key={message.id} className="message system">
          {message.content}
        </div>
      );
    });

    return <div className="messages">{messageContent}</div>;
  }
}
Messages.propTypes = {
  messages: PropTypes.array
};
export default Messages;
