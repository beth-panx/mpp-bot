let restify = require('restify');
require('dotenv').config();
let bot = require('./bot.js');

let server = restify.createServer();
server.post('/api/messages', bot.connector('*').listen());
server.listen(process.env.PORT, () => {
    console.log(`${server.name} listening to ${server.url}`);
});