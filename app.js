// app.js
const express = require('express');
const bodyParser = require('body-parser');
const credentials = require('./credentials');
const chalk = require('chalk');

// initialize our express ap
const app = express();

// directs app to use bodyParser, moved immediately below app declaration so
// that bodyParser works universally.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// let port = process.env.SERVER_PORT;
let port = 3000;
if (process.env.SERVER_PORT != undefined) {
    port = process.env.SERVER_PORT
}

// vvv Set up mongoose connection
const mongoose = require('mongoose');

// REVIEW: register schemas
require('./models/ad.model');
require('./models/answerLog.model');
// require('./models/marketer.model');
// require('./models/publisher.model');

// require('./models/transaction.model.js');

let dev_db_url = `mongodb://${credentials.user}:${credentials.password}@ds249942.mlab.com:49942/digital_currency_compliance`;

// let dev_db_url = 'mongodb://localhost:27017/marketplaceDB';
// REVIEW: mongoDB switch statment
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

// test MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
let adDB = db.collection("ads");
// ^^^ Set up mongoose connection

// Imports routes for the products
const ad = require('./routes/ad.route.js');

// const transaction = require('./routes/transaction.route.js');
const home = require('./routes/home.route.js');

// webhook route
const webhook = require('./routes/webhook.route.js');

// directs app to use var api for route api
app.use('/ad',
    (req, res, next) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header(
            'Access-Control-Allow-Headers',
            'content-type, authorization, content-length, x-requested-with, accept, origin'
        );
        res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.header('Allow', 'POST, GET, OPTIONS');
        res.header('Access-Control-Allow-Origin', '*');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
        } else {
            next();
        }
    },
 ad);
app.use('/', home);

app.use('/webhook', webhook);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
// test MongoDB connection

    console.log(
        adDB != null ?
        adDB.name + " database found" :
        adDB.name + " database not found"
    );
});
