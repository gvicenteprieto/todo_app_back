const jwt = require("jsonwebtoken");
//require("dotenv").config();

const validateToken = (req, res, next) => {
  const token = req.header["Authorization"];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.username = decoded.username;

    // if (decoded.username !== req.params.username) {
    //     return res.status(401).json({ message: "Invalid token" });
    // }

    // next();

    // if (decoded.exp <= Date.now() / 1000) {
    //     return res.status(401).json({ message: "Token has expired" });
    // }

    const { username } = jwt.verify(token, process.env.JWT_SECRET);
    req.username = username;
    console.log(username);
    if (!username) {
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = validateToken;
