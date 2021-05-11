const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    exercise_type: {
        type: String,
        required: true
    },
    major_muscle: {
        type: String,
        required: true
    },
    minor_muscle: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    notes: {
        type: String,
        default: ''
    },
    modifications: {
        type: String, 
        default: ''
    }
})

module.exports = mongoose.model('exercises', exercisesSchema);