const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routine')

const auth = require('../middleware/auth');

/*
* route: GET /routine
* desc: Get all routines
* return: routine
* access: private
*/ 
router.get('/')

/*
* route: GET /routine/:routine_id
* desc: Get routine by id
* return: routine
* access: private
*/ 
router.get('/:routineID', routineController.getRoutine)

/*
* route: POST /routine/:userID
* desc: Create new routine for user
* return: routine
* access: private
*/ 
router.post('/:userID', routineController.addRoutine);

/*
* route: POST /routine/exercise/:routine_id
* desc: Add new exercise to routine
* return: routine
* access: private
*/ 
router.post('/exercise/:routineID')

/*
* route: DELETE /routine/:routine_id
* desc: Delete routine
* return: null
* access: private
*/ 
router.delete('/:routineID', routineController.deleteRoutine)

/*
* route: DELETE /routine/:routine_id/:exercise_id
* desc: Delete exercise from routine
* return: null
* access: private
*/ 
router.delete('/routine/:routine_id/:exercise_id')


module.exports = router;