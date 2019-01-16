
console.log(`${__dirname}/../public`);

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public') 

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit(
      'newMessage',
      generateMessage('Admin','Welcome to the chat'));

  socket.broadcast.emit(
      'newMessage',
      generateMessage('Admin','New user joined chat'));


  socket.on('createMessage', (message, callback) => {
    console.log('createMessage:', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server!');
  });

  socket.on('disconnect', () => {
    console.log('Diconnected on server');
  });
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});