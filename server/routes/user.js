const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { check } = require('express-validator');
const { userValidationRules, validate } = require('../middleware/validator');

router.post(
  '/signup', userValidationRules(), validate, userController.signupUser
);

router.post(
  '/login', userValidationRules(), validate, userController.loginUser
);

module.exports = router;
