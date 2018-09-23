'use strict';

const mongoose = require ( 'mongoose' );
const AnswerLog = mongoose.model ( 'AnswerLog' );
const rpc_controller = require('../controllers/rpc.controller');
const chalk = require ( 'chalk' );

exports.submitForm = function(req, res){
  console.log(req.body); // object

  // check that form is complete
  values = Object.values(req.body); // array

  // create object to store in DB
  formData = req.body;

  if (!values.includes(null)) {
    // save form data to DB
    let answerData = new AnswerLog(formData);

    answerData.save(function(err, data) {
      if (err) {
        res.send(err);
        console.log('error in saving answer data', err);
      } else {
        // send response to form
        res.sendStatus(200);
        // fire contract function. Need: { receiverAddress }.
        rpc_controller.pay(req.body.address);

      }
    });
  }
}
