import React, { Component } from "react";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://0.0.0.0:3001");
    this.state = {
      currentUser: { name: null },
      messages: [],
      onlineUsers: null
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.socket.onopen = event => {
      console.log("Connected to web socket.");
    };

    this.socket.onmessage = event => {
      const receivedMessage = JSON.parse(event.data);
      if (Number.isInteger(receivedMessage)) {
        const onlineUsers = receivedMessage;
        this.setState({ onlineUsers });
      } else {
        const oldMessages = this.state.messages;
        const newMessages = [...oldMessages, receivedMessage];
        switch (receivedMessage.type) {
          case "incomingMessage":
            this.setState({ messages: newMessages });
            break;
          case "incomingNotification":
            this.setState({ messages: newMessages });
            break;
          default:
            throw new Error("Unknown event type " + clientMessage.type);
        }
      }
    };
  }

  addMessage(username, content) {
    let currentUser = this.state.currentUser.name;
    // Initial state of currentUser is a null name. Sets local variable for next conditional statement.
    if (currentUser === null) {
      currentUser = "Anonymous";
    }
    // Sends notification if different currentUser than in this.state.
    if (currentUser !== username) {
      const notification = {
        type: "postNotification",
        content: `${currentUser} has changed their name to ${username}.`
      };
      this.socket.send(JSON.stringify(notification));
      // User's message
      const newData = {
        type: "postMessage",
        username: username,
        content: content
      };
      this.socket.send(JSON.stringify(newData));
      this.setState({ currentUser: { name: username } });
    } else {
      // User's message
      const newData = {
        type: "postMessage",
        username: username,
        content: content
      };
      this.socket.send(JSON.stringify(newData));
    }
  }

  render() {
    return (
      <main>
        <nav className="navbar">
          <img
            src="public/assets/cdd59a3d7288df84335a3c5a61b1652d.png"
            className="logo"
          />
          <a href="/" className="navbar-brand">
            chatApp
          </a>
          <div className="navbar-users">
            {this.state.onlineUsers} Users Online
          </div>
        </nav>
        <div className="messages">
          <MessageList messages={this.state.messages} />
          <ChatBar
            currentUser={this.state.currentUser.name}
            chatData={this.addMessage}
          />
        </div>
      </main>
    );
  }
}
export default App;
