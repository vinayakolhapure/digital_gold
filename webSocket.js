var gdax = require('gdax');

//const ETH = 'ETH-USD';
//const websocket = new gdax.WebsocketClient([ETH]);
// const websocketCallback = (data) => {
//     if(!(data.type ==='done' && data.reason ==='filled')) {
//         return;
//     }
//     console.log(data);
// };

 var getRates = (coin) => {
     const websocket = new gdax.WebsocketClient([`${coin}`]);
     websocket.on('message', (data) => {
        if(!(data.type ==='done' && data.reason ==='filled')) {
            return;
        }
        console.log(data);
    });
 };

 module.exports = {
     getRates
};
//websocket.on('message', websocketCallback);