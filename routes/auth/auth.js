const auth = require('../../controllers/auth');
const express = require('express');

const routes = express.Router();

routes.route('/authenticate')
    .post(auth.authenticate);

module.exports = routes;