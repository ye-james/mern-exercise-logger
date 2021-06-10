const express = require('express');
const router = express.Router();

const logController = require('../controllers/log');
const auth = require('../middleware/auth');

router.get('/:userId', auth, logController.getExercises);
router.post('/add-exercise',auth, logController.addExercise);
router.post('/update-exercise',auth, logController.updateExercise);
router.get('/edit/:id', auth, logController.fetchSingleExercise)
router.delete('/delete-exercise', auth, logController.deleteExercise)

module.exports = router;