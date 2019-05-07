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
          id: 1,
          username: "Jon",
          content: "Has anyone seen my marbles?"
        },
        {
          id: 2,
          username: "Bran",
          content: "No, I HAVE NOTTTT!!!!."
        },
        {
          id: 3,
          content:
            "I won't be impressed with technology until I can download food.",
          username: "Sam"
        },
        {
          id: 4,
          username: "Sansa",
          content: "Anonymous1 changed their name to nomnom"
        },
        {
          id: 5,
          username: "Tyrion",
          content:
            "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss."
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;
