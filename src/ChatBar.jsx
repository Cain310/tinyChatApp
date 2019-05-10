import React, { Component } from "react";

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = { newUser: "" };
  }

  userEntered = event => {
    this.setState({ newUser: event.target.value });
  };

  submitMessage(event) {
    if (event.key === "Enter") {
      const content = event.target.value;
      let username = this.state.newUser;
      console.log(username);

      // Set default username to Anonymous if there is no input in the username
      if (username === "") {
        username = "Anonymous";
      }

      this.props.chatData(username, content);
      event.target.value = "";
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          value={this.state.newUser}
          onChange={this.userEntered}
          placeholder="Your Name (Optional)"
        />

        <input
          className="chatbar-message"
          name="message"
          placeholder="Type a message and hit ENTER"
          onKeyDown={this.submitMessage}
        />
      </footer>
    );
  }
}

export default ChatBar;
