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

// ===========================================================================
// THE code below is what posts to the DB!!!!! Huge break through for me!!!!
// When I make a post call with postman url block/api
// module.exports = {
//   // Inside this, key value pairs where each key value pair represents a request handler
//     greeting(req, res) {
// // Adding 'CircularJSON' to .stringify for web3 call fixed the TypeError & now getting data to display!!
// // TypeError: Converting circular structure to JSON
//     res.send(CircularJSON.stringify(web3));
// },

// THE code below is what posts to the DB!!!!!
// When I make a post call with postman url



  exports.new_transaction = async function (req, res) {
    let dbData;
    let newAd = new Ad(
      {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
      field6: '',
      address1: '',
      address2: 'e8bF424E047372d249d0826c5567655ba3B72f18 '
    }
  );
  newAd.save ( function ( err, dbResponse ) {
    if ( err ) {
      res.send( err );
    }
    console.log ( "***" + chalk.white( dbResponse ) + "***" );
    res.send ( dbResponse );
  });
}
//
//     res.send(CircularJSON.stringify());
//     request
//       .post('/ad/api')
//       .send({ text: 'mega Mcdonalds monster mayham' })
//     const blockProps = req.body;
//
//     Block.create(adProps)
//       .then(ad => res.send(ad));
// }

// =============================================================================
exports.find_all = async function (req, res) {
  let dbData;
  dbData = db;
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
