
console.log(`${__dirname}/../public`);

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public') 

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike',
    text: 'Hello there',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    message.createdAt = 124;
    console.log('createMessage:', message);
  });

  socket.on('disconnect', () => {
    console.log('Diconnected on server');
  });
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});