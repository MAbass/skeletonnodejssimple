const authRoute = require('../../controllers/AuthController');
const express = require('express');

const routes = express.Router();

routes.route('/authenticate')
    .post(authRoute.authenticate);

module.exports = routes;