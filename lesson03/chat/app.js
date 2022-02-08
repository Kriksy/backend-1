const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
// NOTE: We have to use the .createServer form here, as opposed to
// app.listen, as we need the server object for socket.io later
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log("Listening on :3000");
});

