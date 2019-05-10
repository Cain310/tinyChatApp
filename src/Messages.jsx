import React, { Component } from "react";

class Messages extends Component {
  render() {
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/gi;
    const newContent = this.props.content.replace(regex, "");
    const found = this.props.content.match(regex);

    return this.props.username ? (
      <div className="message">
        <span style={{ color: this.props.color }} className="message-username">
          {this.props.username}
        </span>
        <p className="message-content">{newContent}</p>
        <span className="message-content">
          <img className="message-img" src={found} />
        </span>
      </div>
    ) : (
      <div className="message system">{this.props.content}</div>
    );
  }
}
export default Messages;
