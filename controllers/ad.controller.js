const mongoose = require ( 'mongoose' );
const Ad = mongoose.model ( 'Ad' );
const chalk = require ( 'chalk' );
const request = require( 'superagent' );

// returns a message for testing routes
exports.msg = function (req, res) {
  res.send("Generic Success Message");
}

//Simple test, without validation or sanitation
exports.test = async function ( req, res ) {
  let response;
  try{
    await request
    .get('http://coincap.io/page/ETH')
    .then((res) =>{
        // console.log(res.body);
        response = res.body;
    })
  } catch(err){
      console.log(err);
    }
  res.send (response);
}

exports.pay = async function (req, res) {
  res.send ("Pay function");
}
