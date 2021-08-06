const { check, validationResult } = require('express-validator');

const userValidationRules = () => {
  return [
    check('username', 'Username is required.').notEmpty(),
    check('password', 'Password is required.').notEmpty(),
  ];
};

const signUpValidationRules = () => {
  return [
    check('name', 'Name is required.').notEmpty(),
    check('username', 'Username is required.').notEmpty(),
    check(
      'password',
      'Please enter a password that is 6 or more characters.'
    ).isLength({ min: 6 }),
  ];
};

const editRoutineValidationRules = () => {
  return [
    check['exercises.*.exerciseName.*.set'].notEmpty(),
    check['exercises.*.exerciseName.*.reps'].notEmpty(),
    check['exercises.*.exerciseName.*.weight'].notEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  //continue if no errors
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    errors: errors.array(),
  });
};

module.exports = {
  userValidationRules,
  signUpValidationRules,
  editRoutineValidationRules,
  validate,
};
