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
         user: {
          type: mongoose.Types.ObjectId,
          default: mongoose.Types.ObjectId('60b7139612e3b86128e78b36')
         }
})

module.exports = mongoose.model('Routine', routineSchema)