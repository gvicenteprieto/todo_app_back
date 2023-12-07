const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJWT = (username) => {
    const payload = { username } 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "12h",
    })
    return token;

};

module.exports = generateJWT;
