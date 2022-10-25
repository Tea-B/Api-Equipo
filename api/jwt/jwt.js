const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_KEY, {expiresIn: '1h'});
}

module.exports = {generateSign}