const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { userValidationRules, validate, signUpValidationRules } = require('../middleware/validator');

router.post(
  '/signup', signUpValidationRules(), validate, authController.signupUser
);

router.post(
  '/login', userValidationRules(), validate, authController.loginUser
);

module.exports = router;
