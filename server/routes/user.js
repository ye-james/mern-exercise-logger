const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { check } = require('express-validator');

router.post('/signup', userController.signupUser);

router.post(
  '/login',
  [
    check('username', 'Username is required').exists(),
    check('password', 'Password is required').exists(),
  ],
  userController.loginUser
);

module.exports = router;
