const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MarketerSchema = new Schema({

    companyName: { type: String, required: true, max: 64 },
    email: { type: String, required: true, max: 64 },
    contractAddress: { type: String, required: false, max: 64 },
    configObject: {
      payableAmount: Decimal128,
      accountTier: String,

    },
    creativeUrl: { type: String, required: false, max: 64 },
    mediaUrl: { type: String, required: false, max: 64 },
    formsUrls: [{ name: String, url: String }],
    answerLog: [{
      receiverAddress: String,
      formName: String,
      data: [
        { question: String, answer: String },
      ]
    }]

});


// Export the model
module.exports = mongoose.model('Marketer', MarketerSchema);
