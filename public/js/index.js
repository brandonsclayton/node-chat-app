
let socket = io();

socket.on('connect', () => {
  console.log('Connected to server'); 
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'hi',
}, (message) => {
  console.log(message);
});