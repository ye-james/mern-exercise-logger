const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        days: [{
          name: {
            type: String
          },
          exercises: [
            {
              exerciseName: {
                type: String,
                required: true
              },
              sets: [{
                  reps: {
                      type: Number
                  },
                  weight: {
                      type: Number
                  },
                  _id: false
              }]
            }]
          }
        ],
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
})

module.exports = mongoose.model('Routine', routineSchema)