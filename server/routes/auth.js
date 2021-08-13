const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { userValidationRules, validate, signUpValidationRules } = require('../middleware/validator');
const auth = require('../middleware/auth');

router.post(
  '/signup', signUpValidationRules(), validate, authController.signupUser
);

router.post(
  '/login', userValidationRules(), validate, authController.loginUser
);


router.get('/', auth, authController.getUserInfo);

module.exports = router;
