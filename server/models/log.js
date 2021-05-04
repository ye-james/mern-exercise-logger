const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    set: {
        type: Number,
        required: true

    },
    reps: {
        type: Number,
        required: true

    }, 
    weight: {
        type: Number,
        required: true     
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Log', logSchema);