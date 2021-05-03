const Log = require('../models/log');

exports.addExercise = (req,res) => {
    const newExercise = new Log({
        name: req.body.name,
        set: req.body.set,
        reps: req.body.reps,
        weight: req.body.weight
    })
    newExercise.save()
        .then(data => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.send(err)
        });
};


exports.getExercises = (req,res) => {
    Log.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err);
        })
}
