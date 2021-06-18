const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        day: {
            type: Number
        },
        exercises: [
         {
           exerciseName: {
             type: String,
             required: true
           },
           _id: false,
           set: [{
               reps: {
                   type: Number
               },
               weight: {
                   type: Number
               },
               _id: false
           }]
         }],
         //ref: user
})

module.exports = mongoose.model('Routine', routineSchema)