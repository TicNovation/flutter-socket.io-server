const {io} = require('../index');

io.on('connection', client => {
    console.log('Connected');


    client.on('disconnect', () => {
        console.log('CLIENT DISCONNECT');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!', payload);
        io.emit('mensaje', {admin:'Nuevo mensaje'});
    });

});
