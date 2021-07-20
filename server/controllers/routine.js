const e = require('express');
const mongoose = require('mongoose');
const { exists } = require('../models/routineModel');
const Routine = require('../models/routineModel');
const User = require('../models/user');

// Fetch all routines from user
exports.getAllRoutines = async (req,res) => {
    const userID = '60b7139612e3b86128e78b36'

    const allUserRoutines = await Routine.find({user: userID});

    if(allUserRoutines) {    
        res.status(200).json(allUserRoutines);
    } else {
        res.status(404).json({error: 'No routines found'})
    }
}

// Fetch single routine based on routine name
exports.getRoutine = (req,res) => {
    const routineID = req.params.routineID;
    console.log(routineID);
    Routine.findById(routineID)
    .then(result => {
        if(!result)  {
            res.status(404).json({error: 'No such routine can be found'})
        }
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(404).json({error: err.message})
    })
}

//Create and add new routine for user if not already exist
exports.addRoutine = async (req,res) => {
    
    const { name } = req.body.routine;
    const { routine } = req.body;

    /*
    const newRoutine = new Routine({
        name: 'New Routine',
        exercises: [{
            exerciseName: 'Bench Press',
            set: [
                {reps: 10, weight: 135},
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
    
    const existingRoutine = await Routine.exists({name});
    console.log(existingRoutine);
    if(existingRoutine) {
        res.status(404).json({error: "Failed to add! That routine already exists!"});
    }
    // const newRoutine = new Routine({
    //     name: 'Leg Day',
    //     exercises: [{
    //         exerciseName: 'Squats',
    //         set: [
    //             {reps: 10,weight: 135},
    //             {reps: 10, weight: 145}
    //         ]
    //     },
    //     {
    //         exerciseName: 'Deadlifts',
    //         set: [
    //             {reps: 5, weight: 155},
    //             {reps: 5, weight: 165}
    //         ]
    //     }]
    // }) 
    const newRoutine = new Routine(routine);
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
        res.status(500).json({error: 'Failed to delete routine'})
    }
}


exports.addExerciseToRoutine = (req,res) => {
    const newExerciseToAdd = req.body.newExercises;
    //const newExerciseToAdd = [{_id: '60ccffc9d9b55732f1f68c7a', exerciseName: 'Leg Press', set: [{reps: 10, weight: 100}, {reps:20, weight:110}]}];
    const routineID = req.params.routine_id;
    //60ccff306c60df32a738a902

    //Find if routine exists
    Routine.findOne({id: routineID}).then(routine => {
        //if routine exists push new set of exercises to routine
        const newSet = [...routine.exercises, ...newExerciseToAdd]
        routine.exercises = newSet;
        routine.save().then(result => {
            res.status(200).json(result);
        })
    })

}

exports.deleteExerciseFromRoutine = (req, res) => {
    const routineID = req.params.routine_id;
    const exerciseID = req.params.exercise_id;

    Routine.findOne({id: routineID}).then(routine => {
        //if routine exists push new set of exercises to routine
        const newExerciseSet = routine.exercises.filter(eID !== exerciseID);
        routine.exercises = newExerciseSet;
        routine.save().then(result => {
            res.status(200).json(result);
        })
    })

}