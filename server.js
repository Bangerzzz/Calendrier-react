const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router(__dirname + "/build/db/db.json");

// const middleware = jsonServer.defaults;
// server.use(middleware);
// server.use(router);

// const serverPort = process.env.PORT || 3333;
// server.listen(serverPort, () =>
//   console.log("json server is running on port" + serverPort)
// );
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);
