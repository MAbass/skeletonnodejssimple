const config = require('config')
const Mongoose = require('mongoose')

console.log("Url:", config.database.url);
Mongoose.connect(config.database.url, config.database.properties);

const database = Mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error.'));
database.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.db = database;