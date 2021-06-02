const express = require('express');
const router = express.Router();

const logController = require('../controllers/log');
const auth = require('../middleware/auth');

router.get('/all', auth, logController.getExercises);
router.post('/add-exercise',auth, logController.addExercise);
router.delete('/delete-exercise', auth, logController.deleteExercise)

module.exports = router;