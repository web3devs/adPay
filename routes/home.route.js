const express = require('express');
const router = express.Router();

// Require the controllers
const home_controller = require('../controllers/home.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', home_controller.home);

module.exports = router;
