const app = require('./app');
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

//Settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);
require('./database');

async function main() {
  await server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
}

main();