const config = require('config');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/UsersRoute');
const db = require('./db/Database');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/', routes);


const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

// module.exports = app;