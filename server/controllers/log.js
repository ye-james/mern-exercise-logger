const mongoose = require('mongoose');

const Log = require('../models/log');
const User = require('../models/user');

const ObjectID = mongoose.Types.ObjectId;

exports.addExercise = (req,res) => {
    const userId = req.body.userId;
    //Save new exercise to Log
    const newExercise = new Log({
        name: req.body.name,
        set: req.body.set,
        reps: req.body.reps,
        weight: req.body.weight,
        user: userId
    })
    newExercise.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json(err)
        });

    //Find user based on user id and push exercise log to User

    User.findById({_id: userId})
    .then(user => {
        user.logs.push(newExercise)
        user.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json(err)
        })
    })
    .catch(err => {
        res.send(err)
    });    

};


exports.getExercises = (req,res) =>  {
    const userId = req.params.userId;
    Log.find({user: userId})
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.send(err);
        })

}

exports.fetchSingleExercise = (req,res) => {
    const exerciseId = req.params.id
    Log.findById({_id: exerciseId}).then(result => {
        res.status(200).json(result);
    }).catch( err => {
        res.status(403).json({message: 'Cannot find exercise'})
    })
}


exports.updateExercise = (req,res) => {
    const exerciseId = req.body.id
    Log.updateOne({_id: exerciseId},{
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
    const exerciseId = req.body._id;
    Log.deleteOne({_id: ObjectID(exerciseId)})
        .then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
}
