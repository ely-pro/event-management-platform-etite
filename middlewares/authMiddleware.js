const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next ) => {
    const token = req.headers.authorization;
    if (!token) {
        console.log("Unauthorized")
        return res.status(401).json({ error: "Unauthorized" })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            res.status(403).json({ error: "Forbidden"})
        }
        req.user = decoded;
        next();
    })
}

module.exports = authenticateJWT