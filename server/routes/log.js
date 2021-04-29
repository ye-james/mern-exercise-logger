const express = require('express');
const router = express.Router();

const logController = require('../controllers/log');


router.get('/all', logController.getExercises);
router.post('/add-exercise', logController.addExercise);

module.exports = router;