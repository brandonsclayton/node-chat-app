
export class Socket {

  constructor() {
    let socket = io();

    socket.on('connect', () => {
      console.log('Connected to server'); 

      socket.emit('createMessage', {
        from: 'b',
        text: 'hello',
      })
    });

    socket.on('newMessage', (message) => {
      console.log('newMessage', message);
    });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }
}

new Socket();
