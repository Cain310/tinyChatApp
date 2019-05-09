import React, { Component } from "react";

class Messages extends Component {
  render() {
    return this.props.username ? (
      <div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </div>
    ) : (
      <div className="message system">{this.props.content}</div>
    );
  }
}
export default Messages;

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// class Messages extends Component {
//   render() {
//     return this.props.username ? (
//       <div className="message">
//         <span className="message-username">{this.props.username}</span>
//         <span className="message-content">{this.props.content}</span>
//       </div>
//     ) : (
//       <div className="message system">{this.props.content}</div>
//     );
//   }
// }
// Messages.propTypes = {
//   messages: PropTypes.array
// };
// export default Messages;
