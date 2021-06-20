const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('username').notEmpty(),
        body('password').isLength({ min:5})
    ]

}

const editRoutineValidationRules = () => {
    return [
        body['exercises.*.exerciseName.*.set'].notEmpty(),
        body['exercises.*.exerciseName.*.reps'].notEmpty(),
        body['exercises.*.exerciseName.*.weight'].notEmpty()

    ]
}

const validate = (req,res,next) => {
    const errors = validationResult(req);

    console.log(errors);
    //continue if no errors
    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));

    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = {
    userValidationRules,
    editRoutineValidationRules,
    validate
}