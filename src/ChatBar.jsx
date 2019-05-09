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
          // ref="username"
          // defaultValue={this.props.currentUser}
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

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class ChatBar extends Component {
//   constructor(props) {
//     super(props);

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       const value = event.target.value;
//       let username = this.refs.username.value;
//       console.log("HANDLESUBMIT", username);
//       this.props.getMessage(username, value);
//       event.target.value = "";
//       // Set default username to Anonymous if there is no input in the username
//       if (username === "") {
//         username = "Anonymous";
//       }
//     }
//   }

//   render() {
//     return (
//       <footer className="chatbar">
//         <input
//           className="chatbar-username"
//           placeholder="Your Name (Optional)"
//           ref="username"
//           defaultValue={this.props.currentUser}
//         />
//         <input
//           className="chatbar-message"
//           placeholder="Type a message and press ENTER"
//           name="message"
//           onKeyDown={this.handleSubmit}
//         />
//       </footer>
//     );
//   }
// }

// ChatBar.propTypes = {
//   currentUser: PropTypes.string
// };
// export default ChatBar;
