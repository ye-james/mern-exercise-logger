const mongoose = require('mongoose');
const Routine = require('../models/routineModel');
const User = require('../models/user');

// Fetch all routines from user
exports.getAllRoutines = (req,res) => {

}

// Fetch single routine based on routine name
exports.getRoutine = (req,res) => {
    const routineID = req.params.routineID;
    console.log(routineID);
    Routine.findById(routineID)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(404).json({error: err.message})
    })
}

//Create and add new routine for user if not already exist
exports.addRoutine = async (req,res) => {
    const routineID = req.params.routineID;
    /*
    const newRoutine = new Routine({
        name: 'New Routine',
        exercises: [{
            exerciseName: 'Bench Press',
            set: [
                {reps: 10,weight: 135},
                {reps: 10, weight: 145}
            ]
        },
        {
            exerciseName: 'Dead Lift',
            set: [
                {reps: 5, weight: 155},
                {reps: 5, weight: 165}
            ]
        }]
    }) */
    
    const existingRoutine = await Routine.exists({id: routineID});
    console.log(existingRoutine);
    if(existingRoutine) {
        res.status(403).json({error: "Error: That routine already exists!"});
    }
    const newRoutine = new Routine({
        name: 'New Routine',
        exercises: [{
            exerciseName: 'Bench Press',
            set: [
                {reps: 10,weight: 135},
                {reps: 10, weight: 145}
            ]
        },
        {
            exerciseName: 'Dead Lift',
            set: [
                {reps: 5, weight: 155},
                {reps: 5, weight: 165}
            ]
        }]
    }) 
    newRoutine.save()
    .then(result => {
        res.status(200).json(result)
    })
}


exports.deleteRoutine = async (req,res) => {
    const routineID = req.params.routineID;
    const deletedRoutine = await Routine.findByIdAndDelete(routineID);
    if(deletedRoutine) {
        res.status(200).json({message: "Successfully deleted routine"})
    } else {
        res.status(500).json({message: 'Failed to delete routine'})
    }
}


exports.deleteExerciseFromRoutine = (req, res) => {
    
}