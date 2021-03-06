const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    username: {
        type:String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    logs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Log'
    }],
    routines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine'
    }]
})

module.exports = mongoose.model('user', userSchema);