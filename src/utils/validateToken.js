const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.username = decoded.username;
    // next();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.username = decoded.username;

        if (decoded.username !== req.params.username) {
            return res.status(401).json({ message: "Invalid token" });
        }

        next();

        if (decoded.exp <= Date.now() / 1000) {
            return res.status(401).json({ message: "Token has expired" });
        }

        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid token" });
    }

}

module.export = validateToken;
