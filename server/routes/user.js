const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { check } = require('express-validator');
const { userValidationRules, validate, signUpValidationRules } = require('../middleware/validator');

router.post(
  '/signup', signUpValidationRules(), validate, userController.signupUser
);

router.post(
  '/login', userValidationRules(), validate, userController.loginUser
);

module.exports = router;
