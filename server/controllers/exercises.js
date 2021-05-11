const mongoose = require('mongoose');

const Exercise = require('../models/exercises');

const ObjectID = mongoose.Types.ObjectId;

exports.getExercises = (req,res) => {
    Exercise.find()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        return (err);
    })
}