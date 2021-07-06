const { check, validationResult } = require('express-validator');

exports.userValidator = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        let errors = error.array()[0].msg 
        return res.status(422).json({
            success: false,
            error: errors
        })
    }
    next()
}
exports.validator = [
        check('firstName').notEmpty().withMessage('first Name is Required!'),
        check('lastName').notEmpty().withMessage('first Name is Required!'),
        check('email').notEmpty().withMessage('Email is Required!')
                      .isEmail().withMessage('Email invalid'),
        check('password').notEmpty().withMessage('password is required!')
                         .isLength({ min: 5 }).withMessage('password must be great than 5 characters!'), 
        // check('role').isInt().withMessage('role must br Integer')                                

    ]