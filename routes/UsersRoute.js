const express = require('express');
const auth = require('./auth/AuthRoute');
const users = require('./users');
const response = require('../helpers/Response');


const routes  = express.Router();

routes.use(response.setHeadersForCORS);

routes.use('/', auth);
routes.use('/users', users);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
    response.sendNotFound(res);
});

module.exports = routes;