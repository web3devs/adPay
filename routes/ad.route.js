const express = require('express');
const router = express.Router();

// Require the controllers
const ad_controller = require('../controllers/ad.controller');
// const mongo_controller = require('../controllers/mongo.controller');

// a simple coincap url to check that all of our files are communicating correctly.
router.get('/test', ad_controller.test);

// pay out some ether
router.get('/pay', ad_controller.pay);

// // search for record by ID
// router.post('/find', mongo_controller.find_by_id);
//
// // return list of all objects
// router.post('/findAll', mongo_controller.find_all);
//
// // this GETs the infura api Ethereum Block Data
// router.get('/infura', account_controller.infura);

module.exports = router;
