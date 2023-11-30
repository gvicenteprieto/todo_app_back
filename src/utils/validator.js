const {validatorResult} = require('express-validator');

const validate = (req, res, next) => {
    const errors = validatorResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

module.exports = validate;

