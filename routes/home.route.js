const express = require('express');
const router = express.Router();

// Require the controllers
const home_controller = require('../controllers/home.controller');
const rpc_controller = require('../controllers/rpc.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', home_controller.home);

router.get('/balance', rpc_controller.get_balance);

module.exports = router;
