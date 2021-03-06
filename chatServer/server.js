const express = require("express");
const SocketServer = require("ws").Server;
const uuid = require("uuid/v1");
const randomColor = require("randomcolor");
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () =>
    console.log(`Listening on ${PORT}`)
  );

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on("connection", ws => {
  console.log("Client connected");

  wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(msg));
    });
  };
  //npm package that sets random color.
  let clientColor = randomColor();
  // Send the number of clients
  wss.broadcast(wss.clients.size);

  // System message when a client joins the chat
  const newClientNotification = {
    id: uuid(),
    type: "incomingNotification",
    content: "Anonymous user has joined the chat."
  };
  wss.broadcast(newClientNotification);

  ws.on("message", function incoming(clientMessage) {
    const message = JSON.parse(clientMessage);
    switch (message.type) {
      case "postMessage":
        if (!message.username) {
          message.username = "Anonymous";
        }
        message.id = uuid();
        message.type = "incomingMessage";
        message.color = clientColor;
        wss.broadcast(message);
        break;
      case "postNotification":
        message.id = uuid();
        message.type = "incomingNotification";

        wss.broadcast(message);
        break;
      default:
        throw new Error("Unknown event type " + clientMessage.type);
    }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on("close", () => {
    wss.broadcast(wss.clients.size);
    console.log("Client disconnected");
  });
});
