const WebSocket = require('ws');
const PORT_CONFIG = require('../config');


const wss = new WebSocket.WebSocketServer({port: PORT_CONFIG.SOCKET});


wss.on('connection', ws => {

  ws.on('message', data => {
    console.log('received: %s', data);

    ws.send(`已经接收到你的消息：${data}`)
  })

})
