const mongoose = require ( 'mongoose' );
const Ad = mongoose.model ( 'Ad' );
const chalk = require ( 'chalk' );

exports.find_by_id = async function (req, res) {
  let dbData;
  await Ad.findById( req.body._id, function (err,response){
      if (err) {
        console.log('TestThree3', err);
      } else {
        dbData = response;
        console.log('TestTwo2', dbData)
      }
    }
  );
  res.send(dbData);
  console.log('TestOne1', dbData);
}

exports.find_all = async function (req, res) {
  let dbData;
  await Ad.find( function (err,response){
      if (err) {
        console.log('TestThree3', err);
      } else {
        dbData = response;
        console.log('TestTwo2', dbData)
      }
    }
  );
  res.send(dbData);
  console.log('TestOne1', dbData);
}
