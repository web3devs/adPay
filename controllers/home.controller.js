const mongoose = require ( 'mongoose' );
const chalk = require ( 'chalk' );
const rpc_controller = require ('./rpc.controller');

//Simple version, without validation or sanitation
exports.home = function ( req, res ) {
    let web3Promise;
    res.send ( rpc_controller.get_web3() );
};
