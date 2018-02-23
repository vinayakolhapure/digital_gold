const gdax = require('gdax');
const yargs = require('yargs');

const websocket = require('./webSocket.js');
//const app = new gdax.PublicClient();

//API key
const passPhrase = "";
const apiKey = "";
const apiSecret = "";
const apiURI = 'https://api.gdax.com';


const argv = yargs.argv;
const app = new gdax.AuthenticatedClient(apiKey,apiSecret,passPhrase,apiURI);

//call websocket function with argv.coin -- call program as $node index.js --coin="ETH-USD";
websocket.getRates(argv.coin);


// const callback = (error,response,data) => {
//     if(error) {
//         return console.log(error);
//     }
//     return console.log(data);
// };

// app.getAccounts(callback);