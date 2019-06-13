//-----------------------Modules-----------------------//

const { body, validationResult } = require('express-validator/check');

//----------------------- Client <--> Controller validations -----------------------//
// For additional validation methods look at validator js documentation.
// This get passed into a route handler as a middleware

module.exports.validateInputs = [
  body('name')
    .exists()
    .withMessage('name field does not exist')
    .not()
    .isEmpty()
    .withMessage('name field is empty'),
  body('email')
    .exists()
    .withMessage('email field does not exist')
    .not()
    .isEmpty()
    .withMessage('email field is empty')
    .isEmail()
    .withMessage('invalid email adress'),
  body('password')
    .exists()
    .withMessage('password field does not exist')
    .not()
    .isEmpty()
    .withMessage('password field is empty'),

  function(req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.mapped());
    } else {
      next();
    }
  }
];
