const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdSchema = new Schema({
    field1: {type: String, required: false, max: 64},
    field2: {type: String, required: false, max: 64},
    field3: {type: String, required: false, max: 64},
    field4: {type: String, required: false, max: 64},

    userAddress: {type: String, required: false, max: 64},
    agencyAddress: {type: String, required: false, max: 64},

});


// Export the model
module.exports = mongoose.model('Ad', AdSchema);
