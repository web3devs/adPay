const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdSchema = new Schema({

    companyName: { type: String, required: true, max: 64 },
    email: { type: String, required: true, max: 64 },
    url: {type: String, required: false, max: 64},
    confirmLog: [{ conversion: Boolean, timestamp: Date }],

});

// Export the model
module.exports = mongoose.model('Ad', AdSchema);
