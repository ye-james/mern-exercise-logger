const jwt = require('jsonwebtoken');

//Grab token from client-side to validate
function auth(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];

    if(!token) return res.status(401).json({message: 'No token, authorization denied'})

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        //Add user to request from payload
        req.user = decoded.user;

        next();
        
    } catch (err) {
     
        if(err.name == "TokenExpiredError") {
            return res.status(400).json({message: "Token has expired"});
        }
        res.status(400).json({message: 'Token is invalid'});
    }

}

module.exports = auth;