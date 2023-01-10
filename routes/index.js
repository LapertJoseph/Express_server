/**
 * Routes
 */
const express = require('express');
const rootRouter = express.Router();
const user = require('./user');
const cart = require('./cart');

// Users routes
rootRouter.use('/user', user);
// Flux routes
rootRouter.use('/cart', cart);

module.exports = rootRouter;