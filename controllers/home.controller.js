const mongoose = require ( 'mongoose' );
const chalk = require ( 'chalk' );
const rpc_controller = require ('./rpc.controller');

//Simple version, without validation or sanitation
exports.home = function ( req, res ) {
    res.send ( "routes: /balance(get) /pay(post) /ad/test(get)" );
};
