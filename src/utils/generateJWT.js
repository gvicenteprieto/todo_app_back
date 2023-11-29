// const generateJWT = (username) => {
//     const token = jwt.sign({ username }, process.env.JWT_SECRET, {
//         expiresIn: "1h",
//     });
//     return token;
//     };

// module.exports = generateJWT;

const jwt = require("jsonwebtoken");
requiere("dotenv").config();

const generateJWT = (username) => {
    const payload = { username } 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5h",
    })
    return token;

};

export default generateJWT;
