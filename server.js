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
// const path = require("path");
// const port = process.env.PORT || 8080;
// const app = express();

// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));

// // send the user to index html page inspite of the url
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

// app.listen(port);
