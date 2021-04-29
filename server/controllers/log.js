const Log = require('../models/log');

exports.addExercise = (req,res) => {
    const newExercise = new Log({
        name: req.query.name,
        set: req.query.set,
        reps: req.query.reps
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
