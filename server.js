var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
var port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
}).listen(port, "0.0.0.0", function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log("Running at http://0.0.0.0:3000");
});

// const express = require("express");
// const SocketServer = require("ws").Server;
// const uuid = require("uuid/v1");

// // Set the port to 3001
// const PORT = 3001;

// // Create a new express server
// const server = express()
//   // Make the express server serve static assets (html, javascript, css) from the /public folder
//   .use(express.static("public"))
//   .listen(PORT, "0.0.0.0", "localhost", () =>
//     console.log(`Listening on ${PORT}`)
//   );

// // Create the WebSockets server
// const wss = new SocketServer({ server });
// // const clients = [];

// // Set up a callback that will run when a client connects to the server
// // When a client connects they are assigned a socket, represented by
// // the ws parameter in the callback.
// wss.on("connection", ws => {
//   // clients.push(ws);

//   console.log("Client connected");
//   console.log(wss.clients.size);

//   wss.broadcast = function broadcast(msg) {
//     wss.clients.forEach(function each(client) {
//       client.send(JSON.stringify(msg));
//     });
//   };

//   wss.broadcast(wss.clients.size);

//   ws.on("message", function incoming(clientMessage) {
//     const message = JSON.parse(clientMessage);
//     console.log(message);
//     switch (message.type) {
//       case "postMessage":
//         if (!message.username) {
//           message.username = "Anonymous";
//         }
//         message.id = uuid();
//         message.type = "incomingMessage";
//         wss.broadcast(message);
//         break;
//       case "postNotification":
//         message.id = uuid();
//         message.type = "incomingNotification";
//         wss.broadcast(message);
//         break;
//       default:
//         throw new Error("Unknown event type " + clientMessage.type);
//     }
//   });
//   ws.on("close", () => {
//     wss.broadcast(wss.clients.size);
//     console.log("Client disconnected");
//   });
// });
