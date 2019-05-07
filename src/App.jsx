import React, { Component } from "react";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "?" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Mike",
          content: "Has anyone seen my marbles?"
        },
        {
          username: "Anonymous",
          content: "No, I HAVE NOTTTT!!!!."
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <MessageList />
        <ChatBar currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;
