const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')


router.post('/signup', userController.signupUser);
router.post('/login', userController.loginUser);

module.exports = router;