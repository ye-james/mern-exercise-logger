const mongoose = require('mongoose');

const Log = require('../models/log');
const ObjectID = mongoose.Types.ObjectId;

exports.addExercise = (req,res) => {
    const newExercise = new Log({
        name: req.body.name,
        set: req.body.set,
        reps: req.body.reps,
        weight: req.body.weight
    })

    newExercise.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.send(err)
        });
};


exports.getExercises = (req,res) => {
    Log.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.send(err);
        })
}

exports.fetchSingleExercise = (req,res) => {
    const id = req.params.id
    Log.findById({_id: id}).then(result => {
        res.status(200).json(result);
    }).catch( err => {
        res.status(403).json({message: 'Cannot find exercise'})
    })
}


exports.updateExercise = (req,res) => {
    const id = req.body.id
    Log.updateOne({_id: id},{
            name: req.body.name,
            set: req.body.set,
            reps: req.body.reps,
            weight: req.body.weight
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.send(err)
    });
};

exports.deleteExercise = (req,res) => {
    const id = req.body._id;
    Log.deleteOne({_id: ObjectID(id)})
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
}
