const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AnswerLogSchema = new Schema({

    familiarity: { type: String, required: true, max: 64 },
    comesToMind: { type: String, required: true, max: 64 },
    checkedValues: { type: Array, required: true },
    peonyBool: { type: String, required: false, max: 64 },
    peonyfamiliar: { type: String, required: false, max: 64 },
    store: { type: String, required: false, max: 64 },

});

// Export the model
module.exports = mongoose.model('AnswerLog', AnswerLogSchema);
